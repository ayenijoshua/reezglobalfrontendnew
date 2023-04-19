<template>
    <div>
        <div class="">	
            <div class="navbar navbar-expand d-flex navbar-dark justify-content-between bd-navbar blue accent-3 shadow">
                <div class="relative">
                    <img src="/assets/img/deli_logo.png" alt="" style="width: 200px;">
                </div>
                <!--Top Menu Start -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">

                        <!-- Notifications 
                        <li class="dropdown custom-dropdown notifications-menu">
                            <a href="#" class=" nav-link" data-toggle="dropdown" aria-expanded="false">
                                <i class="icon-notifications" style="color:#2E671A;"></i>
                                <span class="badge badge-danger badge-mini rounded-circle">4</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li class="header">You have 10 notifications</li>
                                <li>
                                     inner menu: contains the actual data -
                                    <ul class="menu">
                                        <li>
                                            <a class="green-text toast-action" href="#" data-title="Hey, Innocent!" data-message="Your registration was successful. Please proceed with your email verification" data-type="success" data-position-class="toast-top-right" >
                                                <i class="icon icon-data_usage text-success"></i> Registration Successful!
                                            </a>
                                        </li>

                                        <li>
                                            <a class="text-red toast-action" href="#" data-title="Hey, Innocent!" data-message="Your email verification was unsuccessful, please check your email, and try it again" data-type="error" data-position-class="toast-top-right" >
                                                <i class="icon icon-data_usage text-danger "></i> Withdrawal request declined!
                                            </a>
                                        </li>
                                        <li>
                                            <a class="green-text toast-action" href="#" data-title="Hey, Innocent!" data-message="Your email verification was successful" data-type="success" data-position-class="toast-top-right" >
                                                <i class="icon icon-data_usage text-success"></i> Email Verification Successful!
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="footer p-2 text-center"><a class="green-text" href="#">View all</a></li>
                            </ul>
                        </li>-->
                        <!-- Right Sidebar Toggle Button -->
                        <li>
                            <a href="#" class="nav-link ml-2" v-b-modal.logOut>
                                <i class="icon icon-sign-out" style="color:#2E671A;" ></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container-fluid animatedParent animateOnce my-3">
                <div class="animated">
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <div class="text-center mt-3">
                                <img src="/assets/img/success.png" alt="" width="100px" height="100px">
                                <h6 class="font-weight-bold mt-2" style="color:#2E671A;">Thanks for registering!<br><small>We're thrilled to have you as a partner.</small></h6>
                            </div>
                        </div>
                    </div>	

                    <div class="d-flex justify-content-center">		
                        <div class="col-md-7">
                            <div class="card r-1">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center">
                                        <div class="p-3">
                                            <p>
                                                <template v-if="loading">...</template>
                                                <template v-else>
                                                    Dear<span class="font-weight-bold"> {{ authUser.first_name }} {{ authUser.last_name }},</span>
                                                </template>
                                            </p>
                                            <p>We would like to take a moment to express our heartfelt gratitude to you for registering with DelishCare - the leading network marketing program that offers 7 ways to earn, amazing incentives, and top-quality health products.</p>
                                            <p>Your decision to join our community has not only shown your trust in us but also your commitment to living a healthier and happier life. We are confident that with DelishCare, you will not only be able to achieve your personal health goals but also create a sustainable income stream.</p>
                                            <p>As a DelishCare partner, you are part of a dynamic team that is dedicated to bringing positive change to people's lives. We are committed to providing you with the best support and resources to help you succeed in your journey towards financial freedom and personal wellness.</p>
                                            <p>Once again, we thank you for choosing DelishCare, and we look forward to a fruitful and exciting journey together.</p>
                                            <p>Best Regards,</p>
                                            <p class="font-weight-bold"><img src="/assets/img/signature1.png" width="150px" alt=""><br>The DelishCare Team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                    
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <div class="text-center mt-3">
                            <small class="text-green mt-4">kindly be reminded that there is a <span class="font-weight-bold">7-day time limit</span> for completing your registration,so please finish the remaining part as soon as possible to avoid missing out.</small>
                                <div class="text-center mt-3">
                                    <div id="timer" class="flex-wrap d-flex justify-content-center mt-3" >
                                        <div id="days" class="align-items-center flex-column d-flex justify-content-center"></div>
                                        <div id="hours" class="align-items-center flex-column d-flex justify-content-center"></div>
                                        <div id="minutes" class="align-items-center flex-column d-flex justify-content-center"></div>
                                        <div id="seconds" class="align-items-center flex-column d-flex justify-content-center"></div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <!-- <div class="col-md-12">
                            <div class="text-center mt-5">
                                <h6 class="font-weight-bold" style="color:#2E671A;">Let's get things rolling!<br><small>Kindly proceed with your email verification to activate your account as a newly registered partner.</small></h6>
                            </div>
                            <div class="d-flex flex-wrap justify-content-center mt-2">
                                <div class="col-md-6">
                                    <div class="card">							
                                        <div class="card-body b-b bg-white">
                                            <div class="stepper sw-main sw-theme-circles align-items-center flex-column d-flex justify-content-center"
                                                data-options='{
                                                "useURLhash":true,
                                                "theme":"sw-theme-circles",
                                                "transitionEffect":"fade",
                                                "toolbarSettings":{
                                                    "showNextButton":false,
                                                    "showPreviousButton":false
                                                    }
                                                }' width="300px">
                                                                                                
                                                    <ul class="nav step-anchor" style="margin-bottom:10px;">
                                                        <li><a  class="circle" href="#step-1x">1</a></li>
                                                        <li><a  class="circle"  href="#step-2x">2</a></li>
                                                        <li><a  class="circle" href="#step-3x">3</a></li>
                                                    </ul>
                                                                                    
                                                <div class="col-md-10 align-items-center justify-content-center mt-4" >
                                                    <div id="step-1x" class="text-center" >
                                                        <div class="text-center mb-3"><img  src="/assets/img/email.png" width="60px"  height="60px">
                                                        <h6 class="mt-1 s-8 font-weight-bold text-green"><i class="icon-mail-envelope-open5 mr-2"></i>Email Verification</h6></div>
                                                        <div class="form-row mb-2 align-items-center justify-content-center">
                                                            <div class="col-md-10 ">
                                                                <div class="input-group mb-2 ">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text"><i class="icon icon-mail-envelope-open6 float-left s-20 green-text " ></i></div>
                                                                    </div>
                                                                    <input type="text" class="form-control r-1 light s-12" id="inlineFormInputGroupUsername2"
                                                                        placeholder="Enter Email"> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#step-2x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-arrow-right"></i>Proceed</a>
                                                    </div>
                                                    <div id="step-2x" class="card-body text-center">
                                                        <div class="text-center mb-3"><img  src="/assets/img/password2.png" width="60px"  height="60px">
                                                        <h6 class="mt-1 s-8 font-weight-bold text-green"><i class="icon-contact_mail mr-2"></i>Confirm OTP</h6></div>
                                                        <div class="form-row mb-2 align-items-center justify-content-center">
                                                            <div class="col-md-10">
                                                                <div class="input-group mb-2">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text"><i class="icon icon-lock float-left s-20 green-text " ></i></div>
                                                                    </div>
                                                                    <input type="text" class="form-control r-1 light s-12" id="inlineFormInputGroupUsername2"
                                                                        placeholder="Confirm Code"> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#step-1x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-arrow-left"></i>Previous</a>
                                                        <a href="#step-3x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-check-square-o"></i>Confirm</a>
                                                    </div>
                                                    <div id="step-3x" class="card-body text-center">
                                                        <div class="text-center mb-3"><img  src="/assets/img/checked.png" width="100px"  height="100px">
                                                        <h6 class="mt-1 s-8 font-weight-bold text-green">Successful!<br><small>Your Email has been verified successfully.</small></h6></div>
                                                        <a href="#step-1x" class="btn btn-sm btn-success mb-3 btn-lg"><i class="icon icon-arrow-left"></i>Return</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	

                        </div> -->
                    </div>	
                    
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <div class="text-center mt-5">
                                <h6 class="font-weight-bold" style="color:#2E671A;">Account Details<br><small>Enter a valid account details for your withdrawals.</small></h6>
                            </div>
                            <div class="d-flex flex-wrap justify-content-center mt-2">
                                <div class="col-md-5">
                                    <div class="card">
                                        <div class="card-body" style="overflow-x:auto;">
                                            <form @submit.prevent="updateBank()">
                                                <div class="card no-b  no-r">
                                                    <div class="card-body no-gutters">
                                                        <div class="text-center mb-3"><img  src="/assets/img/bank.jpeg" width="300px"  height="auto">
                                                            <div class="form-row mb-3">
                                                                <div class="col-md-12">
                                                                    <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <div class="input-group-text"><i class="icon icon-account_balance float-left s-20 green-text " ></i></div>
                                                                        </div>
                                                                        <select v-model="form.bank_name" required class="form-control r-1 light s-12">
                                                                            <option value="">Select Bank</option>
                                                                            <option value="Access Bank">Access Bank</option>
                                                                            <option value="GTbank">GTbank</option>
                                                                            <option value="Zenith Bank">Zenith Bank</option>
                                                                            <option value="United Bank Of Africa">United Bank Of Africa</option>
                                                                            <option value="First Bank">First Bank</option>
                                                                            <option value="Union Bank">Union Bank</option>
                                                                            <option value="Sterling Bank">Sterling Bank</option>
                                                                            <option value="Keystone Bank">Keystone Bank</option>
                                                                            <option value="Providus Bank">Providus Bank</option>														   
                                                                        </select>	   
                                                                    </div>
                                                                    <div class="input-group mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <div class="input-group-text"><i class="icon icon-account_balance float-left s-20 green-text " ></i></div>
                                                                        </div>
                                                                        <input v-model="form.bank_account_number" required type="text" class="form-control r-1 light s-12" placeholder="Account No."> 
                                                                    </div>  
                                                                    <div class="input-group ">
                                                                        <div class="input-group-prepend">
                                                                            <div class="input-group-text"><i class="icon icon-account_balance float-left s-20 green-text " ></i></div>
                                                                        </div>
                                                                        <input v-model="form.bank_account_name" required type="text" class="form-control r-1 light s-12" placeholder="Account Name"> 
                                                                    </div>
                                                                    
                                                                    <div class="no-gutters">
                                                                        <div class="card-body text-center">
                                                                            <small class="s-8" style="margin: 0em; padding: 0em;" >Account Name</small>
                                                                            <h1 class="font-weight-bold text-green" style="margin: 0em; padding: 0em;">{{ form.bank_account_name }}</h1>
                                                                        </div> 	
                                                                    </div>
                                                                    <span v-if="submitting && bankSubmitting" class="btn btn-success btn-lg btn-block">...</span>
                                                                    <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Confirm Details</button>
                                                                </div>
                                                            </div>
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
                    
                    <div class="row mb-5">
                        <div class="col-md-12">
                            <div class="d-flex flex-wrap justify-content-center mt-2">
                                <div class="text-center mt-5">
                                    <img  src="/assets/img/cards.png" width="300px">
                                    <h6 class="font-weight-bold" style="color:#2E671A;">Proceed To Payment<br><small>Kindly complete your registration as a partner by proceeding with your package payment.</small></h6>
                                    <span v-if="submitting && paySubmitting" class="btn btn-sm btn-success mb-3 mt-2 btn-lg">...</span>
                                    <a v-else @click="makePayment()" class="btn btn-sm btn-success mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>Pay Now</a>
                                </div>
                            </div>	
                        </div>
                    </div>	
                </div>	
            </div>
        </div>
        <modal modalId="pay"  modalTitle="Make Payment" modalSize="md" :link="payLink">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <iframe id='ifr' frameborder="0" :src="payLink" scrolling="no" width="400" height="500"></iframe>
                </div>
            </div>
        </modal>

        <modal :modalId="'logOut'" :modalSize="'md'" :modalTitle="''">
            <div class="card border-0 p-sm-3 p-2 justify-content-center">
                <div class="card-header pb-0 bg-white border-0 mb-2">
                <h6 ><span class="font-weight-bold"> Are you sure you want to signout ?</span>
                    <br><small>Confirm this is not a mistake.</small></h6>
                </div>
                <div class="card-body px-sm-4 mb-2 pt-1 pb-0"> 
                    <div class="row justify-content-end no-gutters">
                        <div class="col-auto mr-2">
                            <button type="button" class="btn btn-sm btn-success px-4" @click="logOut()" data-dismiss="modal">Confirm</button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-light text-muted" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>  
         </modal>
    </div>
    
