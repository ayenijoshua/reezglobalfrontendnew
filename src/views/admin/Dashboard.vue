<template>
    <div>
        <div class="animated">
            <div class="row mb-5">
                <div class="col-md-6">
                    <div class="card" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="mr-3">
                                    <img class="mr-3 r-3" src="/assets/img/registration.png" alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <h6 class="mt-0 mb-1 font-weight-bold text-white" >Total Registrations</h6>
                                            <div class="mt-1 text-dark-heading text-white float-right" >{{ totalRegistrations?.toLocaleString('en-US') }}</div>
                                        </div>
                                        <div style="padding-left:20px">
                                            <h6 class="mt-0 mb-1 font-weight-bold text-white">Total Registrations PV</h6>
                                            <div class="mt-1 text-dark-heading text-white float-left">{{ totalRegistrationPV?.toLocaleString('en-US') }} PV</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/shopping-cart.png" alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <h6 class="mt-0 mb-1 font-weight-bold text-white" >Products Sold</h6>
                                            <div class="mt-1 text-dark-heading text-white float-right" >{{ totalProductSold?.toLocaleString('en-US') }}</div>
                                        </div>
                                        <div  style="padding-left:20px">
                                            <h6 class="mt-0 mb-1 font-weight-bold text-white" >Total Products PV</h6>
                                            <div class="mt-1 text-dark-heading text-white float-left"  >{{ totalProductPV?.toLocaleString('en-US') }} PV</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
            <div class="row mb-5">
                <div class="col-md-6 ">
                    <div class="card">
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="row column-row ml-1 ">
                                    <img class="mr-3  r-3" src="/assets/img/equil-green.png" alt="Generic placeholder image" width="70px" height="70px">
                                    <h6 class="mt-4 mb-1 font-weight-bold text-green" >Equilibrum Bonus<br> <small class="text-green">Status Counts</small></h6>
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <p><span class="badge text-white bg-green mr-1"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></p>
                                            <div class="mt-1 text-dark-heading text-green float-right" >{{ countEquilibrumBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                        <div  style="padding-left:20px">
                                            <p class="font-weight-bold text-green">Total Earned</p>
                                            <div class="mt-1 text-dark-heading text-green float-left"  >₦{{ totalEquilibrumBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="row column-row ml-1 ">
                                    <img class="mr-3  r-3" src="/assets/img/loyalty-green.png" alt="Generic placeholder image" width="70px" height="70px">
                                    <h6 class="mt-4 mb-1 font-weight-bold text-green" >Loyalty Bonus<br> <small class="text-green">Status Counts</small></h6>
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <p><span class="badge text-white bg-green mr-1"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></p>
                                            <div class="mt-1 text-dark-heading text-green float-right" >{{ countLoyaltyBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                        <div  style="padding-left:20px">
                                            <p class="font-weight-bold text-green">Total Earned</p>
                                            <div class="mt-1 text-dark-heading text-green float-left"  >₦{{ totalLoyaltyBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
				
            <div class="row mb-5">
                <div class="col-md-6 ">
                    <div class="card">
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="row column-row ml-1 ">
                                    <img class="mr-3  r-3" src="/assets/img/profit_pool.png" alt="Generic placeholder image" width="70px" height="70px">
                                    <h6 class="mt-4 mb-1 font-weight-bold text-green" >Profit Pool Bonus<br> <small class="text-green">Eligibility Status Counts</small></h6>	
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <p><span class="badge text-white bg-green mr-1"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></p>
                                            <div class="mt-1 text-dark-heading text-green float-right" >{{ countProfitPoolBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                        <div style="padding-left:20px">
                                            <p class="font-weight-bold text-green">Total Earned</p>
                                            <div class="mt-1 text-dark-heading text-green float-left"  >₦{{ totalProfitPoolBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="row column-row ml-1 ">
                                    <img class="mr-3  r-3" src="/assets/img/global_sharing.png" alt="Generic placeholder image" width="70px" height="70px">
                                    <h6 class="mt-4 mb-1 font-weight-bold text-green" >Global Sharing Bonus<br> <small class="text-green">Eligibility Status Counts</small></h6>
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <p><span class="badge text-white bg-green mr-1"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></p>
                                            <div class="mt-1 text-dark-heading text-green float-right" >{{ countGlobalProfitBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                        <div  style="padding-left:20px">
                                            <p class="font-weight-bold text-green">Total Earned</p>
                                            <div class="mt-1 text-dark-heading text-green float-left"  >₦{{ totalGlobalProfitBonus?.toLocaleString('en-US') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>				
				<!--States-->

            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow2 r-5 flex-wrap" style="background-color: #ffff">
                        <div class="float-right">
                            <img src="/assets/img/accounts.png">
                        </div>
                        <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Registration Products Amount</span></small>
                        <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">{{ sumClaimedProducts?.toLocaleString('en-US') }}</span></p>
                    </div>
                </div>
            </div>
				<!--States-->
            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img src="/assets/img/wallet1.png">
                        </div>
                        <small class="mt-0text-white" >Total Company Wallet</small>
                        <p class="text-dark-heading font-weight-bold text-white">₦<span style="font-size:32px">{{ companyWalletBalance?.toLocaleString('en-US') }}</span></p>
                    </div>
                </div>
            </div>
            <div class="d-flex row row-eq-height my-3">
                <div class="col-md-6 rounded mb-3">
                    <div class="card">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >Front Page Notification</a>
                                        </li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body no-p">
                            <div class="tab-content">
                                <div class="tab-pane show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                    <div class="row p-3">
                                        <div class="col-md-12">
                                                <form @submit.prevent="updateFrontPage()">
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <input v-model="frontPageForm.home_page_message_subject" type="text" class="form-control" placeholder="Subject" required>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <textarea v-model="frontPageForm.home_page_message" type="text" class="form-control" placeholder="Message" required></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12">
                                                        <div class="row column-row">
                                                            <div class="form-row">
                                                                <div class="ml-4">
                                                                    <h6 class="mt-2 mb-1 font-weight-bold text-green">
                                                                         <input title="Front page notification" v-b-popover.hover.top="'Click to enable/disable Front page notification'" @click="showFrontPage()" v-model="frontPageForm.show_front_page_message" type="checkbox"  :checked="settings.show_front_page_message" data-width="100"  data-onstyle="success" :style="{'accent-color': '#2E671A'}" />
                                                                         Check to Enable | Uncheck to disable
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div class="ml-auto mr-3">
                                                                <span v-if="submitting && homeMsgSubmitting" class="btn btn-success">...</span>
                                                                <button v-else class="btn btn-success" type="submit"><i class="icon-arrow_forward mr-2"></i>Send</button>
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
                </div>
                
                <div class="col-md-6 rounded">
                    <div class="card">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >Send General Message</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body no-p">
                            <div class="tab-content">
                                <div class="tab-pane show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                    <div class="row p-3">
                                        <div class="col-md-12">
                                                <form @submit.prevent="updateGeneralMessage()">
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <input v-model="generalMessageForm.general_message_subject" type="text" class="form-control" placeholder="Subject" required>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <textarea v-model="generalMessageForm.general_message" type="text" class="form-control" placeholder="Message" required></textarea>
                                                    </div>
                                                </div>
                                                <span v-if="submitting && genMsgSubmitting" class="btn btn-success">...</span>
                                                <button v-else class="btn btn-success" type="submit"><i class="icon-arrow_forward mr-2"></i>Send</button>
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
    </div>
</template>

<script>
//import settings from '@/api/settings';
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:"admin-dashboard",
        data(){
            return{
                frontPageForm:{
                    home_page_message_subject:null,
                    home_page_message:null,
                    show_front_page_message:false
                },
                generalMessageForm:{
                    general_message_subject:null,
                    general_message:null
                },
                showFrontPageModal:{
                    show_front_page_message:false
                },

                genMsgSubmitting:false,
                homeMsgSubmitting:false

            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('productClaimStore',['totalProductSold','totalProductPV','sumClaimedProducts']),
            ...mapGetters('userStore',['totalRegistrations','totalRegistrationPV']),
            ...mapGetters('bonusStore',['totalEquilibrumBonus','totalLoyaltyBonus',
                    'totalProfitPoolBonus','totalGlobalProfitBonus','countEquilibrumBonus',
                    'countLoyaltyBonus','countProfitPoolBonus','countGlobalProfitBonus','companyWalletBalance']),
            ...mapGetters('settingStore',['settings'])        
        },

        created(){
            if(!this.totalRegistrations){
                this.getTotalRegistrations()
            }
            if(!this.totalRegistrationPV){
                this.getTotalRegistrationPV()
            }
            if(!this.totalProductSold){
                this.getTotalProductSold()
            }
            if(!this.totalProductPV){
                this.getTotalProductPV()
            }
            if(!this.totalEquilibrumBonus){
                this.getTotalEquilibrumBonus()
                this.getTotalEquilibrumBonus('count')
            }
            if(!this.totalLoyaltyBonus){
                this.getTotalLoyaltyBonus()
                this.getTotalLoyaltyBonus('count')
            }
            if(!this.totalProfitPoolBonus){
                this.getTotalProfitPoolBonus()
                this.getTotalProfitPoolBonus('count')
            }
            if(!this.totalGlobalProfitBonus){
                this.getTotalGlobalProfitBonus()
                this.getTotalGlobalProfitBonus('count')
            }
            if(!this.companyWalletBalance){
                this.getCompanyWalletBalance()
            }

            if(!this.sumClaimedProducts){
                this.getSumClaimedProducts()
            }
            if(this.settings.id == undefined){
                this.all().then((res)=>{ 
                    if(res.status == 200){
                        this.frontPageForm.home_page_message_subject = this.settings.home_page_message_subject
                        this.frontPageForm.home_page_message = this.settings.home_page_message
                        this.frontPageForm.show_front_page_message = this.settings.show_front_page_message 
                        this.generalMessageForm.general_message_subject = this.settings.general_message_subject
                        this.generalMessageForm.general_message = this.settings.general_message
                        this.showFrontPageModal.show_front_page_message = this.settings.show_front_page_message 
                    }
                })
            }else{
                this.frontPageForm.home_page_message_subject = this.settings.home_page_message_subject
                this.frontPageForm.home_page_message = this.settings.home_page_message
                this.frontPageForm.show_front_page_message = this.settings.show_front_page_message 
                this.generalMessageForm.general_message_subject = this.settings.general_message_subject
                this.generalMessageForm.general_message = this.settings.general_message
                this.showFrontPageModal.show_front_page_message = this.settings.show_front_page_message 
            }
        },

        methods:{
            ...mapActions('userStore',['getTotalRegistrations','getTotalRegistrationPV']),
            ...mapActions('productClaimStore',['getTotalProductSold','getTotalProductPV','getSumClaimedProducts']),
            ...mapActions('bonusStore',['getTotalEquilibrumBonus','getTotalLoyaltyBonus',
                        'getTotalProfitPoolBonus','getTotalGlobalProfitBonus','getCompanyWalletBalance']),
            ...mapActions('settingStore',['update','all']), 
            //...mapActions('')
            
            updateFrontPage(){
                this.homeMsgSubmitting = true
                this.update(this.frontPageForm).the(()=>this.homeMsgSubmitting=false)
            },

            updateGeneralMessage(){
                this.genMsgSubmitting = true
                this.update(this.generalMessageForm).the(()=>this.genMsgSubmitting=false)
            },

            showFrontPage(){
                this.showFrontPageModal.show_front_page_message = !this.settings.show_front_page_message
                this.update(this.showFrontPageModal)
            }
        }

    }
</script>