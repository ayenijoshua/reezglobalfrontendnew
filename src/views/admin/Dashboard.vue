<template>
    <div>
        <div class="animated">
            <div class="row mb-5">
                <div class="col-md-12">
                    <div class="card shadow-lg" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="mr-3">
                                    <img class="mr-3 r-3" src="/assets/img/registration.png" alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <h6 class="mt-0 mb-1 font-weight-bold text-white" >Total Registrations QTY</h6>
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
            </div>
            <div class="row mb-5">
                <div class="col-md-4">
                    <template v-if="pickupStatsLoading==true">
                        <b-card class="col-md-12">
                            <b-skeleton width="85%"></b-skeleton>
                            <b-skeleton width="55%"></b-skeleton>
                            <b-skeleton width="70%"></b-skeleton>
                        </b-card>
                    </template>
                    <div v-else class="card shadow1">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="row column-row ml-1 ">
                                    <img class="mr-3  r-3" src="/assets/img/equil-green.png" alt="Generic placeholder image" width="70px" height="70px">
                                    <h6 class="mt-4 mb-1 font-weight-bold text-green" >Registration Products Pick-up<br> <small class="text-green">Total No. of Products pick-up</small></h6>
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div style="padding-right:20px">
                                            <p class="font-weight-bold green-text"><i class="icon icon-cart-plus" ></i>&nbsp;&nbsp;QTY</p>
                                            <div class="mt-1 text-dark-heading text-green float-right font-weight-bold" >{{ pickupStats.registration_count?.toLocaleString('en-US') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <template v-if="pickupStatsLoading==true">
                        <b-card class="col-md-12">
                            <b-skeleton width="85%"></b-skeleton>
                            <b-skeleton width="55%"></b-skeleton>
                            <b-skeleton width="70%"></b-skeleton>
                        </b-card>
                    </template>
                    <div v-else class="card shadow1">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="row column-row ml-1 ">
                                    <img class="mr-3  r-3" src="/assets/img/equil-green.png" alt="Generic placeholder image" width="70px" height="70px">
                                    <h6 class="mt-4 mb-1 font-weight-bold text-green" >Upgrade Products Pick-up<br> <small class="text-green">Total No. of Products pick-up</small></h6>
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div style="padding-right:20px">
                                            <p class="font-weight-bold green-text"><i class="icon icon-cart-plus" ></i>&nbsp;&nbsp;QTY</p>
                                            <div class="mt-1 text-dark-heading text-green float-right font-weight-bold" >{{ pickupStats.upgrade_count?.toLocaleString('en-US') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <template v-if="pickupStatsLoading==true">
                        <b-card class="col-md-12">
                            <b-skeleton width="85%"></b-skeleton>
                            <b-skeleton width="55%"></b-skeleton>
                            <b-skeleton width="70%"></b-skeleton>
                        </b-card>
                    </template>
                    <div v-else class="card shadow1">
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="row column-row ml-1 ">
                                    <img class="mr-3  r-3" src="/assets/img/loyalty-green.png" alt="Generic placeholder image" width="70px" height="70px">
                                    <h6 class="mt-4 mb-1 font-weight-bold text-green">Repurchase Products Pick-up<br> <small class="text-green">Total No. of Products pick-up</small></h6>
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div style="padding-right:20px">
                                            <p class="font-weight-bold green-text"><i class="icon icon-cart-plus" ></i>&nbsp;&nbsp;QTY</p>
                                            <div class="mt-1 text-dark-heading text-green float-right font-weight-bold" >{{ pickupStats.purchase_count?.toLocaleString('en-US') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-12">
                    <div class="card shadow1" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center flex-row flex-wrap">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/shopping-cart.png" alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <div class="border-right" style="padding-right:20px">
                                            <h6 class="mt-0 mb-1 font-weight-bold text-white" >Products Sold QTY</h6>
                                            <div class="mt-1 text-dark-heading text-white float-right" >{{ totalProductSold?.toLocaleString('en-US') }}</div>
                                        </div>
                                        <div style="padding-left:20px">
                                            <h6 class="mt-0 mb-1 font-weight-bold text-white" >Total Products PV</h6>
                                            <div class="mt-1 text-dark-heading text-white float-left">{{ totalProductPV?.toLocaleString('en-US') }} PV</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    

            <div class="row my-5">
                <div class="col-lg-12">
                    <template v-if="pickupStatsLoading==true">
                        <b-card class="col-md-12">
                            <b-skeleton width="85%"></b-skeleton>
                            <b-skeleton width="55%"></b-skeleton>
                            <b-skeleton width="70%"></b-skeleton>
                        </b-card>
                    </template>
                    <div v-else class="counter-box p-40 text-white shadow1 r-5 flex-wrap" style="background-color: #ffff">
                        <div class="float-right">
                            <img src="/assets/img/accounts.png">
                        </div>
                        <div class="ml-auto">
                            <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                <div class="border-right" style="padding-right:20px; border-right: 1px solid #2E671A !important;">
                                    <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Registration Products Pick-up Amount</span></small>
                                    <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">{{ pickupStats.registration_amount?.toLocaleString('en-US') }}</span></p>
                                </div>
                                <div class="border-right" style="padding-left:20px;padding-right:20px; border-right: 1px solid #2E671A !important;">
                                    <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Repurchase Products Pick-up Amount </span></small><!----Work on this-->
                                    <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">{{ pickupStats.purchase_amount?.toLocaleString('en-US') }}</span></p>
                                </div>
                                <div style="padding-left:20px">
                                    <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Upgrade Products Pick-up Amount </span></small><!----Work on this-->
                                    <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">{{ pickupStats.upgrade_amount?.toLocaleString('en-US') }}</span></p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div class="row mb-5">
                <template v-if="bonusStatsLoading==true">
                    <b-card class="col-md-12">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                </template>
                <template v-else>
                    <div class="col-md-6 ">
                        <div class="card shadow1">
                            <div class="card-body" >
                                <div class="d-flex align-items-center flex-row flex-wrap">
                                    <div class="row column-row ml-1 ">
                                        <img class="mr-3  r-3" src="/assets/img/equil-green.png" alt="Generic placeholder image" width="70px" height="70px">
                                        <h6 class="mt-4 mb-1 font-weight-bold text-green">Matching Bonus<br> <small class="text-green">Status Counts</small></h6>
                                    </div>
                                    <div class="ml-auto">
                                        <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                            <!---<div class="border-right" style="padding-right:20px; border-right: 1px solid #2E671A !important;">
                                                <p><span class="badge text-white bg-green mr-1"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></p>
                                                <div class="mt-1 text-dark-heading text-green float-right" >{{ countEquilibrumBonus?.toLocaleString('en-US') }}</div>
                                            </div>-->
                                            <div  style="padding-left:20px">
                                                <p class="font-weight-bold text-green">Total Earned</p>
                                                <div class="mt-1 text-dark-heading text-green float-left">₦{{ bonusStats.matching_bonus_sum?.toLocaleString('en-US') }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card shadow1">
                            <div class="card-body" >
                                <div class="d-flex align-items-center flex-row flex-wrap">
                                    <div class="row column-row ml-1 ">
                                        <img class="mr-3  r-3" src="/assets/img/loyalty-green.png" alt="Generic placeholder image" width="70px" height="70px">
                                        <h6 class="mt-4 mb-1 font-weight-bold text-green" >Repurchase Bonus<br> <small class="text-green"></small></h6>
                                    </div>
                                    <div class="ml-auto">
                                        <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                        <!--- <div class="border-right" style="padding-right:20px; border-right: 1px solid #2E671A !important;">
                                                <p><span class="badge text-white bg-green mr-1"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></p>
                                                <div class="mt-1 text-dark-heading text-green float-right" >{{ countLoyaltyBonus?.toLocaleString('en-US') }}</div>
                                            </div>-->
                                            <div  style="padding-left:20px">
                                                <p class="font-weight-bold text-green">Total Earned</p>
                                                <div class="mt-1 text-dark-heading text-green float-left"  >₦{{ bonusStats.repurchase_bonus_sum?.toLocaleString('en-US') }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>  
            </div>

            <div class="row mb-5">
                <template v-if="bonusStatsLoading==true">
                    <b-card class="col-md-12">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                </template>
                <template v-else>
                    <div class="col-md-6 ">
                        <div class="card shadow1">
                            <div class="card-body" >
                                <div class="d-flex align-items-center flex-row flex-wrap">
                                    <div class="row column-row ml-1 ">
                                        <img class="mr-3  r-3" src="/assets/img/profit_pool.png" alt="Generic placeholder image" width="70px" height="70px">
                                        <h6 class="mt-4 mb-1 font-weight-bold text-green" >Unilevel Bonus<br> <small class="text-green"></small></h6>	
                                    </div>
                                    <div class="ml-auto">
                                        <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                            <!---<div class="border-right" style="padding-right:20px; border-right: 1px solid #2E671A !important;">
                                                <p><span class="badge text-white bg-green mr-1"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></p>
                                                <div class="mt-1 text-dark-heading text-green float-right" >{{ countProfitPoolBonus?.toLocaleString('en-US') }}</div>
                                            </div>-->
                                            <div style="padding-left:20px">
                                                <p class="font-weight-bold text-green">Total Earned</p>
                                                <div class="mt-1 text-dark-heading text-green float-left"  >₦{{ bonusStats.unilevel_bonus_sum?.toLocaleString('en-US') }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card shadow1">
                            <div class="card-body" >
                                <div class="d-flex align-items-center flex-row flex-wrap">
                                    <div class="row column-row ml-1 ">
                                        <img class="mr-3  r-3" src="/assets/img/global_sharing.png" alt="Generic placeholder image" width="70px" height="70px">
                                        <h6 class="mt-4 mb-1 font-weight-bold text-green" >Global Sharing Bonus<br> <small class="text-green">Eligibility Status Counts</small></h6>
                                    </div>
                                    <div class="ml-auto">
                                        <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                            <div class="border-right" style="padding-right:20px; border-right: 1px solid #2E671A !important;">
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
                </template>
            </div>				
				<!--States-->

				<!--States-->
            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow1 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img src="/assets/img/wallet1.png">
                        </div>
                        <small class="mt-0text-white">Total Company Wallet</small>
                        <p class="text-dark-heading font-weight-bold text-white">₦<span style="font-size:32px">{{ companyWalletBalance?.toLocaleString('en-US') }}</span></p>
                    </div>
                </div>
            </div>
            <div class="d-flex row row-eq-height my-3">
                <div class="col-md-6 rounded mb-3">
                    <div class="card shadow1">
                        <div class="card-header" style="background-color: #2E671A;">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material" >
                                        <li class="nav-item">
                                            <a class="nav-link text-white font-weight-bold" id="w1-tab1" data-toggle="tab">Front Page Notification</a>
                                        </li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body no-p" style="background-color: #ded8c7" >
                            <div class="tab-content">
                                <div class="tab-pane show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                    <div class="row p-3">
                                        <div class="col-md-12">
                                                <form @submit.prevent="updateFrontPage()">
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <input v-model="frontPageForm.home_page_message_subject" type="text" class="form-control" placeholder="Subject" style="background-color: transparent; border: 2px solid #2E671A;" required>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <textarea v-model="frontPageForm.home_page_message" type="text" class="form-control" placeholder="Message" style="background-color: transparent; border: 2px solid #2E671A;" required></textarea>
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
                    <div class="card shadow1">
                        <div class="card-header" style="background-color: #2E671A;">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-white font-weight-bold" id="w1-tab1" data-toggle="tab" >Send General Message</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body no-p" style="background-color: #ded8c7">
                            <div class="tab-content">
                                <div class="tab-pane show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                    <div class="row p-3">
                                        <div class="col-md-12">
                                                <form @submit.prevent="updateGeneralMessage()">
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <input v-model="generalMessageForm.general_message_subject" type="text" class="form-control" placeholder="Subject" style="background-color: transparent; border: 2px solid #2E671A;" required>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <textarea v-model="generalMessageForm.general_message" type="text" class="form-control" placeholder="Message" style="background-color: transparent; border: 2px solid #2E671A;" required></textarea>
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

<style>
.border-left-green {
    border-left: 1px solid #2E671A !important;
}
</style>

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
                homeMsgSubmitting:false,
                bonusStatsLoading:false,
                pickupStatsLoading:false
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
                    'countLoyaltyBonus','countProfitPoolBonus','countGlobalProfitBonus','companyWalletBalance','bonusStats']),
            ...mapGetters('settingStore',['settings']),
            ...mapGetters('productPurchaseStore',['pickupStats'])        
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

            if(this.bonusStats.repurchase_bonus_count == undefined){
                this.bonusStatsLoading = true
                this.getBonusStats().then(()=>this.bonusStatsLoading = false)
            }

            if(this.pickupStats.registration_amount == undefined){
                this.pickupStatsLoading = true
                this.getPickupStats().then(()=>this.pickupStatsLoading = false)
            }
        },

        methods:{
            ...mapActions('userStore',['getTotalRegistrations','getTotalRegistrationPV']),
            ...mapActions('productClaimStore',['getTotalProductSold','getTotalProductPV','getSumClaimedProducts']),
            ...mapActions('bonusStore',['getTotalEquilibrumBonus','getTotalLoyaltyBonus','getTotalProfitPoolBonus',
            'getTotalGlobalProfitBonus','getCompanyWalletBalance','getBonusStats']),
            ...mapActions('settingStore',['update','all']), 
            ...mapActions("productPurchaseStore",["getPickupStats"]),
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
            },


        }

    }
</script>