<template>
    <div>
        <div>
            <div class="">
                <div class="row ">	
                    <div class="col-md-8">
                        <div class="">
                            <div class="">
                                <div class="">
                                    <div>
                                        <div>
                                            <template v-if="stockistLoading">
                                                <b-card>
                                                    <b-skeleton width="85%"></b-skeleton>
                                                    <b-skeleton width="55%"></b-skeleton>
                                                    <b-skeleton width="70%"></b-skeleton>
                                                </b-card>
                                            </template>
                                            <form v-else action="" method="POST" @submit.prevent="updateStockist">
                                                <div class="mt-5 mb-4 ml-4 mr-4">
                                                    <div>
                                                        <div class="form-row">
                                                            <div class="col-md-12">
                                                                <div class="input-group mb-2 mr-sm-2 mb-3 r-3 shadow ">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-store_mall_directory float-left s-20 text-white" ></i></div>
                                                                    </div>
                                                                    <input type="text" v-model="form.store_name" class="form-control r-0 light s-12" placeholder="Stockist Store Name" style="background-color: transparent" >
                                                                </div>
                        
                                                                <div class="form-row mb-2">
                                                                    <div class="form-group col-12 m-0 ">
                                                                        <div class="input-group mb-2 mr-sm-2 shadow">
                                                                            <div class="input-group-prepend">
                                                                                <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-room float-left s-20 text-white "  ></i></div>
                                                                            </div>
                                                                            <input type="text" v-model="form.store_address" class="form-control r-0 light s-12" placeholder="Store Address" style="background-color: transparent">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class="form-group m-0">
                                                                    <div class="input-group mb-2 mr-sm-2 mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-room float-left s-20 text-white" ></i></div>
                                                                        </div>
                                                                        <select v-model="form.store_state" class="form-control r-0 light s-12 shadow" style="background-color: transparent">
                                                                            <option >Lagos</option>
                                                                            <option >Oyo</option>														   
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div class="form-row mb-2">
                                                                    <div class="form-group col-12 m-0 ">
                                                                        <div class="input-group mb-2 mr-sm-2 shadow">
                                                                            <div class="input-group-prepend">
                                                                                <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-phone float-left s-20 text-white"></i></div>
                                                                            </div>
                                                                            <input type="tephone" v-model="form.store_phone" name="phone" class="form-control r-0 light s-12" placeholder="Phone" style="background-color: transparent">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2">
                                                                <button type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Profile Data</button>
                                                            </div>
                                                        </div>
                                                    </div>	
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="">
                            <div class="row column-row">
                                <div class="mt-4 ml-auto" style="padding-right:40px">
                                
                                    <img  src="/assets/img/preview.png"  width="auto" height="20px">&nbsp;&nbsp;
                                    <span class=" float-right font-weight-bold" id="d1" style="font-size:17px">Preview Details</span>
                                </div> 
                            </div>
                            <div class="">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span id="d1" style="font-size:10px">Stockist Name</span>
                                        <h6 class="font-weight-bold " id="d1">{{ form.store_name }}</h6>
                                        <span  id="d1" style="font-size:10px">Stockist Address <Area></Area></span>
                                        <h6 class="font-weight-bold " id="d1">{{ form.store_address }}</h6>
                                        <span  id="d1" style="font-size:10px">State</span>
                                        <h6 class="font-weight-bold " id="d1">{{ form.store_state }}</h6>
                                        <span  id="d1" style="font-size:10px">Stockist Package</span>
                                        <h6 class="font-weight-bold " id="d1">{{stockist.name}}</h6>
                                        <span  id="d1" style="font-size:10px">Contact</span>
                                        <h6 class="font-weight-bold " id="d1">{{ form.store_phone }}</h6>
                                        <span  id="d1" style="font-size:10px">Signee</span>
                                        <h6 class="font-weight-bold" id="d1">{{ form.referrer }}</h6>
                                    </div>
                                    <div class="mr-4 ml-auto">
                                        <img  src="/assets/img/shop-local.png"  width="auto" height="100px">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br>
                <div class="row">
                    <b-card v-if="banksLoading" class="col-md-12" >
                        <b-skeleton width="85%"></b-skeleton>
                        <b-skeleton width="55%"></b-skeleton>
                        <b-skeleton width="70%"></b-skeleton>
                    </b-card>
                    <template v-else>
                        <div v-for="bank,i in banks" class="col-md-4" :key="i">
                            <div class="card shadow rounded" style="background-color: #2E671A">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center">
                                        <div class="text-center">  <img src="/assets/img/bank-transfer.png" width="auto" height="100px"></div>
                                            <div class="card-body text-center">
                                                <span  id="d1" class="text-white" style="font-size:10px">Bank Name</span>
                                                <h5 class="font-weight-bold text-white"> {{ bank.bank_name }}</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Name</span>
                                                <h5 class="font-weight-bold text-white" id="d1">{{ bank.bank_account_name }}</h5>
                                                <span  id="d1" class="text-white" style="font-size:10px">Account Number</span>
                                                <h5 class="font-weight-bold text-white" id="d1">{{ bank.bank_account_number }}</h5>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-8 col-sm-8">
                        <div class="ml-4 mr-4 mt-4">
                            <div>
                                <p class="font-weight-bold">Select Package Below</p>
                                <div class="form"> 
                                    <template v-if="stockistPackages.lenght==0">
                                        <b-card>
                                            <b-skeleton width="85%"></b-skeleton>
                                            <b-skeleton width="55%"></b-skeleton>
                                            <b-skeleton width="70%"></b-skeleton>
                                        </b-card>
                                    </template>           
                                    <div v-else class="form-group m-0">
                                        <div class="input-group mb-2 mr-sm-2 mb-3">              
                                            <div class="input-group-prepend">
                                                <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon-user-plus float-left s-20 text-white" ></i></div>
                                            </div>
                                            <select name="package_id" v-model="upgradeForm.package_id" @change="getPackageDifference" class="form-control r-0 light s-12 shadow" style="background-color: transparent">
                                                <option value="">Select Package</option>
                                                <template v-for="packag,i in stockistPackages.filter((ele) => ele.id > stockist.package_id)">
                                                    <option :value="packag.id" :key="i">{{ packag.name }} - ₦{{ packag.registration_value.toLocaleString('en-US') }}</option>
                                                </template>														   
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- <button type="submit" class="btn btn-sm btn-success btn-lg mr-3"><i class="icon-save mr-2"></i>Confirm Selection</button> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div class="card mb-3 shadow1" style="background-color:transparent;">
                            <div class="card-body">
                                <template v-if="upgradeData.package_name==undefined">
                                    <b-card>
                                        <b-skeleton width="85%"></b-skeleton>
                                        <b-skeleton width="55%"></b-skeleton>
                                        <b-skeleton width="70%"></b-skeleton>
                                    </b-card>
                                    <h6 class="text-center">Select a package to view upgrade data.</h6>
                                </template>
                                <div v-else class="d-flex justify-content-center">
                                    <div class="text-center">  <img  src="/assets/img/best-shop.png" width="auto" height="150px"></div>
                                    <div class="card-body text-center">
                                        <span class="text-green" id="d1" style="font-size:10px">Selected Package</span>
                                        <h6 class="font-weight-bold text-black" id="d1">{{ upgradeData.package_name }} </h6>
                                        <span class="text-green" id="d1" style="font-size:10px">Upgrade Price</span>
                                        <h6 class="font-weight-bold text-black" id="d1">₦{{ upgradeData.package_difference.toLocaleString('en-US') }}</h6>
                                        <span class="text-green" id="d1" style="font-size:10px">Rebate</span>
                                        <h6 class="font-weight-bold text-black" id="d1">{{upgradeData.rebate}}%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>

        <br>
    <div class="row mt-4"> 
        <div class="col-md-12">
            <div class="card shadow1" style="background-color: transparent">
                <div class="card-body">
                    <form id="upgrade-stockist-form" @submit.prevent="upgradeStockist">
                        <div class="card no-b no-r" style="background-color: transparent">
                            <div class="card-body">
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="form-row mb-2">
                                            <div class="form-group col-12 m-0">
                                                <div class="form-group m-0">
                                                    <div class="dropbox" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                                        <input v-b-popover.hover.top="'Drag your payment receipt here or click to browse'" name="payment_receipt" type="file" @change="filesChange($event.target.files);" title="payment receipt" class="form-control form-control-line input-file" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                                        <p id="img-preview">
                                                            Drag your photo here<br> or click to browse<br>
                                                            <span style="font-size: 10px;">Image size should not exceed 500kB</span>
                                                        </p>
                                                    </div>
                                                    <!-- <input type="file" name="image" title="profile photo" class="form-control r-0 light s-12" placeholder="Profile photo"> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	
                        </div>
                        <div class="m-3 mb-3">	
                            <button v-if="upgrading==true" class="btn btn-sm btn-success btn-lg mr-3">...</button>
                            <button v-else type="submit" class="btn btn-sm btn-success btn-lg mr-3"><i class="icon-save mr-2"></i>Upgrade Stockist Package</button>
                        </div> 
                    </form>
                </div>
            </div>
            <div class="m-3 mb-3">	
            <!---<span  class="btn btn-sm btn-success">...</span>-->								
            </div> 
        </div>
    </div>
