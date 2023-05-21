<template>
    <div>
        <div class="animated">
            <div class="row mb-5">
                <div class="col-md-12">
                    <div class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img  src="/assets/img/wallet1.png">
                        </div>
                        <small class="mt-0text-white" >Total Company Wallet</small>
                        <p class="text-dark-heading font-weight-bold text-white">₦<span style="font-size:32px">{{ companyWalletBalance?.toLocaleString('en-US') }}</span></p>
                    </div>
                    <div class="row my-3">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header bg-white">
                                    <h4 class="green-text"><strong class="font-weight-bold">System Net Balance</strong></h4>
                                </div>
                                <div class="card-body" style="overflow-x:auto;">
                                    <table class="table table-bordered table-hover">
                                        <tr>
                                            <th>Total Company Wallet (TRP)</th>
                                            <th>Total Withdrawals (TW)</th>
                                            <th>Company Wallet Balance ( TRP - TW)</th>
                                        </tr>
                                        <tr>
                                            <td>₦ {{ totalCompanyWallet?.toLocaleString('en-US') }}</td>
                                            <td>₦ {{ totalWithdrawals?.toLocaleString('en-US') }}</td>
                                            <td>₦ {{ companyWalletBalance?.toLocaleString('en-US') }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div class="d-sm-flex align-items-center justify-content-between border-bottom mt-5 ">
                                <h6 class="s-12 text-green"><img  class="ml-2 mb-1" src="/assets/img/sales_perform.png" style="width:20px;height:18px">&nbsp;<strong>Products Sales Statistics</strong></h6>
                    </div>
                    <div class="row my-3">
                        <div class="col-lg-12">
                            <div class="counter-box p-40 text-white shadow2 r-5 flex-wrap" style="background-color: #ffff">
                                <div class="float-right">
                                    <img src="/assets/img/accounts.png">
                                </div>
                                <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Registration Products Amount</span></small>
                                <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">{{ sumClaimedProducts?.toLocaleString('en-US') }}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="row column-row">
                        <div class="col-md-6">
                            <div class="card" style="background-color: #2E671A" >
                                <div class="card-body">
                                    <div class="d-flex align-items-center flex-row flex-wrap">
                                        <div class="mr-3">
                                            <img class="mr-3 r-3" src="/assets/img/shopping-cart.png" alt="Generic placeholder image" width="70px" height="70px">
                                        </div>
                                        <div class="ml-auto">
                                            <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                                <div  style="padding-right:20px">
                                                    <h6 class="mt-0 mb-1 font-weight-bold text-white" >Products Sold</h6>
                                                    <div class="mt-1 text-dark-heading text-white float-right" >{{ totalProductSold?.toLocaleString('en-US') }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <div class="col-md-6">
                            <div class="card" style="background-color: #2E671A" >
                                <div class="card-body" >
                                    <div class="d-flex align-items-center flex-row flex-wrap">
                                        <div class="mr-3">
                                            <img class="mr-3 r-3" src="/assets/img/pv1.png" alt="Generic placeholder image" width="70px" height="70px">
                                        </div>
                                        <div class="ml-auto">
                                            <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                                <div  style="padding-left:20px">
                                                    <h6 class="mt-0 mb-1 font-weight-bold text-white" >Total Products PV</h6>
                                                    <div class="mt-1 text-dark-heading text-white float-right">{{ totalProductPV?.toLocaleString('en-US') }} PV</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                    <!-- <div class="row my-3">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header bg-white">
                                    <h4 class="green-text"><strong class="font-weight-bold">Monthly Products Sales</strong></h4>
                                </div>
                                <div class="card-body" style="overflow-x:auto;">
                                    <table class="table table-bordered table-hover">
                                        <tr>
                                            <th>S/N</th>
                                            <th>Month/Year</th>
                                            <th>Sales</th>
                                            <th>Cumulative Point Value</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>March 2022</td>
                                            <td>₦ 1,550,000</td>
                                            <td>234,990</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>April 2022</td>
                                            <td>₦ 3,050,020</td>
                                            <td>114,990</td>
                                        </tr>
                                    </table>
                                    <div class="el-example">
                                        <ul class="pagination">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#">«</a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="#">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">4</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">5</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">»</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="d-sm-flex align-items-center justify-content-between border-bottom mt-5 mb-3 ">
                        <h6 class="s-12 text-green">
                            <img  class="ml-2 mb-1" src="/assets/img/investor_perform.png" style="width:20px;height:20px">&nbsp;<strong>Investments & ROI</strong>
                        </h6>
                    </div>
                    <div class="row column-row">
                        <div class="col-md-6">
                            <div class="card" >
                                <div class="card-body" >
                                    <div class="d-flex align-items-center flex-row flex-wrap">
                                        <div class="mr-3">
                                            <img class="mr-3 r-3" src="/assets/img/investments.png" alt="Generic placeholder image" width="70px" height="70px">
                                        </div>
                                        <div class="ml-auto">
                                            <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                                <div  style="padding-right:20px">
                                                    <h6 class="mt-0 mb-1 font-weight-bold text-green" >Total Investment</h6>
                                                    <div class="mt-1 text-dark-heading text-green float-right" >₦ 80,231,334</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <div class="col-md-6">
                            <div class="card" >
                                <div class="card-body" >
                                    <div class="d-flex align-items-center flex-row flex-wrap">
                                        <div class="mr-3">
                                            <img class="mr-3  r-3" src="/assets/img/investors.png" alt="Generic placeholder image" width="70px" height="70px">
                                        </div>
                                        <div class="ml-auto">
                                            <div class="d-flex flex-row mt-4 mb-4 ml-4">
                                                <div  style="padding-left:20px">
                                                    <h6 class="mt-0 mb-1 font-weight-bold text-green" >Total Investor</h6>
                                                    <div class="mt-1 text-dark-heading text-green text-center"  >6</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-lg-12">
                            <div class="counter-box p-40 text-white shadow2 r-5 flex-wrap" style="background-color: #ffff">
                                <div class="float-right">
                                    <img  src="/assets/img/roi.png" width="70px" height="70px">
                                </div>
                                <small class="mt-0 ml-2"><span style="color:#2E671A!important;">Total Investment ROI</span></small>
                                <p class="text-dark-heading font-weight-bold " style="color:#2E671A!important;">₦<span style="color:#2E671A!important;font-size:32px">556,550,000</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header bg-white">
                                    <h4 class="green-text"><strong class="font-weight-bold">Diamond Investors</strong></h4>
                                </div>
                                <div class="card-body" style="overflow-x:auto;">
                                    <table class="table table-bordered table-hover">
                                        <tr>
                                            <th>S/N</th>
                                            <th>Full Name</th>
                                            <th>Username</th>
                                            <th>Investment Date</th>
                                            <th>Commission</th>
                                            <th>Duration</th>
                                            <th>Earned Period</th>
                                            <th>Total Earned (ROI)</th>
                                            <th>Earning Details</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Philip Omengo</td>
                                            <td>mengo@99</td>
                                            <td>12 April,2022</td>
                                            <td>₦2.25 per Product</td>
                                            <td>2 ½ Years</td>
                                            <td>3 Months</td>
                                            <td>₦ 547,889</td>
                                            <td>
                                                <div class="dropdown"> 
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#tableModal" ><i class="icon-eye"></i>&nbsp;&nbsp; ROI Earned Details</a>
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#roiModal"><i class="icon-edit"></i>&nbsp;&nbsp; Edit login Details</a>	
                                                    </div>
                                                </div>														
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Charles Bailey</td>
                                            <td>charlo_12345</td>
                                            <td>24 July,2022</td>
                                            <td>₦2.25 per Product</td>
                                            <td>2 ½ Years</td>
                                            <td>5 Months</td>
                                            <td>₦ 3,547,889</td>
                                            <td>
                                                <div class="dropdown"> 
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#tableModal" ><i class="icon-eye"></i>&nbsp;&nbsp; ROI Earned Details</a>
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#roiModal"><i class="icon-edit"></i>&nbsp;&nbsp; Edit login Details</a>	
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header bg-white">
                                    <h4 class="green-text"><strong class="font-weight-bold">Gold Investors</strong></h4>
                                </div>
                                <div class="card-body" style="overflow-x:auto;">
                                    <table class="table table-bordered table-hover">
                                        <tr>
                                            <th>S/N</th>
                                            <th>Full Name</th>
                                            <th>Username</th>
                                            <th>Investment Date</th>
                                            <th>Commission</th>
                                            <th>Duration</th>
                                            <th>Earned Period</th>
                                            <th>Total Earned (ROI)</th>
                                            <th>Earning Details</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Jerry Adeyinka</td>
                                            <td>jerry_ade</td>
                                            <td>22 April,2021</td>
                                            <td>₦4.50 per Product</td>
                                            <td>LifeTime</td>
                                            <td>2 Years</td>
                                            <td>₦ 3,547,889</td>
                                            <td>
                                                <div class="dropdown"> 
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#tableModal-1" ><i class="icon-eye"></i>&nbsp;&nbsp; ROI Earned Details</a>
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#roiModal"><i class="icon-edit"></i>&nbsp;&nbsp; Edit login Details</a>	
                                                    </div>
                                                </div>														
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Tunde Ariyo</td>
                                            <td>Ariyo1900</td>
                                            <td>20 Sept,2022</td>
                                            <td>₦4.50 per Product</td>
                                            <td>LifeTime</td>
                                            <td>1 Years</td>
                                            <td>₦ 1,047,889</td>
                                            <td>
                                                <div class="dropdown"> 
                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="caret"></i>
                                                    </button>
                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#tableModal-1" ><i class="icon-eye"></i>&nbsp;&nbsp; ROI Earned Details</a>
                                                        <a  class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#roiModal"><i class="icon-edit"></i>&nbsp;&nbsp; Edit login Details</a>	
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>				
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';

    export default{
        name:"admin-wallet",

        data(){
            return{

            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('bonusStore',['companyWalletBalance','totalCompanyWallet']),
            ...mapGetters('userStore',['totalRegistrations','totalRegistrationPV']),
            ...mapGetters('withdrawalStore',['totalWithdrawals','withdrawals']),
            ...mapGetters('productClaimStore',['sumClaimedProducts','totalProductSold','totalProductPV']),
        },

        created(){
            if(!this.companyWalletBalance){
                this.getCompanyWalletBalance()
            }
            if(!this.totalRegistrations){
                this.getTotalRegistrations()
            }
            if(!this.totalCompanyWallet){
                this.getTotalCompanyWallet()
            }
            if(!this.sumClaimedProducts){
                this.getSumClaimedProducts()
            }
            if(!this.totalProductSold){
                this.getTotalProductSold()
            }
            if(!this.totalProductPV){
                this.getTotalProductPV()
            }
            if(!this.totalWithdrawals){
                this.getTotal()
            }
        },

        methods:{
            ...mapActions('bonusStore',['getCompanyWalletBalance','getTotalCompanyWallet']),
            ...mapActions('userStore',['getTotalRegistrations','getTotalRegistrationPV']),
            ...mapActions('withdrawalStore',['getTotal','all']),
            ...mapActions('productClaimStore',['getSumClaimedProducts','getTotalProductSold','getTotalProductPV']),
        }
    }
</script>