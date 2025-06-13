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
                                        <h3 class="green-text">Email Confirmation</h3>
                                        <p class="green-text font-weight-bold">Please verify your email with the code send to your email address</p>
                                    </div>
                                    <br/>
                                    <form @submit.prevent="submit()">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group has-icon shadow1"><i class="icon-lock"></i>
                                                    <input required type="password" v-model="form.code" id="password-field" class="form-control form-control-lg no-b" placeholder="Enter Code">
                                                    <span @click="viewPass()" id="eye" class="green-text field-icon toggle-password mr-3 icon-eye3" style="text-decoration: none"></span>
                                                </div>
                                            </div>
                                            <!-- <div class="col-lg-6">
                                                <div class="form-group">
                                                    <button class="btn btn-warning btn-lg" @click="resendEmail()"><i class="icon-check-square-o mr-5"></i>Resend Code</button>
                                                </div>
                                            </div> -->
                                        </div>
                                        <div class="row">  
                                            <div class="col-lg-12">
                                                <div class="form-group has-icon">
                                                    <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                                    <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Submit">
                                                </div>
                                            </div>
                                        </div>

                                            <div class="col-md-12 mt-3">
                                                <div class="forget-pass green-text text-center">
                                                    <span v-if="submitting" class="">...</span>
                                                    <a v-else class="green-text" href="#" @click="resendEmail()" style="text-decoration:none">
                                                        <span class="font-weight-bold">Resend Confirmation Code</span>
                                                    </a>
                                                </div>    
                                            </div>
                                            
                                            <div class="col-md-12">
                                                <div class="text-center">
                                                    <p class="green-text mt-3">Don't Have an Account?
                                                        <router-link :to="{name:'user-login'}" class="font-weight-bold" style="text-decoration: none; color:#2E671A"> <b>Proceed to login!</b></router-link>
                                                    </p>
                                                </div>
                                            </div>
                                    </form>
                                    <!-- <div class="row">
                                        <p class="forget-pass text-white text-center"> Login Instead ?
                                            <br><router-link :to="{name:'user-login'}"> <b>Login</b> </router-link>
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
    overflow-x: hidden; /* Hide horizontal overflow */
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
                email: this.$route.query.email,
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
        ...mapActions('authStore',['emailConfirmation','resendEmailConfirmation']),

        submit(){
            if(!this.form.email){
                notification.warning("Invalid email address, please return to previous page")
                return
            }
            this.emailConfirmation(this.form)
        },

        resendEmail(){
            if(!this.form.email){
                notification.warning("Invalid email address, please return to previous page")
                return
            }
            this.resendEmailConfirmation({email:this.form.email})
        },

        viewPass(){
            let pass = document.getElementById('password-field');
            this.showPass = !this.showPass
            if(this.showPass){
                pass.type = 'text'
            }else{
                pass.type = 'password'
            } 
        }
    }
}
</script>