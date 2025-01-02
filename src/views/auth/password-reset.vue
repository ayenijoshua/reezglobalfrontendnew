<template>
    <div>
        <main>
            <video autoplay loop muted playsinline class="background-video">
                <source src="assets/video/loop.mp4" type="video/mp4" style="opacity: 0.8;" />
                Your browser does not support the video tag.
            </video>
            <div class="content-overlay">
                <div class="p-t-b-100 height-full page-background" style="background-color: #98CC5A; opacity: 0.9;">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 mx-auto">
                                <div class="card shadow1" style="background-color: #ecf0f1">
                                    <div class="card-body" style="background-color: #ecf0f1">
                                        <div class="green-text text-center">
                                            <img class="img-responsive" src="assets/img/logo2b.png" width="300px" height="auto" alt=""><br>
                                            <img class="img-responsive" src="assets/img/lock.png" style="max-width: 200px;" alt="">
                                            <p class="font-weight-bold">Reset Password</p>
                                        </div>
                                        <form @submit.prevent="submit()">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group has-icon shadow1">
                                                        <i class="icon-lock"></i>
                                                        <input required type="password" v-model="form.code" id="code-field" class="form-control form-control-lg no-b" placeholder="Code">
                                                        <span @click="viewPass('code')" class="green-text field-icon toggle-password mr-3 icon-eye3"></span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group has-icon shadow1">
                                                        <i class="icon-lock green-text"></i>
                                                        <input type="password" v-model="form.password" id="password-field" class="form-control form-control-lg no-b" placeholder="Password">
                                                        <span @click="viewPass('pass')" class="green-text field-icon toggle-password mr-3 icon-eye3"></span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                                    <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Submit">
                                                </div>
                                            </div>
                                            <div class="col-md-12 mt-3 mb-3">
                                                <div class="forget-pass green-text text-center">
                                                    <span v-if="submitting">...</span>
                                                    <a v-else class="green-text font-weight-bold" href="#" @click="sendCode()" style="text-decoration:none;">Resend Confirmation Code</a>
                                                </div>    
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <p class="green-text font-weight-bold mt-3">
                                                    <router-link :to="{ name: 'user-login' }" class="text-green font-weight-bold" style="text-decoration:none;">Proceed to login!</router-link>
                                                </p>
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


<style scoped>
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

.img-responsive {
    max-width: 100%;
    height: auto;
}

/* Responsive adjustments */
@media only screen and (max-width: 768px) {
    .p-t-b-100 {
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .col-lg-7 {
        width: 100%;
    }
    .form-control {
        font-size: 16px;
    }
    .btn-lg {
        font-size: 16px;
    }
}
</style>


<script> 
import { notification } from '@/util/notification'
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            form: {
                code: null,
                password: null,
                email: this.$route.query.email,
                user_type: 'user'
            },
            reset_form: {
                email: this.$route.query.email,
                user_type: 'user'
            },
            showPass: false
        };
    },

    computed: {
        ...mapState({
            submitting: state => state.submitting
        })
    },

    methods: {
        ...mapActions('authStore', ['resetPassword', 'resetPasswordLink']),

        submit() {
            if (!this.reset_form.email) {
                notification.warning("Invalid email address, please return to previous page");
                return;
            }
            this.resetPassword(this.form);
        },

        viewPass(field) {
            let inp = field === 'pass' ? document.getElementById('password-field') : document.getElementById('code-field');
            this.showPass = !this.showPass;
            inp.type = this.showPass ? 'text' : 'password';
        },

        sendCode() {
            if (!this.reset_form.email) {
                notification.warning("Invalid email address, please return to previous page");
                return;
            }
            this.resetPasswordLink(this.reset_form);
        }
    }
};
</script>
