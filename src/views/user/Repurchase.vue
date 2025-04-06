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
                                    <select required v-model="selectedOrderType" class="form-control r-0 light s-12" style="background-color: transparent; border: 2px solid #1b4f72;">
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


            <div  v-if="selectedOrderType === 'upgrade_pickup'" class="d-flex justify-content-center mt-2 mb-3"> <!-- Centering wrapper added -->
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
            </div>
            
            
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
                                                                <input :key="i" @change="(e)=>logClaim2(e,produc.id,produc)" class="form-control" type="number" min="1"  style="background-color: transparent; border: 2px solid #2E671A;">
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
                                
                                <template>

                                    <div class="row column-row " style="border-bottom: 1px solid #2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Point Value </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ cartTotalPoints?.toFixed(2) }} PV</h6>											
                                        </div>
                                    </div> 	
                                    <div class="row column-row" style="background-Color:#2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">Total Price </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-white s-12" style="margin: 0em; padding: 0em;">₦ {{ cartTotalPrice }}</h6>											
                                        </div>
                                    </div>
                                    
                                     <!-- Cancel Order Button -->
                                    <div class="row column-row" >
                                        <div v-if="selectedOrderType != 'repurchase_pickup'" class="ml-auto mr-2">
                                            <button @click.prevent="submitOrder()" class="btn btn-sm btn-success  mt-2" ><i class="icon-mark mr-2"></i> Submit Selection</button>
                                        </div> 
                                        <div class="ml-auto mr-2">
                                            <button @click.prevent="cancelOrder()" class="btn btn-sm btn-danger  mt-2" ><i class="icon-cancel mr-2"></i> Cancel Selection</button>
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
                            <div class="form-row" style="overflow-x:auto;">
                                <div class="d-flex justify-content-end mb-2">
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
                                <table class="table table-hover">
                                        <thead  style="border-top: 1px solid #2E671A !important;">
                                        <tr >
                                            <th class="font-weight-bold" scope="col">S/N</th>
                                            <th class="font-weight-bold" scope="col">STOCKIST NAME</th>
                                            <th class="font-weight-bold" scope="col">ADDRESS</th>
                                            <th class="font-weight-bold" scope="col">STATE</th>
                                            <th class="font-weight-bold" scope="col">CONTACT</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Valleyhill Stockist</td>
                                            <td>Suite 5, Garry Paul Complex,Toyin Street, Ikeja.</td>
                                            <td>Lagos</td>
                                            <td>081093445670</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>God is Great</td>
                                            <td>No.6,Are Avenue, Bodija, Ibadan, Oyo</td>
                                            <td>Oyo</td>
                                            <td>07093115680</td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>Philip Davis Store</td>
                                            <td>Flat 3, No. 17 Jerry Quarters, Ugbobi, Port Harcourt, Rivers</td>
                                            <td>Rivers</td>
                                            <td>081093445670</td>
                                        </tr>															  

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
                        <br>
                    </div>
				</div>
                <!---S<div class="col-md-4">
                    <div class="card mr-3 shadow1" style="background-color: #ded8c7">
                        <div class="row column-row">
                            <div class="mt-4 ml-auto" style="padding-right:40px">
                                <span class="border-left border-left-green"></span>&nbsp;&nbsp;
                                <span class="text-green float-right font-weight-bold" id="d1" style="font-size:10px">Selected Stockist Details</span>
                            </div> 
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div>
                                    <span class="text-green" id="d1" style="font-size:10px">Stockist Name</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Valleyhill Stockist</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Location</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Suite 5, Garry Paul Complex,Toyin Street, Ikeja</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">State</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Lagos</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Contact</span>
                                    <h6 class="font-weight-bold text-green" id="d1">081093445670</h6>
                                    
                                </div>
                                <div class="mr-4 ml-auto ">
                                    <img  src="/assets/img/personal-banking1.png" width="auto" height="80px">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>-->
            </div>
            <!---<div class="mt-3 pb-4"> <img  src="/assets/img/step3a.png" width="auto" height="80px"></div>--->
            <!---<div class="row">
                <div class="col-md-6">
                    <div class="card  mb-3 shadow1" style="background-color: transparent">
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
                                            <img src="/assets/img/shop2.png" width="80px" height="80px">
                                        </div>  
                                        <div class="mb-2 mt-4 ">
                                            <h6 class="font-weight-bold text-green s-14" style="margin: 0em; padding: 0em;">{{ userClaim.name }} <br><small class="font-weight-bold"> {{userClaim.points}}PV | Qty:{{ userClaim.product_qty }}</small></h6>	
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
                                    <div class="row column-row" style="border-bottom: 1px solid #2E671A !important;">
                                        <div class="mb-2 mt-2 ml-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Price </h6>											
                                        </div>	
                                        <div class="mb-2 mt-2 ml-auto mr-3">
                                            <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦ 14,700</h6>											
                                        </div>
                                    </div>

                                </template>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card mr-3 shadow1 " style="background-color: #ded8c7">
                        <div class="row column-row">
                            <div class="mt-4 ml-auto" style="padding-right:40px">
                                <span class="border-left border-left-green"></span>&nbsp;&nbsp;
                                <span class="text-green float-right font-weight-bold" id="d1" style="font-size:10px">Selected Stockist Details</span>
                            </div> 
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div>
                                    <span class="text-green" id="d1" style="font-size:10px">Stockist Name</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Valleyhill Stockist</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Location</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Suite 5, Garry Paul Complex,Toyin Street, Ikeja</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">State</span>
                                    <h6 class="font-weight-bold text-green" id="d1">Lagos</h6>
                                    <span class="text-green" id="d1" style="font-size:10px">Contact</span>
                                    <h6 class="font-weight-bold text-green" id="d1">081093445670</h6>
                                    
                                </div>
                                <div class="mr-4 ml-auto ">
                                    <img  src="/assets/img/personal-banking1.png" width="auto" height="80px">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>--->
            <div class="row mb-2 mt-2" v-if="selectedOrderType === 'registration_pickup' || selectedOrderType === 'upgracde_pickup'">
                <div class="col-md-12">
                    <div class="d-flex flex-wrap justify-content-center mt-2">
                        <div class="m-3">							
                            <button  type="submit" class="btn btn-sm btn-success mr-3 "><i class="icon-shopping-cart mr-2"></i>Create Your Order</button>
                            <button  type="submit" class="btn btn-sm btn-danger "><i class="icon-cancel mr-2"></i>Cancel Order</button>                   
                        </div> 
                    </div>	
                </div>
            </div>	



            <div class="row mt-5 mb-5" v-if="selectedOrderType === 'repurchase_pickup'">               
                <div class="col-md-6">
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
                <div class="col-md-6">
                    <div class="card mr-3 shadow1 " style="background-color: transparent">
                        <div class="d-flex flex-wrap justify-content-center">
                            <div class="text-center">
                                <img class=" mt-3" src="/assets/img/wallet4a.png" width="auto" height="150px">
                                <h1 class="font-weight-bold text-blue" style="margin: 0em; padding: 0em;">₦345,902</h1>
                                <small class=" font-weight-bold s-10 text-blue" style="margin: 0em; padding: 0em;" >Current Wallet Available Balance</small><br>
                                <a class="btn btn-sm btn-success mb-3 mt-2 btn-lg"><i class="icon icon-credit-card"></i>Pay with Wallet</a>
                            </div>    
                        </div>    
                    </div>
                </div>              
                                         
            </div>


            <div class="row mt-4" style="padding-top: 50px">
                <div class="col-md-12">
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
                                            <th class="font-weight-bold" scope="col">PICK-UP TYPE</th>
                                            <th class="font-weight-bold" scope="col">STOCKIST NAME</th>
                                            <th class="font-weight-bold" scope="col">LOCATION</th>     
                                            <th class="font-weight-bold" scope="col">STATE</th>
                                            <th class="font-weight-bold" scope="col">CONTACT</th>
                                            <th class="font-weight-bold" scope="col">PRODUCT</th>
                                            <th class="font-weight-bold" scope="col">QTY</th>
                                            <th class="font-weight-bold" scope="col">PRICE</th>
                                            <th class="font-weight-bold" scope="col">STATUS</th>
                                            <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-if="userPurchases.length == 0">
                                            <tr>
                                                <td colspan="11">
                                                    <div>Ther are no orders</div>
                                                </td>
                                            </tr>
                                        </template>
                                        <template v-else v-for="purchase,i in userPurchases">
                                            <tr :key="i">
                                                <td scope="row">{{ ++i }}</td>
                                                <td>{{ purchase.pickup_type }}</td>
                                                <td>N/A</td>
                                                <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                                <td>N/A</td>
                                                <td>Lagos</td>
                                                <td>081093445670</td>
                                                <td>1KG REEZ MAX</td>
                                                <td>1</td>
                                                <td>{{ purchase.total_price }}</td>
                                                <td><span class="badge badge-success" style="padding: 6px 10px;">{{ purchase.status }}</span></td>
                                                <td>{{ purchase.created_at }}</td>
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

