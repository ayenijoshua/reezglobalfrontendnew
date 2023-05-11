<template>
    <div>
        <div class="">
            <div class="row mb-5">
                <div class="col-md-4">
                    <div class="card" style="background-color: #2E671A">
                        <div class="card-body" >
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/membership.png"
                                        alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <h6 class="mt-0 mb-1 font-weight-bold text-white">Registration Package</h6>
                                    <div class="mt-1 text-dark-heading text-white float-right" >{{ regPackage.name }} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/hand-shake.png" alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <h6 class="mt-0 mb-1 font-weight-bold text-white" >Welcome Bonus</h6>
                                    <div class="mt-1 text-dark-heading text-white float-right" >₦  {{ welcomeBonus?.toLocaleString('en-US') }}</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/referral.png"
                                        alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <h6 class="mt-0 mb-1 font-weight-bold text-white" >Referral Bonus</h6>
                                    <div class="mt-1 text-dark-heading text-white float-right" >₦  {{ (referralBonus + placementBonus)?.toLocaleString('en-US') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>	
            <!--States-->
            <div class="row my-5">
                <div class="col-lg-3">
                    <div class="counter-box p-40 white shadow2 r-5">
                        <div class="float-right">
                            <img src="/assets/img/equil.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-green" >{{ equilibrumBonus?.toLocaleString('en-US') }}</div>
                        <h6 class="counter-title font-weight-bold" style="color:#2E671A">Equilibrum (₦) </h6><br>
                        <span v-if="equilibrumBonusEligible" class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span>
                        <span v-else class="badge text-white bg-danger"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not-Eligible</span>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="counter-box p-40 white shadow2 r-5">
                        <div class="float-right">
                            <img src="/assets/img/bonus.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-green" >{{ loyaltyBonus?.toLocaleString('en-US') }}</div>
                        <h6 class="counter-title font-weight-bold" style="color:#2E671A">Loyalty (₦)</h6><br>
                        <span v-if="loyaltyBonusEligible" class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span>
                        <span v-else class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not-Eligible</span>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="counter-box p-40 white shadow2 r-5">
                        <div class="float-right">
                            <img  src="/assets/img/bars.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-green" >{{ profitPool?.toLocaleString('en-US') }}</div>
                        <h6 class="counter-title font-weight-bold" style="color:#2E671A">Profit Pool (₦) </h6><br>
                        <span v-if="profitPoolEligible" class="badge text-white bg-green"><i class="icon icon-check"></i>&nbsp;&nbsp;Eligible</span>
                        <span v-else class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not Eligible</span>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="counter-box p-40  text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img  src="/assets/img/salary_white.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-white" >{{ globalProfit?.toLocaleString('en-US') }}</div>
                        <h6 class="counter-title font-weight-bold">Global Profit (₦)</h6><br>
                        <span v-if="globalProfitEligible" class="badge text-white bg-green"><i class="icon icon-check"></i>&nbsp;&nbsp;Eligible</span>
                        <span v-else class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not Eligible</span>
                    </div>
                </div>
            </div>
            <!--States-->
            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img  src="/assets/img/companywallet.png">
                        </div>
                        <h6 class="mt-0text-white" >Total Wallet Earned</h6>
                        <div class="text-dark-heading font-weight-bold text-white" >₦<span class="s-36">{{ walletBalance?.toLocaleString('en-US') }}</span></div>
                    </div>
                </div>
            </div>
            <div class="d-flex row row-eq-height my-3">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body ">
                            <div class="float-up text-center">
                                <img  src="/assets/img/pv1.png">
                            </div>
                            <div class="sc-counter font-weight-bold s-36 text-center" style="color:#2E671A">{{ totalPV?.toLocaleString('en-US') }}</div>
                            <h6 class="counter-title text-center font-weight-bold" style="color:#2E671A">Cumulated Point Value (CPV)</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link active show" id="w1-tab1" data-toggle="tab" href="#v-pills-w1-tab1">Incentives</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body no-p">
                            <div class="tab-content">
                                <div class="tab-pane show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                    <div class="row p-3">
                                        <template v-if="loading">
                                            <b-skeleton-table
                                                :rows="5"
                                                :columns="5"
                                                :table-props="{ bordered: true, striped: true }"
                                            ></b-skeleton-table>
                                        </template>
                                        <template v-else>
                                            <div v-if="currentIncentive == null" class="col-md-12">
                                                <p class="alert alert-info">You are yet to qualify for an incentive</p>
                                            </div>
                                            <template v-else>
                                                <div class="col-md-6" id="yourContainer">
                                                    <img class="gift" src="/assets/img/phone.png">
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card-body pt-0 mt-5">
                                                        <h6 class="mt-0 green-text" >Cash Equivalent</h6>
                                                        <div class="text-dark-heading font-weight-bold green-text" >₦<span class="s-36">{{ currentIncentive.worth?.toLocaleString('en-US') }}</span></div>
                                                        <hr>
                                                        <h6 class="mt-0 green-text" >Cumulated Point Value (CPV)</h6>
                                                        <div class="text-dark-heading font-weight-bold green-text"><span class="s-36">{{ currentIncentive.points?.toLocaleString('en-US') }}PV</span></div>
                                                        <hr>
                                                        <h6 class="mt-0 green-text" >Incentive</h6>
                                                        <div class="text-dark-heading font-weight-bold green-text" ><span class="s-36">{{ currentIncentive.incentive }}</span></div>									
                                                    </div>
                                                </div>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <br>
                    </div>
                    <div class="row row-eq-height">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="card-header white text-green">CLAIMED INCENTIVES</div>
                        <div class="card-body ">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}'>
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Incentive Claimed</th>
                                            <th scope="col">Worth</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">PV Level</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading">
                                            <td colspan="6">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="6"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="claims.length == 0">
                                                <td colspan="4">There are no claimed incentives</td>
                                            </tr>
                                            <tr v-else v-for="claim,i in claims" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>{{ claim.incentive }}</td>
                                                <td>{{ claim.worth?.toLocaleString('en-US')}}</td>
                                                <td>{{ claim.status }}</td>
                                                <td>{{ claim.points?.toLocaleString('en-US') }} PV</td>
                                                <td>{{ claim.date }} </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>				
            </div>
            <div class="row">		
                
                <div class="col-md-12">
                    <div class="card no-b mb-3">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >TOTAL SELECTION</a>
                                        </li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="float-left">
                            <div class="card-body">
                                <template v-if="loading">
                                    <b-skeleton-table
                                        :rows="3"
                                        :columns="3"
                                        :table-props="{ bordered: true, striped: true }"
                                    ></b-skeleton-table>
                                </template>
                                <template v-else>
                                    <div v-if="userProductClaims.length == 0">
                                        <p class="alert alert-info">
                                            There are no claimed products
                                        </p>
                                    </div>
                                    <div v-else v-for="userClaim,i in userProductClaims" :key="i" class="row column-row border-bottom">
                                        <div class="mt-2 ml-3" style="padding-right:15px">
                                            <img src="/assets/img/shop1.png" width="30px" height="30px">
                                        </div>  
                                        <div class="mb-2 mt-2">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ userClaim.name }} <br><small> ₦{{ userClaim.worth }} | {{userClaim.points}}PV</small></h6>	
                                        </div>	
                                    </div>

                                    <div class="row column-row border-bottom">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Point Value </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ totalPv }} PV</h6>											
                                        </div>
                                    </div> 	
                                    <div class="row column-row border-bottom">
                                        <div class="mb-2 mt-5 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Product Cost </h6>											
                                        </div>	
                                        <div class="mb-2 mt-5 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦{{ totalWorth?.toLocaleString('en-US') }} </h6>											
                                        </div>
                                    </div>

                                    <div class="mt-3">									
                                        <button type="button" disabled :class="['btn btn-small', productClaimStatus=='processing'?'btn-warning':productClaimStatus=='approved'?'btn-success':'btn-danger']"><i class="icon-check-square-o mr-2"></i>{{ productClaimStatus }}</button>
                                    </div>
                                </template>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters,mapState} from 'vuex'
