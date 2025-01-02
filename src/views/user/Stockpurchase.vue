<template>
    <div>
        <div class="">

            <div class="row ">		
                <div class="col-md-8">
                    <div class="card no-b shadow" style="background-color:#ecf0f1">
                        <div class="card-body p-0">
                            <form id="product-claim-form" @submit.prevent="productClaim()">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead style="background-color:#2E671A">
                                            <tr>
                                                <th class="font-weight-bold text-white" scope="col">S/N</th>
                                                <th class="font-weight-bold text-white" scope="col">VIEW</th>
                                                <th class="font-weight-bold text-white" scope="col">PRODUCTS</th>
                                                <th class="font-weight-bold text-white" scope="col">PRICE</th>
                                                <th class="font-weight-bold text-white" scope="col">POINT VALUE</th>
                                                <!-- <th scope="col">Worth</th> -->
                                                <th class="font-weight-bold text-white" scope="col">QUANTITY</th>
                                                <th class="font-weight-bold text-white" scope="col">SELECT</th>
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
                                               <tr v-if="products.length == 0" class="no-b">
                                                    <td colspan="4">There are no products</td>
                                                </tr>
                                                <template v-else>
                                                    <tr  v-for="produc,i in products" :key="i" >
                                                        <td>{{ ++i }}</td>
                                                        <td class="w-10">
                                                            <img src="/assets/img/demo/products/product3.png"  height="70px" width="auto" alt="">
                                                        </td>
                                                        <td>{{ produc.name }}</td>
                                                        <td>₦ 12,700</td>
                                                        <td>{{ produc.points }}</td>
                                                        <td>
                                                            <div class="">
                                                                <input :key="i" @change="(e)=>logClaim(e,produc.id,produc.points)" class="form-control" type="number" min="1"  style="background-color: transparent; border: 2px solid #2E671A;">
                                                            </div>
                                                        </td>
                                                        <td> <div class="form-check"><input class="form-check-input custom-checkbox" type="checkbox" value="" id="cb1" ></div></td>
                                                    </tr>
                                                </template>
                                            </template>    
                                        </tbody>
                                    </table>
                                </div>
                            </form>     
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card  mb-3 shadow" style="background-color: transparent">
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
                                    <div v-else v-for="userClaim,i in userProductClaims" :key="i" class="row column-row p-2" style="border-bottom: 1px solid #2E671A !important;">
                                        <div class="mt-2 ml-3" style="padding-right:15px">
                                            <img src="/assets/img/demo/products/product3.png" width="80px" height="80px">
                                        </div>  
                                        <div class="mb-2 mt-4 ">
                                            <h6 class="font-weight-bold text-green s-14" style="margin: 0em; padding: 0em;">{{ userClaim.name }} <br><small class="font-weight-bold"> {{userClaim.points}}PV | Qty:{{ userClaim.product_qty }}</small></h6>	
                                        </div>	
                                        <div class="mb-2 mt-4 ml-auto mr-2">
                                            <span class="font-weight-bold float-right text-green">₦12,700</span>
                                        </div>
                                    </div>


                                    <div class="row column-row " style="border-bottom: 1px solid #2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Point Value </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ totalPv?.toFixed(2) }} PV</h6>											
                                        </div>
                                    </div> 	
                                    <div class="row column-row" style="background-Color:#2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">Total Price </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">₦ 12,700</h6>											
                                        </div>
                                    </div>
                                     <!-- Cancel Order Button -->
                                    <div class="row column-row" >
                                        <div class="ml-auto mr-2">
                                            <button @click="cancelOrder(userClaim.id)" class="btn btn-sm btn-danger  mt-2" ><i class="icon-cancel mr-2"></i> Cancel Selection</button>
                                        </div>    
                                    </div>   
                                    <!-- <div class="row column-row border-bottom">
                                        <div class="mb-2 mt-5 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Product Cost </h6>											
                                        </div>	
                                        <div class="mb-2 mt-5 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦{{ totalWorth?.toLocaleString('en-US') }} </h6>											
                                        </div>
                                    </div> -->

                                    <!--<div class="mt-3">									
                                        <button type="button" disabled :class="['btn btn-small', productClaimStatus=='processing'?'btn-warning':productClaimStatus=='approved'?'btn-success':'btn-danger']">
                                            <i class="icon-check-square-o mr-2"></i>{{ productClaimStatus }}</button>
                                    </div>--->
                                </template>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="d-flex justify-content-center mt-5 mb-5"> <!-- Centering wrapper added -->
                <div class="col-md-6 col-sm-12"> 
                    <div class="card no-b shadow 1" style="background-color: transparent;">
                        <div class="card-body">
                            <span class="text-center text-green s-12 font-weight-bold">Select Your Preferred Payment Method</span>
                            <div class="form-group m-0">                       
                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-payment float-left s-20 text-white" ></i></div>
                                    </div>
                                    <select required v-model="selectedOrderType" class="form-control r-0 light s-12" style="background-color: transparent; border: 2px solid #1b4f72;">
                                        <option >Pay Offline & Upload POP</option>	
                                        <option >Pay Via Payment Gateway</option>													   
                                    </select>
                                </div>
                            </div>
                        </div>     
                    </div>       
                </div>
            </div>
    
           <div v-if="selectedOrderType === 'Pay Offline & Upload POP'" class="row"> 
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card shadow rounded" style="background-color: #2E671A">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center">
                                        <div class="text-center">  <img  src="/assets/img/bank-transfer.png" width="auto" height="100px"></div>
                                            <div class="card-body text-center">
                                                <span  id="d1" class="text-white" style="font-size:10px">Bank Name</span>
                                                <h5 class="font-weight-bold text-white"> Guaranty Trust Bank</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Name</span>
                                                <h5 class="font-weight-bold text-white" id="d1">Star Twins Herbal Limited</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Number</span>
                                                <h5 class="font-weight-bold text-white" id="d1">0013476690</h5>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card shadow rounded" style="background-color: #2E671A">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center">
                                        <div class="text-center">  <img  src="/assets/img/bank-transfer.png" width="auto" height="100px"></div>
                                            <div class="card-body text-center">
                                                <span  id="d1" class="text-white" style="font-size:10px">Bank Name</span>
                                                <h5 class="font-weight-bold text-white"> Jaiz Bank</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Name</span>
                                                <h5 class="font-weight-bold text-white" id="d1">Star Twins Herbal Limited</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Number</span>
                                                <h5 class="font-weight-bold text-white" id="d1">2017714690</h5>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card shadow rounded" style="background-color: #2E671A">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center">
                                        <div class="text-center">  <img  src="/assets/img/bank-transfer.png" width="auto" height="100px"></div>
                                            <div class="card-body text-center">
                                                <span  id="d1" class="text-white" style="font-size:10px">Bank Name</span>
                                                <h5 class="font-weight-bold text-white"> United Bank Of Africa</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Name</span>
                                                <h5 class="font-weight-bold text-white" id="d1">Star Twins Herbal Limited</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Number</span>
                                                <h5 class="font-weight-bold text-white" id="d1">1113470690</h5>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   

                <div class="col-md-12 mt-5">
                    <div class="card shadow" style="background-color: transparent">
                        <div class="card-body" >
                                <form id="profile-form">
                                    <div class="card no-b no-r" style="background-color: transparent">
                                        <div class="card-body">
                                            <div class="form-row">
                                                <div class="col-md-12">
                                                    <div class="form-row mb-2">
                                                        <div class="form-group col-12 m-0">
                                                            <div class="form-group m-0">
                                                                <div class="dropbox" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                                                    <input v-b-popover.hover.top="'Drag your photo here or click to browse'" type="file" id="profile-img" title="profile photo" name="image"  class="form-control form-control-line input-file" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                                                    <p id="img-preview" >
                                                                        Drag your photo here<br> or click to browse<br>
                                                                        <span style="font-size: 10px;">Image size should not exceed 500kB</span>
                                                                    </p>
                                                                    
                                                                </div>
                                                                
                                                                <!-- <input type="file" name="image" title="profile photo" class="form-control r-0 light s-12" placeholder="Profile photo"> -->
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                    <div class="m-3">	
                    <!---<span  class="btn btn-sm btn-success">...</span>-->								
                        <button  type="submit" class="btn btn-sm btn-success mr-3 "><i class="icon-shopping-cart mr-2"></i>Submit Order</button>
                        <button  type="submit" class="btn btn-sm btn-danger "><i class="icon-cancel mr-2"></i>Cancel Order</button>                   
                </div> 
                </div>
            </div>

            <div v-if="selectedOrderType === 'Pay Via Payment Gateway'" class="row mb-2 mt-2">
                <div class="col-md-12">
                    <div class="d-flex flex-wrap justify-content-center mt-2">
                        <div class="col-md-6 col-sm-12"> 
                            <div class="card  mb-3 shadow1" style="background-color: #2E671A">                       
                                <div class="d-flex flex-wrap justify-content-center">
                                    <div class="text-center mt-5 mb-5" style="padding-bottom:10px; padding-top: 20px">
                                        <img  src="/assets/img/pay_options1.png" width="300px">
                                        <h6 class="font-weight-bold text-white" >Proceed To Payment<br><small>Kindly complete your  Product Purchase by clicking the button Below</small></h6>
                                        <a class="btn btn-sm btn-custom mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>Pay Now</a>
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

<style scoped>
.btn-custom {
    background-color: #ffffff !important; /* White background */
    color: #2E671A !important; /* Text and icon color */
    border: 2px solid #2E671A; /* Border matching the text color */
    font-weight: bold; /* Optional: Make the text bold */
    padding: 10px 20px; /* Adjust padding for better spacing */
    border-radius: 5px; /* Optional: Add slight rounding to the corners */
    text-align: center; /* Center text */
    text-decoration: none; /* Remove underline */
    transition: all 0.3s ease; /* Smooth hover effect */
}

.btn-custom:hover {
    background-color: transparent !important; /* Transparent background */
    color: #ffffff !important; /* White text and icon */
    border: 2px solid #ffffff !important; /* White outline */
}

.btn-custom i {
    transition: all 0.3s ease; /* Smooth transition for the icon */
}

.btn-custom:hover i {
    color: #ffffff !important; /* White icon on hover */
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

            selectedOrderType: "", // Tracks the selected value

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