<template>
    <div>
        <div class="animated">
            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow1 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img class="mr-3  r-3" src="/assets/img/shopping-cart.png"  width="70px" height="70px">
                        </div>
                        <small class="mt-0text-white" >Registration Products Requests</small>
                        <p class="text-dark-heading font-weight-bold text-white"><span style="font-size:32px">{{ claims.length }}</span></p>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL PRODUCTS REQUESTS</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Full Name</th>
                                    <th>Username</th>
                                    <th>Registration Package</th>
                                    <th>Request Status</th>
                                    <th>View Request</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-if="loading && requestLoading">
                                    <td colspan="7">
                                        <b-skeleton-table
                                            :rows="3"
                                            :columns="7"
                                            :table-props="{ bordered: true, striped: true }"
                                        ></b-skeleton-table>
                                    </td>
                                </tr>
                                <template v-else>
                                    <tr v-if="claims.length == 0">
                                        <td colspan="7">
                                            <div class="alert alert status">
                                                There are no product claims
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-else v-for="prod,i in claims" :key="i">
                                        <td>{{ ++i }}</td>
                                        <td>{{ prod.first_name }} {{ prod.last_name }}</td>
                                        <td>{{ prod.username }}</td>
                                        <td>{{ prod.package_name }}</td>
                                        <td><span class="badge badge-warning">Pending Request</span></td>
                                        <td>
                                            <a @click="setUser(prod.user_uuid)" v-b-modal.view-claims class="btn-fab btn-fab-sm btn-success text-white" href="#" data-toggle="modal" data-target="#viewproductModal"><i class="icon-eye"></i></a>													
                                        </td>
                                        <td>
                                            <div class="dropdown"> 
                                                <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="caret"></i>
                                                </button>
                                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                    <a @click="accept(prod.user_uuid)" class="dropdown-item text-green" href="#"  ><i class="icon-check-circle"></i>&nbsp;&nbsp; Approve</a>
                                                    <a @click="reject(prod.user_uuid)" class="dropdown-item text-green" href="#" ><i class="icon-times-circle"></i>&nbsp;&nbsp; Decline</a>	
                                                </div>
                                            </div>													
                                        </td>
                                    </tr>
                                </template>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal modal-id="view-claims" modal-title="Product Claims" modal-size="md">
            <template v-if="user_uuid==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <ProductClaimDetails v-else :uuid="user_uuid"/>
        </Modal>
    </div>
</template>

<style>
/* Dropdown Menu Styling */
.dropdown-menu {
    position: absolute !important; /* Make sure the dropdown is positioned absolutely */
    top: auto; /* Allow it to adjust position */
    left: auto; /* Allow it to adjust position */
    z-index: 1050; /* Ensure it appears above other elements */
    background-color: #ecf0f1; /* Your dropdown background color */
    border: 1px solid #2E671A; /* Match your design style */
    padding: 0.5rem 0; /* Adjust padding */
}

/* Ensure dropdown is not clipped by the table */
.table-responsive {
    overflow-x: visible !important;
}

/* Dropdown Menu Styling */
.dropdown-menu {
    position: absolute !important; /* Ensure absolute positioning */
    top: auto; /* Adjust position */
    left: auto; /* Adjust position */
    z-index: 1050; /* Place it above other elements */
    background-color: #ecf0f1; /* Background color */
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



<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Modal from '@/components/Modal.vue';
import ProductClaimDetails from '@/components/admin/ProductClaimDetails.vue';

    export default{
        name:"product-requests",

        components:{
            Modal,
            ProductClaimDetails
        },

        data(){
            return{
                user_uuid:null,
                requestLoading:false,
                claims:[]
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('productClaimStore',['productClaims']),

            
        },

        created(){
            if(this.productClaims.length == 0){
                this.requestLoading = true
                this.all().then((res)=>{
                    this.requestLoading = false
                    if(res.status == 200){
                        var flags = [], i;
                        for(i=0; i<this.productClaims.length; i++){
                            if(flags[this.productClaims[i].username]){
                                this.productClaims.splice(i,1)
                            }else{
                                flags[this.productClaims[i].username] = true;
                                this.claims.push(this.productClaims[i])
                            }
                        }
                    }  
                })
            }
        },

        methods:{
            ...mapActions('productClaimStore',['all','approve','decline','getProductClaims']),

            accept(id){
                //if(confirm("Are you sure to approve this request")){
                    this.approve(id).then(()=>{
                        this.filterClaims()
                    })
                //}
            },

            reject(id){
                //if(confirm("Are you sure to reject this request")){
                    this.decline(id).then(()=>{
                        this.filterClaims()
                    })
                //}
            },

            setUser(uuid){
                this.user_uuid = uuid
            },

            filterClaims(){
                this.all().then((res)=>{
                    //this.requestLoading = false
                    if(res.status == 200){
                        this.claims = []
                        var flags = [], i;
                        for(i=0; i<this.productClaims.length; i++){
                            if(flags[this.productClaims[i].username]){
                                this.productClaims.splice(i,1)
                            }else{
                                flags[this.productClaims[i].username] = true;
                                this.claims.push(this.productClaims[i])
                            }
                        }
                    }  
                })
            }

        }
    }
</script>