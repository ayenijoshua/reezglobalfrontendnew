<template>
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
                                        <td>{{ order.first_name }}  {{ order.last_name }}</td>
                                        <td>{{ order.phone }}</td>
                                        <td>{{ order.email }}</td>
                                        <td>{{ order.pickup_type }}</td>
                                        <td>#0{{ order.order_id }}</td>
                                        
                                        <td><span class="badge badge-success" style="padding: 6px 10px;">{{ order.status }}</span></td>
                                        <td>{{ order.order_date }}</td>
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
    import {mapActions,mapGetters} from 'vuex'
    export default{
        name:"processed-orders",

        props:{
            user:{
                required:true,
                type:Object
            }
        },

        data(){
            return{
                processedOrdersLoading:false
            }
        },

        computed:{
            ...mapGetters('productPurchaseStore',['vendorProcessedOrders']),
        },

        created(){
            this.processedOrdersLoading = true
            this.getVendorProcessedOrders(this.user.uuid).then(()=>{
                this.processedOrdersLoading=false
            })
        },

        methods:{
            ...mapActions('productPurchaseStore',['getVendorProcessedOrders']),
        }
    }
</script>