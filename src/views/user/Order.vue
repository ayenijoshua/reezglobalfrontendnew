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
                                
                                <div class="d-flex justify-content-center"><p class="font-weight-bold">Input order code to process the order associated with it.</p></div>
                                    <div class="form mb-3">                                     
                                        <div class="form-group col-12 m-0 ">
                                            <div class="input-group mb-2 mr-sm-2 shadow">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-shopping_cart float-left s-20 text-white "  ></i></div>
                                                </div>
                                                <input type="text" v-model="orderCode" class="form-control r-0 light s-12" placeholder="Enter Ordr code" style="background-color: transparent">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button @click="getUserOrders" type="submit" class="btn btn-sm btn-success btn-lg mr-3">
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
                            <template v-if="orderLoading">
                                <b-skeleton-table
                                    :rows="3"
                                    :columns="3"
                                    :table-props="{ bordered: true, striped: true }"
                                ></b-skeleton-table>
                            </template>

                            <template v-else>
                                <div v-if="orders.length==0" class="alert alert-warning">
                                    Please enter a valid order code to fetch order details
                                </div>
                                <div v-else>
                                    <div v-for="order,i in orders" :key="i" class="row column-row p-2" style="border-bottom: 1px solid #2E671A !important;">
                                        <template>
                                            <div class="mt-2 ml-3" style="padding-right:15px" :key="i">
                                            <img src="/assets/img/demo/products/product3.png" width="80px" height="80px">
                                            </div>  
                                            <div class="mb-2 mt-4" :key="i">
                                                <h6 class="font-weight-bold text-green s-14" style="margin: 0em; padding: 0em;">{{ order.name }} <br>
                                                    <small class="font-weight-bold"> {{order.points}}PV | Qty:{{ order.product_qty }}</small>
                                                </h6>
                                                <h6>
                                                    <small :class="['font-weight-bold', order.in_stock ? 'text-info' : 'text-danger']">Instock : {{order.in_stock}}</small>  
                                                    <small :class="['font-weight-bold', order.stock_qty>0 ? 'text-info' : 'text-danger']"> | Stock Qty : {{ order.stock_qty }}</small>
                                                </h6>	

                                            </div>	
                                            <div class="mb-2 mt-4 ml-auto mr-2" :key="i">
                                                <span class="font-weight-bold float-right text-green">₦{{ order.price.toLocaleString('en-US') }}</span>
                                            </div>
                                        </template>
                                    </div>

                                    <div class="row column-row " style="border-bottom: 1px solid #2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Point Value </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ totalPoints?.toFixed(2) }} PV</h6>											
                                        </div>
                                    </div> 	
                                    <div class="row column-row" style="background-Color:#2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">Total Price </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">₦ {{ totalPrice.toLocaleString('en-US') }}</h6>											
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center mt-4">
                                        <div>
                                            <span class="text-green" id="d1" style="font-size:10px">Pick-Up Type</span>
                                            <h6 class="font-weight-bold text-green" id="d1">{{ orders[0].claim_type }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            
                            
                            <hr>
                            <div v-if="member !== null" class="d-flex align-items-center mt-4">
                                <div>
                                    <span class="text-green" id="d1" style="font-size:10px">Username</span>
                                    <h6 class="font-weight-bold text-green" id="d1">{{ member.username }}</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Name</span>
                                    <h6 class="font-weight-bold text-green" id="d1">{{ member.first_name }} {{ member.last_name }}</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Contact</span>
                                    <h6 class="font-weight-bold text-green mb-3" id="d1">{{ member.phone }}</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Email</span>
                                    <h6 class="font-weight-bold text-green mb-3" id="d1">{{ member.email }}</h6>
                                </div>
                                <div class="mr-4 ml-auto ">
                                    <div class="avatar avatar-xl mb-3 ">
                                        <img v-if="member.photo_path"  class="user_avatar" :src="imageURL+'/'+member.photo_path" alt="User Image">
										<img v-else class="user_avatar" src="/assets/img/dummy/default_avatar1.png" alt="User Image">
									</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <hr>
                        <div v-if="orders.length !== 0" class=" mb-3 mt-3">	
                            <!---<span  class="btn btn-sm btn-success">...</span>-->								
                            <button @click="approvePurchase(purchaseId)" type="submit" class="btn btn-sm btn-success btn-lg mr-3"><i class="icon-shopping_cart mr-2"></i>Approve Order</button>
                            <button type="submit" class="btn btn-sm btn-danger "><i class="icon-cancel mr-2"></i>Cancel Order</button>                   
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
                                            <th class="font-weight-bold" scope="col">ORDER ID</th>
                                            <!-- <th class="font-weight-bold" scope="col">QTY</th>
                                            <th class="font-weight-bold" scope="col">PRICE</th> -->
                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                            <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="processedOrdersLoading==true">
                                            <td colspan="9">
                                                <b-skeleton-table
                                                    :rows="3"
                                                    :columns="9"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="vendorProcessedOrders.length==0">
                                                <td colspan="5">There are no processed Orders</td>
                                            </tr>
                                            <tr v-for="order,i in vendorProcessedOrders" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>{{ order.username }}</td>
                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                <td>{{ order.name }}</td>
                                                <td>{{ order.phone }}</td>
                                                <td>{{ order.email }}</td>
                                                <td>{{ order.pickup_type }}</td>
                                                <td>#0{{ order.id }}</td>
                                                
                                                <td><span class="badge badge-success" style="padding: 6px 10px;">{{ order.status }}</span></td>
                                                <td>{{ order.created_at }}</td>
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
import { notification } from '@/util/notification'
import {mapActions,mapGetters,mapState} from 'vuex'
export default{
    name:"user-order",

    data(){
        return {//ymCwA4hAsdNrUarA

            orderLoading:false,
            approvingOrder:false,
            orders:[],
            processedOrdersLoading:false,
            orderCode:null,
            totalPoints:0,
            totalPrice:0,
            member:null,
            purchaseId:null,
            //vendorProcessedOrders:[]

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
        ...mapGetters('productPurchaseStore',['vendorProcessedOrders']),
    },

    created(){

        if(this.vendorProcessedOrders.length == 0){
            if(this.authUser.uuid == undefined){
                this.getUser().then((res)=>{
                    this.processedOrdersLoading = true
                    this.getVendorProcessedOrders(res.data.uuid).then(()=>{
                        this.processedOrdersLoading=false
                        //this.vendorProcessedOrders = res.data.data.data
                    })
                })
            }else{
                this.processedOrdersLoading = true
                this.getVendorProcessedOrders(this.authUser.uuid).then(()=>{
                    this.processedOrdersLoading=false
                })
            }
        }
    },

    methods:{
        
        ...mapActions('authStore',['getUser']),
        ...mapActions('productPurchaseStore',['getOrders','getVendorProcessedOrders','vendorApprovePurchase']),

        getUserOrders(){
            this.orderLoading = true
            this.getOrders(this.orderCode).then((res)=>{
                if(res && res.status==200){
                    this.orders = res.data.data.products
                    this.member = res.data.data.user

                    this.totalPoints = this.orders.reduce((prev,curr)=>{
                        return prev.points + curr.points
                    })

                    this.totalPrice = this.orders.reduce((prev,curr)=>{
                        return prev.price + curr.price
                    })

                    this.purchaseId = this.orders[0].product_purchase_id
                }
                this.orderLoading = false
                
            })
        },

        approvePurchase(purchaseId){
            
            if(this.orders.length==0){
                notification.warning("You cannot proceed without a valid order code")
                return
            }

            let check = this.orders.filter((order)=>order.in_stock==false || order.stock_qty==0)

            //console.log('check',check)

            if(check.length>0){
                notification.warning("You don't have enough stock to process this order")
                return
            }

            this.approvingOrder = true
            this.vendorApprovePurchase(purchaseId).then(()=>{
                this.approvingOrder = false
            })
        }
    }

}
</script>