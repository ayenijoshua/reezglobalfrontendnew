<template>
    <div id="">
    <main>
        <div class="p-t-b-100 height-full bg-green" style="background-image: url('assets/img/bg-wall2.png');">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-md-auto">
                        <div class="text-white text-center ">
                            <a href="https://delishcare.com"><img class="img-responsive" src="/assets/img/logo-white.png" style= "max-width: 100%;padding-bottom:40px" alt=""></a>
                            <img class="img-responsive" src="/assets/img/protection.png" style= "max-width:100px;padding-bottom:10px" alt="">
                            <p class=" font-weight-lighter">2FA Authentication (Enter code sent to your mail)</p>
                        </div>
                        <form @submit.prevent="submit()">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group has-icon"><i class="icon-user"></i>
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

                                <div class="col-lg-6 offset-4 mt-2 mb-2">
                                    <span v-if="submitting" class="">...</span>
                                    <a v-else class=" text-white" href="#" @click="sendCode()" style="text-decoration:none">
                                        <span class="font-weight-bold">Resend Confirmation Code</span>
                                    </a>
                                </div>
                                <div class="col-md-12">
                                    <p class="forget-pass text-white text-center">
                                        <a href="" class="" style="text-decoration: none; font-size:12px;" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">Forgot your password ?</a>
                                    </p>                   
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="text-center">
                                        <img class="img-responsive text-center" src="assets/img/or.png" style= "max-width:250px;" alt="">
                                        <p class="text-white mt-3">Don't Have an Account?
                                            <router-link :to="{name:'user-login'}"> <b>Proceed to login!</b></router-link>
                                        </p>
                                    </div>
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
    </main>
</div>
</template>
<style>
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
    name:'user-two-factor-auth',
    data(){
        return{
            form:{
                code:null,
                email: this.$route.query.email,
                user_type:'user'
            },
            mailForm:{
                email: this.$route.query.email,
                user_type:'user'
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