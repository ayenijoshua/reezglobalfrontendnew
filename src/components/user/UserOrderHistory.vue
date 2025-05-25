<template>
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
                                    <th class="font-weight-bold" scope="col">ORDER NO</th>
                                    <th class="font-weight-bold" scope="col">PICK-UP TYPE</th>
                                    <th class="font-weight-bold" scope="col">STOCKIST NAME</th>
                                    <th class="font-weight-bold" scope="col">LOCATION</th>     
                                    <th class="font-weight-bold" scope="col">STATE</th>
                                    <th class="font-weight-bold" scope="col">CONTACT</th>
                                    <th class="font-weight-bold" scope="col">TOTAL QTY</th>
                                    <th class="font-weight-bold" scope="col">TOTAL PRICE</th>
                                    <th class="font-weight-bold" scope="col">STATUS</th>
                                    <th class="font-weight-bold" scope="col">DATE/TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="userPurchases.length == 0">
                                    <tr>
                                        <td colspan="11">
                                            <div class="text-center">There are no orders</div>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else v-for="purchase,i in userPurchases">
                                    <tr :key="i">
                                        <td scope="row">{{ ++i }}</td>
                                        <td>#0{{ purchase.id }}</td>
                                        <td>{{ purchase.pickup_type }}</td>
                                        <td>{{ purchase.store_name }}</td>
                                        <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                        <td>{{ purchase.store_address }}</td>
                                        <td>{{ purchase.store_state }}</td>
                                        <td>{{ purchase.store_phone }}</td>
                                        <td>{{ purchase.total_quantity}}</td>
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
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

    export default{
        name:"user-order-history",

        props:{
            user:{
                required:true,
                type:Object
            }
        },

        data(){
            return{
                userPurchasesLoading:false
            }
        },

        computed:{
            ...mapGetters("productPurchaseStore",["userPurchases"])
        },

        created(){
            //if(this.userPurchases.length==0){
                this.userPurchasesLoading = true
                this.getUserPurchases(this.user.uuid).then(()=>this.userPurchasesLoading=false)
            //}
        },

        methods:{
            ...mapActions("productPurchaseStore",["getUserPurchases"])
        }
    }
</script>