<template>
    <div>
        <div class="row my-3">
            <div class="col-md-6 offset-3">
                <div class="card">
                    <div class="card-body" style="overflow-x:auto;">
                    <form @submit.prevent="submit()">
                        <div class="card no-b  no-r">
                            <div class="card-body no-gutters">
                                <div class="text-center mb-3"><img  src="/assets/img/equil.png" width="80px"  height="80px">
                                <h6 class="mt-1 s-8 font-weight-bold">Company Details<br><small> Edit company details</small></h6></div>
                                <div class="form-row mb-3">
                                    <div class="col-md-12 mb-2">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-phone float-left s-20 green-text " ></i></div>
                                            </div>
                                            <input v-model="form.company_phone" type="text" class="form-control r-0 light s-12" required placeholder="Company Phone">
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-email float-left s-20 green-text " ></i></div>
                                            </div>
                                            <input v-model="form.company_email" type="email" class="form-control r-0 light s-12" required placeholder="Company Email">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-house float-left s-20 green-text " ></i></div>
                                            </div>
                                            <textarea v-model="form.company_address" class="form-control r-0 light s-12" required placeholder="Company Address"></textarea>
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
            </div>
        </div>
    </div>
</template>

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