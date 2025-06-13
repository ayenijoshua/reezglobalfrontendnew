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
                                        <p class="p-t-b-10 green-text font-weight-bold">Back Office, signin...</p>
                                    </div>    
                                    <form @submit.prevent="loginUser()">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-icon shadow1"><i class="icon-user"></i>
                                                    <input type="text" v-model="form.email" class="form-control form-control-lg no-b"
                                                        placeholder="email" >
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-icon shadow1"><i class="icon-lock"></i>
                                                    <input type="password" v-model="form.password" class="form-control form-control-lg no-b"
                                                        placeholder="Password">
                                                        
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <span v-if="submitting && logSubmitting" class="btn btn-success btn-lg btn-block">...</span>
                                                <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Login">
                                            </div>
                                        </div>
                                    </form>
                                    <div class="row">
                                        <div class="col-md-12 mt-3 mb-3">
                                            <div class="forget-pass green-text text-center">
                                                <p class="forget-pass green-text text-center">Forgot your username or password ? 
                                                    <a href="" class="font-weight-bold" :style="{'text-decoration':'none'}"  data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                                                        <span style="color:#2E671A">Retrieve Here</span>
                                                    </a>
                                                </p>
                                            </div>    
                                        </div>
                                        
                                        <div id="collapse1" class="collapse hidden col-lg-12" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
                                            <form @submit.prevent="submitReset()">
                                                <div class="col-lg-12">
                                                    <div class="form-group has-icon shadow1"><i class="icon-envelope-o"></i>
                                                        <input required type="text" v-model="reset_form.email" class="form-control form-control-lg no-b" placeholder="Enter Your Email">
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 text-center">
                                                    <span v-if="submitting && resetSubmitting" class="btn btn-success btn-lg btn-block">... Please Wait</span>
                                                    <input v-else type="submit"  class="btn btn-success btn-lg btn-block" value="Reset Password">
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
export default {

    data(){
        return{
            form:{
                email:null,
                password:null
            },
            reset_form:{
                email:null,
                user_type:'admin'
            },
            resetSubmitting:false,
            logSubmitting:false
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },
    
    methods:{
        ...mapActions('authStore',['adminLogin','resetPasswordLink']),

        loginUser(){ 
           this.logSubmitting = true
            this.adminLogin(this.form).then(()=>this.logSubmitting = false)
        },

        submitReset(){
            this.resetSubmitting = true
            this.resetPasswordLink(this.reset_form).then(()=>this.resetSubmitting = false)
        }
    }
}
</script>