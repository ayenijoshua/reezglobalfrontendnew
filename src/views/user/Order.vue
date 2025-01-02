<template>
    <div>
        <div class="">
                <div class="d-flex justify-content-center mt-5 pb-4"> <!-- Centering wrapper added -->
                    <div class="col-md-6 col-sm-12"> 
                        <div >
                            <div >
                                <div class="d-flex justify-content-center align-items-center" > <!-- Added styling and classes -->
                                    <img  src="/assets/img/list-items.png" width="auto" height="150px">
                                </div>
                                
                                <div class="d-flex justify-content-center"><p class="font-weight-bold">Input a username to process the order associated with it.</p></div>
                                    <div class="form mb-3">                                     
                                        <div class="form-group col-12 m-0 ">
                                            <div class="input-group mb-2 mr-sm-2 shadow">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-shopping_cart float-left s-20 text-white "  ></i></div>
                                                </div>
                                                <input type="text" name="phone" value="" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                                        placeholder="Enter Username" style="background-color: transparent">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="d-flex justify-content-center">
                                    <button type="submit" class="btn btn-sm btn-success btn-lg mr-3">
                                        <i class="icon-save mr-2"></i>Confirm Selection
                                    </button>
                                </div>
                        </div>
                    </div>   
                </div>

                <div class="d-flex justify-content-center mt-3"> <!-- Centering wrapper added -->
                    <div class="col-md-9 col-sm-12"> 
                        <div >
                            <div class="row column-row" >
                                <div class="mt-4 ml-auto" style="padding-right:40px">
                                    <img  src="/assets/img/order-details.png"  width="auto" height="24px">&nbsp;&nbsp;
                                    <span class="float-right font-weight-bold" id="d1" style="font-size:19px">Order Details</span>
                                </div> 
                            </div>
                            <hr>
                        <div>
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
                                        There is no order under this username
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
                            
                            <div class="d-flex align-items-center mt-4">
                                <div>
                                    <span class="text-green" id="d1" style="font-size:10px">Pick-Up Type</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Registration Product Pick-up</h6>
                                </div>
                            </div>
                            <hr>
                            <div class="d-flex align-items-center mt-4">
                                <div>
                                    <span class="text-green" id="d1" style="font-size:10px">Username</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Olakunle2020</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Name</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Olakunle Aderemi</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Contact</span>
                                    <h6 class="font-weight-bold text-green mb-3" id="d1">08109234321</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Email</span>
                                    <h6 class="font-weight-bold text-green mb-3" id="d1">businessaccumen9@gmail.com</h6>
                                </div>
                                <div class="mr-4 ml-auto ">
                                    <div class="avatar avatar-xl mb-3 ">
										<img class="user_avatar" src="/assets/img/dummy/default_avatar1.png" alt="User Image">
									</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <hr>
                        <div class=" mb-3 mt-3">	
                            <!---<span  class="btn btn-sm btn-success">...</span>-->								
                            <button type="submit" class="btn btn-sm btn-success btn-lg mr-3"><i class="icon-shopping_cart mr-2"></i>Approve Order</button>
                            <button  type="submit" class="btn btn-sm btn-danger "><i class="icon-cancel mr-2"></i>Cancel Order</button>                   
                        </div> 
                    </div> 
                      
                </div>
                
            <br>


            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="card shadow-lg mb-3" style="background-color: transparent">
                        <div class="card-body ">
                            <div class="d-flex justify-content-left mb-2">
                                <input 
                                    
                                    class="form-control mr-2" 
                                    type="text" 
                                    placeholder="Search Orders..." 
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
                                            <th class="font-weight-bold" scope="col">USERNAME</th>
                                            <th class="font-weight-bold" scope="col">NAME</th>     
                                            <th class="font-weight-bold" scope="col">PHONE</th>
                                            <th class="font-weight-bold" scope="col">EMAIL</th>
                                            <th class="font-weight-bold" scope="col">PICK-UP TYPE</th>
                                            <th class="font-weight-bold" scope="col">PRODUCT</th>
                                            <th class="font-weight-bold" scope="col">QTY</th>
                                            <th class="font-weight-bold" scope="col">PRICE</th>
                                            <th class="font-weight-bold" scope="col">STATUS</th>
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
                                                <td>Olakunle2020</td>
                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                <td>Olakunle Aderemi</td>
                                                <td>08109234321</td>
                                                <td>businessaccumne9@gmail.com</td>
                                                <td>Registration Product Pick-up</td>
                                                <td>1KG REEZ MAX</td>
                                                <td>1</td>
                                                <td>₦12,700</td>
                                                <td><span class="badge badge-success" style="padding: 6px 10px;">Approved</span></td>
                                                <td>21/08/2024 - 02:46</td>
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

            <br>
        </div>
    </div>
</template>

<style scoped>

.user_avatar {
    width: 80px;
    border: 1px solid #eee;
    background: #2E671A;
    padding: 5px;
    border-radius: 50%;
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
    name:"user-stockistprofile",

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