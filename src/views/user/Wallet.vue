<template>
    <div>
        <div class="">
            <header class="blue accent-3 relative">
                <div class="container-fluid text-blue">
                    <div class="row justify-content-between">
                        <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                            <li>
                                <a class="nav-link active border-right" id="v-pills-wallet-summary-tab" data-toggle="pill"  href="#v-pills-wallet-summary" role="tab" aria-controls="v-pills-wallet-sumary"><i class="icon icon-account_balance_wallet text-green" ></i><span class="font-weight-bold text-green">Wallet Summary</span></a>
                            </li>
                            <li>
                                <a class="nav-link" id="v-pills-Withdrawal-History-tab" data-toggle="pill" href="#v-pills-Withdrawal-History" role="tab" aria-controls="v-pills-Withdrawal-History" aria-selected="false"><i class="icon icon-money-bag text-green"></i><span class="font-weight-bold text-green">Transactions</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="container-fluid animatedParent animateOnce my-3">
                <div class="animated">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-wallet-summary" role="tabpanel" aria-labelledby="v-pills-wallet-summary-tab">
                             
                            
                            <div class="row row-eq-height my-3">
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color: #2E671A">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><img class="mr-3  r-3" src="/assets/img/referral3.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                        <div><img class="mr-3  r-3" src="/assets/img/earn1.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter text-white" style="font-size:35px">₦ {{ referralBonus?.toLocaleString('en-US') }}</div>
                                                    <span class="green-text font-weight-bold text-white">Total Referral Bonus</span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <!--<div class="col-md-3 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color: transparent">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><i class="icon icon-money s-18"></i></div>
                                                        <div><span class="green-text font-weight-bold">TPB</span></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter" style="font-size:35px">₦ {{ placementBonus?.toLocaleString('en-US') }}</div>
                                                    <span class="green-text font-weight-bold">Total Placement Bonus</span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>--->
                                        <div class="col-md-3 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color: transparent">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><img class="mr-3  r-3" src="/assets/img/matching1.png"
                                                            alt="Generic placeholder image" width="50px" height="50px"></div>
                                                        <div><img class="mr-3  r-3" src="/assets/img/earn2.png"
                                                            alt="Generic placeholder image" width="50px" height="50px"></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter" style="font-size:35px">₦ {{ equilibrumBonus?.toLocaleString('en-US') }}</div>
                                                    <span class="font-weight-bold">Total Matching Bonus </span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color: transparent">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><img class="mr-3  r-3" src="/assets/img/repurchase1.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                        <div><img class="mr-3  r-3" src="/assets/img/earn2.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter" style="font-size:35px">₦ 10,800,000</div>
                                                    <span class=" font-weight-bold">Total Repurchase Bonus</span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color: transparent">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><img class="mr-3  r-3" src="/assets/img/unilevel1.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                        <div><img class="mr-3  r-3" src="/assets/img/earn2.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter" style="font-size:35px">₦ 10,800,000</div>
                                                    <span class=" font-weight-bold">Total unilevel Bonus</span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color: transparent">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><img class="mr-3  r-3" src="/assets/img/upgrade.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                        <div><img class="mr-3  r-3" src="/assets/img/earn2.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter" style="font-size:35px">₦ 10,800,000</div>
                                                    <span class=" font-weight-bold">Total Upgrade Bonus</span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color:#be4025">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><img class="mr-3  r-3" src="/assets/img/salary1.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                        <div><img class="mr-3  r-3" src="/assets/img/earn1.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter text-white" style="font-size:35px">₦ {{ globalProfit?.toLocaleString('en-US') }}</div>
                                                    <span class="text-white font-weight-bold">Global Pool Sharing</span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="card mb-3 shadow1" style="background-color: transparent">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div><img class="mr-3  r-3" src="/assets/img/user.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                        <div><img class="mr-3  r-3" src="/assets/img/earn2.png"
                                                            alt="Generic placeholder image" width="50px" height="auto"></div>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="s-40 my-3 font-weight-lighter" style="font-size:35px">₦ {{ totalBonus?.toLocaleString('en-US') }}</div>
                                                        <span class=" font-weight-bold">Total Bonus </span> 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card no-b p-4 shadow-lg" style="background-color:#2E671A; border: 1px solid #2E671A !important;">

                                        <div class="pt-5 pb-5 pl-5 pr-5" >
                                            <h5 class="font-weight-bold text-white s-14">Total withdrawals (TW)</h5>
                                            <span class="s-48 font-weight-lighter text-white">
                                            <small>₦</small>{{ userTotalWithdrawals?.toLocaleString('en-US') }}</span>
                                            <span><hr style="height:2px;border-width:0;color:white;background-color:white"></span>
                                            <h5 class="font-weight-bold text-white s-14">Wallet balance (TB - TW)</h5>
                                            <span class="s-48 font-weight-lighter text-white">
                                            <small>₦</small>{{ walletBalance?.toLocaleString('en-US') }}</span>
                                            <div class="float-right">
                                                <span class="icon icon-money-bag text-white" style="font-size: 100px;"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <b-card v-if="globalProfitLoading && loading">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="counter-box p-40   shadow1 r-5" style="background-color:transparent;">
                                        <div class="float-right">
                                            <img  src="/assets/img/wallet30.png" alt="Generic placeholder image" width="70px" height="70px">
                                        </div>
                                        <div class="mt-1 text-dark-heading " ></div>
                                        <h6 class="counter-title font-weight-bold">Total Stockist Rebate Bonus</h6><br>
                                       <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> ₦ 137,000</span> 
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <b-card v-if="globalProfitLoading && loading">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="counter-box p-40   shadow1 r-5" style="background-color:transparent;">
                                        <div class="float-right">
                                            <img  src="/assets/img/retailer.png" alt="Generic placeholder image" width="70px" height="70px">
                                        </div>
                                        <div class="mt-1 text-dark-heading " ></div>
                                        <h6 class="counter-title font-weight-bold">Total Signee Bonus</h6><br>
                                       <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> ₦ 137,000</span> 
                                    </div>
                                </div>
                            </div>   
                       
                        <!--<div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                         bar charts group -->
                                        <!-- <div class="col-md-12">
                                            <div class="card shadow-lg" style="background-color: transparent; border: 2px solid #2E671A !important;">
                                                <div class="card-header">
                                                    <h4 class="green-text"><strong class="font-weight-bold">Wallet Summary</strong></h4>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table class="table table-bordered table-hover">
                                                        <thead>
                                                            <tr>                                                               
                                                            <th class="font-weight-bold" scope="col">Total Referral Bonus (TRB)</th>
                                                            <th class="font-weight-bold" scope="col">Total Placement Bonus (TPB)</th>
                                                            <th class="font-weight-bold" scope="col">Total Matching Bonus (TEB)</th>
                                                            <th class="font-weight-bold" scope="col">Total Repurchase Bonus (TRB)</th>
                                                            <th class="font-weight-bold" scope="col">Total unilevel Bonus (TLB)</th>
                                                            <th class="font-weight-bold" scope="col">Total Upgrade Bonus (TUB)</th>
                                                            <th class="font-weight-bold" scope="col">Global Pool Sharing (GPS)</th>
                                                            <th class="font-weight-bold" scope="col">Total Bonus (TB)</th>
                                                            <th class="font-weight-bold" scope="col">Total withdrawals (TW)</th>
                                                            <th class="font-weight-bold" scope="col">Wallet balance (TB - TW)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <td>₦{{ welcomeBonus?.toLocaleString('en-US') }}</td>
                                                            <td>₦{{ referralBonus?.toLocaleString('en-US') }} </td>
                                                            <td>₦{{ placementBonus?.toLocaleString('en-US') }} </td>
                                                            <td>₦{{ equilibrumBonus?.toLocaleString('en-US') }}</td>
                                                            <td>₦{{ loyaltyBonus?.toLocaleString('en-US') }}</td>
                                                            <td>₦{{ profitPool?.toLocaleString('en-US') }}</td>
                                                            <td>₦{{ globalProfit?.toLocaleString('en-US') }}</td>
                                                            <td>₦{{ totalBonus?.toLocaleString('en-US') }}</td>
                                                            <td>₦{{ userTotalWithdrawals?.toLocaleString('en-US') }}</td>
                                                            <td>₦{{ walletBalance?.toLocaleString('en-US') }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>-->
                                    <!-- /bar charts group -->									
                                   <!--  </div>
                                </div>
                            </div>-->	


                           <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">


                                        <!-- bar charts group -->
                                        <!--<div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header bg-white">
                                                    <h4 class="green-text"><strong class="font-weight-bold">Profit Pool</strong></h4>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table class="table table-bordered table-hover">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Recieved Months</th>
                                                            <th scope="col">Profit Pool Bonus</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Required Registrations</th>
                                                            <th scope="col">Payment</th>
                                                            <th scope="col">Date</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="loading">
                                                                <td colspan="6">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="6"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="profitPools.length == 0">
                                                                    <td colspan="4">There are no profit pools</td>
                                                                </tr>
                                                                <tr v-else v-for="pool,i in profitPools" :key="i">
                                                                    <td>{{ ++i }}</td>
                                                                    <td>₦{{ pool.value }}</td>
                                                                    <td><span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></td>
                                                                    <td>4</td>
                                                                    <td><span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Approved</span></td>
                                                                    <td>{{ pool.created_at }}</td>
                                                                </tr>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>-->
                                        <!-- /bar charts group -->



                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
                                            <div class="card shadow" style="background-color: transparent">
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table class="table table-hover">
                                                        <thead>
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">Recieved Months</th>
                                                            <th class="font-weight-bold" scope="col">Global Profit Sharing</th>
                                                            <th class="font-weight-bold" scope="col">Date</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="loading">
                                                                <td colspan="3">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="5"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="globalProfits.length == 0">
                                                                    <td colspan="4">There are no global profits</td>
                                                                </tr>
                                                                <tr v-else v-for="globProfit,i in globalProfits" :key="i">
                                                                    <td>{{ ++i }}</td>
                                                                    <td>₦{{ globProfit.profit }}</td>
                                                                    <td>{{ globProfit.created_at }}</td>
                                                                </tr>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /bar charts group -->
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="tab-pane fade" id="v-pills-Withdrawal-History" role="tabpanel" aria-labelledby="v-pills-Withdrawal-History-tab">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card shadow1" style="background-color: #2E671A">
                                        <div class="collapse show text-center" id="invoiceCard">
                                            <div class="card-body  text-center text-white">
                                                <img  src="/assets/img/note.png"  width="auto" height="200px">
                                                <div class="text-center"> <h5 class="font-weight-bold" >Notification</h5></div>
                                                <div v-if="settings.charge">
                                                    <small v-if="settings.withdrawal_charge_type=='percentage'">You will be charged {{ settings.charge }}% of your withdrawal amount
                                                        at a maximum of ₦{{ settings.withdrawal_charge_cap }}
                                                    </small>
                                                    <small v-else class="mb-3">You will be charge ₦{{ settings.charge }} for your withdrawal.</small><br>
                                                    <b><i>Please note that these charges are bank charges from our third party providers</i></b>
                                                </div>
                                                <small v-if="settings.minimum_withdrawal"><br>  Minimum withdrawal is ₦{{ settings.minimum_withdrawal?.toLocaleString('en-US') }}.</small>
                                                <small v-if="settings.maximum_withdrawal"><br>  Maximum withdrawal is ₦{{ settings.maximum_withdrawal?.toLocaleString('en-US') }}.</small>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card shadow" style="background-color: transparent" >
                                        <div class="collapse show" id="invoiceCard">
                                            <div class="card-body p-0"> 
                                                <div class="card no-b  no-r" style="background-color: transparent">
                                                    <div class="card-body" >
                                                        <div class="form-row" style="overflow-x:auto;">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col">S/N</th>
                                                                    <th scope="col">Amount <i class="icon icon-money-bag s-10"></i></th>
                                                                    <th scope="col">Charge <i class="icon icon-money-bag s-10"></i></th>
                                                                    <th scope="col">Status <i class="icon icon-money-bag s-10"></i></th>
                                                                    <th scope="col">Date <i class="icon icon-date_range s-10"></i></th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-if="loading">
                                                                        <td colspan="5">
                                                                            <b-skeleton-table
                                                                                :rows="3"
                                                                                :columns="5"
                                                                                :table-props="{ bordered: true, striped: true }"
                                                                            ></b-skeleton-table>
                                                                        </td>
                                                                    </tr>

                                                                    <template v-else>
                                                                        <template v-if="userPendingWithdrawals.length > 0">
                                                                            <tr v-for="withdraw,i in userPendingWithdrawals" :key="i">
                                                                                <td>{{ ++i }}</td>
                                                                                <td>₦{{ withdraw.amount?.toLocaleString('en-US') }}</td>
                                                                                <td>₦{{ withdraw.fee?.toLocaleString('en-US') }}</td>
                                                                                <td>{{ withdraw.txn_status }}</td>
                                                                                <td>{{ withdraw.created_at }}</td>
                                                                            </tr>
                                                                        </template>
                                                                        <template>
                                                                            <tr v-if="userWithdrawals.length == 0 && userPendingWithdrawals.length == 0">
                                                                                <td colspan="5">There are no withdrawals</td>
                                                                            </tr>
                                                                            <tr v-else v-for="withdraw,i in userWithdrawals" :key="i">
                                                                                <td>{{ ++i }}</td>
                                                                                <td>₦{{ withdraw.amount?.toLocaleString('en-US') }}</td>
                                                                                <td>₦{{ withdraw.fee?.toLocaleString('en-US') }}</td>
                                                                                <td>{{ withdraw.status }}</td>
                                                                                <td>{{ withdraw.created_at }}</td>
                                                                            </tr>
                                                                        </template>
                                                                    </template>
                                                                    <tr><th colspan="5">Total withdrawals (TW)</th><td>₦{{ userTotalWithdrawals?.toLocaleString('en-US') }}</td></tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <br>
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
        </div>
    </div>
</template>

<style>
li > a:hover .icon {
    color: #2E671A !important;
} 
.nav-material>li>a::after {
    content: "";
    background: #f6f6f2;
    height: 3px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    transition: all 250ms ease 0s;
    transform: scale(0);
}

.nav-material.nav-material-white>li .nav-link.active[data-v-c8765c42] {
    border-color: #2E671A;
}

.nav-material.nav-material-white>li .nav-link.active {
    border-color: #2E671A;
}
</style>

<script>
    import { notification } from '@/util/notification';
import { mapActions,mapState,mapGetters } from 'vuex';
    export default{
        name:"user-wallet",

        data(){
            return{
                form:{
                    amount:''
                }
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('authUser',['authUser']),
            ...mapGetters('bonusStore',['welcomeBonus',
                'equilibrumBonus','loyaltyBonus','referralBonus',
                'profitPool','profitPools','globalProfit','placementBonus',
                'globalProfits','totalBonus','walletBalance']),
            ...mapGetters('authStore',['authUser']),
            ...mapGetters('withdrawalStore',['userWithdrawals','userTotalWithdrawals','userPendingWithdrawals']),
            ...mapGetters('settingStore',['settings']),
        },

        created(){
            if(Object.entries(this.authUser).length == 0){
                this.getUser().then(res=>{
                    this.getBonuses(res.data.uuid)
                    this.getUserTotal(res.data.uuid)
                    this.getUserHistory(res.data.uuid)
                    this.getUserPendingWithdrawals(res.data.uuid)
                })
            }else{
                this.getBonuses(this.authUser.uuid)
                if(!this.userTotalWithdrawals){
                    this.getUserTotal(this.authUser.uuid)
                }
                if(this.userWithdrawals.length == 0){
                    this.getUserHistory(this.authUser.uuid)
                }
                if(this.userPendingWithdrawals.length == 0){
                    this.getUserPendingWithdrawals(this.authUser.uuid)
                }
            }

            if(this.settings.id == undefined){
                this.all()
            }
        },

        methods:{
            ...mapActions('bonusStore',['getWelcomeBonus',
                'getEquilibrumBonus','getLoyaltyBonus','getReferralBonus',
                'getProfitPool','getProfitPools','getGlobalProfit',
                'getGlobalProfits','getPlacementBonus',
                'getTotalBonus','getWalletBalance']),

                ...mapActions('authStore',['getUser']),

                ...mapActions('withdrawalStore',['getUserTotal','getUserHistory','initiate','getUserPendingWithdrawals']),
                ...mapActions('settingStore',['all']),

            getBonuses(uuid){
                if(!this.welcomeBonus){
                    this.getWelcomeBonus(uuid)
                }
                if(!this.equilibrumBonus){
                    this.getEquilibrumBonus(uuid)
                }
                if(!this.loyaltyBonus){
                    this.getLoyaltyBonus(uuid)
                }
                if(!this.referralBonus){
                    this.getReferralBonus(uuid)
                }
                if(!this.placementBonus){
                    this.getPlacementBonus(uuid)
                }
                if(!this.totalBonus){
                    this.getTotalBonus(uuid)
                }
                if(!this.profitPool){
                    this.getProfitPool(uuid)
                }
                if(!this.globalProfit){
                    this.getGlobalProfit(uuid)
                }
                //this.getTotalPVs(uuid)
                if(!this.profitPools.length == 0){
                    this.getProfitPools(uuid)
                }
                if(!this.globalProfits.length == 0){
                    this.getGlobalProfits(uuid)
                }
                if(!this.walletBalance){
                    this.getWalletBalance(uuid)
                }
            },

            processWithdrawal()
            {
                if(!this.isNumeric(this.form.amount)){
                    notification.warning('withdrawal amount is invalid')
                    return
                }
                let data = {uuid:this.authUser.uuid,data:this.form}
                this.initiate(data).then(res=>{
                    if(res.status == 200){
                        this.getUserPendingWithdrawals(this.authUser.uuid)
                    }
                })
            },

            isNumeric(n){
                return !isNaN(parseFloat(n)) && isFinite(n)
            }
        }
    }
</script>