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
                                                            <th scope="col">Welcome Bonus (TWB)</th>
                                                            <th scope="col">Total Referral Bonus (TRB)</th>
                                                            <th scope="col">Total Equilibrum Bonus (TEB)</th>
                                                            <th scope="col">Total Loyalty Bonus (TLB)</th>
                                                            <th scope="col">Profit Pool Bonus (PPB)</th>
                                                            <th scope="col">Global Pool Sharing (GPS)</th>
                                                            <th scope="col">Total withdrawals (TW)</th>
                                                            <th scope="col">Wallet balance {WB - TW}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <td>₦{{ welcomeBonus }}</td>
                                                            <td>₦{{ referralBonus }} </td>
                                                            <td>₦{{ equilibrumBonus }}</td>
                                                            <td>₦{{ loyaltyBonus }}</td>
                                                            <td>₦{{ profitPool }}</td>
                                                            <td>₦{{ globalProfit }}</td>
                                                            <td>₦57,500</td>
                                                            <td>₦131,800</td>
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
                                                        <tr>
                                                            <td>1</td>
                                                            <td>₦4,900</td>
                                                            <td><span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></td>
                                                            <td>4</td>
                                                            <td><span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Approved</span></td>
                                                            <td>13 March, 2023</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>₦0</td>
                                                            <td><span class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not Eligible</span></td>
                                                            <td>2</td>
                                                            <td><span class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not Approved</span></td>
                                                            <td>14 April, 2023</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>₦4,900</td>
                                                            <td><span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span></td>
                                                            <td>4</td>
                                                            <td><span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Approved</span></td>
                                                            <td>13 May, 2023</td>
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
                                                            <th scope="col">Time</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>₦259,900</td>
                                                            <td>13 March, 2023</td>
                                                            <td>9:37am</td>
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
                                                <h1 class="font-weight-bold text-green" style="margin: 0em; padding: 0em;">₦131,800</h1>
                                                <small class="s-8" style="margin: 0em; padding: 0em;" >Available Balance</small>
                                            </div>  
                                        </div>
                                        <div class="card-footer bg-white">
                                            <input type="hidden" name="id" value="960">
                                            <button type="submit" class="btn btn-sm btn-success"><i class="icon-account_balance_wallet mr-2"></i>Withdraw</button>
                                        </div>
                                    </div>
                                    <div class="card no-b">
                                        <div class="card-header bg-white">
                                            <h4 class="green-text"><strong class="font-weight-bold">Notification</strong></h4>
                                            <small>We pay out at certain periods in a month</small>
                                        </div>
                                        <div class="collapse show text-center" id="invoiceCard">
                                            <div class="col-md-4">
                                                <div class="card-body p-0">
                                                <img class="img-center" src="/assets/img/message.png">
                                                </div>
                                            </div>
                                            <div class="card-body  text-center">
                                                <small>We honour withdrawals 2 times in a month.<br>  Minimum withdrawal is ₦1,000.</small>
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
                                                                    <th scope="col">Date <i class="icon icon-date_range  s-10"></i></th>
                                                                    <th scope="col">Time <i class="icon icon-clock-o  s-10"></i></th>
                                                                    <th scope="col">Withdrawal <i class="icon icon-money-bag  s-10"></i></th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>October 20, 2022</td>
                                                                    <td>5:50pm</td>
                                                                    <td>₦24,900</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>December 2, 2022</td>
                                                                    <td>5:50pm</td>
                                                                    <td>₦14,900</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>January 22, 2023</td>
                                                                    <td>2:50pm</td>
                                                                    <td>₦14,900</td>
                                                                </tr>																	
                                                                <tr><th colspan="3">	Total withdrawals (TW)</th><td>₦57,500</td></tr>  

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
        name:"user-wallet",

        data(){
            return{

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
                'profitPool','globalProfit','totalBonus']),
            ...mapGetters('authStore',['authUser']),
        },

        created(){
            if(Object.entries(this.authUser).length == 0){
                this.getUser().then(res=>{
                    this.getBonuses(res.data.uuid)
                })
            }else{
                this.getBonuses(this.authUser.data.uuid)
            }
        },

        methods:{
            ...mapActions('bonusStore',['getWelcomeBonus',
                'getEquilibrumBonus','getLoyaltyBonus','getReferralBonus',
                'getProfitPool','getGlobalProfit','getPlacementBonus','getTotalBonus']),
                ...mapActions('authStore',['getUser']),

            getBonuses(uuid){
                this.getWelcomeBonus(uuid)
                this.getEquilibrumBonus(uuid)
                this.getLoyaltyBonus(uuid)
                this.getReferralBonus(uuid)
                this.getPlacementBonus(uuid)
                this.getTotalBonus(uuid)
                //this.getTotalPVs(uuid)
                this.getProfitPool(uuid)
                this.getGlobalProfit(uuid)
            }
        }
    }
</script>