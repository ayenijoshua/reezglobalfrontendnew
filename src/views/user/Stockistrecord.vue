<template>
    <div>
        <div class="">
            <div class="row">
                <div class="col-lg-4">
                    <b-card v-if="globalProfitLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="counter-box p-40   shadow1 r-5" style="background-color:transparent;">
                        <div class="float-right">
                            <img  src="/assets/img/access.png" alt="Generic placeholder image" width="70px" height="70px">
                        </div>
                        <div class="mt-1 text-dark-heading " ></div>
                        <h6 class="counter-title font-weight-bold">Stockist Package</h6><br>
                        <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> BASIC</span> 
                    </div>
                </div>
                <div class="col-lg-4">
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
                        <h6 class="counter-title font-weight-bold">Stockist Rebate</h6><br>
                        <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> 5%</span> 
                    </div>
                </div>
                <div class="col-lg-4">
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
                        <h6 class="counter-title font-weight-bold">Stockist Rebate wallet</h6><br>
                        <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> ₦ 137,000</span> 
                    </div>
                </div>
            </div> 
            <div class="row ">		
                <div class="col-md-12">
                    <div class="">
                        <div class="">
                            <div class="row column-row">
                                <div class="mt-4 mb-2 ml-4" >
                                
                                    <img  src="/assets/img/order-history.png"  width="auto" height="30px">&nbsp;
                                    <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Purchase Transactions</span>
                                </div> 
                            </div>
                            <div class="" > 
                                <div class="card shadow" style="background-color: transparent">
                                    <div class="card-body" >
                                        <form id="product-claim-form" @submit.prevent="productClaim()">
                                            <div class="d-flex justify-content-left mb-2">
                                                <input 
                                                    
                                                    class="form-control mr-2" 
                                                    type="text" 
                                                    placeholder="Search..." 
                                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"
                                                />
                                                <button class="btn text-white" style="background-Color:#2E671A" >
                                                    <i class="icon-search"></i>
                                                </button>
                                            </div>
                                            <div class="form-row table-responsive" style="overflow-x:auto;">
                                                <table class="table table-hover" >
                                                    <thead >
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">S/N</th>
                                                            <th class="font-weight-bold" scope="col">PRODUCTS</th>
                                                            <th class="font-weight-bold" scope="col">Qty</th>
                                                            <th class="font-weight-bold" scope="col">TOTAL PRICE</th>
                                                            <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                                            <!-- <th scope="col">Select</th> -->
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-if="loading && prodLoading">
                                                            <td colspan="4">
                                                                <b-skeleton-table
                                                                    :rows="3"
                                                                    :columns="4"
                                                                    :table-props="{ bordered: true, striped: true }"
                                                                ></b-skeleton-table>
                                                            </td>
                                                        </tr>
                                                        <template v-else>
                                                            <tr v-if="products.length == 0">
                                                                <td colspan="4">There are no products</td>
                                                            </tr>
                                                            <template v-else>
                                                                <tr v-for="produc,i in products" :key="i">
                                                                    <td>{{ ++i }}</td>
                                                                    <td>{{ produc.name }}</td>
                                                                    <td>12</td>
                                                                    <td>₦ 123,670</td>
                                                                    <td>13/07/2024 - 03:36</td>
                                                                    <td><span class="badge badge-success" style="padding: 6px 10px;">Order Delivered</span></td>
                                                                    <!-- <td>₦{{ produc.worth }}</td> -->
                                                                    <!-- <td>
                                                                        <div class="form-check">
                                                                            <input v-model="product_ids" class="form-check-input" type="checkbox" :value="{id:product.id,qty:2}" id="cb1" :style="{'accent-color': '#2E671A'}">
                                                                        </div>
                                                                    </td> -->
                                                                </tr>
                                                                <!--<tr>
                                                                    <td colspan="4" align="right">
                                                                        <b>Total Point Value : {{ cartTotalPoints }}PV</b>
                                                                    </td>
                                                                </tr>-->
                                                                <!--<div class="m-3">	
                                                                    <span v-if="submitting" class="btn btn-sm btn-success">...</span>								
                                                                    <button v-else type="submit" class="btn btn-sm btn-success"><i class="icon-check-square-o mr-2"></i>Submit Selected Products</button>
                                                                </div>-->
                                                            </template>
                                                        </template>															  
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form><br>
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
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <div class="row column-row">
                        <div class="mt-4 mb-2 ml-4" >
                        
                            <img  src="/assets/img/stock-record.png"  width="auto" height="30px">&nbsp;
                            <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Stock Record</span>
                        </div> 
                    </div>
                    <div class="card shadow-lg mb-3" style="background-color: transparent">
                        <div class="card-body ">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}' style="border: 2px solid #2E671A !important;">
                                    <thead >
                                        <tr>
                                            <th class="font-weight-bold" scope="col">S/N</th>
                                            <th class="font-weight-bold" scope="col">PRODUCT</th>
                                            <th class="font-weight-bold" scope="col">PRODUCT PRICE</th>
                                            <th class="font-weight-bold" scope="col">QUANTITY</th>      
                                            <th class="font-weight-bold" scope="col">STOCK STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading && incClaimLoading">
                                            <td colspan="5">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="claims.length == 0">
                                                <td colspan="5">There are no claimed incentives</td>
                                            </tr>
                                            <tr v-else v-for="claim,i in claims" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>1KG REEZ MAX</td>
                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                <td>₦12,700</td>
                                                <td>470</td>
                                                <td><span class="badge badge-success" style="padding: 6px 10px;">In stock</span></td>
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
                <div class="col-md-12">
                    <div class="row column-row">
                        <div class="mt-4 mb-2 ml-4" >
                        
                            <img  src="/assets/img/purchase-date.png"  width="auto" height="30px">&nbsp;
                            <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Purchase History</span>
                        </div> 
                    </div>
                    <div class="card shadow-lg mb-3" style="background-color: transparent">
                        <div class="card-body ">
                            <div class="d-flex justify-content-left mb-2">
                                <input 
                                    
                                    class="form-control mr-2" 
                                    type="text" 
                                    placeholder="Search..." 
                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"/>
                                <button class="btn text-white" style="background-Color:#2E671A" >
                                    <i class="icon-search"></i>
                                </button>
                            </div>
                            <div class="table-responsive">
                                <table id="example2" class="table table-hover data-tables" data-options='{ "paging": false; "searching":false}' >
                                    <thead >
                                        <tr>
                                            <th class="font-weight-bold" scope="col">S/N</th>
                                            <th class="font-weight-bold" scope="col">TOTAL PRODUCTS PURCHASED</th>
                                            <th class="font-weight-bold" scope="col">TOTAL PURCHASE PRICE</th>     
                                            <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading && incClaimLoading">
                                            <td colspan="5">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="claims.length == 0">
                                                <td colspan="5">There are no claimed incentives</td>
                                            </tr>
                                            <tr v-else v-for="claim,i in claims" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>479</td>
                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                <td>₦897,376</td>
                                                <td>24/07/2024 - 10:36</td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                                
                            </div>
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
            </div>

           <div class="row">
                <div class="col-md-12">
                    <div class="row column-row">
                        <div class="mt-4 mb-2 ml-4" >
                        
                            <img  src="/assets/img/wallet30.png"  width="auto" height="30px">&nbsp;
                            <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Rebate Earnings</span>
                        </div> 
                    </div>
                    <div class="card shadow-lg mb-3" style="background-color: transparent">
                        <div class="card-body ">
                            <div class="d-flex justify-content-left mb-2">
                                <input 
                                    
                                    class="form-control mr-2" 
                                    type="text" 
                                    placeholder="Search stockists..." 
                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"/>
                                <button class="btn text-white" style="background-Color:#2E671A" >
                                    <i class="icon-search"></i>
                                </button>
                            </div>
                            <div class="table-responsive">
                                <table id="example2" class="table table-hover table-bordered data-tables" data-options='{ "paging": false; "searching":false}' >
                                    <thead >
                                        <tr>
                                            <th class="font-weight-bold" scope="col">S/N</th>
                                            <th class="font-weight-bold" scope="col">MONTH</th>     
                                            <th class="font-weight-bold" scope="col">REBATE EARNING</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading && incClaimLoading">
                                            <td colspan="5">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="claims.length == 0">
                                                <td colspan="5">There are no claimed incentives</td>
                                            </tr>
                                            <tr v-else v-for="claim,i in claims" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>January 2024</td>
                                                <td>₦213,111</td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                                
                            </div>
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
            </div>
    
        </div>
    </div>
