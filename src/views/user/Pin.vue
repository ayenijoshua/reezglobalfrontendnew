<template>
    <div>
        <div class="">
            <div class="mt-3 pb-4"> <img  src="/assets/img/step5a.png" width="auto" height="100px"></div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card shadow rounded" style="background-color: transparent">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <div class="text-center">  <img  src="/assets/img/bankinghall2.png" width="auto" height="150px"></div>
                                    <div class="card-body text-center">
                                        <h4 class="font-weight-bold text-green"> Guaranty Trust Bank</h4>
                                        <span class="text-green" id="d1" style="font-size:10px">Account Name</span>
                                        <h6 class="font-weight-bold text-green" id="d1">Reez Global Limited</h6>
                                        <span class="text-green" id="d1" style="font-size:10px">Account Number</span>
                                        <h6 class="font-weight-bold text-green" id="d1">0013476690</h6>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow rounded" style="background-color: transparent">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <div class="text-center">  <img  src="/assets/img/bankinghall2.png" width="auto" height="150px"></div>
                                    <div class="card-body text-center">
                                        <h4 class="font-weight-bold text-green"> Jaiz Bank</h4>
                                        <span class="text-green" id="d1" style="font-size:10px">Account Name</span>
                                        <h6 class="font-weight-bold text-green" id="d1">Reez Global Limited</h6>
                                        <span class="text-green" id="d1" style="font-size:10px">Account Number</span>
                                        <h6 class="font-weight-bold text-green" id="d1">2017714690</h6>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow rounded" style="background-color: transparent">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <div class="text-center">  <img  src="/assets/img/bankinghall2.png" width="auto" height="150px"></div>
                                    <div class="card-body text-center">
                                        <h4 class="font-weight-bold text-green"> Zenith Bank</h4>
                                        <span class="text-green" id="d1" style="font-size:10px">Account Name</span>
                                        <h6 class="font-weight-bold text-green" id="d1">Reez Global Limited</h6>
                                        <span class="text-green" id="d1" style="font-size:10px">Account Number</span>
                                        <h6 class="font-weight-bold text-green" id="d1">1113470690</h6>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="mt-3 pb-4"> <img  src="/assets/img/step5a.png" width="auto" height="100px"></div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card shadow1" style="background-color: transparent">
                        <div class="card-header">
                            <h4 class="green-text"><strong class="font-weight-bold">Purchase Pin</strong></h4>
                            <small>Specify the amount of pin you need</small>
                        </div>
                        <div class="collapse show" id="invoiceCard">
                            <div class="d-flex justify-content-center align-items-center" > <!-- Added styling and classes -->
                                <img src="/assets/img/pin_reg.png" width="auto" height="150px">
                            </div>
                            <div class="card-body text-center">
                                <div class="form-row">
                                    <div class="input-group mb-2 mr-sm-2 mb-3 r-3 shadow1 ">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;">
                                                <i class="icon-payment float-left s-20 text-white"></i>
                                            </div>
                                        </div>
                                        <input type="number" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="PIN Amount" style="background-color: transparent">
                                    </div>
                                </div>

                                <form id="profile-form">
                                    <div class="card no-b no-r" style="background-color: transparent">
                                        <div class="card-body">
                                            <div class="form-row">
                                                <div class="col-md-12">
                                                    <div class="form-row mb-2">
                                                        <div class="form-group col-12 m-0">
                                                            <div class="form-group m-0">
                                                                <div class="dropbox" style="background-color: #ded8c7; border: 2px solid #2E671A;">
                                                                    <input v-b-popover.hover.top="'Drag your photo here or click to browse'" type="file" id="profile-img" title="profile photo" name="image"  class="form-control form-control-line input-file" style="background-color: #ded8c7; border: 2px solid #2E671A;">
                                                                    <p id="img-preview" >
                                                                        <b>Upload your Proof of Payment here</b><br>
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
                                
                                <input type="hidden" name="id" value="960">
                                <button type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Request PIN</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card shadow" style="background-color: transparent">
                        <div class="card-header">
                            <h5 class="green-text"><strong class="font-weight-bold">Pay With Wallet</strong></h5>
                        </div>
                        <div class="card-body" >
                            <div class="collapse show text-center" id="invoiceCard">
                                <div class="card-body text-center">
                                    <img class="mb-3 mt-3" src="/assets/img/wallet4.png" width="auto" height="250px">
                                    <h1 class="font-weight-bold text-green" style="margin: 0em; padding: 0em;">₦{{ walletBalance?.toLocaleString('en-US') }}</h1>
                                    <small class=" font-weight-bold s-10 green-text" style="margin: 0em; padding: 0em;" >Current Wallet Available Balance</small>
                                </div>  
                            </div>
                            
                            <div class="form-row">
                                <div class="input-group mb-2 mr-sm-2 mb-3 r-3 shadow1 ">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;">
                                            <i class="icon-payment float-left s-20 text-white"></i>
                                        </div>
                                    </div>
                                    <input type="number" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                        placeholder="PIN Amount" style="background-color: transparent">
                                </div>
                            </div>
                            <input type="hidden" name="id" value="960">
                            <button type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Request PIN</button>
                            
                        </div>
                    </div>
                </div>
            </div>


           <div class="row ">	
                <div class="col-lg-12 pb-4 mt-5 mb-4">
                    <b-card v-if="walletBalanceLoading && loading">
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <div v-else class="counter-box p-40 green-text shadow1 r-5" style="background-color: transparent">
                        <div class="float-right">
                            <img src="/assets/img/pins.png" width="auto" height="100px">
                        </div>
                        <h6 class="mt-0 green-text" >Available Pin Balance</h6>
                        <div class="text-dark-heading font-weight-bold green-text" >₦<span class="s-36">234,779</span></div>
                    </div>
                </div>	
            </div>
            <div class="mt-3 pb-4"> <img  src="/assets/img/step5a.png" width="auto" height="100px"></div>
            <div class="row ">	
                <div class="col-md-12">
                    <div class="">
                        <div class="">
                            <div class="" > 
                                <div class="card  mb-3 shadow" style="background-color: transparent">
                                    <div class="card-body" >
                                        <form id="product-claim-form" @submit.prevent="productClaim()">
                                            <div class="d-flex justify-content-left mb-2">
                                                <input 
                                                    
                                                    class="form-control mr-2" 
                                                    type="text" 
                                                    placeholder="Search stockists..." 
                                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"
                                                />
                                                <button class="btn text-white" style="background-Color:#2E671A" >
                                                    <i class="icon-search"></i>
                                                </button>
                                            </div>
                                            <div class="form-row table-responsive  equal-width-table" style="overflow-x:auto;">
                                                <table class="table table-hover" >
                                                    <thead >
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">S/N</th>
                                                            <th class="font-weight-bold" scope="col">PRICE</th>
                                                            <th class="font-weight-bold" scope="col">PURCHASE DATE & TIME</th>
                                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                                            <th class="font-weight-bold" scope="col">APPROVED DATE & TIME</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> 1</td>
                                                            <td>674,825</td>   
                                                            <td> 15/04/2024 : 01:25</td>
                                                            <td><span class="badge badge-success" style="padding: 6px 10px;">Approved</span></td>
                                                            <td>16/04/2024 : 03:08 </td>
                                                        </tr>
                                                        <tr>
                                                            <td> 2</td>
                                                            <td>₦74,220</td>
                                                            <td> 23/06/2024 : 09:25</td>
                                                            <td><span class="badge badge-warning" style="padding: 6px 10px;">Pending</span></td>   
                                                            <td></td>
                                                        </tr>   													  
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>
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

            <div class="mt-3 pb-4"> <img  src="/assets/img/step5a.png" width="auto" height="100px"></div>
            <div class="row ">	
                <div class="col-md-12">
                    <div class="">
                        <div class="">
                            <div class="" > 
                                <div class="card  mb-3 shadow" style="background-color: transparent">
                                    <div class="card-body" >
                                        <form id="product-claim-form" @submit.prevent="productClaim()">
                                            <div class="d-flex justify-content-left mb-2">
                                                <input 
                                                    
                                                    class="form-control mr-2" 
                                                    type="text" 
                                                    placeholder="Search stockists..." 
                                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"
                                                />
                                                <button class="btn text-white" style="background-Color:#2E671A" >
                                                    <i class="icon-search"></i>
                                                </button>
                                            </div>
                                            <div class="form-row table-responsive" style="overflow-x:auto;">
                                                <table class="table table-hover equal-width-table" >
                                                    <thead >
                                                        <tr>
                                                            <th class="font-weight-bold" scope="col">S/N</th>
                                                            <th class="font-weight-bold" scope="col">USERNAME</th>
                                                            <th class="font-weight-bold" scope="col">FULL NAME</th>
                                                            <th class="font-weight-bold" scope="col">PACKAGE</th>
                                                            <th class="font-weight-bold" scope="col">REGISTRATION DATE & TIME</th>
                                                            <th class="font-weight-bold" scope="col">ACTION</th>
                                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> 1</td>
                                                            <td>Mike2026</td> 
                                                            <td>Micheal Godwin</td> 
                                                            <td>BOOSTER</td>   
                                                            <td> 15/04/2024 : 01:25</td>
                                                            <td>
                                                                <div class="dropdown"> 
                                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i class="caret"></i>
                                                                    </button>
                                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed; background-color: #ded8c7">
                                                                        <a @click="accept(prod.user_uuid)" class="dropdown-item text-green" href="#"  ><i class="icon-check-circle"></i>&nbsp;&nbsp; Approve</a>
                                                                        <a @click="reject(prod.user_uuid)" class="dropdown-item text-green" href="#" ><i class="icon-times-circle"></i>&nbsp;&nbsp; Decline</a>	
                                                                    </div>
                                                                </div>													
                                                            </td>
                                                            <td><span class="badge badge-success" style="padding: 6px 10px;">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td> 2</td>
                                                            <td>felicia1620</td>
                                                            <td>Felicia Akinola</td>
                                                            <td>STARTER</td>
                                                            <td> 23/06/2024 : 09:25</td>
                                                            <td>
                                                                <div class="dropdown"> 
                                                                    <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i class="caret"></i>
                                                                    </button>
                                                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed; background-color: #ded8c7">
                                                                        <a @click="accept(prod.user_uuid)" class="dropdown-item text-green" href="#" ><i class="icon-check-circle"></i>&nbsp;&nbsp; Approve</a>
                                                                        <a @click="reject(prod.user_uuid)" class="dropdown-item text-green" href="#" ><i class="icon-times-circle"></i>&nbsp;&nbsp; Decline</a>	
                                                                    </div>
                                                                </div>													
                                                            </td>
                                                            <td><span class="badge badge-danger" style="padding: 6px 10px;">Declined</span></td>
                                                        </tr>   													  
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>
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

        </div>
    </div>
</template>

<style scoped>
.equal-width-table th,
.equal-width-table td {
    width: 10%; /* Each column will take up 10% of the table's width */
    text-align: center; /* Optional: Center align content */
    vertical-align: middle; /* Optional: Vertically center align content */
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
background: rgba(255, 255, 255, 0.2);
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