<template>
    <div>
        <div class="">     
           <div class="d-flex justify-content-center mt-5 mb-3"> <!-- Centering wrapper added -->
                <div class="col-md-6 col-sm-12"> 
                    <div class="card no-b shadow 1" style="background-color: transparent;">
                        <div class="card-body">
                            <span class="text-center text-blue s-12 font-weight-bold">Select Pick-up Type</span>
                            <div class="form-group m-0">                       
                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-shopping-cart float-left s-20 text-white" ></i></div>
                                    </div>
                                    <select required v-model="selectedOrderType" @change="getPickupAmount" class="form-control r-0 light s-12" style="background-color: transparent; border: 2px solid #1b4f72;">
                                        <template v-for="orderType,i in orderTypes">
                                            <option :value="orderType" :key="i">{{orderType == '' ? 'Select' : orderType.replace('_'," ")}}</option>
                                        </template>														   
                                    </select>
                                </div>
                            </div>
                        </div>     
                    </div>       
                </div>
            </div> 


            <!--<div  v-if="selectedOrderType === 'upgrade_pickup'" class="d-flex justify-content-center mt-2 mb-3"> Centering wrapper added
                <div class="col-md-6 col-sm-12"> 
                    <div class="row row-column">
                        <div class="col-md-6 col-sm-12"> 
                            <div class="form-group m-0">                       
                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-vcard green-text float-left s-20 text-white" ></i></div>
                                    </div>
                                    <input  type="text" name="text" value="" id="inlineFormInputGroupUsername2" placeholder="Previous Package" class="form-control r-0 light s-12" style="background-color: transparent;  border: 2px solid #2E671A;">
                                </div>
                            </div>
                        </div> 
                        <div class="col-md-6 col-sm-12"> 
                            <div class="form-group m-0">                       
                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-vcard green-text float-left s-20 text-white" ></i></div>
                                    </div>
                                    <input  type="text" name="text" value="" id="inlineFormInputGroupUsername2" placeholder="Current Package" class="form-control r-0 light s-12" style="background-color: transparent;  border: 2px solid #2E671A;">
                                </div>
                            </div>
                        </div>     
                    </div>            
                </div>
            </div>-->
            
            
            <div class="row mb-5">
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
                                                <!-- <th class="font-weight-bold text-white" scope="col">POINT VALUE</th> -->
                                                <!-- <th scope="col">Worth</th> -->
                                                <th class="font-weight-bold text-white" scope="col">QUANTITY</th>
                                                <!-- <th class="font-weight-bold text-white" scope="col">SELECT</th> -->
                                                <!-- <th scope="col">Select</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="prodLoading">
                                                <td colspan="7">
                                                    <b-skeleton-table
                                                        :rows="3"
                                                        :columns="4"
                                                        :table-props="{ bordered: true, striped: true }"
                                                    ></b-skeleton-table>
                                                </td>
                                            </tr>
                                            <template v-else>
                                               <tr v-if="products.length == 0" class="no-b">
                                                    <td colspan="7">There are no products</td>
                                                </tr>
                                                <template v-else>
                                                    <tr  v-for="produc,i in products" :key="i" >
                                                        <td>{{ ++i }}</td>
                                                        <td class="w-10">
                                                            <img :src="imageURL(produc.image)"  height="50" width="50" alt="">
                                                        </td>
                                                        <td>{{ produc.name }}</td>
                                                        <td>₦ {{Number(produc.worth)?.toLocaleString('en-US')}}</td>
                                                        <!-- <td>{{ produc.points }}</td> -->
                                                        <td>
                                                            <div class="">
                                                                <input :id="'prod-'+produc.id" :key="i" @change="(e)=>logClaim2(e,produc.id,produc)" class="form-control" type="number" min="1"  style="background-color: transparent; border: 2px solid #2E671A;">
                                                            </div>
                                                        </td>
                                                        <!-- <td> <div class="form-check"><input class="form-check-input custom-checkbox" type="checkbox" value="" id="cb1" ></div></td> -->
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
                                <div class="card-header">Cart History</div>
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
                                            <img :src="imageURL(prod.product.image)" width="80px" height="80px">
                                        </div>  
                                        <div class="mb-2 mt-4 ">
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
                                        <div v-if="selectedOrderType != 'repurchase_pickup'" class="ml-auto mr-2">
                                            <button @click.prevent="submitOrder()" class="btn btn-sm btn-success  mt-2"><i class="icon-mark mr-2"></i> Submit Selection</button>
                                        </div> 
                                        <div class="ml-auto mr-2">
                                            <button @click.prevent="cancelOrder()" class="btn btn-sm btn-danger  mt-2"><i class="icon-cancel mr-2"></i> Cancel Selection</button>
                                        </div>     
                                    </div>
                                    <br/>
                                    <template v-if="selectedOrderType=='registration_pickup' || selectedOrderType=='upgrade_pickup'">
                                        <b-card v-if="packageLoading==true || pickupAmountLoading==true">
                                            <b-skeleton width="85%"></b-skeleton>
                                            <b-skeleton width="55%"></b-skeleton>
                                            <b-skeleton width="70%"></b-skeleton>
                                        </b-card>
                                        <div v-else class="row column-row border-bottom">
                                            <div class="mb-2 mt-5 ml-3">
                                                <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ pickupAmountType }} </h6>											
                                            </div>	
                                            <div class="mb-2 mt-5 ml-auto mr-3">
                                                <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦{{ Number(pickupAmount)?.toLocaleString('en-US') }} </h6>											
                                            </div>
                                        </div>
                                    </template>
                                </template>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-md-12">
                    <div class="card mr-3 shadow1" style="background-color: transparent">
                        <div class="card-body">
                            <div calss="card-header">Available Stockists</div>
                            <div class="form-row" style="overflow-x:auto;">
                                <div class="d-flex justify-content-end mb-2">
                                    <input v-model="search.search"
                                        class="form-control mr-2" 
                                        type="text" 
                                        placeholder="Search stockists..." 
                                        style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"
                                    />
                                    <span v-if="searching==true" class="btn text-white" style="background-Color:#2E671A">...</span>
                                    <button v-else @click="searchStockist" class="btn text-white" style="background-Color:#2E671A" >
                                        <i class="icon-search"></i>
                                    </button>
                                </div>
                                <table class="table table-hover">
                                    <thead  style="border-top: 1px solid #2E671A !important;">
                                        <tr>
                                            <th class="font-weight-bold" scope="col">S/N</th>
                                            <th class="font-weight-bold" scope="col">STOCKIST NAME</th>
                                            <th class="font-weight-bold" scope="col">ADDRESS</th>
                                            <th class="font-weight-bold" scope="col">STATE</th>
                                            <th class="font-weight-bold" scope="col">CONTACT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="stockistsLoading==true">
                                            <td colspan="5">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="5"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <template v-if="stockists.length == 0">
                                                <tr>
                                                    <td colspan="5">
                                                        <div>Ther are no stockists</div>
                                                    </td>
                                                </tr>
                                            </template>
                                            <template v-else v-for="stockist,i in stockists">
                                                <tr :key="i">
                                                    <td>{{ (stockistsPerPage * (stockistsCurrentPage - 1)) + ( ++i) }}</td>
                                                    <td>{{ stockist.store_name }}</td>
                                                    <td>{{ stockist.store_address }}</td>
                                                    <td>{{ stockist.store_state }}</td>
                                                    <td>{{ stockist.store_phone }}</td>
                                                </tr>
                                            </template>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                            <BasePaginator v-if="stockistsAction" :action="stockistsAction" :current_page="stockistsCurrentPage" :last_page="stockistsLastPage" :total_pages="stockistsTotalPages" :per_page="stockistsPerPage" :type="''"></BasePaginator>
                        </div>
                        <br>
                    </div>
				</div>
            </div>
                    
            <!--<div class="row mb-2 mt-2" v-if="selectedOrderType === 'registration_pickup' || selectedOrderType === 'upgrade_pickup'">
                <div class="col-md-12">
                    <div class="d-flex flex-wrap justify-content-center mt-2">
                        <div class="m-3">							
                            <button  type="submit" class="btn btn-sm btn-success mr-3 "><i class="icon-shopping-cart mr-2"></i>Create Your Order</button>
                            <button  type="submit" class="btn btn-sm btn-danger "><i class="icon-cancel mr-2"></i>Cancel Order</button>                   
                        </div> 
                    </div>	
                </div>
            </div>-->	

            <div class="row mt-5 mb-5" v-if="selectedOrderType === 'repurchase_pickup'">               
                <div class="col-md-6">
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
                <div class="col-md-6">
                    <div class="card mr-3 shadow1 " style="background-color: transparent">
                        <div class="d-flex flex-wrap justify-content-center">
                            <div class="text-center">
                                <img class=" mt-3" src="/assets/img/wallet4a.png" width="auto" height="150px">
                                <h1 v-if="walletBalanceLoading==true" class="font-weight-bold text-blue" style="margin: 0em; padding: 0em;">...loading</h1>
                                <h1 v-else class="font-weight-bold text-blue" style="margin: 0em; padding: 0em;">₦{{ walletBalance?.toLocaleString('en-US') }}</h1>
                                <small class=" font-weight-bold s-10 text-blue" style="margin: 0em; padding: 0em;" >Current Wallet Available Balance</small><br>
                                <a v-if="payingWithWallet==true" class="btn btn-sm btn-success mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>...Processing</a>
                                <a v-else class="btn btn-sm btn-success mb-3 mt-2 btn-lg" @click="payManually"><i class="icon icon-credit-card"></i>Pay with Wallet</a>
                            </div>    
                        </div>    
                    </div>
                </div>                                  
            </div>

            <div class="row mt-4" style="padding-top: 50px">
                <div class="col-md-12">
                    <div class="card shadow-lg mb-3" style="background-color: transparent">
                        <div class="card-body">
                            <div calss="card-header">Purchase History</div>
                            <div class="d-flex justify-content-left mb-2">
                                <!-- <input 
                                    class="form-control mr-2" 
                                    type="text" 
                                    placeholder="Search..." 
                                    style="width: 250px; background-color: transparent; border: 2px solid #2E671A !important;"/>
                                <button class="btn text-white" style="background-Color:#2E671A" >
                                    <i class="icon-search"></i>
                                </button> -->
                            </div>
                            <div class="table-responsive">
                                <table id="example2" class="table table-hover bordered data-tables" data-options='{ "paging": false; "searching":false}' >
                                    <thead >
                                        <tr>
                                            <th class="font-weight-bold" scope="col">S/N</th>
                                            <th class="font-weight-bold" scope="col">PICK-UP TYPE</th>
                                            <th class="font-weight-bold" scope="col">STOCKIST NAME</th>
                                            <th class="font-weight-bold" scope="col">LOCATION</th>     
                                            <th class="font-weight-bold" scope="col">STATE</th>
                                            <th class="font-weight-bold" scope="col">CONTACT</th>
                                            <th class="font-weight-bold" scope="col">Order ID</th>
                                            <th class="font-weight-bold" scope="col">Total QTY</th>
                                            <th class="font-weight-bold" scope="col">Total PRICE</th>
                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                            <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                            <th class="font-weight-bold" scope="col">View Order Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="purchasesLoading==true">
                                            <td colspan="11">
                                                <b-skeleton-table
                                                    :rows="5"
                                                    :columns="11"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <template v-if="userPurchases.length == 0">
                                                <tr>
                                                    <td colspan="11">
                                                        <div>Ther are no orders</div>
                                                    </td>
                                                </tr>
                                            </template>
                                            <template v-else v-for="purchase,i in userPurchases">
                                                <tr :key="i">
                                                    <td>{{ (userPurchasesPerPage * (userPurchasesCurrentPage - 1)) + ( ++i) }}</td>
                                                    <td>{{ purchase.pickup_type }}</td>
                                                    <td>{{ purchase.stockist_name??'N/A' }}</td>
                                                    <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                    <td>{{ purchase.stockist_address??'N/A' }}</td>
                                                    <td>{{ purchase.stockist_state??'N/A' }}</td>
                                                    <td>{{ purchase.stockist_phone??'N/A' }}</td>
                                                    <td>#{{ purchase.id }}</td>
                                                    <td>{{ purchase.total_quantity }}</td>
                                                    <td>₦{{ purchase.total_price.toLocaleString("en-US") }}</td>
                                                    <td><span class="badge badge-success" style="padding: 6px 10px;">{{ purchase.status }}</span></td>
                                                    <td>{{ purchase.created_at }}</td>
                                                    <td><span class="badge badge-info" v-b-modal.order-code @click="setOrder(purchase.id)">view</span></td>
                                                </tr>
                                            </template>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                            <BasePaginator v-if="userPurchasesAction" :action="userPurchasesAction" :current_page="userPurchasesCurrentPage" :last_page="userPurchasesLastPage" :total_pages="userPurchasesTotalPages" :per_page="userPurchasesPerPage" :type="authUser.uuid"></BasePaginator>
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

        <modal modalId="order-code" modalTitle="View Order Code" modalSize="md" :link="payLink">
            <form @submit.prevent="authorize">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="form-group">
                            <input type="password" v-model="orderCodeForm.password" class="form-control form-control-lg no-b" placeholder="Password">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <span v-if="orderCodeFetching" class="btn btn-success btn-sm btn-block">...</span>
                        <input v-else type="submit" class="btn btn-success btn-sm btn-block" value="Authorize"/>
                    </div>
                </div>
                <br/>
                <div>
                    <h2>Enter password to view code</h2>
                    <h3 v-if="orderCodeFetching==true">...loading</h3>
                    <h3 v-else>Order Code : {{ orderCode }} </h3>
                </div>
            </form>
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
.table td, .table th {
    vertical-align: middle;
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}

