
<template>
    <main>
        <div class="p-t-b-100 height-full bg-green" style="background-image: url('assets/img/bg-wall2.png');">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-md-auto">
                        <div class="text-center">
                            <a href="https://delishcare.com">
                                <img class="img-responsive" src="assets/img/logo-white.png" style= "max-width: 100%;" alt="">
                            </a>
                            <p class="mt-3 text-white">Let the Journey Begin...</p>
                        </div>
                        <form @submit.prevent="submit()" id="regForm">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-person"></i>
                                        <input required v-model="form.first_name" type="text" class="form-control form-control-lg no-b"
                                            placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-person"></i>
                                        <input required v-model="form.last_name" type="text" class="form-control form-control-lg no-b"
                                            placeholder="Last Name">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-verified_user"></i>
                                        <input required v-model="form.username" type="text" class="form-control form-control-lg no-b"
                                            placeholder="username">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text" >
                                        <i class="icon-lock"></i>
                                        <input required v-model="form.password" type="password" class="form-control form-control-lg no-b" placeholder="password" id="password-field" >
                                        <span @click="viewPass()" id="eye" class="green-text field-icon toggle-password mr-3 icon-eye3" style="text-decoration: none"></span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-mail-envelope-closed2"></i>
                                        <input required v-model="form.email" type="text" class="form-control form-control-lg no-b"
                                            placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-phone"></i>
                                        <input required v-model="form.phone" type="text" class="form-control form-control-lg no-b"
                                            placeholder="phone">
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-sitemap"></i>
                                        <input required value="delishcare" v-model="form.referrer" v-b-popover.hover.top="'If your upline has exceeded two direct registrations, place him/her in the sponsor field'" title="Upline" type="text" class="form-control form-control-lg no-b"
                                            placeholder="Upline">
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-user-plus"></i>
                                        <input v-b-popover.hover.top="'If your upline has exceeded two direct registrations, place him/her here'" title="Sponsor" v-model="form.placer" type="text" class="form-control form-control-lg no-b" placeholder="Sponsor">
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="input-group focused mb-3" style="height:50px;">
                                        <div class="input-group-prepend ">
                                            <div class="input-group-text bg-white" ><i class="icon icon-card_membership float-left s-20 green-text "></i></div>
                                        </div>
                                        <select required v-model="form.package_id" :disabled="false" class="form-control r-1 s-16" placeholder="Select Package" style="height:50px;">
                                            <option :value="null">Select Package</option>
                                            <option v-for="regPackage,i in regPackages" :value="regPackage.id" :key="i">{{ regPackage.name }} (₦{{regPackage.registration_value.toLocaleString('en-US')}})</option>
                                        </select>	   
                                    </div>								
                                </div>
                                <!-- <div class="col-lg-12 mb-3">
                                    <div class="input-group focused mb-1" style="height:50px;">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text bg-white" ><i class="icon icon-globe float-left s-20 green-text "></i></div>
                                        </div>
                                        <select type="number" class="form-control r-1 s-12" id="inlineFormInputGroupUsername2" placeholder="Select Month" style="height:50px;">
                                            <option value="" disabled="" selected="" hidden="">Select country</option>
                                            <option value="algeria">Algeria</option>
                                            <option value="angola">Angola</option>
                                            <option value="benin">Benin</option>
                                            <option value="botswana">Botswana</option>
                                            <option value="burkina Faso">Burkina Faso</option>
                                            <option value="burundi">Burundi</option>
                                            <option value="cameroon">Cameroon</option>
                                            <option value="cape-verde">Cape Verde</option>
                                            <option value="central-african-republic">Central African Republic</option>
                                            <option value="chad">Chad</option>
                                            <option value="comoros">Comoros</option>
                                            <option value="congo-brazzaville">Congo - Brazzaville</option>
                                            <option value="congo-kinshasa">Congo - Kinshasa</option>
                                            <option value="ivory-coast">Côte d’Ivoire</option>
                                            <option value="djibouti">Djibouti</option>
                                            <option value="egypt">Egypt</option>
                                            <option value="equatorial-guinea">Equatorial Guinea</option>
                                            <option value="eritrea">Eritrea</option>
                                            <option value="ethiopia">Ethiopia</option>
                                            <option value="gabon">Gabon</option>
                                            <option value="gambia">Gambia</option>
                                            <option value="ghana">Ghana</option>
                                            <option value="guinea">Guinea</option>
                                            <option value="guinea-bissau">Guinea-Bissau</option>
                                            <option value="kenya">Kenya</option>
                                            <option value="lesotho">Lesotho</option>
                                            <option value="liberia">Liberia</option>
                                            <option value="libya">Libya</option>
                                            <option value="madagascar">Madagascar</option>
                                            <option value="malawi">Malawi</option>
                                            <option value="mali">Mali</option>
                                            <option value="mauritania">Mauritania</option>
                                            <option value="mauritius">Mauritius</option>
                                            <option value="mayotte">Mayotte</option>
                                            <option value="morocco">Morocco</option>
                                            <option value="mozambique">Mozambique</option>
                                            <option value="namibia">Namibia</option>
                                            <option value="niger">Niger</option>
                                            <option value="nigeria">Nigeria</option>
                                            <option value="rwanda">Rwanda</option>
                                            <option value="reunion">Réunion</option>
                                            <option value="saint-helena">Saint Helena</option>
                                            <option value="senegal">Senegal</option>
                                            <option value="seychelles">Seychelles</option>
                                            <option value="sierra-leone">Sierra Leone</option>
                                            <option value="somalia">Somalia</option>
                                            <option value="south-africa">South Africa</option>
                                            <option value="sudan">Sudan</option>
                                            <option value="south-sudan">South Sudan</option>
                                            <option value="swaziland">Swaziland</option>
                                            <option value="Sao-tome-príncipe">São Tomé and Príncipe</option>
                                            <option value="tanzania">Tanzania</option>
                                            <option value="togo">Togo</option>
                                            <option value="tunisia">Tunisia</option>
                                            <option value="uganda">Uganda</option>
                                            <option value="western-sahara">Western Sahara</option>
                                            <option value="zambia">Zambia</option>
                                            <option value="zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>								
                                </div> -->
                                <div class="col-lg-12">
                                    <p class="text-center text-white">
                                        <input v-b-modal.terms required class="form-check-input"  type="checkbox" value="true" id="cb1" style="margin-top: 0.5rem;" :style="{'accent-color': '#2E671A'}">
                                        Accept Our 
                                        <a v-b-modal.terms class="font-weight-bold" target="blank" :style="{'text-decoration':'none'}" >Terms</a> and 
                                        <a href="https://delishcare.com/privacy" class="font-weight-bold" target="blank" :style="{'text-decoration':'none'}">Privacy Policy</a>
                                    </p>
                                    <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                    <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Register">
                                    <div class="text-center">
                                        <img class="img-responsive text-center" src="assets/img/or.png" style= "max-width:250px; padding-top:30px; padding-bottom:10px;" alt=""> 
                                        <p class="forget-pass text-white text-center">Do You have an account already? 
                                            <router-link  class="font-weight-bold" :to="{name:'user-login'}" :style="{'text-decoration':'none'}"><b>Click Here to Login</b></router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- #primary -->
        <Modal modal-id="terms" modal-title="" modal-size="xl">
            <!-- eslint-disable -->
            <div class="body">
                <header id="header" class="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
                    <div class="header-body">
                        <div class="header-container container">
                            <div class="header-row">
                                <div class="header-column">
                                    <div class="header-row">
                                        <div class="header-logo">
                                            <a href="https://delishcare.com">
                                                <img alt="Porto" width="250px" height="auto" data-sticky-width="100%" data-sticky-height="48" src="https://delishcare.com/img/Delish1.png">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div role="main" class="main">
                    <section class="page-header page-header-classic">
                        <div class="container">
                            <div class="row">
                                
                            </div>
                            <div class="row">
                                <div class="col p-static">
                                    <h1 data-title-border>Terms and Conditions</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="container py-2">
                        <div class="row">
                            <div class="col">
                                <p>Thank you for choosing Delishcare. These terms and conditions outline the rules and regulations for the use of Delishcare's website located at https://delishcare.com/. By accessing this website, we assume you accept these terms and conditions in full. If you disagree with any part of these terms and conditions, do not use our website.</p>
                                                            
                                <h5 class="font-weight-bold">1. General Information</h5>
                                <p>Delishcare is a website owned and operated by Delishcare Nigeria Limited, a company registered in Nigeria. Our platform offers online sales of health and wellness products as well as a compensation plan for registered members.</p>

                                <h5 class="font-weight-bold">2. User Eligibility</h5>
                                <p>You must be 18 years or older to use our website and purchase our products. By registering on our website, you confirm that you are of legal age to enter into a binding agreement with us. If you are registering on behalf of a company, you represent and warrant that you have the authority to bind the company to these terms and conditions.</p>
                                
                                <h5 class="font-weight-bold">3. Registration</h5>
                                <p>To access the compensation plan and become a member, you must register on our website. You agree to provide accurate, complete, and up-to-date information during the registration process. You are solely responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account or password.</p>
                                
                                <h5 class="font-weight-bold">4. Payment</h5>
                                <p>All payments for products purchased on our website must be made online using a valid credit card, debit card, or any other payment method we may accept. We use a third-party payment processor to process your payment, and we do not store your payment details on our server.</p>
                                
                                <h5 class="font-weight-bold">5. Product Information</h5>
                                <p>We make every effort to provide accurate and up-to-date information about our products. However, we do not guarantee that the product descriptions, images, or other content on our website are accurate, complete, or error-free. We reserve the right to modify the content of our website at any time without prior notice.</p>
                                                            
                                <h5 class="font-weight-bold">6. Intellectual Property</h5>
                                <p>All content on our website, including text, images, graphics, logos, and software, is the property of Delishcare Nigeria Limited and is protected by Nigerian and international copyright laws. You may not reproduce, distribute, or transmit any content from our website without our prior written consent.</p>
                                
                                <h5 class="font-weight-bold">7. Compensation Plan</h5>
                                <p>As a registered member, you are eligible to participate in our compensation plan. The details of the compensation plan are available on our website. By participating in our compensation plan, you agree to comply with all rules and regulations governing the plan.</p>
                                
                                <h5 class="font-weight-bold">8. Termination</h5>
                                <p>AWe reserve the right to terminate your access to our website and our compensation plan at any time without prior notice. We may also terminate your account if we suspect that you have violated these terms and conditions or any applicable law.</p>
                                
                                <h5 class="font-weight-bold">9. Limitation of Liability</h5>
                                <p>Delishcare Nigeria Limited shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website, including but not limited to damages for loss of profits, data, or other intangible losses. You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these terms and conditions.</p>
                                
                                <h5 class="font-weight-bold">10. Governing Law</h5>
                                <p>These terms and conditions shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>
                                
                                <h5 class="font-weight-bold">11. Changes to Terms and Conditions</h5>
                                <p>We reserve the right to modify these terms and conditions at any time without prior notice. You are responsible for regularly reviewing these terms and conditions to ensure that you are aware of any changes. Your continued use of our website after any modifications indicate your acceptance of the modified terms and conditions.</p>
                                
                                <h5 class="font-weight-bold">Contact Us</h5>
                                <p>If you have any questions or concerns about our Privacy Policy or our use of your personal information, please contact us at <b>support@delishcare.com.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer id="footer">
                    <div class="footer-copyright">					
                        <div class="container py-2">						
                            <div class="row py-4">							
                                <div class="col-lg-2 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">								
                                    <a href="https://delishcare.com" class="logo pr-0 pr-lg-3">									
                                        <img alt="Porto Website Template" src="https://delishcare.com/img/footer-img-white.png" class="opacity-5" height="33">								
                                    </a>							
                                </div>															
                                <div class="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mt-3 mb-lg-0">
                                    <p>© Copyright 2023. Delishcare All Rights Reserved.</p>							
                                </div>							
                                <!-- <div class="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">								
                                    <nav id="sub-menu">			
                                        <ul>
                                            <li>
                                                <i class="fas fa-angle-right"></i>
                                                <a href="https://delishcare.com/privacy" class="ml-1 text-decoration-none"> Policy</a>
                                            </li>				
                                            <li>
                                                <i class="fas fa-angle-right"></i>
                                                <a href="https://delishcare.com/terms" class="ml-1 text-decoration-none"> Terms</a>
                                            </li>
                                            <li>
                                                <i class="fas fa-angle-right"></i>
                                                <a href="https://delishcare.com/" class="ml-1 text-decoration-none"> Home</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </footer>
		    </div>
        </Modal>
    </main>
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

