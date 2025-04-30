<template>
    <div class="animated">
        <div class="row my-5">
            <div class="col-lg-12">
                <div class="counter-box p-40 text-white shadow1 r-5" style="background-color: #2E671A">
                    <div class="float-right">
                        <img  src="/assets/img/wallet1.png" width="80px" height="80px">
                    </div>
                    <small class="mt-0text-white" >Registration Products</small>
                    <p class="text-dark-heading font-weight-bold text-white"><span style="font-size:32px">{{ products.length }}</span></p>
                </div>
            </div>
        </div>	
				
        <div class="row my-5">
            <div class="col-md-12">
                <div class="card shadow1" style="border: 1px solid #2E671A !important;">
                    <div class="card-body p-4" >
                        <form id="create-product-form" @submit.prevent="create()">
                            <div class="row column-row"> 
                                <div class="col-md-2 ml-3 mt-3">
                                    <p class="green-text s-12 font-weight-bold">Add Product</p>
                                </div>
                                
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend" >
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important" ><i class="icon icon-add_shopping_cart float-left s-20 text-white"></i></div>
                                        </div>
                                        <input v-model="form.name" name="name" required type="text" class="form-control r-0 light s-12" placeholder="Product Name" style="background-color: #ecf0f1; border:1px solid #2E671A !important">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend" >
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important" ><i class="icon icon-add_shopping_cart float-left s-20 text-white"></i></div>
                                        </div>
                                        <input v-model="form.points" name="points" required type="text" class="form-control r-0 light s-12" placeholder="Product PV" style="background-color: #ecf0f1; border:1px solid #2E671A !important">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important" ><i class="icon icon-tag3 float-left s-20 text-white " ></i></div>
                                        </div>
                                        <input v-model="form.worth" name="worth" required type="text" class="form-control r-0 light s-12" placeholder="Price" style="background-color: #ecf0f1; border:1px solid #2E671A !important">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <div class="form-group m-0">
                                        <textarea name="description" value="" rows="5" type="text" class="form-control r-0 light s-12" id="address"
                                        placeholder="Product Description" style="background-color: #ecf0f1; border: 2px solid #2E671A;"></textarea>
                                    </div>	
                                </div>
                                <div class="col-md-12 mt-3 mb-3">
                                    <div class="form-group m-0">
                                        <div class="dropbox" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                            <input v-b-popover.hover.top="'Drag your photo here or click to browse'" type="file" id="profile-img" title="profile photo" name="image" @change="filesChange($event.target.files);"  class="form-control form-control-line input-file" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                            <p id="img-preview" >
                                                Drag an image here<br> or click to browse<br>
                                                <span style="font-size: 10px;">Image size should not exceed 500kB</span>
                                            </p>      
                                        </div>                             
                                        <!-- <input type="file" name="image" title="profile photo" class="form-control r-0 light s-12" placeholder="Profile photo"> -->
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
                <div class="card border shadow1" style="border: 1px solid #2E671A !important;">
                    <div class="card-header" style="background-color: #2E671A">
                        <div class="row justify-content-end">
                            <div class="col">
                                <ul class="nav nav-tabs card-header-tabs nav-material">
                                    <li class="nav-item">
                                        <a class="nav-link text-white font-weight-bold" id="w1-tab1" data-toggle="tab" >COMPANY PRODUCTS</a>
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
                                        <table class="table table-bordered equal-width-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Products</th>
                                                    <th scope="col">Products Description</th>
                                                    <th scope="col" >Products Image</th>
                                                    <!-- <th scope="col">PV</th> -->
                                                    <th scope="col">Worth</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Edit</th>
                                                    <th scope="col">Enable/Disable</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-if="loading && productsLoading">
                                                    <td colspan="9">
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
                                                    <template v-else>
                                                        <tr  v-for="prod,i in products" :key="i">
                                                            <td>{{ ++i }}</td>
                                                            <td>{{ prod.name }}</td>
                                                            <td>{{ prod.description }}</td>
                                                            <td ><img :src="imageURL+'/'+prod.image" width="100px" height="100px"></td>
                                                            <!-- <td>{{ prod.points }}</td> -->
                                                            <td>₦{{ prod.worth?.toLocaleString('en-US') }}</td>
                                                            <td>
                                                                <span v-if="prod.is_active">Enabled</span>
                                                                <span v-else>Disabled</span>
                                                            </td>
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

<style>
.equal-width-table th,
.equal-width-table td {
    width: 10%; /* Each column will take up 10% of the table's width */
    text-align: center; /* Optional: Center align content */
    vertical-align: middle; /* Optional: Vertically center align content */
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

            ...mapGetters('productStore',['products']),

            imageURL(){
                return process.env.VUE_APP_IMAGE_PATH
            }
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

            filesChange(files){
                const file = files[0]
                const prev = document.getElementById('img-preview')
                if(file){
                    const fileReader = new FileReader()
                    fileReader.readAsDataURL(file)
                    fileReader.addEventListener("load",function(){
                        prev.innerHTML = '<img style="width: 100px !important; height:100px !important;" src="'+this.result+'"/>'
                    })
                }
            },

            create(){
                // this.createProduct(this.form).then(res=>{
                //     if(res.status == 200){
                //         this.productsLoading = true
                //         this.getProducts().then(()=>this.productsLoading = false)
                //     }
                // })

                let ele = document.getElementById("create-product-form")
                let form = new FormData(ele)
                this.createProduct(form).then(res=>{
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