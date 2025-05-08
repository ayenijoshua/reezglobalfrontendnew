<template>
    <div class="card border-0 justify-content-center" style="background-color: #ecf0f1">
        <div class="card-body rounded" style="background-color: #ecf0f1"> 
            <div class="text-center"><img  src="/assets/img/registration.png" width="80px"  height="80px" style=" opacity: 0.5;">
            <h6 class="mt-1 s-8 font-weight-bold text-green">OFFICIAL REGISTRATION PACKAGE RATES<br><small> Edit preferred Registration Package Rates</small></h6></div>
            <form @submit.prevent="updatePackage()">
                <div class="card no-b  no-r">
                    <div class="card-body no-gutters" style="background-color: #ecf0f1">
                        <div class="form-row mb-3">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-card_membership float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.name" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="Registration Package" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.point_value" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="Point Value" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-credit-card float-left s-20 text-white  " ></i></div>
                                    </div>
                                    <input v-model="form.registration_value" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="Registration Amount" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                                <div class="input-group mt-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-package float-left s-20 text-white  " ></i></div>
                                    </div>
                                    <input v-model="form.pickup_amount" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                            placeholder="Registration Product Puck-up Amount" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                    
                                </div>
                                <div class="input-group mt-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-credit-card float-left s-20 text-white  " ></i></div>
                                    </div>
                                    <input v-model="form.matching_bonus_cap" type="text" class="form-control r-0 light s-12" id="inlineFormInputGroupUsername2"
                                    placeholder="Matching bonus cap" style="border: 1px solid #2E671A; background-color: #ded8c7;">
                                </div>
                            </div>
                        </div>
                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting">...</span>
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
    name:"edit-package",

    props:{
        currPackage:{
            type:Object,
            required:true
        }
    },

    data(){
        return{
            form:{
                registration_value:null,
                point_value:null,
                name:null,
                pickup_amount:0,
                matching_bonus_cap:0
            }
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },

    created(){
        this.form.registration_value = this.currPackage.registration_value
        this.form.point_value = this.currPackage.point_value
        this.form.name = this.currPackage.name
        this.form.matching_bonus_cap = this.currPackage.matching_bonus_cap
    },

    methods:{
        ...mapActions('packageStore',['update']),

        updatePackage(){
            this.update({id:this.currPackage.id,data:this.form}).then(res=>{
                if(res.status == 200){
                    this.$emit('updated')
                }
            })
        }
    }
 }
</script>