<template>
    <div>
        <div class="animated">				
            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL POINT VALUE RATE</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>Point Value</th>
                                    <th>Amount Equivalence</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr>
                                    <td>1 PV</td>
                                    <td>₦ {{ settings.unit_point_value }}</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" v-b-modal.edit-pv ><i class="icon-edit"></i></a>													
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ 1,000</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Balance On Fincra<br></h6></div>
                                    <div class="form-row ml-1">
                                        <button class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Reload Data</button>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-3">

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateMinWithdrawal()">
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ {{ settings.minimum_withdrawal }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL MINIMUM WITHDRAWAL LIMIT<br><small> Edit preferred withdrawal limit</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="minWithdrawal.minimum_withdrawal" required min="1" type="number" class="form-control r-0 light s-12" placeholder="Minimum Withdrawal Limit">
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

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateMaxWithrawal()">
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ {{ settings.maximum_withdrawal}}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL MAXIMUM WITHDRAWAL LIMIT<br><small> Edit maximum withdrawal limit</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="maxWithdrawal.maximum_withdrawal" required min="1" type="number" class="form-control r-0 light s-12" placeholder="Maximum Withdrawal Limit">
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

        <Modal modal-id="edit-pv" modal-title="Edit unit PV">
            <div class="card border-0 justify-content-center">
                <div class="card-body rounded"> 
                    <div class="text-center"><img  src="/assets/img/exchange.png" width="80px"  height="80px" style=" opacity: 0.5;">
                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL POINT VALUE RATE<br><small> Edit preferred Point Value Rate</small></h6></div>
                    <form @submit.prevent="updateUnitPV()">
                        <div class="card no-b  no-r">
                            <div class="card-body no-gutters">
                                <div class="form-row mb-3">
                                    <div class="col-md-12">
                                        <div class="input-group mb-2 mr-sm-2 mb-3">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 green-text" ></i></div>
                                            </div>
                                            <input  disabled value="1 PV" type="text" class="form-control r-0 light s-12" placeholder="Point Value">
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-exchange float-left s-20 green-text " ></i></div>
                                            </div>
                                            <input v-model="unitPV.unit_point_value" required min="1" type="text" class="form-control r-0 light s-12" placeholder="Exchange Amount">
                                        </div>
                                    </div>
                                </div>
                                <span v-if="submitting" class="btn btn-sm btn-success btn-lg">...</span>
                                <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                            </div>	
                        </div>
                    </form>
                </div>
            </div> 
        </Modal>
         
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Modal from '@/components/Modal.vue';
    export default{
        name:"withdrawal-settings",

        components:{
            Modal
        },

        data(){
            return{
                unitPV:{
                    unit_point_value:null,
                },
                minWithdrawal:{
                    minimum_withdrawal:null,
                },
                maxWithdrawal:{
                    maximum_withdrawal:null,
                },
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
                        this.unitPV.unit_point_value = this.settings.unit_point_value
                        this.minWithdrawal.minimum_withdrawal = this.settings.minimum_withdrawal
                        this.maxWithdrawal.maximum_withdrawal = this.settings.maximum_withdrawal
                        //this.profitPoolOff.profit_pool_days_offset = this.settings.profit_pool_days_offset
                    }
                })
            }
        },

        methods:{
            ...mapActions('settingStore',['all','update']),

            updateUnitPV(){
                this.update(this.unitPV).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            },

            updateMaxWithrawal(){
                this.update(this.maxWithdrawal).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            },

            updateMinWithdrawal(){
                this.update(this.minWithdrawal).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            },
        }
    }
</script>