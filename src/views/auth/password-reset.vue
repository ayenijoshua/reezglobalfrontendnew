<template>
    <div id="">
    <main>
        <div class="p-t-b-100 height-full bg-green" style="background-image: url('assets/img/bg-wall2.png');">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-md-auto">
                        <div class="text-white text-center ">
                            <img class="img-responsive" src="assets/img/logo-white.png" style= "max-width: 100%;padding-bottom:40px" alt="">
                            <img class="img-responsive" src="assets/img/protection.png" style= "max-width:100px;padding-bottom:10px" alt="">
                            <p class=" font-weight-lighter">Reset Password</p>
                        </div>
                        <form @submit.prevent="submit()">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-user"></i>
                                        <input required type="password" v-model="form.code" class="form-control form-control-lg no-b" placeholder="Code">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-lock green-text"></i>								    
                                        <input type="password" v-model="form.password" class="form-control form-control-lg no-b" id="password-field" placeholder="Enter new password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                    <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Submit">
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
                password:null,
                email: this.$route.query.email,
                user_type:'user'
            }
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },
    
    methods:{
        ...mapActions('authStore',['resetPassword']),

        submit(){
            console.log(this.form)
            this.resetPassword(this.form)
        },
    }
}
</script>