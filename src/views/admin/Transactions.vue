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
                                                <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">57,550</span></p>
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
                                                            <tr>
                                                            <td>1</td>
                                                            <td>ogoikeyin</td>
                                                            <td>₦12,500</td>
                                                            <td>3,April 2020 - 10:24:43</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>ogoikeyin1</td>
                                                            <td>₦4,500</td>
                                                            <td>6,April 2020 - 10:24:43</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Davidovie55</td>
                                                            <td>₦9,000</td>
                                                            <td>6,April 2020 - 10:24:43</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>ogoikeyin2</td>
                                                            <td>₦9,000</td>
                                                            <td>6,April 2020 - 10:24:43</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Palmtree</td>
                                                            <td>₦19,000</td>
                                                            <td>6,April 2020 - 10:24:43</td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Palmtree1</td>
                                                            <td>₦8,000</td>
                                                            <td>6,April 2020 - 10:24:43</td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>palmtree2</td>
                                                            <td>₦7,000</td>
                                                            <td>6,April 2020 - 10:24:43</td>
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
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <div class="col-lg-12">
                                            <div class="counter-box p-40 text-white shadow2 r-5 flex-wrap" style="background-color: #ffff">
                                                <div class="float-right">
                                                <img src="/assets/img/registration.png"  width="70px" height="70px">
                                                </div>
                                                <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Registration</span></small>
                                                <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">367,000</span></p>
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
                                                            <tr>
                                                            <td>1</td>
                                                            <td>Kunle Oginkoya</td>
                                                            <td>ogoikeyin</td>
                                                            <td>VIP 1</td>
                                                            <td>₦20,200</td>
                                                            <td>1,April 2020 - 16:53:41</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Remi Oginkoya</td>
                                                            <td>ogoikeyin1</td>
                                                            <td>VIP 1</td>
                                                            <td>₦20,200</td>
                                                            <td>1,April 2020 - 16:53:41</td>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default{
    name:"admin-transactions"
 }
</script>