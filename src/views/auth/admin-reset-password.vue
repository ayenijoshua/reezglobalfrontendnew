<template>
    <div id="">
    <main>
        <video autoplay loop muted playsinline class="background-video">
                <source src="assets/video/loop.mp4" type="video/mp4" style="opacity: 0.8;" />
                Your browser does not support the video tag.
        </video>
        <div class="content-overlay">
            <div class="p-t-b-100 height-full page-background" style="background-image: url('assets/img/bg-wall3b.png');background-color: #ded8c7" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 mx-md-auto">
                            <div style="padding-top:100px" >
                                <div>
                                    <div class="text-center">
                                        <a href="https://reezglobal.com"><img class="img-responsive" src="/assets/img/logo1.png" style= "max-width: 100%" alt=""></a>
                                        <p class="p-t-b-20 green-text font-weight-bold">Reset Password</p>
                                    </div>
                                    <form @submit.prevent="submit()">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-icon shadow1"><i class="icon-lock"></i>
                                                    <input required type="password" v-model="form.code" id="code-field" class="form-control form-control-lg no-b" placeholder="Code">
                                                    <span @click="viewPass('code')" id="eye" class="green-text field-icon toggle-password mr-3 icon-eye3" style="text-decoration: none"></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-icon shadow1"><i class="icon-lock"></i>
                                                    <input required type="password" v-model="form.password" id="password-field" class="form-control form-control-lg no-b" placeholder="New Password">
                                                    <span @click="viewPass('pass')" id="eye" class="green-text field-icon toggle-password mr-3 icon-eye3" style="text-decoration: none"></span>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                                <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Submit">
                                            </div>
                                        </div>

                                        <div class="col-md-12 mt-3 mb-3">
                                            <div class="forget-pass green-text text-center">
                                                <span v-if="submitting" class="">...</span>
                                                <a v-else class="green-text" href="#" @click="sendCode()" style="text-decoration:none">
                                                    <span class="font-weight-bold">Resend Confirmation Code</span>
                                                </a>
                                            </div>    
                                        </div>
                                            
                                        <div class="col-md-12">
                                            <div class="text-center">
                                                <p class="green-text font-weight-bold">
                                                    <router-link :to="{name:'admin-login'}" :style="{'text-decoration':'none'}" ><span class="green-text"> <b>Proceed to login!</b></span></router-link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- <div class="row">
                                        <p class="forget-pass text-white text-center"> Login Instead ?
                                            <a href="" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                                                
                                            </a>
                                            <br><router-link :to="{name:'admin-login'}"> <b>Login</b> </router-link>
                                        </p>
                                    </div>  -->
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </main>
</div>
</template>

<style>

.page-background {
    background-color: #ded8c7;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

    .field-icon {
    float: right;
    margin-left: -30px;
    margin-top: -35px;
    position: relative;
    z-index: 2;
    font-size: 20px;
}
</style>

<script>
import {mapActions,mapState} from 'vuex'
import { notification } from '@/util/notification'
export default {

    data(){
        return{
            form:{
                code:null,
                password:null,
                email: this.$route.query.email,
                user_type:'admin'
            },

            reset_form:{
                email:this.$route.query.email,
                user_type:'amin'
            },

            showPass:false
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },
    
    methods:{
        ...mapActions('authStore',['resetPassword','resetPasswordLink']),

        submit(){
            if(!this.form.email){
                this.resetPassword(this.form);
            }
        },

        viewPass(field){
           let inp = field == 'pass' ? document.getElementById('password-field') : document.getElementById('code-field');
            this.showPass = !this.showPass
            if(this.showPass){
                inp.type = 'text'
            }else{
                inp.type = 'password'
            } 
        },

        sendCode(){
            if(!this.reset_form.email){
                notification.warning("Invalid email address, please return to previous page")
                return
            }
            this.resetPasswordLink(this.reset_form)
        }
    }
}
</script>