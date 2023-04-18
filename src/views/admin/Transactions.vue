<template>
    <div>
        <div class="">
            <header class="blue accent-3 relative">
                <div class="container-fluid text-blue">
                    <div class="row justify-content-between">
                        <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                            <li>
                                <a class="nav-link active border-right" id="v-pills-wallet-summary-tab" data-toggle="pill"  href="#v-pills-wallet-summary" role="tab" aria-controls="v-pills-wallet-sumary"><i class="icon icon-investment-3"></i>Withdrawal History</a> 
                            </li>
                            <li>
                                <a class="nav-link" id="v-pills-Withdrawal-History-tab" data-toggle="pill" href="#v-pills-Withdrawal-History" role="tab" aria-controls="v-pills-Withdrawal-History" aria-selected="false"><i class="icon icon-credit-card"></i>Registration History</a>
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
                                        <div class="col-lg-12">
                                            <div class="counter-box p-40 text-white shadow2 r-5 flex-wrap" style="background-color: #ffff">
                                                <div class="float-right">
                                                    <img  src="/assets/img/cash-withdrawal.png" width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Withdrawals</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">{{ totalWithdrawals }}</span></p>
                                            </div>
                                        </div>
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
                                                    <h4 class="green-text"><strong class="font-weight-bold">Withdrawal Details</strong></h4>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                        data-options='{ "paging": false; "searching":false}'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Username</th>
                                                                <th>Amount</th>
                                                                <th>Payout Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="loading && withdrawalsLoading">
                                                                <td colspan="4">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="4"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="withdrawals.length == 0">
                                                                    <td colspan="6">
                                                                        <div class="alert alert-info">
                                                                            There are no withdrawals
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr v-else v-for="withdraw,i in withdrawals" :key="i">
                                                                    <td>{{ ++i }}</td>
                                                                    <td>{{ withdraw.username }}</td>
                                                                    <td>₦{{ withdraw.amount }}</td>
                                                                    <td>{{ withdraw.created_at }}</td>
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
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <div class="col-lg-12">
                                            <div class="counter-box p-40 text-white shadow2 r-5 flex-wrap" style="background-color: #ffff">
                                                <div class="float-right">
                                                <img src="/assets/img/registration.png"  width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Registration</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">{{ totalPaidUsers }}</span></p>
                                            </div>
                                        </div>
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
                                                    <h4 class="green-text"><strong class="font-weight-bold">Registration Details</strong></h4>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                        data-options='{ "paging": false; "searching":false}'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Full Name</th>
                                                                <th>Username</th>
                                                                <th>Package</th>
                                                                <th>Amount</th>
                                                                <th>Registration Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="loading && paidUsersLoading">
                                                                <td colspan="6">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="6"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="paidUsers.length == 0">
                                                                    <td colspan="6">
                                                                        <div class="alert alert-info">
                                                                            There are not active user registrations
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr v-else v-for="user,i in paidUsers" :key="i">
                                                                    <td>{{ ++i }}</td>
                                                                    <td>{{ user.first_name }} {{ user.last_name }}</td>
                                                                    <td>{{ user.username }}</td>
                                                                    <td>{{ user.name }}</td>
                                                                    <td>₦{{ user.amount }}</td>
                                                                    <td>{{ user.created_at }}</td>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

 export default{
    name:"admin-transactions",

    data(){
        return {
            withdrawalsLoading:false,
            paidUsersLoading:false
        }

        
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting,
            loading:state=>state.loading
        }),

        ...mapGetters('withdrawalStore',['withdrawals','totalWithdrawals']),
        ...mapGetters('userStore',['paidUsers','totalPaidUsers','sumPaidUsers'])
    },

    created(){
        if(this.withdrawals.length==0){
            this.withdrawalsLoading = true
            this.all().then(()=>this.withdrawalsLoading = false)
        }
        if(!this.totalWithdrawals){
            this.getTotal()
        }
        if(this.paidUsers.length==0){
            this.paidUsersLoading = true
            this.getPaidUsers().then(()=>this.paidUsersLoading = false)
        }
        if(!this.totalPaidUsers){
            this.getTotalPaidUsers()
        }
    },

    methods:{
        ...mapActions('withdrawalStore',['all','getTotal']),
        ...mapActions('userStore',['getPaidUsers','getTotalPaidUsers','getSumPaidUsers'])
    }
 }
</script>