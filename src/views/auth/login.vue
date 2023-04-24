<template>
    <div id="">
        <main>
            <div class="p-t-b-100 height-full bg-green" style="background-image: url('assets/img/bg-wall2.png')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 mx-md-auto">
                            <div class="text-center">
                                <a href="https://delishcare.com">
                                    <img class="img-responsive" src="assets/img/logo-white.png" style= "max-width: 100%;" alt="">
                                </a>
                                <p class="p-t-b-20 text-white">Welcome back, signin...</p>
                            </div>
                            <form @submit.prevent="loginUser()">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group has-icon"><i class="icon-person green-text"></i>
                                            <input type="text" v-model="form.username" class="form-control form-control-lg no-b"
                                                placeholder="Username">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group has-icon"><i class="icon-lock green-text"></i>
                                            <input type="password" v-model="form.password" class="form-control form-control-lg no-b"
                                                placeholder="Password" id="password-field">
                                                <span @click="viewPass()" id="eye" class="green-text field-icon toggle-password mr-3 icon-eye3" style="text-decoration: none"></span>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <span v-if="submitting && logSubmitting" class="btn btn-success btn-lg btn-block">...</span>
                                        <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Login"/>
                                    </div>
                                    
                                </div>
                            </form>
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="forget-pass text-white text-center">
                                        <a href="" class="" style="text-decoration: none; font-size:12px;" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">Forgot your password ?</a>
                                    </p>                   
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="text-center">
                                        <img class="img-responsive text-center" src="assets/img/or.png" style= "max-width:250px;" alt="">
                                        <p class="text-white mt-3">Don't Have an Account?
                                            <router-link class="font-weight-bold" :to="{name:'user-register'}" :style="{'text-decoration': 'none'}"> <b>Register Now!</b></router-link>
                                        </p>
                                    </div>
                                </div>
                                
                                
                                <div id="collapse1" class="collapse hidden col-lg-12" aria-labelledby="headingOne" data-parent="#accordionExample" style="padding-bottom:20px">
                                    <form @submit.prevent="submitReset()">
                                        <div class="col-lg-12">
                                            <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                                                <input v-model="reset_form.email" required type="text" class="form-control form-control-lg no-b"
                                                    placeholder="Enter Your Email">
                                            </div>
                                        </div>
                                        <div class="col-lg-12 text-center">
                                            <span v-if="submitting && resetSubmitting" class="btn btn-success btn-lg btn-block">...</span>
                                            <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Reset Password">
                                        </div>
                                    </form>
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
export default {
    name:"user-login",
    data(){
        return{ 
            form:{
                username:null,
                password:null
            },
            reset_form:{
                email:null,
                user_type:'user'
            },

            resetSubmitting:false,
            logSubmitting:false,

            showPass:false
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },
    
    methods:{
        ...mapActions('authStore',['login','resetPasswordLink']),

        loginUser(){
            this.logSubmitting = true
            this.login(this.form).then(()=>this.logSubmitting = false)
        },

        submitReset(){
            this.resetSubmitting = true
            this.resetPasswordLink(this.reset_form).then(()=>this.resetSubmitting = false)
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