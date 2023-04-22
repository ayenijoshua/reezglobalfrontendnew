<template>
    <div class="card border-0 justify-content-center">
        <div v-if="!userHasProfile" class="card-body">
            <div class="alert alert-info">User has not submitted bank details</div>
        </div>
        <div v-else class="card-body"> 
            <div class=" form-row mb-3">  
                <form @submit.prevent="profileUpdate()">                      
                    <div class="form-group col-12 m-0">
                        <div class="input-group mb-2 mr-sm-2 mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="icon icon-account_balance float-left s-20 green-text " ></i></div>
                            </div>
                            <input v-model="form.bank_name" type="text" class="form-control r-0 light s-12" required placeholder="Bank Name">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-6 m-0">
                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="icon icon-person float-left s-20 green-text " ></i></div>
                                </div>
                                <input v-model="form.bank_account_name" type="text" class="form-control r-0 light s-12" required placeholder="Account Name">
                            </div>
                        </div>
                        <div class="form-group col-6 m-0">
                            <div class="input-group mb-2 mr-sm-2 mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="icon icon-address-card-o float-left s-20 green-text " ></i></div>
                                </div>
                                <input v-model="form.bank_account_number" type="text" class="form-control r-0 light s-12" required placeholder="Account Number">
                            </div>
                        </div>
                    </div>
                    <div class="float-left mt-3 mb-3">
                        <span v-if="submitting" class="btn btn-sm btn-success">...</span>
                        <button v-else type="submit" class="btn btn-sm btn-success"><i class="icon-save mr-2"></i>Update Data</button>
                    </div>
                </form> 
            </div>	
            <hr>
            <div class="text-center mb-3">
                <h6 class="font-weight-bold text-green"><i class="icon-lock mr-2"></i>Enable Bank Account Change</h6>
                <small>Allow Member to change account details by-self.</small>
                <div class="form-row mt-2">
                    <div style="padding-left:170px">
                        <input @click="setEditable()" type="checkbox" v-model="bank_editable" data-toggle="switchbutton"  :checked="bank_editable" data-width="100"  data-onstyle="success" />
                    </div>
                </div>
            </div>	
            <hr>
            <div class="card " style="background-color: #2E671A" >
                <div class="row column-row">
                    <div class="mt-3 ml-5" >
                            <img src="/assets/img/personal-banking.png" class="bg-transparent" style="max-width:80px;">	 
                    </div>
                    <div class="mt-4 ml-auto" style="padding-right:40px" >
                            <span class="border-left mr-2"></span>
                            <span class="text-white float-right" id="d1" style="font-size:10px" >Widthrawal Account Details</span>
                    </div> 
                </div>
                <div class="card-body" >
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-xl mr-4 ">
                            <img class="user_avatar" src="/assets/img/dummy/u14.jpg" alt="User Image">
                        </div>
                        <div>
                            <span class="text-white" id="d1" style="font-size:10px" >Account Name</span>
                            <h6 class="font-weight-bold text-white" id="d1">{{ profile?.bank_account_name }}</h6>
                            <span class="text-white" id="d1" style="font-size:10px" >Account Number</span>
                            <h6 class="font-weight-bold text-white" id="d1">{{ profile?.bank_account_number }}</h6>
                            <span class="text-white" id="d1" style="font-size:10px" >Bank Name</span>
                            <h6 class="font-weight-bold text-white" id="d1">{{ profile?.bank_name }}</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>       
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default{
    name:'edit-bank-details',
    props:{
        user:{
            type:Object,
            required:true
        },
        
    },

    data(){
        return{
            form:{
                bank_account_name:null,
                bank_account_number:null,
                bank_name:null
            },
            bank_editable:false,
            userHasProfile:true
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting
        }),
        ...mapGetters('userStore',['profile'])
    },

    mounted(){
        
        this.getProfileDetails(this.user.uuid).then(reslt=>{
            if(reslt.status==200){
                if(!reslt.data.data){
                    this.userHasProfile = false
                }else{
                    this.form.bank_account_name = reslt.data.data.bank_account_name
                    this.form.bank_account_number = reslt.data.data.bank_account_number
                    this.form.bank_name = reslt.data.data.bank_name
                    this.bank_editable = reslt.data.data.bank_editable
                }
            }
        })
    },

    methods:{
        ...mapActions('userStore',['getProfileDetails','updateBankDetails','setBankEditable']),

        profileUpdate(){
            this.updateBankDetails({uuid:this.user.uuid,data:this.form})
        },

        setEditable(){
            this.setBankEditable({uuid:this.user.uuid,data:{bank_editable:!this.bank_editable}})
        }
    }
    
}
</script>