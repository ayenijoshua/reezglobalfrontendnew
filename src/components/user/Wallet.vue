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
                                                            <!-- <th scope="col">Welcome Bonus (WB)</th> -->
                                                            <th scope="col">Total Referral Bonus (TRB)</th>
                                                            <!-- <th scope="col">Total Placement Bonus (TPB)</th> -->
                                                            <th scope="col">Total Matching Bonus (TEB)</th>
                                                            <th scope="col">Total Unilevel Bonus (TLB)</th>
                                                            <!-- <th scope="col">Profit Pool Bonus (PPB)</th> -->
                                                            <th scope="col">Global Pool Sharing (GPS)</th>
                                                            <th scope="col">Total Bonus (TB)</th>
                                                            <th scope="col">Total withdrawals (TW)</th>
                                                            <th scope="col">Wallet balance {TB - TW}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <!-- <td>₦{{ welcomeBonus?.toLocaleString('en-US') }}</td> -->
                                                                <td>₦{{ (placementBonus+referralBonus)?.toLocaleString('en-US') }} </td>
                                                                <!-- <td>₦{{ placementBonus?.toLocaleString('en-US') }} </td> -->
                                                                <td>₦{{ userBonusStats.matching_bonus?.toLocaleString('en-US') }}</td>
                                                                <td>₦{{ userBonusStats.unilevel_bonus?.toLocaleString('en-US') }}</td>
                                                                <!-- <td>₦{{ profitPool?.toLocaleString('en-US') }}</td> -->
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
                                                <h1 class="font-weight-bold text-green" style="margin: 0em; padding: 0em;">₦{{ walletBalance }}</h1>
                                                <small class="s-8" style="margin: 0em; padding: 0em;" >Available Balance</small>
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
                                                                    <th scope="col">Status <i class="icon icon-money-bag s-10"></i></th>
                                                                    <th scope="col">Date <i class="icon icon-date_range s-10"></i></th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-if="loading">
                                                                        <td colspan="4">
                                                                            <b-skeleton-table
                                                                                :rows="3"
                                                                                :columns="3"
                                                                                :table-props="{ bordered: true, striped: true }"
                                                                            ></b-skeleton-table>
                                                                        </td>
                                                                    </tr>

                                                                    <template v-else>
                                                                        <tr v-if="userWithdrawals.length == 0">
                                                                            <td colspan="4">There are no withdrawals</td>
                                                                        </tr>
                                                                        <tr v-else v-for="withdraw,i in userWithdrawals" :key="i">
                                                                            <td>{{ ++i }}</td>
                                                                            <td>₦{{ withdraw.amount }}</td>
                                                                            <td>{{ withdraw.status }}</td>
                                                                            <td>{{ withdraw.created_at }}</td>
                                                                        </tr>
                                                                    </template>
                                                                    <tr><th colspan="3">Total withdrawals (TW)</th><td>₦{{ userTotalWithdrawals }}</td></tr>
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
    import { mapActions,mapState,mapGetters } from 'vuex';
    export default{
        name:"admin-user-wallet",

        props:{
            user:{
                type:Object,
                required:true
            }
        },

        data(){
            return{
                form:{
                    amount:''
                },
                loadingBonusStats:false
                
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
                'profitPool','profitPools','globalProfit','userBonusStats',
                'globalProfits','totalBonus','walletBalance','placementBonus']),
            ...mapGetters('authStore',['authUser']),
            ...mapGetters('withdrawalStore',['userWithdrawals','userTotalWithdrawals']),
        },

        created(){
            if(Object.entries(this.user).length == 0){
                this.getUser().then(res=>{
                    this.getBonuses(res.data.uuid)
                    this.getUserTotal(res.data.uuid)
                    this.getUserHistory(res.data.uuid)
                })
            }else{
                this.getBonuses(this.user.uuid)
                this.getUserTotal(this.user.uuid)
                this.getUserHistory(this.user.uuid)
            }
        },

        methods:{
            ...mapActions('bonusStore',['getWelcomeBonus',
                'getEquilibrumBonus','getLoyaltyBonus','getReferralBonus',
                'getProfitPool','getProfitPools','getGlobalProfit',
                'getGlobalProfits','getPlacementBonus',
                'getTotalBonus','getWalletBalance','getUserBonusStats']),

                ...mapActions('authStore',['getUser']),

                ...mapActions('withdrawalStore',['getUserTotal','getUserHistory','initiate']),

            getBonuses(uuid){
                this.getUserBonusStats(uuid)
                //this.getEquilibrumBonus(uuid)
                //this.getLoyaltyBonus(uuid)
                this.getReferralBonus(uuid)
                this.getPlacementBonus(uuid)
                this.getTotalBonus(uuid)
                //this.getTotalPVs(uuid)
                //this.getProfitPool(uuid)
                this.getGlobalProfit(uuid)
                //this.getProfitPools(uuid)
                this.getGlobalProfits(uuid)
                this.getWalletBalance(uuid)
            },

            processWithdrawal()
            {
                let data = {uuid:this.authUser.uuid,data:this.form}
                this.initiate(data)
            }
        }
    }
</script>