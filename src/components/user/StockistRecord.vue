<template>
    <div>
        <div class="">
            <div class="row">
                <div class="col-lg-4">
                    <b-card v-if="statsLoading==true">
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
                        <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> {{ stats.package }}</span> 
                    </div>
                </div>
                <div class="col-lg-4">
                    <b-card v-if="statsLoading==true">
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
                        <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> {{ stats.rebate }}</span> 
                    </div>
                </div>
                <div class="col-lg-4">
                    <b-card v-if="statsLoading==true">
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
                        <span class="s-40 my-3 font-weight-lighter" style="font-size:35px"> ₦ {{ stats.rebate_bonus }}</span> 
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
                                    <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Purchase Transactions (Stockist Products Ordered)</span>
                                </div> 
                            </div>
                            <div class="" > 
                                <div class="card shadow" style="background-color: transparent">
                                    <div class="card-body" >
                                        
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
                                            <table class="table table-hover">
                                                <thead >
                                                    <tr>
                                                        <th class="font-weight-bold" scope="col">S/N</th>
                                                        <th class="font-weight-bold" scope="col">PRODUCT</th>
                                                        <th class="font-weight-bold" scope="col">ORDER ID</th>
                                                        <th class="font-weight-bold" scope="col">Qty</th>
                                                        <th class="font-weight-bold" scope="col">TOTAL PRICE</th>
                                                        <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                                        <th class="font-weight-bold" scope="col">STATUS</th>
                                                        <!-- <th scope="col">Select</th> -->
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-if="stockDetailsLoading==true">
                                                        <td colspan="7">
                                                            <b-skeleton-table
                                                                :rows="3"
                                                                :columns="4"
                                                                :table-props="{ bordered: true, striped: true }"
                                                            ></b-skeleton-table>
                                                        </td>
                                                    </tr>
                                                    <template v-else>
                                                        <tr v-if="stockDetails.lenght==0">
                                                            <td colspan="4">There are no purchases</td>
                                                        </tr>
                                                        <template v-else>
                                                            <tr v-for="produc,i in stockDetails" :key="i">
                                                                <td>{{ ++i }}</td>
                                                                <td>{{ produc.name }}</td>
                                                                <td>#0{{ produc.product_purchase_id }}</td>
                                                                <td>{{ produc.product_qty }}</td>
                                                                <td>₦ {{ produc.price }}</td>
                                                                <td>{{ produc.created_at }}</td>
                                                                <td><span :class="['badge ', produc.status=='processing' ? 'badge-info' : produc.status=='approved' ? 'badge-success' : 'badge-danger']" style="padding: 6px 10px;">{{ produc.status }}</span></td>
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
                                        <br>
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
                                    <thead>
                                        <tr>
                                            <th class="font-weight-bold" scope="col">S/N</th>
                                            <th class="font-weight-bold" scope="col">PRODUCT</th>
                                            <th class="font-weight-bold" scope="col">PRODUCT PRICE</th>
                                            <th class="font-weight-bold" scope="col">QUANTITY</th>      
                                            <th class="font-weight-bold" scope="col">STOCK STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="stockLoading==true">
                                            <td colspan="5">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="stocks.length == 0">
                                                <td colspan="5">There are no stocks</td>
                                            </tr>
                                            <tr v-for="stock,i in stocks" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>{{ stock.name }}</td>
                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                <td>₦{{ stock.cost_price }}</td>
                                                <td>{{ stock.quantity }}</td>
                                                <td><span :class="['badge', stock.in_stock ? 'badge-success' : 'badge-danger']" style="padding: 6px 10px;">{{ stock.in_stock }}</span></td>
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
                            <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Purchase History (Order History)</span>
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
                                            <th class="font-weight-bold" scope="col">Order ID</th>
                                            <th class="font-weight-bold" scope="col">TOTAL PRODUCTS PURCHASED</th>
                                            <th class="font-weight-bold" scope="col">TOTAL PURCHASE PRICE</th>
                                            <th class="font-weight-bold" scope="col">PAYMENT MODE</th> 
                                            <th class="font-weight-bold" scope="col">Status</th>     
                                            <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="purchasesLoading==true">
                                            <td colspan="5">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="stockistPurchases.length ==0">
                                                <td colspan="5">There are no purchases</td>
                                            </tr>
                                            <template v-else>
                                                <tr v-for="purchase,i in stockistPurchases" :key="i">
                                                    <th scope="row">{{ ++i }}</th>
                                                    <th scope="row">#0{{ purchase.id }}</th>
                                                    <td>{{ purchase.total_quantity }}</td>
                                                    <td>₦{{ purchase.total_price }}</td>
                                                    <td>{{ purchase.payment_receipt == null ? "Debit Card" : "Manual Upload" }}</td>
                                                    <td><span :class="['badge ', purchase.status=='processing' ? 'badge-info' : purchase.status=='approved' ? 'badge-success' : 'badge-danger']">{{ purchase.status }}</span></td>
                                                    <td>{{ purchase.created_at }}</td>
                                                </tr>
                                            </template>
                                            
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
                                        <tr v-if="rebateLoading==true">
                                            <td colspan="5">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="rebateEarnings.lenght==0">
                                                <td colspan="5">There are no rebate earnings</td>
                                            </tr>
                                            <tr v-for="rebate,i in rebateEarnings" :key="i">
                                                <th scope="row">{{ ++i }}</th>
                                                <td>{{ rebate.created_at }}</td>
                                                <td>₦{{ rebate.value }}</td>
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
    name:"admin-stockist-record",

    props:{
        user:{
            type:Object,
            required:true
        }
    },

    data(){
        return {
            statsLoading:false,
            stockLoading:false,
            purchasesLoading:false,
            rebateLoading:false,
            stockDetailsLoading:false,
            stocks:[],
            stats:{}
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting,
        }),

        ...mapGetters('packageStore',['regPackage']),
        ...mapGetters('authStore',['authUser']),
        ...mapGetters('stockistStore',['stockist',"rebateEarnings"]),
        ...mapGetters("productPurchaseStore",["stockistPurchases","stockDetails"])
    },

    created(){
            
        // this.stockistLoading = true
        // this.fetchStockistByUuid(this.user.uuid).then(()=>{
        //     this.stockistLoading=false
        //     //this.form = Object.assign({},this.stockist)
        // })

        this.stockLoading = true
        this.fetchStock(this.user.uuid).then((res)=>{
            this.stocks = res.data.data
            this.stockLoading = false
        })

        this.statsLoading = true
        this.fetchStats(this.user.uuid).then((res)=>{
            this.stats = res.data.data
            this.statsLoading = false
        })

        this.purchasesLoading = true
        this.getStockistPurchases(this.user.uuid).then(()=>{
            //this.stocks = res.data.data
            this.purchasesLoading = false
        })

        this.rebateLoading = true
        this.fetchRebateEarnings(this.user.uuid).then(()=>{
            //this.stocks = res.data.data
            this.rebateLoading = false
        })

        this.stockDetailsLoading = true
        this.fetchStockDetails(this.user.uuid).then(()=>this.stockDetailsLoading=false)
    
    },

    methods:{
        
        ...mapActions('packageStore',['getPackage']),
        ...mapActions('authStore',['getUser']),
        ...mapActions("stockistStore",["fetchStockistByUuid","fetchStock","fetchStats","fetchRebateEarnings"]),
        ...mapActions("productPurchaseStore",["getStockistPurchases","fetchStockDetails"]),
        //...mapActions('stockistStockStore')
        
    }



}
</script>