import {mapActions, mapState, mapGetters} from 'vuex'
import Modal from '@/components/Modal.vue';
export default {
    /* eslint-disable */ 
    name:"user-register",
    components:{
        Modal
    },

    data(){
        return{
            form:{
                first_name: null,
                last_name:null,
                username:null,
                email: null,
                password: null,
                referrer:'delishcare',
                phone: null,
                package_id:null,
                placer:null
            },
            //ref:null
        }
    },
    computed:{
        ...mapState({
            submitting:state=>state.submitting
        }),

        ...mapGetters('packageStore',['regPackages'])

    },

    created(){
        //if(this.packages.length()==0){
            this.all()
       // }

       const params = new URL(window.location).searchParams
       this.form.referrer = params.get('ref') ? params.get('ref') : null
       this.form.placer = params.get('placer') ? params.get('placer') : null

       if(!this.form.referrer){
            this.form.referrer = 'delishcare'
       }
    },

    methods:{
        ...mapActions('authStore',['register']),
        ...mapActions('packageStore',['all']),

        submit(){
            // let form = document.getElementById('regForm')
            // let formData = new FormData(form)
            // let data = {
            //     firstName: formData.get('firstName'),
            //     lastName: formData.get('lastName'),
            //     email: formData.get('email'),
            //     password: formData.get('password'),
            //     phone: formData.get('phone'),
            // }
            this.register(this.form)
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
};
</script>