</template>

<style scoped>
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
  background-color: #ecf0f1;
  cursor: pointer;
}

/* Checkbox checked state */
.custom-checkbox:checked {
  background-color: #ecf0f1;
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
color: #ecf0f1;

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
import {mapActions,mapGetters,mapState} from 'vuex'
export default{
    name:"user-repurchase",

    data(){
        return {
            profitPoolEligible:false,
            globalProfitEligible:false,
            equilibrumBonusEligible:false,
            loyaltyBonusEligible:false,
            product_ids:[],
            cartProducts:[],
            totalWorth:0,
            totalPv:0,
            productClaimStatus:'Unclaimed',
            guestEmail:null,
            cartPoints:{},
            cartTotalPoints:0,

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
        ...mapGetters('rankStore',['currentRankBadge']),
    },

    created(){
        if(this.authUser.uuid == undefined){
            this.getUser().then(res=>{
                this.getCurrentRankBadge(res.data.rank_id)
                this.getDashboardData(res.data)
            })
        }else{
            this.getCurrentRankBadge(this.authUser.rank_id)
            this.getDashboardData(this.authUser)
        }

        if(this.currentRankBadge==null){
            this.getCurrentRankBadge(this.authUser.rank_id)
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
        logClaim(e,id,points){
            let data = {qty:e.target.value,id:id}
            //qty = e.target.value
            let pv = data.qty * points
            this.cartPoints = {...this.cartPoints,[data.id]:pv}
            let pvs = Object.values(this.cartPoints)
            let sum = pvs.reduce((res,val)=>res+val)
            this.cartTotalPoints = sum
           let index = this.cartProducts.findIndex(ele=>ele.id == id)
           if(index !== -1){
            this.cartProducts[index].qty = data.qty
           }else{
            this.cartProducts.push(data)
           }
            
            //console.log(this.cartProducts)
        },
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
        ...mapActions('rankStore',['getCurrentRankBadge']),
        
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
                            this.totalPv = this.totalPv + (ele.points * ele.product_qty)
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
            //let form = document.getElementById('product-claim-form')
            let formData = {products:this.cartProducts}
            this.claimProduct({uuid:this.authUser.uuid,data:formData}).then(res=>{
                if(res && res.status == 200){
                    this.userProductClaims.forEach(ele=>{
                        this.totalWorth = this.totalWorth + ele.worth
                        this.totalPv = this.totalPv + (ele.points * ele.product_qty)
                        this.productClaimStatus = ele.status
                    })
                    this.cartProducts = []
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
        },

        cancelOrder(orderId) {
            // Logic to cancel the order
            console.log(`Order with ID: ${orderId} is canceled.`);
        }
    }



}
</script>