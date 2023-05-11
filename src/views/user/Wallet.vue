<template>
    <div>
        <div class="">
            <header class="blue accent-3 relative">
                <div class="container-fluid text-blue">
                    <div class="row justify-content-between">
                        <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                            <li>
                                <a class="nav-link active border-right" id="v-pills-wallet-summary-tab" data-toggle="pill"  href="#v-pills-wallet-summary" role="tab" aria-controls="v-pills-wallet-sumary"><i class="icon icon-account_balance_wallet" ></i>Wallet Summary</a>
                            </li>
                            <li>
                                <a class="nav-link" id="v-pills-Withdrawal-History-tab" data-toggle="pill" href="#v-pills-Withdrawal-History" role="tab" aria-controls="v-pills-Withdrawal-History" aria-selected="false"><i class="icon icon-money-bag "></i>Transactions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="container-fluid animatedParent animateOnce my-3">
                <div class="animated">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-wallet-summary" role="tabpanel" aria-labelledby="v-pills-wallet-summary-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header bg-white">
                                                    <h4 class="green-text"><strong class="font-weight-bold">Wallet Summary</strong></h4>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table class="table table-bordered table-hover">
                                                        <thead>
                                                            <tr>
                                                            <th scope="col">Welcome Bonus (WB)</th>
                                                            <th scope="col">Total Referral Bonus (TRB)</th>
                                                            <th scope="col">Total Placement Bonus (TPB)</th>
                                                            <th scope="col">Total Equilibrum Bonus (TEB)</th>
                                                            <th scope="col">Total Loyalty Bonus (TLB)</th>
                                                            <th scope="col">Profit Pool Bonus (PPB)</th>
                                                            <th scope="col">Global Pool Sharing (GPS)</th>
                                                            <th scope="col">Total Bonus (TB)</th>
                                                            <th scope="col">Total withdrawals (TW)</th>
                                                            <th scope="col">Wallet balance (TB - TW)</th>
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
                                        </div>
                                    <!-- /bar charts group -->									
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
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
                                        </div>
                                        <!-- /bar charts group -->
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header bg-white">
                                                    <h4 class="green-text"><strong class="font-weight-bold">Global Profit Sharing</strong></h4>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table class="table table-bordered table-hover">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">Recieved Months</th>
                                                            <th scope="col">Global Profit Sharing</th>
                                                            <th scope="col">Date</th>
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
                                    <div class="card no-b mb-3">
                                        <div class="card-header bg-white">
                                            <h4 class="green-text"><strong class="font-weight-bold">Wallet Balance</strong></h4>
                                        </div>
                                        <div class="collapse show text-center" id="invoiceCard">
                                            <div class="col-md-4">
                                                <div class="card-body p-0">
                                                <img src="/assets/img/withdraw3.png">
                                                </div>
                                            </div>
                                            <div class="card-body text-center">
                                                <h1 class="font-weight-bold text-green" style="margin: 0em; padding: 0em;">₦{{ walletBalance?.toLocaleString('en-US') }}</h1>
                                                <small class="s-8" style="margin: 0em; padding: 0em;" >Available Balance</small>
                                            </div>  
                                        </div>
                                        
                                        <div class="card-footer bg-white">
                                            <form @submit.prevent="processWithdrawal()">
                                                <input type="number" min="1" required v-model="form.amount" class="form-control input-lg mb-3" placeholder="withdrawal amount"/>
                                                <span v-if="submitting" class="btn btn-sm btn-success">...</span>
                                                <button v-else type="submit" class="btn btn-sm btn-success"><i class="icon-account_balance_wallet mr-2"></i>Withdraw</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="card no-b">
                                        <div class="card-header bg-white">
                                            <h4 class="green-text"><strong class="font-weight-bold">Notification</strong></h4>
                                        </div>
                                        <div class="collapse show text-center" id="invoiceCard">
                                            <div class="col-md-4">
                                                <div class="card-body p-0">
                                                <img class="img-center" src="/assets/img/message.png">
                                                </div>
                                            </div>
                                            <div class="card-body  text-center">
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
                                    <div class="card no-b">
                                        <div class="card-header bg-white">
                                            <h4 class="green-text"><strong class="font-weight-bold">Withdrawal History</strong></h4>
                                        </div>
                                        <div class="collapse show" id="invoiceCard">
                                            <div class="card-body p-0"> 
                                                <div class="card no-b  no-r">
                                                    <div class="card-body">
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