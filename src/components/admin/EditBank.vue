<template>
    <div class="card border-0 justify-content-center" style="background-color: #ded8c7">
        <div class="card-body rounded" style="background-color: #ded8c7"> 
            <div class="text-center"><img  src="/assets/img/registration.png" width="80px"  height="80px" style=" opacity: 0.5;">
            <h6 class="mt-1 s-8 font-weight-bold text-green">Edit Bank<br><small> </small></h6></div>
            <form @submit.prevent="editBank">
                <div class="card no-b  no-r">
                    <div class="card-body no-gutters" style="background-color: #ded8c7">
                        <div class="form-row mb-3">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-card_membership float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.bank_name" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="Bank name" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.bank_account_name" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="Bank account name" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-credit-card float-left s-20 text-white  " ></i></div>
                                    </div>
                                    <input v-model="form.bank_account_number" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="bank account number" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                            </div>
                        </div>
                        <span class="btn btn-sm btn-success btn-lg" v-if="editingBank">...</span>
                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                    </div>	
                </div>
            </form>
        </div>
    </div> 
</template>

<script>
import { mapActions, mapState } from 'vuex'

 export default{
    name:"edit-bank",

    props:{
        bank:{
            type:Object,
            required:true
        }
    },

    data(){
        return{
            form:{
                bank_name:null,
                bank_account_name:null,
                bank_account_number:null
            },
            editingBank:false
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },

    created(){
        this.form.bank_name = this.bank.bank_name
        this.form.bank_account_name = this.bank.bank_account_name
        this.form.bank_account_number = this.bank.bank_account_number
    },

    methods:{
        ...mapActions('bankStore',['updateBank']),

        editBank(){
            this.editingBank = true
            this.updateBank({id:this.bank.id,data:this.form}).then(res=>{
                if(res.status == 200){
                    this.$emit('updated')
                }
                this.editingBank = false
            })
        }
    }
 }
</script>