</template>

<script>
    import { mapState,mapActions,mapGetters } from 'vuex';
    import modal from '@/components/Modal.vue'
    import vm from '../main'
    export default{
        name:"user-welcome",

        components:{
            modal
        },

        data(){
            return {
                form:{
                    bank_account_name:'', //this.profile.id ? this.profile.bank_account_name : '',
                    bank_account_number:'', //this.profile.id ? this.profile.bank_account_number : '',
                    bank_name:'', //this.profile.id ? this.profile.bank_name : ''
                },
                payLink:null,
                amount:null,

                paySubmitting:false,
                bankSubmitting:false
            }
        },

        computed:{
            ...mapState({
                submitting:state=>state.submitting,
                loading:state=>state.loading
            }),

            ...mapGetters('authStore',['authUser']),
            ...mapGetters('userStore',['profile']),
            //...mapGetters('packageStore',['regPackage'])
        },

        mounted(){
            this.getUser().then(res=>{
                if(res.status==200){
                    this.getProfileDetails(res.data.uuid).then(reslt=>{
                        this.form.bank_account_name = reslt.data.data.bank_account_name
                        this.form.bank_account_number = reslt.data.data.bank_account_number
                        this.form.bank_name = reslt.data.data.bank_name
                    })
                }
                this.getPackage(res.data.package_id).then(packRes=>{
                    if(packRes.status == 200){
                        this.amount = packRes.data.data.registration_value
                    }
                })
            })

            
        },

        methods:{
            ...mapActions('authStore',['getUser','logOut']),//getProfileDetails
            ...mapActions('userStore',['getProfileDetails','updateBankDetails']),
            ...mapActions('paymentStore',['initiate','verify']),
            ...mapActions('packageStore',['getPackage']),

            updateBank(){
                var uuid = this.authUser.uuid;
                let data = {uuid:uuid,data:this.form}
                this.bankSubmitting = true
                this.updateBankDetails(data).then(res=>{
                    if(res.status==200){
                        this.getProfileDetails(uuid)
                    }
                    this.bankSubmitting = false
                })
            },

            makePayment(){
                this.paySubmitting = true
                let data = {amount:this.amount}
                this.initiateFund(data)
            },

            initiateFund(data){
                var that = this
                this.initiate(data).then(res=>{
                    console.log(res)
                    var result = res
                    if(res.status == 200){
                        //if(that.productService.name == 'paystack'){
                            that.payLink = res.data.data.data.authorization_url
                            that.$bvModal.show('pay')
                            //alert(res.data.data.data.authorization_url)
                            //check modal events or use webhook
                        //}

                        if(process.env.VUE_APP_ENV == 'testing'){
                            setTimeout(() => {
                                that.verify({reference:result.data.data.data.reference}).then(resp=>{
                                    if(resp.status == 200){
                                        vm.$router.push({name:'user-dashboard'})
                                    }
                                })
                            }, 30000);
                        }
                    }
                    this.paySubmitting = false
                })
            },
        }
    }
</script>