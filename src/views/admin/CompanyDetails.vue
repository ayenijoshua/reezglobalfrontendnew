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
                        <form @submit.prevent="storeBank">
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
                                        <select v-model="bankForm.bank_name" id="bank-select"  class="form-control r-1 light s-5" style="background-color:transparent; ; border: 2px solid #2E671A;">
                                            <option  :value="null">Select Bank</option>
                                            <template v-for="bank,i in bankList">
                                                <option :value="bank.bank" :key="i">{{ bank.bank }}</option>
                                            </template>                 
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
                                        <input required v-model="bankForm.bank_account_name" type="text" class="form-control r-0 light s-12" placeholder="Account Name" style="border:1px solid #2E671A !important">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important">
                                                <i class="icon icon-bank float-left s-20 text-white"></i>
                                            </div>
                                        </div>
                                        <input required v-model="bankForm.bank_account_number" type="text" class="form-control r-0 light s-12" placeholder="Account Number" style="border:1px solid #2E671A !important">
                                    </div>
                                </div>     
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <span v-if="submittingBank==true" class="btn btn-sm btn-success btn-block mt-3">...</span>
                                    <button v-else type="submit" class="btn btn-sm btn-success btn-block mt-3">
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
                                    <tr v-if="banksLoading==true">
                                        <td colspan="5">
                                            <b-skeleton-table
                                                :rows="3"
                                                :columns="6"
                                                :table-props="{ bordered: true, striped: true }"
                                            ></b-skeleton-table>
                                        </td>
                                    </tr>
                                    <template v-else>
                                        <tr v-if="banks.lenght==0">
                                            <td colspan="5">
                                                <div class="alert alert-info">There no banks</div>
                                            </td>
                                        </tr>
                                        <tr v-for="bank,i in banks" :key=i>
                                            <th scope="row">{{ ++i }}</th>
                                            <td>{{ bank.bank_name }}</td>
                                            <td>{{ bank.bank_account_name }}</td>
                                            <td>{{ bank.bank_account_number }}</td>
                                            <td>
                                                <span @click="setBank(bank)" v-b-modal.edit-bank type="button" class="btn-small btn-info rounded mr-3">
                                                    <i class="icon-pen mr-2"></i>Edit</span> 
                                                <span  @click="setBank(bank)" v-b-modal.delete-bank type="button" class="btn-small btn-danger rounded">
                                                <i class="icon-times mr-2"></i>Delete</span>  
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>				
        </div> 

        <Modal modal-id="edit-bank" modal-title="Edit bank" modal-size="md">
            <template v-if="bank==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditBank v-else :bank="bank" @updated="getBanks"/>
        </Modal>

        <Modal modal-id="delete-bank" modal-title="Delete bank" modal-size="md">
            <template v-if="bank==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <p class="alert alert-danger">Are sure to delete this bank</p>
            <span type="button" v-if="deletingBank==true" class="btn-small btn-danger rounded">...</span>
            <button  v-else type="button" @click="destroyBank(bank.id)" class="btn-small btn-danger rounded">
                <i class="icon-times mr-2"></i>Yes Delete
            </button>
        </Modal>
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
import EditBank from '@/components/admin/EditBank.vue';
import Modal from '@/components/Modal.vue';

    export default{
        name:"company-details",

        components:{
            EditBank,
            Modal
        },

        data(){
            return{
                form:{
                    company_address:null,
                    company_email:null,
                    company_phone:null
                },

                bankList:[],
                banksLoading:false,
                //fetchingBanks:false,

                bankForm:{
                    bank_name:null,
                    bank_account_name:null,
                    bank_account_number:null
                },
                submittingBank:false,
                bank:null,
                deletingBank:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('settingStore',['settings']),
            ...mapGetters('bankStore',['banks'])
           
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

            this.fetchBanks().then((res) => {
                this.bankList = res.data
            })

            if(this.banks.length == 0){
                this.banksLoading = true
                this.getBanks().then(()=>this.banksLoading=false)
            }

        },

        methods:{
            ...mapActions('settingStore',['all','update']),
            ...mapActions('paymentStore',['fetchBanks']),
            ...mapActions('bankStore',['getBanks','createBank','updateBank','deleteBank']),

            submit(){
                this.update(this.form)
            },

            storeBank(){
                this.submittingBank = true
                this.createBank(this.bankForm).then(()=>{this.submittingBank = false; this.getBanks();})
            },

            setBank(bank){
                this.bank = bank
            },

            destroyBank(id){
                this.deletingBank = true
                this.deleteBank(id).then(() => { this.deletingBank = false;  this.getBanks(); this.$bvModal.hide('delete-bank');})
            }


        }

    }
</script>