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
                        
                        
                             <div class="row my-3">
                                <div class="col-lg-12 pb-4">
                                    <b-card v-if="walletBalanceLoading && loading">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="counter-box p-40 text-white shadow1 r-5" style="background-color: #2E671A">
                                        <div class="float-right">
                                            <img  src="/assets/img/wallet2.png">
                                        </div>
                                        <h6 class="mt-0text-white" >Total Bonus</h6>
                                        <div class="text-dark-heading font-weight-bold text-white" >₦<span class="s-36">{{ totalBonus?.toLocaleString('en-US') }}</span></div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12 pb-4">
                                    <b-card v-if="walletBalanceLoading && loading">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="counter-box p-40 text-white shadow1 r-5" style="background-color: #2E671A">
                                        <div class="float-right">
                                            <img  src="/assets/img/wallet2.png">
                                        </div>
                                        <h6 class="mt-0text-white" >Total withdrawals</h6>
                                        <div class="text-dark-heading font-weight-bold text-white" >₦<span class="s-36">{{ userTotalWithdrawals?.toLocaleString('en-US') }}</span></div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12 pb-4">
                                    <b-card v-if="walletBalanceLoading && loading">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="counter-box p-40 text-white shadow1 r-5" style="background-color: #2E671A">
                                        <div class="float-right">
                                            <img  src="/assets/img/wallet2.png">
                                        </div>
                                        <h6 class="mt-0text-white" >Wallet Balance</h6>
                                        <div class="text-dark-heading font-weight-bold text-white" >₦<span class="s-36">{{ walletBalance?.toLocaleString('en-US') }}</span></div>
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
                                                    <table class="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">No.</th>
                                                            <th class="font-weight-bold" scope="col">Bonus Type</th>
                                                            <th class="font-weight-bold" scope="col">Amount</th>
                                                            <th class="font-weight-bold" scope="col">Date</th>
                                                            <th class="font-weight-bold" scope="col">Time</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-if="loadingBonuses">
                                                            <td colspan="5" class="text-center">
                                                            <b-skeleton-table
                                                                :rows="3"
                                                                :columns="5"
                                                                :table-props="{ bordered: true, striped: true }"
                                                            ></b-skeleton-table>
                                                            </td>
                                                        </tr>

                                                        <tr v-else-if="bonuses.length === 0">
                                                            <td colspan="5" class="text-center font-weight-bold">
                                                            You have earned no bonus
                                                            </td>
                                                        </tr>

                                                        <tr v-else v-for="(bonus, i) in paginatedBonuses" :key="i">
                                                            <td>{{ (currentPage - 1) * bonusesPerPage + i + 1 }}</td>
                                                            <td>{{ bonus.type }}</td>
                                                            <td>₦{{ (bonus.amount || bonus.value || bonus.bonus_value || 0).toLocaleString('en-US') }}</td>
                                                            <td>{{ formatDate(bonus.created_at) }}</td>
                                                            <td>{{ formatTime(bonus.created_at) }}</td>

                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                        <!---<div class="text-center mt-3">
                                                            <p v-if="totalPages > 0">Page {{ currentPage }} of {{ totalPages }}</p>
                                                            <button class="btn btn-sm btn-outline-success" @click="prevPage" :disabled="currentPage === 1">Prev</button>
                                                            <button
                                                                v-for="page in totalPages"
                                                                :key="page"
                                                                @click="goToPage(page)"
                                                                class="btn btn-sm"
                                                                :disabled="totalPages === 0"
                                                                :class="{ 'btn-primary': page === currentPage, 'btn-outline-success': page !== currentPage }"
                                                            >
                                                                {{ page }}
                                                            </button>
                                                            <button class="btn btn-sm btn-outline-success" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                                                        </div>-->
														<div class="text-center mt-3">
                                                            <p v-if="totalPages > 0">Page {{ currentPage }} of {{ totalPages }}</p>

                                                            <button class="btn btn-sm btn-outline-success" @click="prevPage" :disabled="currentPage === 1">Prev</button>

                                                            <button
                                                                v-for="page in visiblePages"
                                                                :key="page"
                                                                @click="goToPage(page)"
                                                                class="btn btn-sm"
                                                                :class="{ 'btn-primary': page === currentPage, 'btn-outline-success': page !== currentPage }"
                                                            >
                                                                {{ page }}
                                                            </button>

                                                            <button class="btn btn-sm btn-outline-success" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                                                            </div>

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
                                            <div class="card shadow" style="background-color: transparent">
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table class="table table-bordered table-hover">
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
                                                                    <td colspan="4" class="text-center">There are no global profits</td>
                                                                </tr>
                                                                <template v-else>
                                                                    <tr v-for="globProfit,i in globalProfits" :key="i">
                                                                        <td>{{ ++i }}</td>
                                                                        <td>₦{{ globProfit.profit }}</td>
                                                                        <td>{{ globProfit.created_at }}</td>
                                                                    </tr>
                                                                </template>
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
                                                        at a cap of ₦{{ settings.withdrawal_charge_cap }}
                                                    </small>
                                                    <small v-else class="mb-3">You will be charge ₦{{ settings.charge }} for your withdrawal.</small><br>
                                                    <b><i>Please note that these charges are bank charges from our third party providers</i></b>
                                                </div>
                                                <small v-if="settings.minimum_withdrawal"><br>  Minimum withdrawal is ₦{{ settings.minimum_withdrawal?.toLocaleString('en-US') }}.</small>
                                                <small v-if="settings.maximum_withdrawal"><br>  Maximum withdrawal is ₦{{ settings.maximum_withdrawal?.toLocaleString('en-US') }}.</small>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <br>
                                    <div class="card shadow1" style="background-color: transparent">
                                        <b-card v-if="settingsLoading">
                                            <b-skeleton width="85%"></b-skeleton>
                                            <b-skeleton width="55%"></b-skeleton>
                                            <b-skeleton width="70%"></b-skeleton>
                                            <b-skeleton width="85%"></b-skeleton>
                                            <b-skeleton width="55%"></b-skeleton>
                                        </b-card>
                                        <div v-else class="collapse show text-center" id="invoiceCard">
                                            <div class="card-body  text-center">
                                                <img  src="/assets/img/wallet4.png"  width="auto" height="200px">
                                                <div class="text-center"> <h5 class="font-weight-bold">Withdrawal Amount </h5> ₦<span class="s-30">{{ authUser.withdrawal_amount?.toLocaleString('en-US') }}</span></div>
                                                <form @submit.prevent="submitWithdrawalAmount">
                                                    <div class="form-row">
                                                        <div class="col-md-12 mb-3">
                                                            <input type="number" required v-model="withdrawalForm.withdrawal_amount" class="form-control" :min="settings.minimum_withdrawal > 0 ? settings.minimum_withdrawal : 1" :max="settings.maximum_withdrawal" placeholder="withdrawal amount" style="background-color: transparent; border: 2px solid #1b4f72;">
                                                        </div>
                                                    </div>
                                                    <span v-if="submittingAmt==true" class="btn btn-success">...</span>
                                                    <button v-else class="btn btn-success" type="submit"><i class="icon-account_balance_wallet mr-2"></i>Submit</button>
                                                </form>
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
                                                                                <td>{{ withdraw.type }}</td>
                                                                                <td>{{ withdraw.created_at }}</td>
                                                                            </tr>
                                                                        </template>
                                                                        <template>
                                                                            <tr v-if="userWithdrawals.length == 0 && userPendingWithdrawals.length == 0">
                                                                                <td class="text-center" colspan="5">There are no withdrawals</td>
                                                                            </tr>
                                                                            <template v-else>
                                                                                <tr v-for="withdraw,i in userWithdrawals" :key="i">
                                                                                    <td>{{ ++i }}</td>
                                                                                    <td>₦{{ withdraw.amount?.toLocaleString('en-US') }}</td>
                                                                                    <td>₦{{ withdraw.fee?.toLocaleString('en-US') }}</td>
                                                                                    <td>{{ withdraw.status }}</td>
                                                                                    <td>{{ withdraw.type }}</td>
                                                                                    <td>{{ withdraw.created_at }}</td>
                                                                                </tr>
                                                                            </template>
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

