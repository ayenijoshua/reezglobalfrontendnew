<template>
    <div>
        <div class="">
            <div class="row mb-5">
                <div class="col-md-4">
                    <div class="card" style="background-color: #2E671A">
                        <div class="card-body" >
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/membership.png"
                                        alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <h6 class="mt-0 mb-1 font-weight-bold text-white">Registration Package</h6>
                                    <div class="mt-1 text-dark-heading text-white float-right" >{{ regPackage.name }} - {{ regPackage.vip }} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/hand-shake.png" alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <h6 class="mt-0 mb-1 font-weight-bold text-white" >Welcome Bonus</h6>
                                    <div class="mt-1 text-dark-heading text-white float-right" >₦  {{ welcomeBonus }}</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style="background-color: #2E671A" >
                        <div class="card-body" >
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img class="mr-3  r-3" src="/assets/img/referral.png"
                                        alt="Generic placeholder image" width="70px" height="70px">
                                </div>
                                <div class="ml-auto">
                                    <h6 class="mt-0 mb-1 font-weight-bold text-white" >Referral Bonus</h6>
                                    <div class="mt-1 text-dark-heading text-white float-right" >₦  {{ referralBonus }}</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>	
            <!--States-->
            <div class="row my-5">
                <div class="col-lg-3">
                    <div class="counter-box p-40 white shadow2 r-5">
                        <div class="float-right">
                            <img src="/assets/img/equil.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-green" >{{ equilibrumBonus }}</div>
                        <h6 class="counter-title font-weight-bold" style="color:#2E671A">Equilibrum (₦) </h6><br>
                        <span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="counter-box p-40 white shadow2 r-5">
                        <div class="float-right">
                            <img src="/assets/img/bonus.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-green" >{{ loyaltyBonus }}</div>
                        <h6 class="counter-title font-weight-bold" style="color:#2E671A">Loyalty (₦)</h6><br>
                        <span class="badge text-white bg-green"><i class="icon icon-check" ></i>&nbsp;&nbsp;Eligible</span>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="counter-box p-40 white shadow2 r-5">
                        <div class="float-right">
                            <img  src="/assets/img/bars.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-green" >{{ profitPool }}</div>
                        <h6 class="counter-title font-weight-bold" style="color:#2E671A">Profit Pool (₦) </h6><br>
                        <span v-if="profitPoolEligible" class="badge text-white bg-green"><i class="icon icon-check"></i>&nbsp;&nbsp;Eligible</span>
                        <span v-else class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not Eligible</span>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="counter-box p-40  text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img  src="/assets/img/salary_white.png" alt="Generic placeholder image" width="60px" height="60px">
                        </div>
                        <div class="mt-1 text-dark-heading text-white" >{{ globalProfit }}</div>
                        <h6 class="counter-title font-weight-bold">Global Profit (₦)</h6><br>
                        <span v-if="globalProfitEligible" class="badge text-white bg-green"><i class="icon icon-check"></i>&nbsp;&nbsp;Eligible</span>
                        <span v-else class="badge text-white bg-red"><i class="icon icon-close" ></i>&nbsp;&nbsp;Not Eligible</span>
                    </div>
                </div>
            </div>
            <!--States-->
            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img  src="/assets/img/companywallet.png">
                        </div>
                        <h6 class="mt-0text-white" >Total Wallet Earned</h6>
                        <div class="text-dark-heading font-weight-bold text-white" >₦<span class="s-36">{{ totalBonus }}</span></div>
                    </div>
                </div>
            </div>
            <div class="d-flex row row-eq-height my-3">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body ">
                            <div class="float-up text-center">
                                <img  src="/assets/img/pv1.png">
                            </div>
                            <div class="sc-counter font-weight-bold s-36 text-center" style="color:#2E671A">{{ totalPV }}</div>
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
                                    <p class="font-weight-bold text-success" style="font-size:25px">1 PV = {{ setting.unit_point_value }} NGN(&#8358;)</p>
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
                                        <div class="col-md-6">
                                            <img class="gift" src="/assets/img/phone.png">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card-body pt-0 mt-5">
                                                <h6 class="mt-0 green-text" >Cash Equivalent</h6>
                                                <div class="text-dark-heading font-weight-bold green-text" >₦<span class="s-36">126,000</span></div>
                                                <hr>
                                                <h6 class="mt-0 green-text" >Cumulated Point Value (CPV)</h6>
                                                <div class="text-dark-heading font-weight-bold green-text" ><span class="s-36">600PV</span></div>
                                                <hr>
                                                <h6 class="mt-0 green-text" >Incentive</h6>
                                                <div class="text-dark-heading font-weight-bold green-text" ><span class="s-36">Smart Phone</span></div>									
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12" >
                            <div class="form-row">
                                <div class="col-md-12 mb-3 ml-2">
                                    <button class="btn btn-success" type="submit" >Claim Incentive</button>
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
                                                <form>
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <input type="email" class="form-control" id="validationDefault03" placeholder="Recipients Email Address" required>
                                                    </div>
                                                </div>
                                                <button class="btn btn-success" type="submit">Invite a Friend</button>
                                            </form>
                                            <hr>

                                            <div class="form-row text-center">
                                                <div class="col-md-12 mb-3">
                                                    <h3 class="font-weight-bold s-14 text-center">Click to copy your referral link</h3>
                                                </div>	
                                                <div class="col-md-8 mb-3" >
                                                    <input type="text" class="form-control" value="https://delishcare.com/goke154" id="referrallink" readonly >
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                        <input type="button" class="btn btn-success" onclick="myFunction()" value="Copy Referral Link" id="button">
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
                                            <h3 class="font-weight-bold s-14 text-center">Welcome to Capital Making Club</h3>
                                            <span class="font-weight-lighter ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisl magna, eu finibus orci scelerisque placerat. Quisque eu posuere mi. Nulla finibus tortor odio, nec accumsan neque vehicula ac. Aenean eget purus a neque volutpat euismod sed in nunc. Donec in ligula sed ante gravida eleifend. Etiam in tortor semper, blandit ante ac, finibus urna. Nunc eu orci fringilla enim aliquam euismod commodo at sem. Aliquam ultricies eros vitae eros viverra, id commodo nibh sodales. Cras vel mi in odio porttitor pharetra. Praesent vel odio lacus. Cras suscipit, sapien ut imperdiet ornare, libero elit dictum leo, ac vehicula dui turpis at elit. Cras blandit diam ac lacus gravida, id ultricies ante tristique. Integer facilisis diam vitae metus scelerisque, a luctus ante interdum.</span>

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
                                            <th scope="col">PV Level</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading">
                                            <td colspan="4">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="claims.length == 0">
                                                <td colspan="4">There are no claimed incentives</td>
                                            </tr>
                                            <tr v-else v-for="claim,i in claims" :key="i">
                                                <th scope="row">{{ i++ }}</th>
                                                <td>{{ claim.incentive }}</td>
                                                <td>{{ claim.points }} PV</td>
                                                <td>{{ claim.date }} </td>
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
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >REGISTRATION PRODUCT SELECTION</a>
                                        </li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="collapse show" id="invoiceCard">
                            <div class="card-body p-0"> 
                                <div class="card no-b  no-r">
                                    <div class="card-body">
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
                                                        <tr v-if="products.length == 0">
                                                            <td colspan="4">There are no products</td>
                                                        </tr>
                                                        <tr v-else v-for="product,i in products" :key="i">
                                                            <td>{{ ++i }}</td>
                                                            <td>{{ product.name }}</td>
                                                            <td>{{ product.points }}</td>
                                                            <td>₦{{ product.worth }}</td>
                                                            <td>
                                                                <div class="form-check"><input class="form-check-input" type="checkbox" value="" id="cb1"></div>
                                                            </td>
                                                        </tr>
                                                    </template>															  
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
                        <div class="float-left" >
                            <div class="card-body ">
                                <div class="row column-row border-bottom">
                                    <div class="mt-2 ml-3" style="padding-right:15px">
                                        <img src="assets/img/shop1.png" width="30px" height="30px">
                                    </div>  
                                    <div class="mb-2 mt-2">
                                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Delish Healthy Chocolate Bar <br><small> ₦4,375 | 1.25PV</small></h6>	
                                    </div>	
                                </div>
                                <div class="row column-row border-bottom">
                                    <div class="mt-2 ml-3" style="padding-right:15px">
                                        <img src="assets/img/shop1.png" width="30px" height="30px">
                                    </div>  
                                    <div class="mb-2 mt-2 ">
                                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Oma Healthy Liquid Pepper <br><small> ₦5,200 | 1.50PV</small></h6>	
                                    </div>	
                                </div>
                                <div class="row column-row border-bottom">
                                    <div class="mb-2 mt-2 ml-3">
                                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Point Value </h6>											
                                    </div>	
                                    <div class="mb-2 mt-2 ml-auto mr-3">
                                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">2.75 PV</h6>											
                                    </div>
                                </div> 	
                                <div class="row column-row border-bottom">
                                    <div class="mb-2 mt-5 ml-3">
                                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Product Cost </h6>											
                                    </div>	
                                    <div class="mb-2 mt-5 ml-auto mr-3">
                                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦10,480 </h6>											
                                    </div>
                                </div> 
                                <div class="mt-3">									
                                    <input type="hidden" name="id" value="960">
                                    <button type="submit" class="btn btn-sm btn-success"><i class="icon-check-square-o mr-2"></i>Confirm</button>
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
import {mapActions,mapGetters,mapState} from 'vuex'
export default{
    name:"user-dashboard",

    data(){
        return {
            profitPoolEligible:false,
            globalProfitEligible:false
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
        }),
        
        ...mapGetters('bonusStore',['welcomeBonus',
        'equilibrumBonus','loyaltyBonus','referralBonus',
        'profitPool','globalProfit','totalBonus']),

        ...mapGetters('packageStore',['regPackage']),
        ...mapGetters('authStore',['authUser']),
        ...mapGetters('userStore',['totalPV']),
        ...mapGetters('settingStore',['setting']),
        ...mapGetters('incentiveClaimStore',['claims']),
        ...mapGetters('productStore',['products']),
    },

    created(){
        if(Object.entries(this.authUser).length == 0){
            this.getUser().then(res=>{
                this.getPackage(res.data.package_id)
                this.getBonuses(res.data.uuid)
                if(res.data.package_id == 6){
                    this.profitPoolEligible = true
                }
                if(res.data.rank_id >= 5){
                    this.globalProfitEligible = true
                }
                this.getClaims(res.data.uuid)
            })
        }else{
            this.getPackage(this.authUser.package_id)
            this.getBonuses(this.authUser.data.uuid)
            this.getClaims(this.authUser.uuid)
        }

        this.getSetting('unit_point_value');
        this.getProducts()
        
    },

    methods:{
        ...mapActions('bonusStore',['getWelcomeBonus',
        'getEquilibrumBonus','getLoyaltyBonus','getReferralBonus',
        'getProfitPool','getGlobalProfit','getPlacementBonus','getTotalBonus']),
        ...mapActions('packageStore',['getPackage']),
        ...mapActions('authStore',['getUser']),
        ...mapActions('userStore',['getTotalPVs']),
        ...mapActions('settingStore',['getSetting']),
        ...mapActions('incentiveClaimStore',['getClaims']),
        ...mapActions('productStore',['getProducts']),
        
        getBonuses(uuid){
            this.getWelcomeBonus(uuid)
            this.getEquilibrumBonus(uuid)
            this.getLoyaltyBonus(uuid)
            this.getReferralBonus(uuid)
            this.getPlacementBonus(uuid)
            this.getTotalBonus(uuid)
            this.getTotalPVs(uuid)
        }
    }

}
</script>