export default {
  name: "user-repurchase",

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
    ...mapGetters("productPurchaseStore",["userPurchases"])
   
  },

  created() {

    if(this.authUser.uuid == undefined){
        this.getUser();
    }

    if (this.products.length === 0) {
      this.prodLoading = true;
      this.getActiveProducts().then(() => (this.prodLoading = false));
    }

    if(this.userPurchases.length==0){
        this.getUserPurchases(this.authUser.uuid)
    }
  },

  methods: {
    
    logClaim2(e, id, product) {
      let data = { qty: e.target.value, id: id, price:product.worth };
      let pv = data.qty * product.points;
      let amt = data.qty * product.worth;
      let qty = Number(data.qty);

      this.cartPoints = { ...this.cartPoints, [data.id]: pv };
      this.cartPrices = { ...this.cartPrices, [data.id]: amt };
      this.cartQty = {...this.cartQty, [data.id]:qty};

      let pvs = Object.values(this.cartPoints);
      let sum = pvs.reduce((res, val) => res + val);
      this.cartTotalPoints = sum;

      let prices = Object.values(this.cartPrices);
      let sumPrices = prices.reduce((res, val) => res + val);
      this.cartTotalPrice = sumPrices;

      let qtys = Object.values(this.cartQty);
      let sumQtys = qtys.reduce((res, val) => res + val);
      this.cartTotalQty = sumQtys;

      let index = this.cartProducts.findIndex((ele) => ele.id === id);
      if (index !== -1) {
        this.cartProducts[index].qty = data.qty;
      } else {
        this.cartProducts.push(data);
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

   
    ...mapActions("productPurchaseStore",["userPurchase","getUserPurchases"]),
    ...mapActions("settingStore", ["getSetting", "all"]),
    ...mapActions("productStore", ["getActiveProducts"]),
    ...mapActions('authStore',['getUser']),
    //...mapActions("product")
  
   
    makePayment() {
      console.log("Payment initiated");
      // Implement your payment logic here
    },

    myFunction() {
      let copyText = document.getElementById("referrallink");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.getElementById("button").value = "Referral Link Copied";
    },
  },
};
</script>