/* Highlight the active page number */
.btn.btn-primary {
    background-color: #2E671A;
    border-color: #2E671A;
    color: white;
}

/* Optional: Adjust hover effect */
.btn.btn-primary:hover {
    background-color: #245a17;
    border-color: #245a17;
}

/* Optional: styling for non-active (outline) buttons */
.btn.btn-outline-success {
    color: #2E671A;
    border-color: #2E671A;
}

.btn.btn-outline-success:hover {
    background-color: #2E671A;
    color: white;
}
</style>

<script>
    import { notification } from '@/util/notification';
import { mapActions,mapState,mapGetters } from 'vuex';
//import axios from 'axios';
    export default{
        name:"user-wallet",

        data(){
            return{
                loadingBonuses: false,
                loadingGlobalProfits: false,
                loadingWithdrawals: false,
                bonuses: [], // ✅ to hold bonuses from the API
                currentPage: 1,               // ✅ added for pagination
                bonusesPerPage: 10,          // ✅ added for pagination
                form:{
                    amount:''
                },
                withdrawalForm:{
                    withdrawal_amount:0
                },
                submittingAmt:false,
                settingsLoading:false
            }
        },

        computed:{
            ...mapState({
                /*loading:state=>state.loading,*/
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

                // ✅ Add these two new computed properties
                paginatedBonuses() {
                    const sorted = [...this.bonuses].sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    const start = (this.currentPage - 1) * this.bonusesPerPage;
                    const end = start + this.bonusesPerPage;
                    return sorted.slice(start, end);
                },


                totalPages() {
                    return Math.ceil(this.bonuses.length / this.bonusesPerPage);
                }
        },

        /* created(){
            if(Object.entries(this.authUser).length == 0){
                this.getUser().then(res=>{
                    this.getBonuses(res.data.uuid)
                    this.getUserTotal(res.data.uuid)
                    this.getUserHistory(res.data.uuid)
                    this.getUserPendingWithdrawals(res.data.uuid)
                })
            }else{
                this.getBonuses(this.authUser.uuid)
                // ✅ Delay ensures authUser is loaded before fetching bonuses
                setTimeout(() => {
                    this.fetchBonuses()
                }, 500)

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
                this.settingsLoading = true
                this.all().then(()=>this.settingsLoading = false)
            }

            this.withdrawalForm.withdrawal_amount = this.authUser.withdrawal_amount
        },*/

        created() {
    if (Object.entries(this.authUser).length === 0) {
        this.getUser().then(res => {
            this.getBonuses(res.data.uuid)
            this.getUserTotal(res.data.uuid)
            this.getUserHistory(res.data.uuid)
            this.getUserPendingWithdrawals(res.data.uuid)

            // ✅ Run mock only after authUser is fetched
            setTimeout(() => {
                this.fetchBonuses()
            }, 500)
        })
    } else {
        this.getBonuses(this.authUser.uuid)

        // ✅ Delay ensures bonuses load after authUser is ready
        setTimeout(() => {
            this.fetchBonuses()
        }, 500)

        if (!this.userTotalWithdrawals) {
            this.getUserTotal(this.authUser.uuid)
        }
        if (this.userWithdrawals.length === 0) {
            this.getUserHistory(this.authUser.uuid)
        }
        if (this.userPendingWithdrawals.length === 0) {
            this.getUserPendingWithdrawals(this.authUser.uuid)
        }
    }

    if (this.settings.id == undefined) {
        this.settingsLoading = true
        this.all().then(() => (this.settingsLoading = false))
    }

    this.withdrawalForm.withdrawal_amount = this.authUser.withdrawal_amount
},


        methods: {
            ...mapActions('bonusStore', [
                'getWelcomeBonus', 'getEquilibrumBonus', 'getLoyaltyBonus', 'getReferralBonus',
                'getProfitPool', 'getProfitPools', 'getGlobalProfit', 'getGlobalProfits',
                'getPlacementBonus', 'getTotalBonus', 'getWalletBalance'
            ]),
            ...mapActions('authStore', ['getUser']),
            ...mapActions('withdrawalStore', ['getUserTotal', 'getUserHistory', 'initiate', 'getUserPendingWithdrawals']),
            ...mapActions('settingStore', ['all']),
            ...mapActions('userStore', ['updateWithdrawalAmount']),

            getBonuses(uuid) {
                if (!this.totalBonus) this.getTotalBonus(uuid)
                if (!this.walletBalance) this.getWalletBalance(uuid)
            },

            // newly added
            async fetchBonuses() {
               this.loadingBonuses = true;
                try {
                    await this.$store.dispatch('bonusStore/fetchAllBonuses', this.authUser.uuid)
                    this.bonuses = this.$store.state.bonusStore.allBonuses || []
                    console.log('LIVE bonuses:', this.bonuses)
                } catch (error) {
                    console.error('Error fetching bonuses:', error)
                    this.bonuses = []
                }
               this.loadingBonuses = false;
            },


            processWithdrawal() {
                if (!this.isNumeric(this.form.amount)) {
                    notification.warning('withdrawal amount is invalid')
                    return
                }
                const data = { uuid: this.authUser.uuid, data: this.form }
                this.initiate(data).then(res => {
                    if (res.status == 200) {
                        this.getUserPendingWithdrawals(this.authUser.uuid)
                    }
                })
            },

            isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n)
            },

            submitWithdrawalAmount() {
                this.submittingAmt = true
                this.updateWithdrawalAmount(this.withdrawalForm).then(() => {
                    this.submittingAmt = false
                    this.getUser()
                })
            },

              // ✅ Add these for pagination
                nextPage() {
                    if (this.currentPage < this.totalPages) {
                        this.currentPage++;
                        this.scrollToTableTop();
                    }
                },

                prevPage() {
                    if (this.currentPage > 1) {
                        this.currentPage--;
                        this.scrollToTableTop();
                    }
                },

                goToPage(page) {
                    this.currentPage = page;
                    this.scrollToTableTop();
                },

                formatDate(datetime) {
                    if (!datetime) return 'N/A';
                    const date = new Date(datetime);
                    return isNaN(date) ? 'N/A' : date.toLocaleDateString('en-GB');
                },

                formatTime(datetime) {
                    if (!datetime) return 'N/A';
                    const date = new Date(datetime);
                    return isNaN(date) ? 'N/A' : date.toLocaleTimeString();
                },



                scrollToTableTop() {
                this.$nextTick(() => {
                    const table = this.$el.querySelector('.table.table-striped');
                    if (table) {
                        table.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            }
            
        }

    }
</script>