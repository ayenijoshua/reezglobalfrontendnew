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
                                    <div class="green-text text-center ">
                                        <a href="https://reezglobal.com"><img class="img-responsive" src="/assets/img/logo1.png" style= "max-width: 100%" alt=""></a><br><br>
                                        <img class="img-responsive" src="assets/img/protection1.png" style= "max-width:100px;padding-bottom:10px" alt="">
                                        <p class=" font-weight-bold ">2FA Authentication (Enter code sent to your mail)</p>
                                    </div>
                                    <form @submit.prevent="submit()">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group has-icon shadow1"><i class="icon-lock"></i>
                                                    <input required type="password" v-model="form.code" id="password-field" class="form-control form-control-lg no-b" placeholder="Enter Code">
                                                    <span @click="viewPass()" id="eye" class="green-text field-icon toggle-password mr-3 icon-eye3" style="text-decoration: none"></span>
                                                </div>
                                            </div>

                                            <!-- <div class="col-lg-6">
                                                <span v-if="submitting" class="btn btn-warning btn-lg btn-block">...</span>
                                                <span v-else @click="sendCode()" class="btn btn-warning btn-lg btn-block"><i class="icon-check-square-o mr-2"></i>Resend Code</span>
                                            </div> -->
                                            
                                            <div class="col-lg-12">
                                                <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                                <input v-else  type="submit" class="btn btn-success btn-lg btn-block" value="Authenticate">
                                            </div>

                                            <div class="col-md-12 mt-3 mb-2">
                                                <div class="forget-pass green-text text-center">
                                                    <span v-if="submitting" class="">...</span>
                                                    <a v-else class="green-text" href="#" @click="sendCode()" style="text-decoration:none">
                                                        <span class="font-weight-bold">Resend Confirmation Code</span>
                                                    </a>
                                                </div>    
                                            </div>
                                            
                                            <div class="col-md-12">
                                                <div class="text-center">
                                                    <p class="green-text font-weight-bold"><small>Don't Have an Account?</small>&nbsp;
                                                        <router-link :to="{name:'admin-login'}"  :style="{'text-decoration':'none'}"><span class="green-text"><b>Proceed to login!</b></span></router-link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
    name:'admin-two-factor-auth',
    data(){
        return{
            form:{
                code:null,
                email: this.$route.query.email,
                user_type:'admin'
            },
            mailForm:{
                email: this.$route.query.email,
                user_type:'admin'
            },
            showPass:false
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },

    created(){
        if(!this.mailForm.email){
            notification.warning("Invalid email address, please return to previous page")
            return
        }
        this.sendTwoFactorAuthMail(this.mailForm)
    },
    
    methods:{
        ...mapActions('authStore',['sendTwoFactorAuthMail','twoFactorAuth']),

        submit(){
            if(!this.form.email){
                notification.warning("Invalid email address, please return to previous page")
                return
            }
            this.twoFactorAuth(this.form)
        },

        sendCode(){
            if(!this.mailForm.email){
                notification.warning("Invalid email address, please return to previous page")
                return
            }
            this.sendTwoFactorAuthMail(this.mailForm)
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