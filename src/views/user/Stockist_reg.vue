<template>
    <div>
        <div class="">
            <div class="d-flex justify-content-center mt-5 pb-4"> <!-- Centering wrapper added -->
                <div class="col-md-7 col-sm-12"> 
                    <div >
                        <div >                            
                            <div class="d-flex justify-content-center">
                                <p class="font-weight-bold">Click the button below to read the Stockist Disclaimer</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-sm btn-success btn-lg mr-3" @click="toggleDisclaimer">
                                {{ isDisclaimerVisible ? "Hide Disclaimer" : "Read Disclaimer" }}
                            </button>
                        </div>
                        <div v-if="isDisclaimerVisible" class="d-flex justify-content-center mt-3" id="disclaimer">
                            <div class="col-12">
                                <div class="card shadow" style="background-color: transparent">
                                    <div class="card-body" style="background-color: transparent">
                                        <div class="text-center mb-3"><img src="/assets/img/logo2b.png"  width="200px" Height="auto"></div>
                                        <h6 class="font-weight-bold">To All Prospective Stockists of Star Twins Herbal Limited</h6>
                                        <p class="s-14"> We hereby provide this formal Disclaimer to all individuals and entities seeking to register 
                                            as stockists with Star Twins Herbal Limited (“the Company”). This document outlines essential 
                                            terms and conditions pertaining to your engagement with the Company. By proceeding with the 
                                            registration process, you acknowledge that you have read, understood, and agreed to the 
                                            following terms:
                                        </p>
                                        <h6 class="font-weight-bold">Payments and Financial Transactions</h6>
                                        <p class="s-14"> All payments related to registration, upgrades, and repurchase of products must be made 
                                            exclusively to Star Twins Herbal Limited’s official bank accounts. The Company bears no responsibility 
                                            for payments made to any individual, agent, or account outside the officially designated accounts. 
                                            Stockists are advised to verify payment details directly with the Company before completing any transaction.
                                        </p>                              
                                        <h6 class="font-weight-bold">Collection of Products</h6>
                                        <p class="s-14">Products for Registration, Upgrades, and Repurchases will be available for pick-up exclusively 
                                            at the designated stockist location. Stockists are responsible for ensuring the safe and timely collection 
                                            of their products as agreed upon during registration.
                                        </p>
                                        <h6 class="font-weight-bold">Termination of Stockist Agreement</h6>
                                        <p class="s-14">If a stockist chooses to terminate their agreement with Star Twins Herbal Limited, the Company 
                                            reserves the right to evaluate and determine the stockist's compliance with contractual obligations. Upon 
                                            satisfactory review and at the Company’s sole discretion, 70% of the initial capital may be refunded to 
                                            the stockist.
                                        </p>
                                        <p class="s-14">The Company retains the exclusive authority to determine the eligibility and feasibility of 
                                            any refund request, taking into account factors such as stockist performance, adherence to policies, and 
                                            inventory or outstanding obligations.
                                        </p>
                                        <h6 class="font-weight-bold">Exclusion of Liability</h6>
                                        <p class="s-14">Star Twins Herbal Limited shall not be held liable for any financial loss, misrepresentation, 
                                            or misunderstanding arising from non-compliance with the above-stated terms. All prospective and existing 
                                            stockists are advised to seek independent legal or financial advice where necessary before entering into 
                                            any contractual agreements with the Company.
                                        </p>
                                        <h6 class="font-weight-bold">Binding Agreement</h6>
                                        <p class="s-14">By registering as a stockist with Star Twins Herbal Limited, you agree to abide by the terms 
                                            and conditions set forth in this Disclaimer, as well as any subsequent policies communicated by the Company.
                                        </p><br>
                                        <p class="s-14">This Disclaimer is issued under the authority of the management of Star Twins Herbal Limited 
                                            and in accordance with applicable laws of the Federal Republic of Nigeria.
                                            For further clarification or inquiries, kindly contact Star Twins Herbal 
                                            Limited through official communication channels only.
                                        </p><br>
                                    </div>
                                </div>
                            </div>         
                        </div>
                    </div>
                </div>   
            </div>
             
            <div class="row ">	
                <div class="col-md-8">
                    <div class="">
                        <div class="">
                            <div class="">
                                <div class="card shadow" style="background-color: transparent">
                                    <div class="card-body" style="background-color: transparent">
                                        <form id="stockist-registration" method="POST" @submit.prevent="createStockist">
                                            
                                            <div class="card no-b  no-r" style="background-color: transparent">
                                                <div class="card-body">
                                                    <div class="form-row">
                                                        <div class="col-md-12">
                                                            <div class="input-group mb-2 mr-sm-2 mb-3 r-3 shadow ">
                                                                <div class="input-group-prepend">
                                                                    <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-store_mall_directory float-left s-20 text-white" ></i></div>
                                                                </div>
                                                                <input type="text" name="store_name" v-model="form.store_name" class="form-control r-0 light s-12" placeholder="Stockist Store Name" style="background-color: transparent" >
                                                            </div>
                    
                                                            <div class="form-row mb-2">
                                                                <div class="form-group col-12 m-0 ">
                                                                    <div class="input-group mb-2 mr-sm-2 shadow">
                                                                        <div class="input-group-prepend">
                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-room float-left s-20 text-white "  ></i></div>
                                                                        </div>
                                                                        <input type="text" name="store_address" v-model="form.store_address" class="form-control r-0 light s-12" placeholder="Store Address" style="background-color: transparent">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="form-group m-0">
                                                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-room float-left s-20 text-white" ></i></div>
                                                                    </div>
                                                                    <select name="store_state" v-model="form.store_state" class="form-control r-0 light s-12 shadow" style="background-color: transparent">
                                                                        <option >Select state</option>
                                                                        <option value="lagos">Lagos</option>
                                                                        <option value="oyo">Oyo</option>														   
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="form-group m-0">
                                                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-user-plus float-left s-20 text-white" ></i></div>
                                                                    </div>
                                                                    <select name="package_id" v-model="form.package_id" class="form-control r-0 light s-12 shadow" style="background-color: transparent">
                                                                        <option value="">Select Package</option>
                                                                        <template v-for="packag,i in stockistPackages">
                                                                            <option :value="packag.id" :key="i">{{ packag.name }} - ₦{{ packag.registration_value.toLocaleString('en-US') }}</option>
                                                                        </template>														   
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="form-row mb-2">
                                                                <div class="form-group col-12 m-0 ">
                                                                    <div class="input-group mb-2 mr-sm-2 shadow">
                                                                        <div class="input-group-prepend">
                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-phone float-left s-20 text-white "  ></i></div>
                                                                        </div>
                                                                        <input type="tephone" name="store_phone" v-model="form.store_phone" value="" class="form-control r-0 light s-12" placeholder="Phone" style="background-color: transparent">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-row">
                                                                <div class="form-group col-12 m-0 ">
                                                                    <div class="input-group mb-2 mr-sm-2 shadow">
                                                                        <div class="input-group-prepend">
                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-check-square-o float-left s-20 text-white "  ></i></div>
                                                                        </div>
                                                                        <input type="text" name="referrer_id" v-model="form.referrer" class="form-control r-0 light s-12" placeholder="Signee (username or email)" style="background-color: transparent">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-row mb-2">
                                                                <div class="form-group col-12 m-0">
                                                                    <div class="form-group m-0">
                                                                        <div class="dropbox" style="background-color: transparent; border: 2px solid #2E671A;">
                                                                            <input name="payment_receipt" v-b-popover.hover.top="'Drag your payment receipt here or click to browse'" type="file" @change="filesChange($event.target.files);" title="proof of payment" class="form-control form-control-line input-file" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                                                            <p id="img-preview">
                                                                                Drag your photo here<br> or click to browse<br>
                                                                                <span style="font-size: 10px;">Image size should not exceed 500kB</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>	
                                                <div class="card-body">
                                                    <span v-if="submittingStockist==true" class="btn btn-sm btn-success btn-lg">...</span>
                                                    <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Submit Details</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="">
                        <div class="row column-row">
                            <div class="mt-4 ml-auto" style="padding-right:40px">
                               
                                <img  src="/assets/img/preview.png"  width="auto" height="20px">&nbsp;&nbsp;
                                <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Preview Details</span>
                            </div> 
                        </div>
                        <div class="">
                            <div class="d-flex align-items-center">
                                <div>
                                    <span id="d1" style="font-size:10px">Store name</span>
                                    <h6 class="font-weight-bold " id="d1">{{ form.store_name }}</h6>
                                    <span  id="d1" style="font-size:10px">Stockist Address <Area></Area></span>
                                    <h6 class="font-weight-bold " id="d1">{{ form.store_address }}</h6>
                                    <span  id="d1" style="font-size:10px">State</span>
                                    <h6 class="font-weight-bold " id="d1">{{ form.store_state }}</h6>
                                    <span  id="d1" style="font-size:10px">Stockist Package</span>
                                    <h6 class="font-weight-bold " id="d1">{{ getPackageName(form.package_id) }}</h6>
                                    <span  id="d1" style="font-size:10px">Contact</span>
                                    <h6 class="font-weight-bold " id="d1">{{ form.store_phone }}</h6>
                                    <span  id="d1" style="font-size:10px">Signee</span>
                                    <h6 class="font-weight-bold" id="d1">{{ form.referrer }}</h6>
                                    
                                </div>
                                <div class="mr-4 ml-auto ">
                                    <img  src="/assets/img/shop-local.png"  width="auto" height="100px">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <b-card v-if="banksLoading" class="col-md-12" >
                    <b-skeleton width="85%"></b-skeleton>
                    <b-skeleton width="55%"></b-skeleton>
                    <b-skeleton width="70%"></b-skeleton>
                </b-card>
                <template v-else>
                    <div v-for="bank,i in banks" class="col-md-4" :key="i">
                        <div class="card shadow rounded" style="background-color: #2E671A">
                            <div class="card-body">
                                <div class="d-flex justify-content-center">
                                    <div class="text-center">  <img src="/assets/img/bank-transfer.png" width="auto" height="100px"></div>
                                        <div class="card-body text-center">
                                            <span  id="d1" class="text-white" style="font-size:10px">Bank Name</span>
                                            <h5 class="font-weight-bold text-white"> {{ bank.bank_name }}</h5>
                                            <span  id="d1" class="text-white" style="font-size:10px">Account Name</span>
                                            <h5 class="font-weight-bold text-white" id="d1">{{ bank.bank_account_name }}</h5>
                                            <span  id="d1" class="text-white" style="font-size:10px">Account Number</span>
                                            <h5 class="font-weight-bold text-white" id="d1">{{ bank.bank_account_number }}</h5>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style >
    #disclaimer .card {
    max-height: 400px;
    overflow-y: auto;
    }

    #yourContainer {
        width: 500px;
        height: 170px;
    }

    #yourContainer img {
        max-width: 100%;
        max-height: 100%;
    }
    .border-left-green {
    border-left: 1px solid #2E671A !important;
    }

    .dropbox {
    outline: 2px dashed green; /* the dash box */
    background: white;
    color: dimgray;
    min-height: 100px !important; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 100px !important;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightgreen; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      isDisclaimerVisible: false, // Controls visibility of the disclaimer
      form:{
        store_name:"",
        store_address:"",
        store_phone:"",
        store_state:"",
        package_id:"",
        referrer:""
      },
      banksLoading:false,
      submittingStockist:false
    };
  },

  computed:{
    ...mapState({
      loading: (state) => state.loading,
      submitting: (state) => state.submitting,
    }),

    ...mapGetters("stockistPackageStore",["stockistPackages"]),
    ...mapGetters("bankStore",["banks"])
  },

  created(){
    //alert()
    if(this.stockistPackages.length == 0){
        this.getPackages()
    }

    if(this.banks.length == 0){
        this.banksLoading = true
        this.getBanks().then(()=>this.banksLoading=false)
    }
  },


  methods: {
    ...mapActions("stockistStore",["create"]),
    ...mapActions("stockistPackageStore",["getPackages"]),
    ...mapActions("bankStore",["getBanks"]),

    toggleDisclaimer() {
      this.isDisclaimerVisible = !this.isDisclaimerVisible;
    },

    createStockist(){
        this.submittingStockist = true
        let ele = document.getElementById('stockist-registration')
        let form = new FormData(ele)
        this.create(form).then(()=>this.submittingStockist=false)
    },

    filesChange(files){
        const file = files[0]
        const prev = document.getElementById('img-preview')
        if(file){
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.addEventListener("load",function(){
                prev.innerHTML = '<img style="width: 100px !important; height:100px !important;" src="'+this.result+'"/>'
            })
        }
    },

    getPackageName(id){
       var packag = this.stockistPackages.filter((ele)=>ele.id == id)
        if(packag.length > 0 && packag[0].name != undefined){
          return packag[0].name
        }
       return ''
    }
  },
};
</script>