.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #bdc3c7 ;
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
import { mapActions, mapGetters, mapState } from "vuex";
import { notification } from "@/util/notification";
import modal from '@/components/Modal.vue'
import VueCountdown from '@chenfengyuan/vue-countdown';
import BasePaginator from '@/components/BasePaginator.vue';

export default {
  name: "user-repurchase",

  components:{
    modal,
    VueCountdown,
    BasePaginator
 },

  data() {
    return {
      
      cartProducts: [],
      totalWorth: 0,
      totalPv: 0,
      productClaimStatus: "Unclaimed",
      guestEmail: null,
      cartPoints: {},
      cartPrices:{},
      cartTotalPoints: 0,
      cartTotalPrice: 0,
      cartTotalQty:0,
      cartQty:{},

      orderTypes : ["","upgrade_pickup","registration_pickup","repurchase_pickup"],

      selectedOrderType: "", // Tracks the selected value

      prodClaimLoading: false,
      prodLoading: false,
      incClaimLoading: false,
      incLoading: false,

      totalPVLoading: false,

      paySubmitting:false,
      payLink:null,
      gatewayTimeout:1000*60*0.5,
      walletBalanceLoading:false,
      payingWithWallet:false,
      stockistsLoading:false,
      search:{search:null},
      searching:false,
      purchasesLoading:false,
      packageLoading:false,

     pickupAmount:null,
     pickupAmountType:null,
     pickupAmountLoading:false,
     orderCodeFetching:false,
     orderCodeForm:{
        password:null,
        order_id:null
     },
     orderCode:null
    };
  },

  computed: {
    ...mapState({
      loading: (state) => state.loading,
      submitting: (state) => state.submitting,
    }),

    ...mapGetters("packageStore", ["regPackage"]),
    ...mapGetters("authStore", ["authUser"]),
    ...mapGetters("settingStore", ["settings"]),
    
    ...mapGetters("productStore", ["products"]),
    ...mapGetters("productPurchaseStore",["userPurchases",'userPurchasesAction','userPurchasesState',
    'userPurchasesCurrentPage','userPurchasesLastPage','userPurchasesPerPage','userPurchasesTotalPages']),
    ...mapGetters('bonusStore',['walletBalance']),
    ...mapGetters('stockistStore',['stockists','stockistsAction','stockistsCurrentPage','stockistsLastPage','stockistsPerPage','stockistsTotalPages']),
    ...mapGetters('packageStore',['regPackage'])
   
  },

  created() {
    
    if(this.authUser.uuid == undefined){
        this.getUser().then((res)=>{
            this.purchasesLoading = true
            this.getUserPurchases({type:res.data.uuid,page:1}).then(()=>this,this.purchasesLoading=false)
            this.walletBalanceLoading = true
            this.getWalletBalance(res.data.uuid).then(()=>this.walletBalanceLoading = false)
            this.packageLoading = true
            this.getPackage(res.data.reg_package_id).then(()=>this.packageLoading=false)
        });
    }else{
        if(this.userPurchases.length==0){ 
            this.purchasesLoading = true
            this.getUserPurchases({type:this.authUser.uuid,page:1}).then(()=>this.purchasesLoading=false)
            this.getWalletBalance(this.authUser.uuid).then(()=>this.walletBalanceLoading = false)
            this.packageLoading = true
            this.getPackage(this.authUser.reg_package_id).then(()=>this.packageLoading=false)
        }
    }

    if (this.products.length === 0) {
      this.prodLoading = true;
      this.getActiveProducts().then(() => (this.prodLoading = false));
    }

    if (this.stockists.length == 0) {
        this.stockistsLoading = true
        this.getStockists({page:1}).then(()=>this.stockistsLoading = false)
    }

  },

  methods: {
    
    logClaim2(e, id, product) {
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

    submitOrder(){
        if(this.cartProducts.length==0){
            notification.warning("There are no selected products")
            return
        }

        if(!this.selectedOrderType){
            notification.warning("Order type not selected")
            return
        }

        if(this.selectedOrderType == 'registration_pickup'){
            if(this.cartTotalPrice > this.regPackage.pickup_amount){
                notification.warning("Total selected product price is higher than pickup amount")
                return
            }
        }

        if(this.selectedOrderType == 'upgrade_pickup'){
            //this.getPackage()
            if(this.cartTotalPrice > this.pickupAmount){
                notification.warning("Total selected product price is higher than pickup amount")
                return
            }
        }

       let data =  {
            "products":this.cartProducts,
            "total_price":this.cartTotalPrice,
            "total_quantity":this.cartTotalQty,
            "pickup_type":this.selectedOrderType,
            "total_points":this.cartTotalPoints
        }

       this.userPurchase({uuid:this.authUser.uuid,reqData:data}).then(()=>{
         this.getUserPurchases(this.authUser.uuid)
       })

    },

    cancelOrder(){
        this.cartProducts = [];
        this.cartTotalPrice = 0;
        this.cartTotalPoints = 0;
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

    ...mapActions("productPurchaseStore",["userPurchase","getUserPurchases","fetchOrderCode"]),
    ...mapActions("settingStore", ["getSetting", "all"]),
    ...mapActions("productStore", ["getActiveProducts"]),
    ...mapActions('authStore',['getUser']),
    ...mapActions('userStore',['fetchUpgradeData']),
    ...mapActions("stockistStore",["getStockists","searchStockists"]),
    ...mapActions('paymentStore',['initiate','verify','initiatePayment']),
    ...mapActions("withdrawalStore",["payWithWallet"]),
    ...mapActions('bonusStore',['getWalletBalance']),
    ...mapActions('packageStore',['getPackage']),
  
    makePayment(){
        if(this.cartProducts.length == 0){
            notification.warning("There are no Items in your cart")
            return
        }

        this.paySubmitting = true
        let data = {amount:this.cartTotalPrice,
            description:"Member purhcase",
            txn_source:"member_product_purchase",
            is_upgrade:0,
            //stockist_id:this.stockist.id,
            total_price:this.cartTotalPrice,
            total_quantity:this.cartTotalQty,
            total_points:this.cartTotalPoints,
            products:this.cartProducts,
            pickup_type:"repurchase"
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

    payManually(){
        if(this.cartProducts.length == 0){
            notification.warning("There are no Items in your cart")
            return
        }
        this.payingWithWallet = true;
        let data = {
            amount:this.cartTotalPrice,
            description:"Member purhcase",
            txn_source:"member_product_purchase",
            is_upgrade:0,
            //stockist_id:this.stockist.id,
            total_price:this.cartTotalPrice,
            total_quantity:this.cartTotalQty,
            total_points:this.cartTotalPoints,
            products:this.cartProducts,
            pickup_type:"repurchase"
        }
        this.payWithWallet(data).then(()=>{this.payingWithWallet = false; this.walletBalanceLoading=true; this.getWalletBalance(this.authUser.uuid).then(()=>this.walletBalanceLoading = false); this.getUserPurchases({type:this.authUser.uuid,page:1})})
    },

    searchStockist(){
        this.searching = true
        this.searchStockists(this.search).then(()=>this.searching=false)
    },

    imageURL(img){
        return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/demo/products/product3.png';
    },

    getPickupAmount(){
        switch (this.selectedOrderType) {
            case 'registration_pickup':
                this.pickupAmountType = "Registration Pickup Amount";
                this.pickupAmount = this.regPackage.pickup_amount
                break;
            
            case 'upgrade_pickup':
                this.pickupAmountType = "Upgrade Pickup Amount";
                this.pickupAmountLoading = true;
                this.fetchUpgradeData({packageId:this.authUser.package_id,isUpgradePickup:true}).then((res)=>{
                    let currPackage = res.data.data.current_package
                    let newPackage = res.data.data.new_package
                    let diff = newPackage.pickup_amount - currPackage.pickup_amount;

                    this.pickupAmount = diff;

                    this.pickupAmountLoading = false;
                })
                break;

            default:
                this.pickupAmountType = "";
                this.pickupAmount = null
                break;
        }
        
    },

    setOrder(id){
        this.orderCodeForm.order_id = id;
    },

    authorize(){
        this.orderCodeFetching = true
        this.fetchOrderCode(this.orderCodeForm).then((res)=>{
            if(res && res.status == 200){
                this.orderCode = res.data.data
            }
            this.orderCodeFetching = false;
        })
    }

    
  },

  
};
</script>

