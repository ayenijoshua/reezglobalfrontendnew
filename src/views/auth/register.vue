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
                                        <input v-model="form.placer" type="text" class="form-control form-control-lg no-b"
                                            placeholder="Sponsor/Upline">
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group has-icon green-text"><i class="icon-user-plus"></i>
                                        <input required v-model="form.referrer" type="text" class="form-control form-control-lg no-b"
                                            placeholder="Placement">
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
                                        <input required class="form-check-input" type="checkbox" value="true" id="cb1" style="margin-top: 0.5rem;" :style="{'accent-color': '#2E671A'}">Accept Our <a href="" class="font-weight-bold" target="blank" :style="{'text-decoration':'none'}" >Privacy Policy</a> and 
                                        <a href="" class="font-weight-bold" target="blank" :style="{'text-decoration':'none'}">Terms</a>
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
export default {
    name:"user-register",
    data(){
        return{
            form:{
                first_name: null,
                last_name:null,
                username:null,
                email: null,
                password: null,
                referrer:null,
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