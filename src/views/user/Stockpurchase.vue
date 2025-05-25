<template>
    <div>
        <div class="">
		<div class="d-flex justify-content-center mt-5 mb-5">
		    <div class="col-md-6 col-sm-12">
			    <div class="card no-b shadow 1" style="background-color: transparent;">
					<div class="card-body">
						<span class="text-center text-green s-12 font-weight-bold">Select Pick-up Type</span>
						<div class="form-group m-0">
							<div  class="input-group mb-2 mr-sm-2 mb-3">
								<div class="input-group-prepend" style="">
									<div class="input-group-text" style="background-color: rgb(46, 103, 26); border: 2px solid rgb(46, 103, 26);">
										<i class="icon icon-shopping-cart float-left s-20 text-white"></i>
									</div>
								</div>
								<select required="required" class="form-control r-0 light s-12" style="background-color: #ded8c7; border: 2px solid rgb(27, 79, 114);">
									<option  value="">Select</option>
									<option  value="Stockist upgrade_pickup" style="background-color:#ded8c7">upgrade pickup</option>
									<option  value="Stockist registration_pickup" style="background-color:#ded8c7">registration pickup</option>
									<option  value="re-stock" style="background-color:#ded8c7">Monthly re-stock</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		

            <div class="row ">		
                <div class="col-md-8">
                    <div class="card no-b shadow" style="background-color:#ded8c7">
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead style="background-color:#2E671A">
                                        <tr>
                                            <th class="font-weight-bold text-white" scope="col">S/N</th>
                                            <th class="font-weight-bold text-white" scope="col">VIEW</th>
                                            <th class="font-weight-bold text-white" scope="col">PRODUCTS</th>
                                            <th class="font-weight-bold text-white" scope="col">PRICE</th>
                                            
                                            <!-- <th scope="col">Worth</th> -->
                                            <th class="font-weight-bold text-white" scope="col">QUANTITY</th>
                                            <!--<th class="font-weight-bold text-white" scope="col">SELECT</th>-->
                                            <!-- <th scope="col">Select</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading && prodLoading">
                                            <td colspan="6">
                                                <b-skeleton-table
                                                    :rows="3"
                                                    :columns="6"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="products.length == 0" class="no-b">
                                                <td class="text-center" colspan="4">There are no products</td>
                                            </tr>
                                            <template v-else>
                                                <tr  v-for="produc,i in products" :key="i" >
                                                    <td>{{ ++i }}</td>
                                                    <td class="w-10">
                                                        <img :src="imageURI(produc.image)"  height="70px" width="70px" alt="">
                                                    </td>
                                                    <td>{{ produc.name }}</td>
                                                    <td>₦ {{ produc.worth.toLocaleString("en-US") }}</td>
                                                    
                                                    <td>
                                                        <div class="">
                                                            <input :id="'prod-'+produc.id" :key="i" @change="(e)=>addToCart(e,produc.id,produc)" class="form-control" type="number" min="1"  style="background-color: transparent; border: 2px solid #2E671A;">
                                                        </div>
                                                    </td>
                                                    <!--<td> <div class="form-check"><input class="form-check-input custom-checkbox" type="checkbox" value="" id="cb1" ></div></td>-->
                                                </tr>
                                            </template>
                                        </template>    
                                    </tbody>
                                </table>
                            </div>
                              
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card  mb-3 shadow" style="background-color: transparent">
                        <div class="float-left">
                            <div class="card-body">
                                <template v-if="cartProducts.length==0">
                                    <p class="alert alert-info">
                                        There are no items in your cart
                                    </p>
                                </template>
                                <template v-else>
                                    <div v-for="prod,i in cartProducts" :key="i" class="row column-row p-2" style="border-bottom: 1px solid #2E671A !important;">
                                        <div class="mt-2 ml-3" style="padding-right:15px">
                                            <button @click="removeProduct(prod.product.id)" class="btn btn-danger">x</button>
                                        </div> 
                                        <div class="mt-2 ml-3" style="padding-right:15px">
                                            <img :src="imageURI(prod.product.image)" width="80px" height="80px">
                                        </div>  
                                        <div class="mb-2 mt-4">
                                            <h6 class="font-weight-bold text-green s-14" style="margin: 0em; padding: 0em;">{{ prod.product.name }} <br><small class="font-weight-bold"> unit price : {{prod.product.worth}} | Qty:{{ prod.qty }}</small></h6>	
                                        </div>	
                                        <div class="mb-2 mt-4 ml-auto mr-2">
                                            <span class="font-weight-bold float-right text-green">₦{{ (prod.product.worth * prod.qty)?.toLocaleString('en-US') }}</span>
                                        </div>
                                    </div>

                                    <div class="row column-row " style="border-bottom: 1px solid #2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Quantity </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ cartTotalQty }}</h6>											
                                        </div> 
                                    </div>
                                    <div class="row column-row" style="background-Color:#2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">Total Price </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">₦ {{ cartTotalPrice?.toLocaleString('en-US') }}</h6>											
                                        </div>
                                    </div>
                                     <!-- Cancel Order Button -->
                                    <div class="row column-row" >
                                        <div class="ml-auto mr-2">
                                            <button @click="cancelOrder" class="btn btn-sm btn-danger  mt-2" ><i class="icon-cancel mr-2"></i> Cancel Selection</button>
                                            <button @click="stockistPurchase"  type="submit" class="btn btn-sm btn-success mt-2 mr-3 ml-3"><i class="icon-shopping-cart mr-2"></i>Submit Order</button>
                                        </div>    
                                    </div>
                                </template>
                                
                                <template>
                                    <b-card v-if="prevMonthSaleLoading==true">
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <div v-else class="row column-row border-bottom">
                                        <div class="mb-2 mt-5 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Previus Month Sales </h6>											
                                        </div>	
                                        <div class="mb-2 mt-5 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦{{ Number(stockistPrevMonthSales??0)?.toLocaleString('en-US') }} </h6>											
                                        </div>
                                    </div>
                                </template>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <br>

    
           <div v-if="selectedPaymentType === 'offline'" class="row"> 
               <!--- <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card shadow rounded" style="background-color: #2E671A">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center">
                                        <div class="text-center">  
                                            <img src="/assets/img/bank-transfer.png" width="auto" height="100px">
                                        </div>
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
                </div>  --> 

                <div class="col-md-12 mt-5">
                    <div class="card shadow" style="background-color: transparent">
                        <div class="card-body" >
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            <div v-if="selectedPaymentType === 'online'" class="row mb-2 mt-2">
                <div class="col-md-12">
                    <div class="d-flex flex-wrap justify-content-center mt-2">
                        <div class="col-md-6 col-sm-12"> 
                            <div class="card  mb-3 shadow1" style="background-color: #2E671A">                       
                                <div class="d-flex flex-wrap justify-content-center">
                                    <div class="text-center mt-5 mb-5" style="padding-bottom:10px; padding-top: 20px">
                                        <img  src="/assets/img/pay_options1.png" width="300px">
                                        <h6 class="font-weight-bold text-white" >Proceed To Payment<br><small>Kindly complete your  Product Purchase by clicking the button Below</small></h6>
                                        <template v-if="paySubmitting">
                                            <a class="btn btn-sm btn-custom mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>...Processing</a>
                                        </template>
                                        <a v-else class="btn btn-sm btn-custom mb-3 mt-2 btn-lg" @click="makePayment"><i class="icon icon-credit-card"></i>Pay Now</a>
                                    </div>
                                </div>	   
                            </div>
                        </div>    
                    </div> 
                </div> 
            </div>          
        </div>

        <modal modalId="pay"  modalTitle="Make Payment" modalSize="md" :link="payLink">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="timer flex-wrap d-flex justify-content-center"  style="padding-top: 30px;">
                        <p class="text-center font-weight-bold">Please, Ensure you complete your transaction within 2 minutes.</p>
                        <VueCountdown :time="((gatewayTimeout))">
                            <template slot-scope="props">
                                <div style="width: 200px !important; padding-right:20px; padding-left:20px; padding-top:20px; padding-bottom:20px;" id="minutes" class="align-items-center flex-column d-flex justify-content-center">{{ props.minutes }}&nbsp;&nbsp;MINUTES</div>
                                <div style="width: 200px !important; padding-right:20px; padding-left:20px; padding-top:20px; padding-bottom:20px;" id="seconds" class="align-items-center flex-column d-flex justify-content-center">{{ props.seconds }}&nbsp;&nbsp;SECONDS</div>
                            </template>
                        </VueCountdown>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <iframe id='ifr' frameborder="0" :src="payLink" scrolling="no" width="400" height="500"></iframe>
                </div>
            </div>
        </modal>

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
import modal from '@/components/Modal.vue'
import VueCountdown from '@chenfengyuan/vue-countdown';
import { notification } from '@/util/notification';
export default{
    name:"user-repurchase",

    components:{
        modal,
        VueCountdown
    },

    data(){
        return {
            product_ids:[],
            cartProducts:[],
            totalWorth:0,
            totalPv:0,
            
            cartPoints:{},
            cartPrices:{},
            cartQtys:{},

            cartTotalPoints:0,
            cartTotalPrice:0,
            cartTotalQty:0,

            prodLoading:false,
            paySubmitting:false,
            payLink:null,

            selectedPaymentTypes:["offline","online"],
            selectedPaymentType:"",
            gatewayTimeout:1000*60*0.5,
            prevMonthSaleLoading:false
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

        ...mapGetters('authStore',['authUser']),
        ...mapGetters('settingStore',['settings']),
        ...mapGetters('productStore',['products']),
        ...mapGetters('stockistStore',['stockist']),
        ...mapGetters('productPurchaseStore',['stockistPrevMonthSales']),
    },

    created(){
        

        if(this.stockist.id == undefined){
            if(this.authUser.uuid == undefined){
                this.getUser().then((res)=>{
                    this.stockistLoading = true
                    this.fetchStockistByUuid(res.data.uuid).then(()=>{
                        this.stockistLoading=false
                        this.form = Object.assign({},this.stockist) 
                    })
                    
                    if(this.stockistPrevMonthSale == null){
                        this.prevMonthSaleLoading = true
                        this.fetchStockPrevMonthSales(res.data.uuid).then(()=>this.prevMonthSaleLoading = false)
                    }
                })
            }else{
                this.stockistLoading = true
                this.fetchStockistByUuid(this.authUser.uuid).then(()=>{
                    this.stockistLoading=false
                    this.form = Object.assign({},this.stockist)
                })

                if(this.stockistPrevMonthSale == null){
                    this.prevMonthSaleLoading = true
                    this.fetchStockPrevMonthSales(this.authUser.uuid).then(()=>this.prevMonthSaleLoading = false)
                }
            }
        }
        
        if(this.products.length == 0){
            this.prodLoading = true
            this.getActiveProducts().then(()=>this.prodLoading = false)
        }
    
    },

    methods:{

        addToCart(e, id, product) {
            //console.log(prod)
            if(e.target.value < 1){
                notification.warning("One of your selection has quantity less than 1")
                return
            }
            let data = {qty:e.target.value,id:product.id,price:product.worth,product:product}

            let pv = data.qty * product.points
            let amt = data.qty * product.worth;
            let qty = Number(data.qty);

            this.cartPoints = { ...this.cartPoints, [data.id]: pv };
            this.cartPrices = { ...this.cartPrices, [data.id]: amt };
            this.cartQty = {...this.cartQty, [data.id]:qty};

            let pvs = Object.values(this.cartPoints)
            let sum = pvs.reduce((res,val)=>res+val)
            this.cartTotalPoints = sum

            let prices = Object.values(this.cartPrices)
            let sumPrice = prices.reduce((res,val)=>res+val)
            this.cartTotalPrice = sumPrice

            let qtys = Object.values(this.cartQty)
            let sumQty = qtys.reduce((res,val)=>res+val)
            this.cartTotalQty = sumQty

            let index = this.cartProducts.findIndex(ele=>ele.id == product.id)
            if(index !== -1){
                this.cartProducts[index].qty = data.qty
                this.cartProducts[index].price = product.worth * data.qty
            }else{
                this.cartProducts.push(data)
            }
        },
    
        ...mapActions('authStore',['getUser']),
        ...mapActions('settingStore',['getSetting','all']),
        ...mapActions('productStore',['getActiveProducts']),
        ...mapActions('productPurchaseStore',['pushStockistPurchase','fetchStockPrevMonthSales']),
        ...mapActions('paymentStore',['initiate','verify','initiatePayment']),
        ...mapActions('stockistStore',['fetchStockistByUuid']),

        stockistPurchase(){
            //let ele = document.getElementById("stock-purchase-form")
            //let form  = new FormData(ele)
            // form.append("products",this.cartProducts)
            // form.append("total_price",this.cartTotalPrice)
            // form.append("total_quantity",this.cartTotalQty)
            // form.append("total_points",this.cartTotalPoints)

            let form = {
                products:this.cartProducts,
                total_price:this.cartTotalPrice,
                total_quantity:this.cartTotalQty,
                total_points:this.cartTotalPoints,
                pickup_type:'purchase'
            }

            this.pushStockistPurchase({uuid:this.authUser.uuid,data:form})
        },

        makePayment(){
            if(this.cartProducts.length == 0){
                notification.warning("There are no Items in your cart")
                return
            }

            this.paySubmitting = true
            let data = {amount:this.cartTotalPrice,
                description:"Stock purhcase",
                txn_source:"stockist_product_purchase",
                is_upgrade:0,
                stockist_id:this.stockist.id,
                total_price:this.cartTotalPrice,
                total_quantity:this.cartTotalQty,
                total_points:this.cartTotalPoints,
                products:this.cartProducts
                }

            this.initiatePay(data)
        },


        initiatePay(data){
            var that = this
            this.initiatePayment(data).then(res=>{
                console.log(res)
                var result = res
                if(res.status == 200){
                    //if(that.productService.name == 'paystack'){
                        that.payLink = res.data.data.data.authorization_url
                        that.$bvModal.show('pay')
                        
                        setTimeout(() => {
                            that.verify({reference:result.data.data.data.reference}).then(resp=>{
                                if(resp.status == 200 && (resp.data.success == true || resp.data.success == 'true')){
                                    //vm.$router.push({name:'user-dashboard'})
                                    notification.success("Payment Verified successfully")
                                    that.$bvModal.hide('pay')
                                    this.paySubmitting = false
                                }else{
                                    notification.info("Unable to verify payment")
                                    that.$bvModal.hide('pay')
                                    this.paySubmitting = false
                                }
                            }).catch(function(err) {
                                console.log("Some specific work failed", err);
                                that.$bvModal.hide('pay')
                                this.paySubmitting = false
                            });
                        }, this.gatewayTimeout);
                    //}
                }
                this.paySubmitting = false
            }).catch(function(err) {
                console.log("Error initating payment", err);
                that.$bvModal.hide('pay')
                this.paySubmitting = false
            });
        },

        imageURI(img){
            return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/demo/products/product3.png';
        },

        removeProduct(id){
            let prodIndex = this.cartProducts.findIndex((ele)=>ele.id == id)
            if(prodIndex != -1){
                this.cartProducts.splice(prodIndex,1);
                this.cartPrices = { ...this.cartPrices, [id]: 0 };
                let prices = Object.values(this.cartPrices)
                let sumPrice = prices.reduce((res,val)=>res+val)
                this.cartTotalPrice = sumPrice

                this.cartQty = {...this.cartQty, [id]:0};
                let qtys = Object.values(this.cartQty)
                let sumQty = qtys.reduce((res,val)=>res+val)
                this.cartTotalQty = sumQty

                //this.cartQty -= 1
                document.getElementById('prod-'+id).value = 0
                //this.$refs['prod-'+id].value=0
            }
        },

        cancelOrder(){
            this.cartProducts = [];
            this.cartTotalPrice = 0;
            this.cartTotalPoints = 0;
            this.cartQty = {}
            this.cartTotalQty = 0;
        },
       
    }



}
</script>