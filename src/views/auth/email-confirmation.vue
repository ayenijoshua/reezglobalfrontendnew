<template>
    <div id="">
    <main>
        <div class="p-t-b-100 height-full bg-green" style="background-image: url('assets/img/bg-wall2.png');">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-md-auto">
                        <div class="text-center">
                           <a href="">
                            <img class="img-responsive" src="/assets/img/logo-white.png" style= "max-width: 100%;padding-bottom:40px" alt="">
                            </a> 
                            <h3 class=" text-white">Email Confirmation</h3>
                            <p class=" text-white">Please confirm you Email, by entering the code send to your eamil address</p>
                        </div>
                        <br/>
                        <form @submit.prevent="submit()">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-user"></i>
                                        <input required type="password" v-model="form.code" class="form-control form-control-lg no-b"
                                            placeholder="Code">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <button class="btn btn-warning btn-lg" @click="resendEmail()"><i class="icon-check-square-o mr-5"></i>Resend Code</button>
                                    </div>
                                </div>
                            </div>
                            <div class="row">  
                                <div class="col-lg-12">
                                    <div class="form-group has-icon">
                                        <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                        <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Submit">
                                    </div>
                                    
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <p class="forget-pass text-white text-center"> Login Instead ?
                                <br><router-link :to="{name:'user-login'}"> <b>Login</b> </router-link>
                            </p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {

    data(){
        return{
            form:{
                code:null,
                email: this.$route.query.email,
            }
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
            console.log(this.form)
            this.emailConfirmation(this.form)
        },

        resendEmail(){
            this.resendEmailConfirmation({email:this.form.email})
        }
    }
}
</script>