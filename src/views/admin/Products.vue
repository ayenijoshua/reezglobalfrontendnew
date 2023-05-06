<template>
    <div class="animated">
        <div class="row my-5">
            <div class="col-lg-12">
                <div class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                    <div class="float-right">
                        <img  src="/assets/img/shop1.png" width="80px" height="80px">
                    </div>
                    <small class="mt-0text-white" >Registration Products</small>
                    <p class="text-dark-heading font-weight-bold text-white"><span style="font-size:32px">{{ products.length }}</span></p>
                </div>
            </div>
        </div>	
				
        <div class="row my-5">
            <div class="col-md-12">
                <div class="card border">
                    <div class="card-body p-4">
                        <form @submit.prevent="create()">
                            <div class="row column-row"> 
                                <div class="col-md-2 ml-3 mt-3">
                                    <p class="green-text s-12 font-weight-bold">Add Product</p>
                                </div>
                                
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="icon icon-add_shopping_cart float-left s-20 green-text " ></i></div>
                                        </div>
                                        <input v-model="form.name" required type="text" class="form-control r-0 light s-12" placeholder="Product Name">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 green-text " ></i></div>
                                        </div>
                                        <input v-model="form.points" required type="text" class="form-control r-0 light s-12" placeholder="Product PV">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="icon icon-tag3 float-left s-20 green-text " ></i></div>
                                        </div>
                                        <input v-model="form.worth" required type="text" class="form-control r-0 light s-12" placeholder="Price">
                                    </div>
                                </div>
                            </div>
                            <div class="float-right" style="padding-right:78px">	
                                <span v-if="submitting" class="btn btn-sm btn-success">...</span>								
                                <button v-else type="submit" class="btn btn-sm btn-success"><i class="icon-save mr-2"></i>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>	

        <div class="row my-3">
            <div class="col-md-12">
                <div class="card border">
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
                            <div class="card no-b no-r">
                                <div class="card-body">
                                    <div class="form-row" style="overflow-x:auto;">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Products</th>
                                                    <th scope="col">PV</th>
                                                    <th scope="col">Worth</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Edit</th>
                                                    <th scope="col">Enable/Disable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-if="loading && productsLoading">
                                                    <td colspan="7">
                                                        <b-skeleton-table
                                                            :rows="3"
                                                            :columns="7"
                                                            :table-props="{ bordered: true, striped: true }"
                                                        ></b-skeleton-table>
                                                    </td>
                                                </tr>
                                                <template v-else>
                                                    <tr v-if="products.length==0">
                                                        <td colspan="7">
                                                            <div class="alert alert-info">There are no products</div>
                                                        </td>
                                                    </tr>
                                                    <tr v-else v-for="prod,i in products" :key="i">
                                                        <td>{{ ++i }}</td>
                                                        <td>{{ prod.name }}</td>
                                                        <td>{{ prod.points }}</td>
                                                        <td>₦{{ prod.worth?.toLocaleString('en-US') }}</td>
                                                        <td>
                                                            <span v-if="prod.is_active">Enabled</span>
                                                            <span v-else>Disabled</span>
                                                        <td>
                                                            <a @click="setProduct(prod)" v-b-modal.edit-product class="btn btn-sm btn-success text-white caret" href="#"><i class="icon-edit"></i></a>	
                                                        </td>
                                                        <td>
                                                            <div class="dropdown"> 
                                                                <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="caret"></i>
                                                                </button>
                                                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                                    <button @click="enable(prod.id)" class="dropdown-item text-green" ><i class="icon-check-circle"></i>&nbsp;&nbsp; Enable</button>
                                                                    <button @click="disable(prod.id)" class="dropdown-item text-green"><i class="icon-times-circle"></i>&nbsp;&nbsp; Disable</button>	
                                                                </div>
                                                            </div>
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
        </div>
        <Modal modal-id="edit-product" modal-title="Edit Product" modal-size="md">
            <template v-if="product==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditProduct v-else :product="product" @updated="edited()"/>
        </Modal>
    </div>	
</template>
<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import Modal from '@/components/Modal.vue';
    import EditProduct from '@/components/admin/EditProduct.vue'
    export default{
        name:'admin-products',

        components:{
            Modal,
            EditProduct
        },

        data(){
            return{
                product:null,
                form:{
                    name:null,
                    points:null,
                    worth:null
                },
                productsLoading:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('productStore',['products'])
        },

        created(){
            if(this.products.length == 0){
                this.productsLoading = true
                this.getProducts().then(()=>{
                    this.productsLoading = false
                })
            }
        },

        methods:{
            ...mapActions('productStore',['createProduct','updateProduct','getProducts','toggleStatus']),

            setProduct(prod){
                this.product = prod
            },

            edited(){
                this.getProducts()
            },

            create(){
                this.createProduct(this.form).then(res=>{
                    if(res.status == 200){
                        this.productsLoading = true
                        this.getProducts().then(()=>this.productsLoading = false)
                    }
                })
            },

            enable(id){
                let dat = {is_active:true}
                this.toggleStatus({id,data:dat})
            },

            disable(id){
                let dat = {is_active:false}
                this.toggleStatus({id,data:dat})
            },
        }
    }
</script>