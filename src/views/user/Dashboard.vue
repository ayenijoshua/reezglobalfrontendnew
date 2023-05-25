<template>
    <div>
        <div class="">
            <div class="row mb-5">
                <div class="col-md-4">
                    <b-card v-if="packageLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="card" style="background-color: #2E671A">
                        <div class="card-body" >
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/membership.png"
                                        alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <h6 class="mt-0 mb-1 font-weight-bold text-white">Registration Package</h6>
                                    <div class="mt-1 text-dark-heading text-white float-right">{{ regPackage.name }} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <b-card v-if="welcomeBonusLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="card" style="background-color: #2E671A" >
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
                    <b-card v-if="referralBonusLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="card" style="background-color: #2E671A" >
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
                    <b-card v-if="equilibrumBonusLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="counter-box p-40 white shadow2 r-5">
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
                    <b-card v-if="loyaltyBonusLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="counter-box p-40 white shadow2 r-5">
                        <div class="float-right">
                            <img src="/assets/img/bonus.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-green" >{{ loyaltyBonus?.toLocaleString('en-Us') }}</div>
                        <h6 class="counter-title font-weight-bold" style="color:#2E671A">Loyalty (₦)</h6><br>
                        <span v-if="loyaltyBonusEligible" class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span>
                        <span v-else class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not-Eligible</span>
                    </div>
                </div>
                <div class="col-lg-3">
                    <b-card v-if="profitPoolLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="counter-box p-40 white shadow2 r-5">
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
                    <b-card v-if="globalProfitLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="counter-box p-40  text-white shadow2 r-5" style="background-color: #2E671A">
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
                    <b-card v-if="walletBalanceLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img  src="/assets/img/companywallet.png">
                        </div>
                        <h6 class="mt-0text-white" >Total Wallet Earned</h6>
                        <div class="text-dark-heading font-weight-bold text-white" >₦<span class="s-36">{{ totalBonus?.toLocaleString('en-US') }}</span></div>
                    </div>
                </div>
            </div>
            <div class="d-flex row row-eq-height my-3">
                <div class="col-md-4">
                    <b-card v-if="totalPVLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="card">
                        <div class="card-body ">
                            <div class="float-up text-center">
                                <img  src="/assets/img/pv1.png">
                            </div>
                            <div class="sc-counter font-weight-bold s-36 text-center" style="color:#2E671A">{{ totalPV?.toLocaleString('en-US') }}</div>
                            <h6 class="counter-title text-center font-weight-bold" style="color:#2E671A">Cumulated Point Value (CPV)</h6>
                        </div>
                    </div>
                    <div class="card mt-3 mb-3">
                        <div class="text-white lighten-2" style="background-color:#2E671A">
                            <div class="pt-5 pb-2 pl-5 pr-5">
                                <div class="float-up text-left text-center">
                                    <img  src="/assets/img/exchange1.png">
                                </div><br><br>
                                <div class="text-center">
                                    <small class="font-weight-normal s-10"><strong>OFFICIAL POINT VALUE RATE</strong></small>
                                    <p class="font-weight-bold text-success" style="font-size:25px">1 PV = {{ settings.unit_point_value?.toLocaleString('en-US') }} NGN(&#8358;)</p>
                                </div><br><br><br>
                            </div>
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
                                        <template v-if="loading && incLoading">
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
                                                    <img class="gift" :src="imageURL+'/'+currentIncentive.file_path">
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
                        <div class="col-md-12" v-if="currentIncentive !== null">
                            <div class="form-row">
                                <div class="col-md-12 mb-3 ml-2">
                                    <template v-if="currentIncentive.claim_status">
                                        <button :class="['btn', currentIncentive.claim_status=='approved'?'btn-success':currentIncentive.claim_status=='processing'?'btn-primary':'btn-danger' ]" ><i class="icon-check-square-o mr-2"></i>{{ currentIncentive.claim_status }}</button>
                                    </template>
                                    <template v-else>
                                        <span v-if="submitting" class="btn btn-success">...</span>
                                        <button @click="claimIncentive()" v-else class="btn btn-success">Claim Incentive</button>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <br>
                    </div>
                    <div class="row row-eq-height">
                    </div>
                </div>
            </div>
            
            <div class="d-flex row row-eq-height my-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >REFERRAL</a>
                                        </li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body no-p">
                            <div class="tab-content">
                                <div class="tab-pane show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                    <div class="row p-3">
                                        <div class="col-md-12">
                                            <form @submit.prevent="inviteFriend()">
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <input type="email" required v-model="inviteForm.email" class="form-control" id="validationDefault03" placeholder="Recipients Email Address">
                                                    </div>
                                                    <!-- <div class="col-md-6 mb-3">
                                                        <input type="text" title="Referrer" v-b-popover.hover.top="'Enter a referrer if you already have 2 downlines '" v-model="inviteForm.referrer" class="form-control" id="validationDefault03" placeholder="Referrer ID *">
                                                    </div> -->
                                                </div>
                                                <span v-if="submitting" class="btn btn-success">...</span>
                                                <button v-else class="btn btn-success" type="submit">Invite a Friend</button>
                                            </form>
                                            <hr>

                                            <div class="form-row text-center">
                                                <div class="col-md-12 mb-3">
                                                    <h3 class="font-weight-bold s-14 text-center">Click to copy your referral link</h3>
                                                </div>	
                                                <div class="col-md-8 mb-3">
                                                    <input type="text" class="form-control" :value="referrerLink" id="referrallink" readonly >
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                        <input type="button" class="btn btn-success" @click="myFunction()" value="Copy Referral Link" id="button">
                                                </div>	
                                            </div>	 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >GENERAL MESSAGE</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body no-p">
                            <div class="tab-content">
                                <div class="tab-pane show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                    <div class="row p-3">
                                        <div class="col-md-12 text-center">
                                            <h3 class="font-weight-bold s-14 text-center">{{ settings.general_message_subject }}</h3>
                                            <span class="font-weight-lighter ">{{ settings.general_message }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <tr v-if="loading && incClaimLoading">
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
                                                <td colspan="6">There are no claimed incentives</td>
                                            </tr>
                                            <tr v-else v-for="claim,i in claims" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>{{ claim.incentive }}</td>
                                                <td>{{ claim.worth?.toLocaleString('en-US')}}</td>
                                                <td>{{ claim.status }}</td>
                                                <td>{{ claim.points }} PV</td>
                                                <td>{{ claim.created_at }} </td>
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
                <div class="col-md-8">
                    <div class="card no-b">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab">REGISTRATION PRODUCT SELECTION</a>
                                        </li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="collapse show">
                            <div class="card-body p-0"> 
                                <div class="card no-b  no-r">
                                    <div class="card-body">
                                        <form id="product-claim-form" @submit.prevent="productClaim()">
                                            <div class="form-row" style="overflow-x:auto;">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">S/N</th>
                                                            <th scope="col">Products</th>
                                                            <th scope="col">PV</th>
                                                            <th scope="col">Worth</th>
                                                            <th scope="col">Select</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-if="loading && prodLoading">
                                                            <td colspan="5">
                                                                <b-skeleton-table
                                                                    :rows="3"
                                                                    :columns="5"
                                                                    :table-props="{ bordered: true, striped: true }"
                                                                ></b-skeleton-table>
                                                            </td>
                                                        </tr>
                                                        <template v-else>
                                                            <tr v-if="products.length == 0">
                                                                <td colspan="4">There are no products</td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-for="product,i in products" :key="i">
                                                                    <td>{{ ++i }}</td>
                                                                    <td>{{ product.name }}</td>
                                                                    <td>{{ product.points }}</td>
                                                                    <td>₦{{ product.worth }}</td>
                                                                    <td>
                                                                        <div class="form-check">
                                                                            <input name="product_ids[]" :key="i" class="form-check-input" type="checkbox" :value="product.id" id="cb1" :style="{'accent-color': '#2E671A'}">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <div class="m-3">	
                                                                    <span v-if="submitting" class="btn btn-sm btn-success">...</span>								
                                                                    <button v-else type="submit" class="btn btn-sm btn-success"><i class="icon-check-square-o mr-2"></i>Submit Selected Products</button>
                                                                </div>
                                                            </template>
                                                        </template>															  
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>
                                    </div>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
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
                                <template v-if="prodClaimLoading">
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
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ totalPv?.toFixed(2) }} PV</h6>											
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
                                        <button type="button" disabled :class="['btn btn-small', productClaimStatus=='processing'?'btn-warning':productClaimStatus=='approved'?'btn-success':'btn-danger']">
                                            <i class="icon-check-square-o mr-2"></i>{{ productClaimStatus }}</button>
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
import {mapActions,mapGetters,mapState} from 'vuex'
export default{
    name:"user-dashboard",

    data(){
        return {
            profitPoolEligible:false,
            globalProfitEligible:false,
            equilibrumBonusEligible:false,
            loyaltyBonusEligible:false,
            product_ids:[],
            totalWorth:0,
            totalPv:0,
            productClaimStatus:'Unclaimed',
            guestEmail:null,

            form:{
                rank_id:null,
                incentive_id:null
            }, 
            
            inviteForm:{
                email:null,
                referrer:null
            },

            prodClaimLoading:false,
            prodLoading:false,
            incClaimLoading:false,
            incLoading:false,

            welcomeBonusLoading:false,
            loyaltyBonusLoading:false,
            equilibrumBonusLoading:false,
            referralBonusLoading:false,
            totalBonusLoading:false,
            profitPoolLoading:false,
            walletBalanceLoading:false,
            globalProfitLoading:false,
            packageLoading:false,
            totalPVLoading:false
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting,
        }),

        imageURL(){
            return process.env.VUE_APP_IMAGE_PATH
        },

        referrerLink(){
            return this.inviteForm.referrer 
            ? 'https://app.delishcare.com/register'+'?ref='+this.inviteForm.referrer +'&placer='+this.authUser.username
            : 'https://app.delishcare.com/register'+'?ref='+this.authUser.username
        },
        
        ...mapGetters('bonusStore',['welcomeBonus',
        'equilibrumBonus','loyaltyBonus','referralBonus','placementBonus',
        'profitPool','globalProfit','totalBonus','walletBalance']),

        ...mapGetters('packageStore',['regPackage']),
        ...mapGetters('authStore',['authUser']),
        ...mapGetters('userStore',['totalPV','uplineDetails','directDownlines']),
        ...mapGetters('settingStore',['settings']),
        ...mapGetters('incentiveClaimStore',['claims','currentIncentive']),
        ...mapGetters('productStore',['products']),
        ...mapGetters('productClaimStore',['userProductClaims']),
    },

    created(){
        if(this.authUser.uuid == undefined){
            this.getUser().then(res=>{

                this.getDashboardData(res.data)
            })
        }else{
            this.getDashboardData(this.authUser)
        }

        if(this.settings.id == undefined){
            this.all();
            //this.getSetting('unit_point_value');
        }
        
        if(this.products.length == 0){
            this.prodLoading = true
            this.getActiveProducts().then(()=>this.prodLoading = false)
        }
        
        
    },

    methods:{
        ...mapActions('bonusStore',['getWelcomeBonus',
        'getEquilibrumBonus','getLoyaltyBonus','getReferralBonus',
        'getProfitPool','getGlobalProfit','getPlacementBonus','getTotalBonus','getWalletBalance']),
        ...mapActions('packageStore',['getPackage']),
        ...mapActions('authStore',['getUser']),
        ...mapActions('userStore',['getTotalPVs','inviteGuest','getUplineDetails','countDirectDownlines']),
        ...mapActions('settingStore',['getSetting','all']),
        ...mapActions('incentiveClaimStore',['getClaims','getCurrentIncentive','create']),
        ...mapActions('productStore',['getActiveProducts']),
        ...mapActions('productClaimStore',['claimProduct','getProductClaims']),
        
        getBonuses(uuid){
            if(this.welcomeBonus==null){
                this.welcomeBonusLoading = true
                this.getWelcomeBonus(uuid).then(()=>this.welcomeBonusLoading = false)
            }
            if(this.equilibrumBonus==null){
                this.equilibrumBonusLoading = true
                this.getEquilibrumBonus(uuid).then(()=>this.equilibrumBonusLoading = false)
            }
            if(this.loyaltyBonus==null){
                this.loyaltyBonusLoading = true
                this.getLoyaltyBonus(uuid).then(()=>this.loyaltyBonusLoading = false)
            }
            if(this.referralBonus==null){
                this.referralBonusLoading = true
                this.getReferralBonus(uuid).then(()=>this.referralBonusLoading = false)
            }
            if(this.placementBonus==null){
                this.getPlacementBonus(uuid)
            }
            if(this.totalBonus==null){
                this.totalBonusLoading = true
                this.getTotalBonus(uuid).then(()=>this.totalBonusLoading = false)
            }
            if(this.totalPV==null){
                this.totalPVLoading = true
                this.getTotalPVs(uuid).then(()=>this.totalPVLoading=false)
            }
            if(this.profitPool==null){
                this.profitPoolLoading = true
                this.getProfitPool(uuid).then(()=>this.profitPoolLoading = false)
            }
            if(this.globalProfit==null){
                this.globalProfitLoading = true
                this.getGlobalProfit(uuid).then(()=>this.globalProfitLoading = false)
            }
            if(this.walletBalance==null){
                this.walletBalanceLoading = true
                this.getWalletBalance(uuid).then(()=>this.walletBalanceLoading = false)
            }
        },

        getDashboardData(authUser){
            if(this.regPackage.name == undefined){
                this.packageLoading = true
                this.getPackage(authUser.package_id).then(()=>this.packageLoading=false)
            }
            
            this.getBonuses(authUser.uuid)

            if(authUser.package_id == 6){
                this.profitPoolEligible = true
            }
            if(authUser.rank_id >= 5){
                this.globalProfitEligible = true
            }
            if(!this.currentIncentive){
                this.incLoading = true
                this.getCurrentIncentive(authUser.uuid).then(()=>this.incLoading=false)
            }
            if(this.claims.length == 0){
                this.incClaimLoading = true
                this.getClaims(authUser.uuid).then(()=>this.incClaimLoading = false)
            }
            
            if(this.userProductClaims.length == 0){
                this.prodClaimLoading = true
                this.getProductClaims({uuid:authUser.uuid, processing:false}).then(res=>{
                    if( res.status == 200){
                        this.userProductClaims.forEach(ele=>{
                            this.totalWorth = this.totalWorth + ele.worth
                            this.totalPv = this.totalPv + ele.points
                            this.productClaimStatus = ele.status
                        })
                    }
                    this.prodClaimLoading = false
                })
            }else{
                this.userProductClaims.forEach(ele=>{
                    this.totalWorth = this.totalWorth + ele.worth
                    this.totalPv = this.totalPv + ele.points
                    this.productClaimStatus = ele.status
                })
            }

            this.countDirectDownlines(this.authUser.uuid).then(res=>{
                if(res.status == 200){
                    if(res.data.data >= 2){
                        this.equilibrumBonusEligible = true
                    }
                }
            })

            if(this.uplineDetails.uuid != undefined){
                this.countDirectDownlines(this.uplineDetails.uuid).then(res=>{
                    if(res.status == 200){
                        if(res.data.data >= 2){
                            this.loyaltyBonusEligible = true
                        }
                    }
                })
            }else{
                this.getUplineDetails(this.authUser.uuid).then(res=>{
                    if(res.status == 200){
                        this.countDirectDownlines(this.uplineDetails.uuid).then(res1=>{
                            if(res1.status == 200){
                                if(res1.data.data >= 2){
                                    this.loyaltyBonusEligible = true
                                }
                            }
                        })
                    }
                })
            }
        },

        claimIncentive(){
            this.form.rank_id = this.authUser.rank_id
            this.form.incentive_id = this.currentIncentive.id
            this.create({uuid:this.authUser.uuid, data:this.form}).then(res=>{
                if(res.status == 200){
                    this.currentIncentive.claim_status = 'processing';
                    //this.getCurrentIncentive(this.authUser.uuid)
                }
            })
        },

        productClaim()
        {
            let form = document.getElementById('product-claim-form')
            let formData = new FormData(form)
            this.claimProduct({uuid:this.authUser.uuid,data:formData}).then(res=>{
                if(res && res.status == 200){
                    this.userProductClaims.forEach(ele=>{
                        this.totalWorth = this.totalWorth + ele.worth
                        this.totalPv = this.totalPv + ele.points
                        this.productClaimStatus = ele.status
                    })
                }
            })
        },

        myFunction() {
            /* Get the text field */
            var copyText = document.getElementById("referrallink");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");

            /* Alert the copied text */
            //alert("Copied: " + copyText.value);
            document.getElementById('button').value='Referral Link Copied';
        },

        inviteFriend(){
            this.inviteGuest({uuid:this.authUser.uuid, data:this.inviteForm})
        }
    }

}
</script>