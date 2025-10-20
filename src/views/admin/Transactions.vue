<template>
    <div>
        <div class="">
            <header class="blue accent-3 relative">
                <div class="container-fluid text-blue">
                    <div class="row justify-content-between">
                        <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                            <li class="font-weight-bold green-text">
                                <a class="nav-link active border-right " id="v-pills-wallet-summary-tab" data-toggle="pill"  href="#v-pills-wallet-summary" role="tab" aria-controls="v-pills-wallet-sumary"><i class="icon icon-investment-3"></i>Withdrawal History</a> 
                            </li>
                            <li class="font-weight-bold green-text">
                                <a class="nav-link" id="v-pills-Withdrawal-History-tab" data-toggle="pill" href="#v-pills-Withdrawal-History" role="tab" aria-controls="v-pills-Withdrawal-History" aria-selected="false"><i class="icon icon-credit-card"></i>Registration History</a>
                            </li>
                            <li class="font-weight-bold green-text">
                                <a class="nav-link" id="v-pills-payment-approvals-tab" data-toggle="pill" href="#v-pills-payment-approvals" role="tab" aria-controls="v-pills-payment-approvals" aria-selected="false"><i class="icon icon-account_box"></i>Pending Payment Upload Approvals <span class="btn btn-danger badge badge-danger">{{ pendingPackagePaymentApprovalsCount }}</span></a>
                            </li>
                            <li class="font-weight-bold green-text">
                                <a class="nav-link" id="v-pills-repurchase-History-tab" data-toggle="pill" href="#v-pills-repurchase-History" role="tab" aria-controls="v-pills-repurchase-History" aria-selected="false"><i class="icon icon-shopping-cart"></i>Product Sales History</a>
                            </li>
                            <li class="font-weight-bold green-text">
                                <a class="nav-link" id="v-pills-stockist-History-tab" data-toggle="pill" href="#v-pills-stockist-History" role="tab" aria-controls="v-pills-stockist-History" aria-selected="false"><i class="icon icon-account_box"></i>Stockist History</a>
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
                                            <div class="counter-box p-40 text-white shadow1 r-5 flex-wrap" style="background-color: #2E671A">
                                                <div class="float-right">
                                                    <img  src="/assets/img/cash-withdrawal.png" width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Withdrawals</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#ffff!important;">₦<span style="color:#ffff!important;font-size:32px">{{ totalWithdrawals?.toLocaleString('en-US') }}</span></p>
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
                                            <div class="card shadow1" style="background-color: #ded8c7">
                                                <div class="card-header" style="background-color: #ded8c7" >
                                                    <h5 class="text-green"><strong class="font-weight-bold">Withdrawal Details</strong></h5>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;background-color: #ded8c7">
                                                    <div class=" mb-3" style="float:right">
                                                        <form class="form-inline my-2 my-lg-0" @submit.prevent="searchWithdraws()">
                                                            <input v-model="searchParam" class="form-control mr-sm-2" type="search" placeholder="" style="background-color: #ded8c7; border: 2px solid #2E671A;" >
                                                            <span v-if="loading" class="btn btn-success my-2 my-sm-0">...</span>
                                                            <button v-else class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                                                        </form>
                                                    </div>
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                        data-options='{ "paging": false; "searching":false}'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Username</th>
                                                                <th>Amount</th>
                                                                <!--<th>Charge</th>-->
                                                                <th>Status</th>
                                                                <th>Payout Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="loading && withdrawalsLoading">
                                                                <td colspan="6">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="6"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="withdrawals.length == 0">
                                                                    <td colspan="6">
                                                                        <div class="alert alert-info text-center">
                                                                            There are no withdrawals
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <template v-else>
                                                                    <tr v-for="withdraw,i in withdrawals" :key="i">
                                                                        <td>{{ ++i }}</td>
                                                                        <td>{{ withdraw.username }}</td>
                                                                        <td>₦{{ withdraw.amount?.toLocaleString('en-US') }}</td>
                                                                        <!--<td>₦{{ withdraw.fee?.toLocaleString('en-US') }}</td>-->
                                                                        <td>{{ withdraw.status }}</td>
                                                                        <td>{{(new Date(withdraw.created_at)).toDateString()}} {{(new Date(withdraw.created_at)).toLocaleTimeString()}}</td>
                                                                    </tr>
                                                                </template>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                    <div class="container">
                                                        <ul class="pagination">
                                                            <li>
                                                            <a href="#">Prev</a>
                                                            </li>
                                                            <li class="active">
                                                            <a href="#">1</a>
                                                            </li>
                                                            <li >
                                                            <a href="#">2</a>
                                                            </li>
                                                            <li>
                                                            <a href="#">3</a>
                                                            </li>
                                                            <li>
                                                            <a href="#">4</a>
                                                            </li>
                                                            <li>
                                                            <a href="#">5</a>
                                                            </li>
                                                            <li>
                                                            <a href="#">Next</a>
                                                            </li>
                                                        </ul>
                                                    </div>
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
                                            <div class="counter-box p-40 text-white shadow1 r-5 flex-wrap" style="background-color: #2E671A">
                                                <div class="float-right">
                                                    <img src="/assets/img/registration.png"  width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#ffff!important;">Total Registration</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#ffff!important;"><span style="color:#ffff!important;font-size:32px">{{ totalPaidUsers?.toLocaleString('en-US') }}</span></p>
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
                                            <div class="card shadow1" style="background-color:#ded8c7">
                                                <div class="card-header" style="background-color:#ded8c7">
                                                    <h6 class="text-green"><strong class="font-weight-bold">Registration Details</strong></h6>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto; background-color: #ded8c7;">
                                                    <div class=" mb-3" style="float:right">
                                                       <!-- <form class="form-inline my-2 my-lg-0" @submit.prevent=" searchRegs()">
                                                            <input required class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" style="background-color: #ded8c7; border: 2px solid #2E671A;" >
                                                            <span v-if="loading" class="btn btn-success my-2 my-sm-0">...</span>
                                                            <button v-else class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                                                       </form>-->
                                                    </div>
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                        data-options='{ "paging": false; "searching":false}'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Full Name</th>
                                                                <th>Username</th>
                                                                <th>Registered Package</th>
                                                                <th>Amount</th>
                                                                <th>Registration Date</th>
                                                                <th>Upgrade History</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="paidUsersLoading">
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
                                                                        <div class="alert alert-info text-center">
                                                                            There are not active user registrations
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <template v-else>
                                                                    <tr v-for="user,i in paidUsers" :key="i">
                                                                        <td>{{ (paidUsersPerPage * (paidUsersCurrentPage - 1)) +( ++i) }}</td>
                                                                        <td>{{ user.first_name }} {{ user.last_name }}</td>
                                                                        <td>{{ user.username }}</td>
                                                                        <td>{{ user.name }}</td>
                                                                        <td>₦{{ user.amount?.toLocaleString('en-US') }}</td>
                                                                        <td>{{(new Date(user.created_at)).toDateString() }} {{(new Date(user.created_at)).toLocaleTimeString() }}</td>
                                                                        <td>
                                                                            <button @click="setUser(user)" v-b-modal.user-upgrade-history class="badge badge-success" style="padding: 10px 10px;">View</button>
                                                                        </td>
                                                                    </tr>
                                                                </template>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                    <br>
                                                    <BasePaginator v-if="paidUserAction" :action="paidUserAction" :current_page="paidUsersCurrentPage" :last_page="paidUsersLastPage" :total_pages="paidUsersTotalPages" :per_page="paidUsersPerPage"></BasePaginator>
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
                                            <div class="card shadow1" style="background-color:#ded8c7">
                                                <div class="card-header" style="background-color:#ded8c7">
                                                    <h6 class="text-green"><strong class="font-weight-bold">Registration Upgrade</strong></h6>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;background-color: #ded8c7;">
                                                    <div class=" mb-3" style="float:right">
                                                        <!--<form class="form-inline my-2 my-lg-0" @submit.prevent=" searchRegs()">
                                                            <input required  class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" style="background-color: transparent; border: 2px solid #2E671A;" >
                                                            <span v-if="loading" class="btn btn-success my-2 my-sm-0">...</span>
                                                            <button v-else class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                                                        </form>-->
                                                    </div>
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                        data-options='{ "paging": false; "searching":false}'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Full Name</th>
                                                                <th>Username</th>
                                                                <th>Previous Packages</th>
                                                                <th>New Package</th>
                                                                <!--<th>Registration Upgrade Date</th>-->
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="upgradedUsersLoading==true">
                                                                <td colspan="5">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="5"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="upgradedUsers.length == 0">
                                                                    <td colspan="5">
                                                                        <div class="alert alert-info text-center">
                                                                            There are no user registration upgrades
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <template v-else>
                                                                    <tr v-for="user,i in upgradedUsers" :key="i">
                                                                        <td>{{ (paidUsersPerPage * (paidUsersCurrentPage - 1)) +( ++i) }}</td>
                                                                        <td>{{ user.first_name }} {{ user.last_name }}</td>
                                                                        <td>{{ user.username }}</td>
                                                                        <td>{{ user.previous_packages?.toString() }}</td>
                                                                        <td>{{ user.package }}</td>
                                                                    </tr>
                                                                </template>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                    <br>
                                                    <BasePaginator v-if="paidUserAction" :action="paidUserAction" :current_page="paidUsersCurrentPage" :last_page="paidUsersLastPage" :total_pages="paidUsersTotalPages" :per_page="paidUsersPerPage"></BasePaginator>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /bar charts group -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="v-pills-payment-approvals" role="tabpanel" aria-labelledby="v-pills-payment-approvals-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <div class="col-lg-6">
                                            <div class="counter-box p-40 text-white shadow1 r-5 flex-wrap" style="background-color: #2E671A">
                                                <div class="float-right">
                                                    <img src="/assets/img/registration.png" width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#ffff!important;">Pending Approvals</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#ffff!important;"><span style="color:#ffff!important;font-size:32px">{{ pendingPackagePaymentApprovalsCount }}</span></p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="counter-box p-40 text-white shadow1 r-5 flex-wrap" style="background-color: #2E671A">
                                                <div class="float-right">
                                                    <img src="/assets/img/registration.png"  width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#ffff!important;">Total Processed Payment Uploads</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#ffff!important;"><span style="color:#ffff!important;font-size:32px">{{ packagePaymentHistoryCount }}</span></p>
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
                                            <div class="card shadow1">
                                                <div class="card-header" style="background-color: #2E671A">
                                                    <h6 class="text-white"><strong class="font-weight-bold">Pending Payment Approvals</strong></h6>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto; background-color: #ded8c7;">
                                                    
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                        data-options='{ "paging": false; "searching":false}'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Full Name</th>
                                                                <th>Username</th>
                                                                <th>Registered Package</th>
                                                                <th>Amount</th>
                                                                <th>Status</th>
                                                                <th>Description</th>
                                                                <th>Payment Date</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="pendingPackagePaymentLoading">
                                                                <td colspan="9">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="9"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="pendingPackagePaymentApprovals.length == 0">
                                                                    <td colspan="9">
                                                                        <div class="alert alert-info text-center">
                                                                            There are pending payment approvals
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <template v-else>
                                                                    <tr v-for="payment,i in pendingPackagePaymentApprovals" :key="i">
                                                                        <td>{{  ( ++i) }}</td>
                                                                        <td>{{ payment.first_name }} {{ payment.last_name }}</td>
                                                                        <td>{{ payment.username }}</td>
                                                                        <td>{{ payment.name }}</td>
                                                                        <td>₦{{ payment.amount?.toLocaleString('en-US') }}</td>
                                                                        <td>{{ payment.status }}</td>
                                                                        <td>{{ payment.narration }}</td>
                                                                        <td>{{(new Date(payment.created_at)).toDateString() }} {{(new Date(payment.created_at)).toLocaleTimeString() }}</td>
                                                                        <td>
                                                                            <div class="dropdown">
                                                                                <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i class="caret"></i>
                                                                                </button>
                                                                                <div class="dropdown-menu" style="background-color: #ecf0f1">
                                                                                    <a @click="setPackagePayment(payment)" v-b-modal.confirm-payment-approval class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Approve</a>
                                                                                    <a @click="setPackagePayment(payment)" v-b-modal.confirm-payment-decline class="dropdown-item text-green" ><i class="icon-drivers-license-o"></i>&nbsp;&nbsp; Decline
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </template>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                    <br>
                                                    <!--<BasePaginator v-if="paidUserAction" :action="paidUserAction" :current_page="paidUsersCurrentPage" :last_page="paidUsersLastPage" :total_pages="paidUsersTotalPages" :per_page="paidUsersPerPage"></BasePaginator>-->
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
                                            <div class="card shadow1">
                                                <div class="card-header" style="background-color: #2E671A">
                                                    <h6 class="text-white"><strong class="font-weight-bold">Payment Upload History</strong></h6>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto; background-color: #ded8c7">
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                        data-options='{ "paging": false; "searching":false}'>
                                                        <thead>
                                                            <tr>
                                                                <th>S/N</th>
                                                                <th>Full Name</th>
                                                                <th>Username</th>
                                                                <th>Registered Package</th>
                                                                <th>Amount</th>
                                                                <th>Status</th>
                                                                <th>Description</th>
                                                                <th>Payment Date</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-if="packagePaymentHistoryLoading">
                                                                <td colspan="9">
                                                                    <b-skeleton-table
                                                                        :rows="3"
                                                                        :columns="9"
                                                                        :table-props="{ bordered: true, striped: true }"
                                                                    ></b-skeleton-table>
                                                                </td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-if="packagePaymentHistory.length == 0">
                                                                    <td colspan="9">
                                                                        <div class="alert alert-info text-center">
                                                                            There are no payment upload history
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <template v-else>
                                                                    <tr v-for="payment,i in packagePaymentHistory" :key="i">
                                                                        <td>{{  ( ++i) }}</td>
                                                                        <td>{{ payment.first_name }} {{ payment.last_name }}</td>
                                                                        <td>{{ payment.username }}</td>
                                                                        <td>{{ payment.name }}</td>
                                                                        <td>₦{{ payment.amount?.toLocaleString('en-US') }}</td>
                                                                        <td>{{ payment.status }}</td>
                                                                        <td>{{ payment.narration }}</td>
                                                                        <td>{{(new Date(payment.created_at)).toDateString() }} {{(new Date(payment.created_at)).toLocaleTimeString() }}</td>
                                                                        <td>
                                                                            <div class="dropdown">
                                                                                <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i class="caret"></i>
                                                                                </button>
                                                                                <div class="dropdown-menu" style="background-color: #ecf0f1">
                                                                                    <a @click="setPackagePayment(payment)" v-b-modal.view-payment-receipt class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; View Receipt</a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </template>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                    <br>
                                                    <!--<BasePaginator v-if="paidUserAction" :action="paidUserAction" :current_page="paidUsersCurrentPage" :last_page="paidUsersLastPage" :total_pages="paidUsersTotalPages" :per_page="paidUsersPerPage"></BasePaginator>-->
                                                </div> 
                                            </div>
                                        </div>
                                        <!-- /bar charts group -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="v-pills-repurchase-History" role="tabpanel" aria-labelledby="v-pills-repurchase-History-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <div class="col-lg-12">
                                            <div class="counter-box p-40 text-white shadow1 r-5 flex-wrap" style="background-color: #2E671A">
                                                <div class="float-right">
                                                    <img src="/assets/img/registration.png"  width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#ffffff!important;">Total Product Sales</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#ffffff!important;">
                                                    <span v-if="sumTotalPricesLoading ==true" style="color:#ffffff!important;font-size:20px">...loading</span>
                                                    <span v-else style="color:#ffffff!important;font-size:32px">₦ {{ sumTotalPrices.toLocaleString('en-US') }}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="card shadow1 mb-3" style="background-color: transparent">
                                        <div class="card-body ">
                                            <!--<div class="d-flex justify-content-left mb-2">
                                                <input 
                                                    
                                                    class="form-control mr-2" 
                                                    type="text" 
                                                    placeholder="Search..." 
                                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"/>
                                                <button class="btn text-white" style="background-Color:#2E671A" >
                                                    <i class="icon-search"></i>
                                                </button>
                                            </div>-->
                                            <div class="table-responsive">
                                                <table id="example2" class="table table-bordered table-hover data-tables" >
                                                    <thead >
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">S/N</th>
                                                            <th class="font-weight-bold" scope="col">PERIOD</th>
                                                            <th class="font-weight-bold" scope="col">PRODUCT REPURCHASE (QTY)</th>     
                                                            <th class="font-weight-bold" scope="col">TOTAL REPURCHASE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-if="monthlyRepurchasesLoading==true">
                                                            <td colspan="4">
                                                                <b-skeleton-table
                                                                    :rows="3"
                                                                    :columns="7"
                                                                    :table-props="{ bordered: true, striped: true }"
                                                                ></b-skeleton-table>
                                                            </td>
                                                        </tr>
                                                        <template v-else>
                                                            <tr v-if="monthlyRepurchases.length == 0">
                                                                <td colspan="4">
                                                                    <div class="alert alert-info text-center">There are no repurchases</div>
                                                                </td>
                                                            </tr>
                                                            <tr v-for="val,i in monthlyRepurchases" :key="i">
                                                                <th scope="row">{{ ++i }}</th>
                                                                <td>{{ val.month }} {{ val.year }}</td>
                                                                <td>{{ val.total_qty }}</td>
                                                                <td>₦{{ val.total.toLocaleString('en-US') }}</td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>				
                            </div>   
                        </div>

                        <div class="tab-pane fade" id="v-pills-stockist-History" role="tabpanel" aria-labelledby="v-pills-stockist-History-tab">                           
                            <div class="row mb-5">
                                <!--- Registration bonus-->
                                <div class="col-md-4">
                                    <div  class="card shadow1 card-sectioned" style="background-color: transparent; ">
                                        <b-card v-if="stockistStatsLoading==true" class="col-md-12">
                                            <b-skeleton width="85%"></b-skeleton>
                                            <b-skeleton width="55%"></b-skeleton>
                                            <b-skeleton width="70%"></b-skeleton>
                                        </b-card>
                                        <div v-else class="card-body" >
                                            <div class="d-flex align-items-center">
                                                <div class="mr-3">
                                                    <img class="mr-3  r-3" src="/assets/img/retailer.png"
                                                        alt="Generic placeholder image" width="70px" height="70px">
                                                </div>
                                                <div class="ml-auto">
                                                    <h6 class="mt-0 mb-1 font-weight-bold" >Total Stockist</h6>
                                                    <div class="mt-1 text-dark-heading font-weight-bold float-right" style="color: #353935;"> {{ stockistsStats.stockist_count }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--- Referal bonus-->
                                <div class="col-md-4">
                                    <b-card v-if="stockistStatsLoading==true" class="col-md-12">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="card shadow1 card-sectioned" style="background-color: transparent">
                                        <div class="card-body" >
                                            <div class="d-flex align-items-center">
                                                <div class="mr-3">
                                                    <img class="mr-3  r-3 img-fluid" src="/assets/img/wallet30.png"
                                                        alt="Generic placeholder image" width="70px" height="70px">
                                                </div>
                                                <div class="ml-auto">
                                                    <h6 class="mt-0 mb-1 font-weight-bold">Total Stockist Purchase</h6>
                                                    <div class="mt-1 text-dark-heading font-weight-bold float-right" style="color: #353935;" >₦ {{ stockistsStats.stockist_purchases_sum.toLocaleString('en-US') }} </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <!--- Repurchase bonus-->
                                <!--work on it later, convert to repurchase bonus-->
                                <div class="col-md-4">
                                    <b-card v-if="stockistStatsLoading==true" class="col-md-12">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="card shadow1 card-sectioned" style="background-color: transparent">
                                        <div class="card-body" >
                                            <div class="d-flex align-items-center">
                                                <div class="mr-3">
                                                    <img class="mr-3  r-3 img-fluid" src="/assets/img/repurchase1.png" alt="Generic placeholder image" width="70px" height="70px">
                                                </div>
                                                <div class="ml-auto">
                                                    <h6 class="mt-0 mb-1 font-weight-bold">Total Stockist Sales</h6>
                                                    <div class="mt-1 text-dark-heading font-weight-bold float-right" style="color: #353935;" >₦ {{ stockistsStats.stockist_sales_sum }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>	
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="card shadow1 mb-3" style="background-color: transparent">
                                        <div class="card-header">
										    <h6 class="text-green"><strong class="font-weight-bold">Stockist Registrations</strong></h6>
										</div>
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-left mb-2">
                                                <!-- <input 
                                                    class="form-control mr-2" 
                                                    type="text" 
                                                    placeholder="Search..." 
                                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"/>
                                                <button class="btn text-white" style="background-Color:#2E671A" >
                                                    <i class="icon-search"></i>
                                                </button> -->
                                            </div>
                                            <div class="table-responsive">
                                                <table id="example2" class="table table-bordered table-hover data-tables" >
                                                    <thead>
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">S/N</th>
                                                            <th class="font-weight-bold" scope="col">STOCKIST</th>
                                                            <th class="font-weight-bold" scope="col">USERNAME</th>
                                                            <th class="font-weight-bold" scope="col">PACKAGE</th>     
                                                            <th class="font-weight-bold" scope="col">ADDRESS</th>
                                                            <th class="font-weight-bold" scope="col">STATE</th>
                                                            <th class="font-weight-bold" scope="col">CONTACT</th>
                                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                                            <th class="font-weight-bold" scope="col">DATE</th>
                                                            <th class="font-weight-bold" scope="col">Actions</th>
                                                            <!-- <th class="font-weight-bold" scope="col">TOTAL PURCHASE</th>
                                                            <th class="font-weight-bold" scope="col">TOTAL SALES</th> -->
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-if="stockistsLoading==true">
                                                            <td colspan="11">
                                                                <b-skeleton-table
                                                                    :rows="3"
                                                                    :columns="8"
                                                                    :table-props="{ bordered: true, striped: true }"
                                                                ></b-skeleton-table>
                                                            </td>
                                                        </tr>
                                                        <template v-else>
                                                            <tr v-if="stockists.length == 0">
                                                                <td>
                                                                    <div class="alert alert info text-center">There are no stockists</div>
                                                                </td>
                                                            </tr>
                                                            <tr v-for="stock,i in stockists" :key="i">
                                                                <td scope="row">{{ (stockistsPerPage * (stockistsCurrentPage - 1)) + ( ++i) }}</td>
                                                                <td>{{ stock.store_name }}</td>
                                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                                <td>{{stock.username}}</td>
                                                                <td>{{ stock.stockist_package }} - ₦{{ stock.stockist_package_value }}</td>
                                                                <td>{{ stock.store_address }}</td>
                                                                <td>{{ stock.store_state }}</td>
                                                                <td>{{stock.store_phone}}</td>
                                                                <td>{{stock.stockist_status}}</td>
                                                                <td>{{(new Date(stock.reg_date).toDateString())}} {{(new Date(stock.reg_date).toLocaleTimeString())}}</td>
                                                                <!-- <td>₦{{ stock.total_purchases.toLocaleString('en-US') }}</td>
                                                                <td>₦{{ stock.total_sales.toLocaleString('en-US') }}</td> -->
                                                                <td>
                                                                    <div class="dropdown">
                                                                        <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i class="caret"></i>
                                                                        </button>
                                                                        <div class="dropdown-menu"  style="background-color: #ded8c7">
                                                                            <a @click="setStockist(stock)" v-b-modal.stockist-pop class="dropdown-item text-green" ><i class="icon-eye"></i>&nbsp;&nbsp; View POP</a>

                                                                            <template v-if="stock.stockist_status == 'pending'">
                                                                                <a @click="setStockist(stock)" v-b-modal.approve-stockist class="dropdown-item text-green">
                                                                                    <i class="icon-check-circle"></i>&nbsp;&nbsp; Approve
                                                                                </a>
                                                                                <a @click="setStockist(stock)" v-b-modal.disapprove-stockist class="dropdown-item text-red">
                                                                                    <i class="icon-times-circle"></i>&nbsp;&nbsp; Disapprove
                                                                                </a>
                                                                            </template>
                                                                            
                                                                            <a @click="setStockist(stock)" v-b-modal.stockist-upgrade-history class="dropdown-item text-green"><i class="icon-sitemap"></i>&nbsp;&nbsp;Upgrade History</a>
                                                                            <a @click="fetchSalesStats(stock.user_uuid)" v-b-modal.stockist-sales-stats class="dropdown-item text-green"><i class="icon-shopping-cart"></i>&nbsp;&nbsp;Sales Stats</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                </table>
                                                
                                            </div>
                                            <div class="container">
                                                <BasePaginator v-if="stockistsAction" :action="stockistsAction" :current_page="stockistsCurrentPage" :last_page="stockistsLastPage" :total_pages="stockistsTotalPages" :per_page="stockistsPerPage"></BasePaginator>
                                            </div>
                                        </div>
                                    </div>
                                </div>				
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="card shadow1 mb-3" style="background-color: transparent">
                                        <div class="card-header">
										<h6 class="text-green"><strong class="font-weight-bold">Pending Stockist Upgrades</strong></h6></div>
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-left mb-2">
                                                <!-- <input 
                                                    class="form-control mr-2" 
                                                    type="text" 
                                                    placeholder="Search..." 
                                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"/>
                                                <button class="btn text-white" style="background-Color:#2E671A" >
                                                    <i class="icon-search"></i>
                                                </button> -->
                                            </div>
                                            <div class="table-responsive">
                                                <table id="example2" class="table table-bordered table-hover data-tables" >
                                                    <thead>
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">S/N</th>
                                                            <th class="font-weight-bold" scope="col">STOCKIST</th>
                                                            <th class="font-weight-bold" scope="col">USERNAME</th>
                                                            <th class="font-weight-bold" scope="col">PACKAGE</th>     
                                                            <th class="font-weight-bold" scope="col">ADDRESS</th>
                                                            <th class="font-weight-bold" scope="col">STATE</th>
                                                            <th class="font-weight-bold" scope="col">CONTACT</th>
                                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                                            <th class="font-weight-bold" scope="col">DATE</th>
                                                            <th class="font-weight-bold" scope="col">Actions</th>
                                                            <!-- <th class="font-weight-bold" scope="col">TOTAL PURCHASE</th>
                                                            <th class="font-weight-bold" scope="col">TOTAL SALES</th> -->
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-if="upgradesLoading==true">
                                                            <td colspan="11">
                                                                <b-skeleton-table
                                                                    :rows="3"
                                                                    :columns="8"
                                                                    :table-props="{ bordered: true, striped: true }"
                                                                ></b-skeleton-table>
                                                            </td>
                                                        </tr>
                                                        <template v-else>
                                                            <tr v-if="stockistUpgrades.length == 0">
                                                                <td colspan="11">
                                                                    <div class="alert alert info text-center">There are no pending stockists Upgrades</div>
                                                                </td>
                                                            </tr>
                                                            <tr v-for="stock,i in stockistUpgrades" :key="i">
                                                                <td scope="row">{{ (stockistUpgradesPerPage * (stockistUpgradesCurrentPage - 1)) + ( ++i) }}</td>
                                                                <td>{{ stock.store_name }}</td>
                                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                                <td>{{stock.username}}</td>
                                                                <td>{{ stock.stockist_package }} - ₦{{ stock.stockist_package_value }}</td>
                                                                <td>{{ stock.store_address }}</td>
                                                                <td>{{ stock.store_state }}</td>
                                                                <td>{{stock.store_phone}}</td>
                                                                <td>{{stock.payment_status}}</td>
                                                                <td>{{(new Date(stock.payment_date)).toDateString()}} {{(new Date(stock.payment_date)).toLocaleTimeString()}}</td>
                                                                <!-- <td>₦{{ stock.total_purchases.toLocaleString('en-US') }}</td>
                                                                <td>₦{{ stock.total_sales.toLocaleString('en-US') }}</td> -->
                                                                <td>
                                                                    <div class="dropdown">
                                                                        <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i class="caret"></i>
                                                                        </button>
                                                                        <div class="dropdown-menu"  style="background-color: #ded8c7">
                                                                            <a @click="setStockist(stock)" v-b-modal.stockist-pop class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; View POP</a>

                                                                            <template v-if="stock.payment_status == 'processing'">
                                                                                <a @click="setStockist(stock)" v-b-modal.approve-upgrade class="dropdown-item text-green">
                                                                                    <i class="icon-check-circle"></i>&nbsp;&nbsp; Approve Upgrade
                                                                                </a>
                                                                                <a @click="setStockist(stock)" v-b-modal.disapprove-upgrade class="dropdown-item text-red">
                                                                                    <i class="icon-times-circle"></i>&nbsp;&nbsp; Disapprove Upgrade
                                                                                </a>
                                                                            </template>
                                                                            <a @click="setStockist(stock)" v-b-modal.stockist-upgrade-history class="dropdown-item text-green"><i class="icon-sitemap"></i>&nbsp;&nbsp;Upgrade History</a>
                                                                            <a @click="fetchSalesStats(stock.user_uuid)" v-b-modal.stockist-sales-stats class="dropdown-item text-green"><i class="icon-sitemap"></i>&nbsp;&nbsp;Sales Stats</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="container">
                                               <BasePaginator v-if="stockistUpgradesAction" :action="stockistUpgradesAction" :current_page="stockistUpgradesCurrentPage" :last_page="stockistUpgradesLastPage" :total_pages="stockistUpgradesTotalPages" :per_page="stockistUpgradesPerPage"></BasePaginator>
                                            </div>
                                        </div>
                                    </div>
                                </div>				
                            </div>

                            <div class="row mt-5">	
                                <div class="col-md-12">
                                    <div class="">
                                        <div class="">
                                            <div class="" > 
                                                <div class="card  mb-3 shadow" style="background-color: transparent">
                                                    <div class="card-header">
													  <h6 class="text-green"><strong class="font-weight-bold">Stockist Purchases</strong></h6></div>
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-left mb-2">
                                                            <!-- <input 
                                                                class="form-control mr-2" 
                                                                type="text" 
                                                                placeholder="Search stockists..." 
                                                                style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"
                                                            />
                                                            <button class="btn text-white" style="background-Color:#2E671A" >
                                                                <i class="icon-search"></i>
                                                            </button> -->
                                                        </div>
                                                        <div class="form-row table-responsive  equal-width-table" style="overflow-x:auto;">
                                                            <table class="table table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="font-weight-bold" scope="col">S/N</th>
                                                                        <th class="font-weight-bold" scope="col">USERNAME</th>
                                                                        <th class="font-weight-bold" scope="col">STOCKIST NAME</th>
                                                                        <th class="font-weight-bold" scope="col">PACKAGE</th>
                                                                        <th class="font-weight-bold" scope="col">PICKUP TYPE</th>
                                                                        <th class="font-weight-bold" scope="col">ORDERS</th>
                                                                        <th class="font-weight-bold" scope="col">DATE & TIME</th>
                                                                        <th class="font-weight-bold" scope="col">ACTION</th>
                                                                        <th class="font-weight-bold" scope="col">STATUS</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-if="stockistsOrdersLoading==true">
                                                                        <td colspan="9">
                                                                            <b-skeleton-table
                                                                                :rows="3"
                                                                                :columns="9"
                                                                                :table-props="{ bordered: true, striped: true }"
                                                                            ></b-skeleton-table>
                                                                        </td>
                                                                    </tr>
                                                                    <template v-else>
                                                                        <tr v-if="stockistsOrders.length==0">
                                                                            <td colspan="8">
                                                                                <div class="alert alert-info">There are no stockist orders</div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr v-for="order,i in stockistsOrders" :key="i">
                                                                            <td> {{ (stockistsOrdersPerPage * (stockistsOrdersCurrentPage - 1)) + ( ++i) }}</td>
                                                                            <td>{{order.username}}</td>   
                                                                            <td>{{order.store_name}}</td>
                                                                            <td>{{order.stockist_package}}</td>
                                                                            <td>{{order.pickup_type}}</td>
                                                                            <td>
                                                                                <a href="#" v-b-modal.view-products @click="fetchDetails(order.purchase_id)" class="btn-fab btn-fab-sm btn-success text-white">
                                                                                    <i class="icon-eye"></i>
                                                                                </a>
                                                                            </td>
                                                                            <td>{{(new Date(order.created_at)).toDateString()}} {{(new Date(order.created_at)).toLocaleTimeString()}}</td>
                                                                            <td>
                                                                                <div v-if="order.status=='processing'" class="dropdown"> 
                                                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i class="caret"></i>
                                                                                    </button>
                                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:fixed; background-color: #ded8c7">
                                                                                        <a v-b-modal.approve-stockist-purchase @click="setOrder(order)" class="dropdown-item text-green" href="#"><i class="icon-check-circle"></i>&nbsp;&nbsp; Approve</a>
                                                                                        <a v-b-modal.disapprove-stockist-purchase @click="setOrder(order)" class="dropdown-item text-green" href="#"><i class="icon-times-circle"></i>&nbsp;&nbsp; Decline</a>	
                                                                                    </div>
                                                                                </div>													
                                                                            </td>
                                                                            <td><span class="badge badge-success" style="padding: 6px 10px;">{{order.status}}</span></td>
                                                                        </tr>
                                                                    </template>									  
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        
                                                        <div class="container">
                                                            <BasePaginator v-if="stockistsOrdersAction" :action="stockistsOrdersAction" :current_page="stockistsOrdersCurrentPage" :last_page="stockistsOrdersLastPage" :total_pages="stockistsOrdersTotalPages" :per_page="stockistsOrdersPerPage"></BasePaginator>
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

        <!--<div v-if="user" class="modal fade" id="viewproductModal" tabindex="-1" role="dialog" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered" role="document" style="background: transparent!important;">
                <div class="" >
                    <div class="">
                        <img :src="/assets/img/pop.png" alt="Product Image"  style="height:700px; width: auto">
                    </div>
                </div>
            </div>
        </div>-->

        <Modal modal-id="stockist-pop" modal-title="Stockist POP" modal-size="lg">
            <template v-if="stockist==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="text-center p-3">
                <!-- Display Image -->
                <img
                    :src="imageURL(stockist.payment_receipt)"
                    alt="Proof Of Payment"
                    class="img-fluid"
                    style="max-height: 500px;"
                />
                <br>
                <!-- Working Download Button -->
                <a
                    :href="imageURL(stockist.payment_receipt)"
                    :download="'stockist-pop-' + (stockist?.id || 'receipt') + '.jpg'"
                    target="_blank"
                    class="btn btn-success mt-3 d-inline-block"
                    style="z-index: 9999; position: relative;"
                >
                    <i class="icon icon-download"></i> Download Image
                </a>
                </div>
            </template>
        </Modal>

        <Modal modal-id="user-upgrade-history" modal-title="User Upgrade History" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="user">
                    <UserPackagePayment :user="user"/>
                </div>
                <div v-else class="alert alert-info text-center">
                    <span>This user is Inactive</span>
                </div>
            </template>
        </Modal>

        <Modal modal-id="stockist-upgrade-history" modal-title="Stockist Upgrade History" modal-size="xl">
            <template v-if="stockist==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <StockistPackagePayment :user="stockist"/>
            </template>
        </Modal>

        <!--The original-->
          <!--<Modal modal-id="stockist-sales-stats" modal-title="Stockist Sales Stats" modal-size="md">
            <template v-if="salesStatsLoading==true || stockistSalesStats==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12">
                        <p>Total Purchases - {{ stockistSalesStats.total_purchases??0 }}</p>
                    </div>
                    <div class="col-md-12">
                        <p>Total Sales - {{ stockistSalesStats.total_sales }}</p>
                    </div>
                </div>
            </template>
        </Modal>-->

        <!--Newly added in a tabular form-->
        <Modal modal-id="stockist-sales-stats" modal-title="Stockist Sales Stats" modal-size="md">
            <template v-if="salesStatsLoading==true || stockistSalesStats==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="table-responsive">
                    <table class="table table-hover table-striped">
                        <thead class="thead">
                            <tr>
                                <th>Metric</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Purchases</td>
                                <td>₦{{ Number(stockistSalesStats.total_purchases ?? 0).toLocaleString('en-NG', { minimumFractionDigits: 2 }) }}</td>
                            </tr>
                            <tr>
                                <td>Total Sales</td>
                                <td>₦{{ Number(stockistSalesStats.total_sales ?? 0).toLocaleString('en-NG', { minimumFractionDigits: 2 }) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </template>
        </Modal>

        <Modal modal-id="approve-stockist" modal-title="Approve Stockist" modal-size="lg">
            <template v-if="stockist==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img :src="imageURL(stockist.payment_receipt)" width="200px" height="200px" class="mt-4">
                        <br><br>
                        <button v-if="updatingRegistration==true" class="btn btn-primary">...</button>
                        <button v-else class="btn btn-primary" @click="approveRegistration(stockist.payment_id)"><i class="icon-check-circle"></i>&nbsp;&nbsp;Approve this Stockist Payment</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="disapprove-stockist" modal-title="Disapprove Stockist" modal-size="lg">
            <template v-if="stockist==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                     <div class="col-md-12 text-center">
                        <img :src="imageURL(stockist.payment_receipt)" width="200px" height="100px" class="mt-4">
                        <br><br>
                        <button v-if="updatingRegistration==true" class="btn btn-danger">...</button>
                        <button v-else class="btn btn-danger" @click="disapproveRegistration(stockist.payment_id)"><i class="icon-times-circle"></i>&nbsp;&nbsp;Disapprove this Stockist Payment</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="approve-stockist-purchase" modal-title="Approve Stockist Purchase" modal-size="lg">
            <template v-if="order==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="text-red font-weight-bold s-18">"Are you sure you want to approve this purchase?"</p>
                        <button v-if="updatingRegistration==true" class="btn btn-primary">...</button>
                        <button v-else class="btn btn-primary" @click="approveStockistPurchase(order.purchase_id)"><i class="icon-check-circle"></i>&nbsp;&nbsp;Approve</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="disapprove-stockist-purchase" modal-title="Disapprove Stockist Purchase" modal-size="lg">
            <template v-if="order==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="text-red font-weight-bold s-18">"Are you sure to disapprove this purchase?"</p>
                        <button v-if="updatingRegistration==true" class="btn btn-danger">...</button>
                        <button v-else class="btn btn-danger" @click="disapproveStockistPurchase(order.purchase_id)"><i class="icon-times-circle"></i>&nbsp;&nbsp;Decline</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="disapprove-upgrade" modal-title="Disapprove Stockist Upgrade" modal-size="lg">
            <template v-if="stockist==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                   <div class="col-md-12 text-center">
                        <img :src="imageURL(stockist.payment_receipt)" width="200px" height="100px">
                        <br><br>
                        <h4>Are you sure you want to disapprove this Upgrade?</h4>
                        <button v-if="approvingUpgrade==true" class="btn btn-danger">...</button>
                        <button v-else class="btn btn-danger" @click="disapproveStockistUpgrade(stockist.payment_id)"><i class="icon-times-circle"></i>&nbsp;&nbsp;Disapprove</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="approve-upgrade" modal-title="Approve Stockist Upgrade" modal-size="lg">
            <template v-if="stockist==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img :src="imageURL(stockist.payment_receipt)" width="200px" height="100px">
                        <br><br>
                        <h4>Are you sure you want to Approve this Upgrade?</h4>
                        <button v-if="approvingUpgrade==true" class="btn btn-primary">...</button>
                        <button v-else class="btn btn-primary" @click="approveStockistUpgrade(stockist.payment_id)"><i class="icon-check-circle"></i>&nbsp;&nbsp;Approve</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="view-products" modal-title="View Products" modal-size="lg">
            <template v-if="orderDetailsLoading==true">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-hover">
                            <tr>
                                <th>S/N</th>
                                <th>Product</th>
                                <th>Image</th>
                                <th>Quantity</th>
                            </tr>
                            <tr v-for="orde,i in orderDetails.products" :key="i">
                                <td>{{ ++i }}</td>
                                <td>{{ orde.name }}</td>
                                <td> <img :src="imageURL(orde.image)" height="100" width="100"/></td>
                                <td>{{ orde.product_qty }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="confirm-payment-approval" modal-title="Confirm Payment Approval" modal-size="lg">
            <template v-if="packagePayment==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img :src="imageURL(packagePayment.payment_receipt)" width="500px" height="300px">
                        <br>
                       <a 
                            :href="imageURL(packagePayment.payment_receipt)" 
                            target="_blank" 
                            class="btn btn-outline-success mb-3"
                        >
                            View Full Image
                        </a>
                        <br>
                        <h5>Package : {{ packagePayment.name }}</h5>
                        <h5>Amount : ₦{{ packagePayment.amount.toLocaleString('en-US') }}</h5>
                        <h5>Desription : {{ packagePayment.narration }}</h5>
                        <h4>Are you sure you want to approve this Payment?</h4>
                        <button v-if="approvingPayment==true" class="btn btn-success">...</button>
                        <button v-else class="btn btn-success" @click="approvePayment(packagePayment.id)">Approve</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="confirm-payment-decline" modal-title="Confirm Payment Decline" modal-size="lg">
            <template v-if="packagePayment==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img :src="imageURL(packagePayment.payment_receipt)" width="500px" height="300px">
                        <br>
                       <a 
                            :href="imageURL(packagePayment.payment_receipt)" 
                            target="_blank" 
                            class="btn btn-outline-success mb-3"
                        >
                            View Full Image
                        </a>
                        <br>
                        <h5>Package : {{ packagePayment.name }}</h5>
                        <h5>Amount : ₦{{ packagePayment.amount.toLocaleString('en-US') }}</h5>
                        <h5>Desription : {{ packagePayment.narration }}</h5>
                        <h4>Are you sure you want to Disapprove this Payment?</h4>
                        <button v-if="approvingPayment==true" class="btn btn-danger">...</button>
                        <button v-else class="btn btn-danger" @click="disapprovePayment(packagePayment.id)">Disapprove</button>
                    </div>
                </div>
            </template>
        </Modal>

        <Modal modal-id="view-payment-receipt" modal-title="View Payment Receipt" modal-size="lg">
            <template v-if="packagePayment==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img :src="imageURL(packagePayment.payment_receipt)" width="500px" height="300px">
                        <br>
                        <a 
                            :href="imageURL(packagePayment.payment_receipt)" 
                            target="_blank" 
                            class="btn btn-outline-success mb-3"
                        >
                            View Full Image
                        </a>
                        <br>
                        <h5>Package : {{ packagePayment.name }}</h5>
                        <h5>Amount : ₦{{ packagePayment.amount.toLocaleString('en-US') }}</h5>
                        <h5>Desription : {{ packagePayment.narration }}</h5>
                        <h5>Status: <template v-if="packagePayment.status=='approved'">
                                        <span class="btn btn-success">{{packagePayment.status}}</span>
                                    </template>
                                    <template v-else>
                                        <span class="btn btn-danger">{{packagePayment.status}}</span>
                                    </template>
                        </h5>
                    </div>
                </div>
            </template>
        </Modal>
    </div>
</template>

<style scoped>

 /* Dropdown Menu Styling */
    .dropdown-menu {
        position: absolute !important; /* Make sure the dropdown is positioned absolutely */
        top: auto; /* Allow it to adjust position */
        left: auto; /* Allow it to adjust position */
        z-index: 1050; /* Ensure it appears above other elements */
        background-color: #ded8c7; /* Your dropdown background color */
        border: 1px solid #2E671A; /* Match your design style */
        padding: 0.5rem 0; /* Adjust padding */
    }

    /* Ensure dropdown is not clipped by the table */
    .table-responsive {
        overflow-x: visible !important;
    }

    /* Dropdown Menu Styling */
    .dropdown-menu {
        position: absolute !important; /* Ensure absolute positioning */
        top: auto; /* Adjust position */
        left: auto; /* Adjust position */
        z-index: 1050; /* Place it above other elements */
        background-color: #ded8c7; /* Background color */
        border: 1px solid #2E671A; /* Match your design */
        padding: 0.5rem 0; /* Adjust padding */
    }

    /* Prevent dropdown clipping */
    .table-responsive {
        overflow-x: visible !important;
    }

    /* Default text and icon styles */
    .dropdown-menu .dropdown-item {
        color: #2E671A !important; /* Ensure default text color */
        font-weight: bold;
        display: flex; /* Align icon and text together */
        align-items: center;
        gap: 8px; /* Space between icon and text */
        padding: 10px 15px; /* Adjust padding for spacing */
    }

    /* Hover effect: Ensure all parts change */
    .dropdown-menu .dropdown-item:hover {
        background-color: #2E671A !important; /* Background on hover */
        color: white !important; /* Text color on hover */
    }

    /* Ensure icons also change color on hover */
    .dropdown-menu .dropdown-item:hover i {
        color: white !important;
    }

    /* Add smooth transitions */
    .dropdown-menu .dropdown-item {
        transition: background-color 0.3s ease, color 0.3s ease;
    }



.modal-backdrop {
    display: none !important;
}
.table th,
.table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #2E671A;
    border-bottom: 1px solid #2E671A;
}

/* Hide default checkbox */
.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #2E671A;
  border-radius: 4px;
  background-color: #ded8c7;
  cursor: pointer;
}

/* Checkbox checked state */
.custom-checkbox:checked {
  background-color: #ded8c7;
  border-color: #2E671A;
}

/* Inner tick mark for checked checkbox */
.custom-checkbox:checked::after {
  content: "✔";
  display: block;
  color: #2E671A;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
}

.border-left-green {
    border-left: 1px solid #2E671A !important;
}
.container {

display: flex;
align-items: center;
justify-content: center;
}
.container .pagination {
position: relative;
height: 50px;
background: rgba(255, 255, 255, 0.05);
box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
backdrop-filter: blur(3px);
border-radius: 2px;
}
.container .pagination li {
list-style-type: none;
display: inline-block;
}
.container .pagination li a {
position: relative;
padding: 10px 15px;
text-decoration: none;
color: #2E671A;
font-weight: 500;
}
.container .pagination li a:hover,
.container .pagination li.active a {
background: #2E671A;
color: #ded8c7;

}


</style>

<style>
    #yourContainer {
        width: 500px;
        height: 170px;
    }

    #yourContainer img {
        max-width: 100%;
        max-height: 100%;
    }

</style>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import BasePaginator from '@/components/BasePaginator.vue';
import Modal from '@/components/Modal.vue';
import UserPackagePayment from '@/components/admin/UserPackagePayment.vue';
import StockistPackagePayment from '@/components/admin/StockistPackagePayment.vue';

 export default{
    name:"admin-transactions",

    components:{
        BasePaginator,
        Modal,
        UserPackagePayment,
        StockistPackagePayment
    },

    data(){
        return {
            withdrawalsLoading:false,
            paidUsersLoading:false,
            searchParam:null,
            regSearchParam:null,
            upgradedUsersLoading:false,
            sumTotalPricesLoading:false,
            sumTotalPrices:0,
            monthlyRepurchasesLoading:false,
            stockistsLoading:false,
            stockistStatsLoading:false,
            stockistsOrdersLoading:false,
            user:null,
            stockist:null,
            stockistSalesStats:null,
            salesStatsLoading:false,
            stockistUpgradeHistoryLoading:false,
            stockistUpgradeHistory:[],
            updatingRegistration:false,
            order:null,
            upgradesLoading:false,
            approvingUpgrade:false,
            orderDetailsLoading:false,
            orderDetails:[],
            pendingPackagePaymentLoading:false,
            packagePayment:null,
            approvingPayment:false,
            packagePaymentHistoryLoading:false
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting,
            loading:state=>state.loading
        }),

        ...mapGetters('withdrawalStore',['withdrawals','totalWithdrawals']),
        ...mapGetters('userStore',['paidUsers','totalPaidUsers','sumPaidUsers',
                'paidUserAction','paidUsersCurrentPage','paidUsersLastPage',
                'paidUsersPerPage','paidUsersTotalPages','upgradedUsers']),
        ...mapGetters('productPurchaseStore',['monthlyRepurchases']),
        ...mapGetters('stockistStore',['stockists','stockistsStats','stockistsOrders',
            'stockistsAction','stockistsCurrentPage','stockistsLastPage','stockistsPerPage','stockistsTotalPages',
            'stockistsOrdersAction','stockistsOrdersState','stockistsOrdersCurrentPage','stockistsOrdersLastPage',
            'stockistsOrdersPerPage','stockistsOrdersTotalPages','stockistUpgrades','stockistUpgradesAction','stockistUpgradesState',
            'stockistUpgradesCurrentPage','stockistUpgradesLastPage','stockistUpgradesPerPage','stockistUpgradesTotalPages'
        ]),

        ...mapGetters('paymentStore',['pendingPackagePaymentApprovals','packagePaymentHistory','pendingPackagePaymentApprovalsCount','packagePaymentHistoryCount']),
       
        imageURI(image){
            return image ? process.env.VUE_APP_IMAGE_PATH+'/'+image : '/assets/img/mock-image.jpeg'
        },
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

        if(this.upgradedUsers.length==0){
            this.upgradedUsersLoading = true
            this.getUpgradedUsers().then(()=>this.upgradedUsersLoading = false)
        }

        this.sumTotalPricesLoading = true
        this.getSumTotalPrices().then((res)=>{this.sumTotalPrices = res.data.data; this.sumTotalPricesLoading = false})

        if(this.monthlyRepurchases.length == 0){
            this.monthlyRepurchasesLoading = true;
            this.getMonthlyRepurchases().then(()=>this.monthlyRepurchasesLoading=false)
        }

        if(this.stockists.length==0){
            this.stockistsLoading = true
            this.getStockists({page:1,type:null}).then(()=>this.stockistsLoading=false)
        }

        if(this.stockistsStats.stockist_count==undefined){
            this.stockistStatsLoading = true
            this.getStockistsStats().then(()=>this.stockistStatsLoading=false)
        }

        if(this.stockistsOrders.length == 0){
            this.stockistsOrdersLoading = true
            this.getStockistsOrders({page:1,type:null}).then(()=>this.stockistsOrdersLoading=false)
        }

        if(this.stockistUpgrades.length == 0){
            this.upgradesLoading = true
            this.fetchUpgrades().then(()=>this.upgradesLoading = false)
        }

        if(this.pendingPackagePaymentApprovals.length == 0){
            this.pendingPackagePaymentLoading = true
            this.getPendingPackagePaymentApprovals().then(()=>this.pendingPackagePaymentLoading = false)
        }

        if(this.packagePaymentHistory.length == 0){
            this.packagePaymentHistoryLoading = true
            this.getPackagePaymentHistory().then(()=>this.packagePaymentHistoryLoading = false)
        }

        if(this.pendingPackagePaymentApprovalsCount == null){
            this.getPendingPackagePaymentApprovals(true)
        }

        if(this.packagePaymentHistoryCount == null){
            this.getPackagePaymentHistory(true)
        }
        
    },

    methods:{
        ...mapActions('withdrawalStore',['all','getTotal','searchWithdrawals']),
        ...mapActions('userStore',['getPaidUsers','getTotalPaidUsers',
        'getSumPaidUsers','searchPaidUsers','getUpgradedUsers']),
        ...mapActions('productPurchaseStore',['getSumTotalPrices','getMonthlyRepurchases',"approvePurchase","disapprovePurchase","fetchOrderDetails"]),
        ...mapActions('stockistStore',['getStockists','getStockistsStats','getStockistsOrders',
        'getSalesStats','approveStockist','disapproveStockist','fetchUpgrades','approveUpgrade','disapproveUpgrade'
        ]),
        ...mapActions('packageStore',['getPackage']),
        ...mapActions('paymentStore',['getPendingPackagePaymentApprovals','approvePackagePayment','disapprovePackagePayment','getPackagePaymentHistory']),

        searchWithdraws(){
            this.searchWithdrawals({page:1,query:this.searchParam})
        },

        searchRegs(){
            this.searchPaidUsers({page:1,search:this.regSearchParam})
        },

        setUser(user){
            this.user = user
        },

        setStockist(stockist){
            this.stockist = stockist
        },

        fetchSalesStats(uuid){
            this.salesStatsLoading = true
            this.getSalesStats(uuid).then(res=>{this.stockistSalesStats = res.data.data; this.salesStatsLoading=false;})
        },

        imageURL(image){
            return image ? process.env.VUE_APP_IMAGE_PATH+'/'+image : '/assets/img/mock-image.jpeg'
        },

        /*approveRegistration(id){
            this.updatingRegistration = true
            this.approveStockist(id).then(()=>this.updatingRegistration = false)
        },*/

        // replace with below code
        approveRegistration(id){
            this.updatingRegistration = true
            this.approveStockist(id).then(() => {
                this.getStockists({ page: 1, type: null }) // ✅ Refresh stockist list
                this.updatingRegistration = false
            })
        },


        disapproveRegistration(id){
            this.updatingRegistration = true
            this.disapproveStockist(id).then(()=>this.updatingRegistration = false)
        },

        /*approveStockistPurchase(id){
            this.approvePurchase(id).then(()=>{
                //alert();
                this.getStockistsOrders()
            })
        },*/

        // replaced with the code below

        approveStockistPurchase(id){
            this.approvePurchase(id).then(() => {
                // Find the specific order in stockistsOrders and update its status
                const index = this.stockistsOrders.findIndex(order => order.purchase_id === id);
                if (index !== -1) {
                    this.$set(this.stockistsOrders[index], 'status', 'approved'); // reactive update
                }
            });
        },


        /*disapproveStockistPurchase(id){
            this.disapprovePurchase(id).then(()=>this.getStockistsOrders())
        },*/

        //replaced with the code below
        disapproveStockistPurchase(id){
            this.disapprovePurchase(id).then(()=>{
                const index = this.stockistsOrders.findIndex(order => order.purchase_id === id);
                if (index !== -1) {
                    this.$set(this.stockistsOrders[index], 'status', 'declined'); // reactive update
                }
            });
        },

        setOrder(order){
            this.order = order
        },

        disapproveStockistUpgrade(id){
            this.approvingUpgrade = true
            this.disapproveUpgrade(id).then(()=>{this.approvingUpgrade = false; this.fetchUpgrades()})
        },

        approveStockistUpgrade(id){
            this.approvingUpgrade = true
            this.approveUpgrade(id).then(()=>{this.approvingUpgrade = false; this.fetchUpgrades()})
        },

        fetchDetails(purchaseId){
            this.orderDetailsLoading = true
            this.fetchOrderDetails(purchaseId).then((res)=>{
                if(res && res.status==200){
                    console.log('details',[res.data.data])
                    this.orderDetails = res.data.data
                }
                this.orderDetailsLoading = false
            })
        },

        transformPrevPackages(packages){
            let packs = packages.split(',');
            this.pac = null;
            packs.map((ele)=>{
             
                return this.getPackage(ele).then((res)=> {
                    this.pac = res.data.data.name
                //console.log(res)
                return this.pac
                })
                //console.log(this.pac)
            
            })
        },

        setPackagePayment(payment){
            this.packagePayment = payment
        },

        approvePayment(){
            this.approvingPayment = true
            let that = this
            this.approvePackagePayment( this.packagePayment.id).then(()=>{this.approvingPayment=false; this.getPendingPackagePaymentApprovals(); this.getPendingPackagePaymentApprovals(true); this.getPackagePaymentHistory(); this.getPackagePaymentHistory(true); that.$bvModal.hide('confirm-payment-approval')})
        },

        disapprovePayment(){
            this.approvingPayment = true
            let that = this
            this.disapprovePackagePayment( this.packagePayment.id).then(()=>{this.approvingPayment=false; this.getPendingPackagePaymentApprovals(); this.getPendingPackagePaymentApprovals(true); this.getPackagePaymentHistory(); this.getPackagePaymentHistory(true); that.$bvModal.hide('confirm-payment-decline')})
        }

    }
 }
</script>