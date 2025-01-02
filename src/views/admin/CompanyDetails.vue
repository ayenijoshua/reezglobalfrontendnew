<template>
    <div>
        <div class="row my-3 mb-4">
            <div class="col-md-6 offset-3">
                <div>
                    <div class="card-body" style="overflow-x:auto;">
                    <form @submit.prevent="submit()">
                        <div class="card shadow1" style="background-color:transparent">
                            <div class="card-body no-gutters ">
                                <div class="text-center mb-3"><img  src="/assets/img/office-building.png" width="80px"  height="80px">
                                <h6 class="mt-1 s-8 font-weight-bold">Company Details<br><small> Edit company details</small></h6></div>
                                <div class="form-row mb-3">
                                    <div class="col-md-12 mb-2">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-phone float-left s-20 text-white " ></i></div>
                                            </div>
                                            <input v-model="form.company_phone" type="text" class="form-control r-0 light s-12" required placeholder="Company Phone"  style="background-color:#ecf0f1; border: 1px solid #2E671A" >
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-email float-left s-20 text-white" ></i></div>
                                            </div>
                                            <input v-model="form.company_email" type="email" class="form-control r-0 light s-12" required placeholder="Company Email"  style="background-color:#ecf0f1; border: 1px solid #2E671A">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-house float-left s-20 text-white" ></i></div>
                                            </div>
                                            <textarea v-model="form.company_address" class="form-control r-0 light s-12" required placeholder="Company Address"  style="background-color:#ecf0f1; border: 1px solid #2E671A"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row ml-1">
                                    <span v-if="submitting" class="btn btn-sm btn-success btn-lg">...</span>
                                    <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                </div>
                            </div>	
                        </div>
                    </form>
                    </div>
                </div>


                <div class="card shadow1 mt-5" style="background-color: transparent !important;">
                    <div class="card-body p-4">
                        <form>
                            <div class="text-center">
                                <h6 class="mt-1 s-8 font-weight-bold text-green">   OFFICIAL COMPANY ACCOUNT DETAILS</h6><br>
                            </div>
                            <div class="row justify-content-center"> 
                                <div class="col-md-12">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important">
                                                <i class="icon icon-bank float-left s-20 text-white"></i>
                                            </div>
                                        </div>
                                        <select id="bank-select"  class="form-control r-1 light s-5" style="background-color:transparent; ; border: 2px solid #2E671A;">
                                            <option class="s-12" style="background-color: #ecf0f1;">Select Bank</option>
                                            <option class="s-12" style="background-color: #ecf0f1;">Zenith Bank Plc</option>
                                            <option class="s-12" style="background-color: #ecf0f1;">Stanbic Bank</option>
                                            <option class="s-12" style="background-color: #ecf0f1;">United Bank Of Africa</option>
                                                                        
                                        </select>	
                                    </div>  
                                </div> 
                                <div class="col-md-6">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important">
                                                <i class="icon icon-bank float-left s-20 text-white"></i>
                                            </div>
                                        </div>
                                        <input required type="text" class="form-control r-0 light s-12" placeholder="Account Name" style="border:1px solid #2E671A !important">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important">
                                                <i class="icon icon-bank float-left s-20 text-white"></i>
                                            </div>
                                        </div>
                                        <input required type="text" class="form-control r-0 light s-12" placeholder="Account Number" style="border:1px solid #2E671A !important">
                                    </div>
                                </div>     
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <button type="submit" class="btn btn-sm btn-success btn-block mt-3">
                                        <i class="icon-save mr-2"></i>Save Account
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row mt-4">
            <div class="col-md-12">
                <div class="card shadow mb-3" style="background-color: transparent">
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
                            <table id="example2" class="table table-bordered table-hover data-tables" >
                                <thead >
                                    <tr>
                                        <th class="font-weight-bold" scope="col">S/N</th>
                                        <th class="font-weight-bold" scope="col">Bank Name</th>
                                        <th class="font-weight-bold" scope="col">Account Name</th>     
                                        <th class="font-weight-bold" scope="col">Account Number</th>
                                        <th class="font-weight-bold" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Guaranty Trust Bank</td>
                                        <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                        <td>Star Twins Herbal Limited</td>
                                        <td>0013476690</td>
                                        <td><button type="button" class="btn-small btn-danger rounded">
                                            <i class="icon-times mr-2"></i>Delete Product</button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Jaiz Bank</td>
                                        <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                        <td>Star Twins Herbal Limited</td>
                                        <td>2017714690</td>
                                        <td><button type="button" class="btn-small btn-danger rounded">
                                            <i class="icon-times mr-2"></i>Delete Product</button>  
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>United Bank Of Africa</td>
                                        <!-- <td>{{ claim.worth?.toLocaleString('en-US')}}</td> -->
                                        <td>Star Twins Herbal Limited</td>
                                        <td>1113470690</td>
                                        <td><button type="button" class="btn-small btn-danger rounded">
                                            <i class="icon-times mr-2"></i>Delete Product</button>  
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table><br>
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
<style>
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

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:"company-details",

        data(){
            return{
                form:{
                    company_address:null,
                    company_email:null,
                    company_phone:null
                }
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('settingStore',['settings'])
        },

        created(){
            if(this.settings.id == undefined){
                this.all().then(res=>{
                    if(res.status == 200){
                        this.form.company_address = this.settings.company_address
                        this.form.company_email = this.settings.company_email
                        this.form.company_phone = this.settings.company_phone
                    }
                })
            }else{
                this.form.company_address = this.settings.company_address
                this.form.company_email = this.settings.company_email
                this.form.company_phone = this.settings.company_phone
            }
        },

        methods:{
            ...mapActions('settingStore',['all','update']),

            submit(){
                this.update(this.form)
            }
        }

    }
</script>