export default{
    name:"user-dashboard",

    props:{
        user:{
            type:Object,
            required:true
        }
    },

    data(){
        return {
            profitPoolEligible:false,
            globalProfitEligible:false,
            product_ids:[],
            totalWorth:0,
            totalPv:0,
            productClaimStatus:'Unclaimed',
            guestEmail:null,
            equilibrumBonusEligible:false,
            loyaltyBonusEligible:false,
            userHasProfile:true
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting,
        }),
        
        ...mapGetters('bonusStore',['welcomeBonus',
        'equilibrumBonus','loyaltyBonus','referralBonus','placementBonus',
        'profitPool','globalProfit','totalBonus','walletBalance']),

        ...mapGetters('packageStore',['regPackage']),
        ...mapGetters('authStore',['authUser']),
        ...mapGetters('userStore',['totalPV']),
        ...mapGetters('settingStore',['setting']),
        ...mapGetters('incentiveClaimStore',['claims','currentIncentive']),
        ...mapGetters('productStore',['products']),
        ...mapGetters('productClaimStore',['userProductClaims']),
    },

    created(){
        this.getPackage(this.user.package_id)
        this.getBonuses(this.user.uuid)
        if(this.user.package_id == 6){
            this.profitPoolEligible = true
        }
        if(this.user.rank_id >= 5){
            this.globalProfitEligible = true
        }
        this.getCurrentIncentive(this.user.uuid)
        this.getClaims(this.user.uuid)
        this.getProductClaims(this.user.uuid).then(res=>{
            if( res.status == 200){
                this.userProductClaims.forEach(ele=>{
                    console.log(ele.worth)
                    this.totalWorth = this.totalWorth + ele.worth
                    this.totalPv = this.totalPv + ele.points
                    this.productClaimStatus = ele.status
                })
            }
        })

        this.getSetting('unit_point_value');
        //this.getActiveProducts()

        this.countDirectDownlines(this.user.uuid).then(res=>{
            if(res.status == 200){
                if(res.data.data >= 2){
                    this.equilibrumBonusEligible = true
                }
            }
        })

        this.getUplineDetails(this.user.uuid).then(res=>{
            if(res.status == 200){
                this.countDirectDownlines(res.data.data.uuid).then(res1=>{
                    if(res1.status == 200){
                        if(res1.data.data >= 2){
                            this.loyaltyBonusEligible = true
                        }
                    }
                })
            }
        })
                
    },

    methods:{
        ...mapActions('bonusStore',['getWelcomeBonus',
        'getEquilibrumBonus','getLoyaltyBonus','getReferralBonus',
        'getProfitPool','getGlobalProfit','getPlacementBonus','getTotalBonus','getWalletBalance']),
        ...mapActions('packageStore',['getPackage']),
        ...mapActions('authStore',['getUser']),
        ...mapActions('userStore',['getTotalPVs','inviteGuest','getUplineDetails','countDirectDownlines','getProfileDetails','getUser']),
        ...mapActions('settingStore',['getSetting']),
        ...mapActions('incentiveClaimStore',['getClaims','getCurrentIncentive']),
        ...mapActions('productStore',['getActiveProducts']),
        ...mapActions('productClaimStore',['claimProduct','getProductClaims']),
        
        getBonuses(uuid){
            this.getWelcomeBonus(uuid)
            this.getEquilibrumBonus(uuid)
            this.getLoyaltyBonus(uuid)
            this.getReferralBonus(uuid)
            this.getPlacementBonus(uuid)
            this.getTotalBonus(uuid)
            this.getTotalPVs(uuid)
            this.getProfitPool(uuid)
            this.getGlobalProfit(uuid)
            this.getWalletBalance(uuid)
        },
    }

}
</script>