</div>
</template>

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
    name:"user-stockistprofile",

    data(){
        return {
            form:{
                store_name:"",
                store_address:"",
                store_phone:"",
                store_state:"",
                package_id:"",
                referrer:""
            },
            stockistLoading:true,

            upgradeForm:{
                package_id:""
            },

            upgradeData:{},
            banksLoading:false,
            upgrading:false
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting,
        }),

        ...mapGetters('stockistStore',['stockist']),
        ...mapGetters('authStore',['authUser']),
        ...mapGetters("stockistPackageStore",["stockistPackages"]),
        ...mapGetters("bankStore",["banks"])
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
                })
            }
       }else{
            this.stockistLoading = true
            this.fetchStockistByUuid(this.authUser.uuid).then(()=>{
                this.stockistLoading=false
                this.form = Object.assign({},this.stockist)
            })
       }

       if(this.stockistPackages.length == 0){
           this.getPackages()
        }

        if(this.banks.length == 0){
            this.banksLoading = true
            this.getBanks().then(()=>this.banksLoading=false)
        }
    },

    methods:{

        ...mapActions('authStore',['getUser']),
        ...mapActions('stockistStore',['update','fetchStockist','fetchStockistByUuid','fetchPackageDifference','upgrade']),
        ...mapActions("stockistPackageStore",["getPackages"]),
        ...mapActions("bankStore",["getBanks"]),
       

        updateStockist(){
            this.update({id:this.stockist.id,data:this.form})
        },

        getPackageDifference(){
            this.fetchPackageDifference(this.upgradeForm.package_id).then((res)=>{
                console.log('pac-diff',res.data.data)
                this.upgradeData = res.data.data
            })
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

        upgradeStockist(){
            this.upgrading = true
            let ele = document.getElementById('upgrade-stockist-form')
            let form  = new FormData(ele)
            form.append("stockist_package_id",this.upgradeForm.package_id)

            this.upgrade({id:this.stockist.id,data:form}).then(()=>this.upgrading = false)
        }
        
    }



}
</script>