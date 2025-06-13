<template>
    <div>
        <div class="animated">				
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-header" style="background-color:#ded8c7">
                            <h6 class="text-green"><strong class="font-weight-bold">OFFICIAL POINT VALUE RATE</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto; background-color:#ded8c7">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>Point Value</th>
                                    <th>Amount Equivalence</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr>
                                    <td>1 PV</td>
                                    <td>₦ {{ settings.unit_point_value?.toLocaleString('en-US') }}</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" v-b-modal.edit-pv ><i class="icon-edit"></i></a>													
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:#ded8c7">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateMinWithdrawal()">
                            <div class="card no-b  no-r" style="background-color:#ded8c7">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ {{ settings.minimum_withdrawal?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL MINIMUM WITHDRAWAL LIMIT<br><small> Edit preferred withdrawal limit</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="minWithdrawal.minimum_withdrawal" type="number" class="form-control r-0 light s-12" placeholder="Minimum Withdrawal Limit"  style="background-color:#ded8c7; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submitting && minWithSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:#ded8c7">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateMaxWithrawal()">
                            <div class="card no-b  no-r" style="background-color:#ded8c7">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ {{ settings.maximum_withdrawal?.toLocaleString('en-US')}}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL MAXIMUM WITHDRAWAL LIMIT<br><small> Edit maximum withdrawal limit</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white" ></i></div>
                                                </div>
                                                <input v-model="maxWithdrawal.maximum_withdrawal" type="number" class="form-control r-0 light s-12" placeholder="Maximum Withdrawal Limit"  style="background-color:#ded8c7; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submitting && maxWithSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/wallet1.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">₦ {{ availableBalance?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Balance On Paystack<br></h6></div>
                                    <div class="form-row ml-1">
                                        <button class="btn btn-sm btn-success btn-lg" @click="reloadBalance()"><i class="icon-save mr-2"></i>Reload Data</button>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h6 class="mt-1 s-8 font-weight-bold">Withdrawal Charge Settings</h6></div>
                                    <form @submit.prevent="updateWithdrawalChagre()">
                                        <div class="form-row mb-3">
                                            <div class="col-md-12 mb-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white" ></i></div>
                                                    </div>
                                                    <select v-model="withdrawalCharge.withdrawal_charge_type" class="form-control r-0 light s-12"  style="background-color:#ded8c7; border: 1px solid #2E671A">
                                                        <template v-if="!settings.withdrawal_charge_type">
                                                            <option :value="null">Select charge type</option>
                                                        </template>
                                                        <template>
                                                            <option :selected="settings.withdrawal_charge_type=='percentage'" value="percentage">Percentage</option>
                                                            <option :selected="settings.withdrawal_charge_type=='flat'" value="flat">Flat</option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                    </div>
                                                    <input v-model="withdrawalCharge.charge" class="form-control r-0 light s-12" required placeholder="Withdrawal Charge"  style="background-color:#ded8c7; border: 1px solid #2E671A" >
                                                </div>
                                            </div>
                                            <div v-if="withdrawalCharge.withdrawal_charge_type=='percentage'" class="col-md-12 mb-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-money float-left s-20 green-text " ></i></div>
                                                    </div>
                                                    <input v-model="withdrawalCharge.withdrawal_charge_cap" class="form-control r-0 light s-12" required placeholder="Withdrawal Charge Cap">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row ml-1">
                                            <span v-if="submitting && withdrawalChargeSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                            <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                        </div>
                                    </form>   
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-5 mb-5"> <!-- Centering wrapper added -->
                <div class="col-md-6 col-sm-12"> 
                    <div class="card no-b shadow 1" style="background-color: transparent;">
                        <div class="card-body">
                            <div class="text-center mb-3"><img src="/assets/img/calendar.png" width="80px"  height="80px">
                                <p class="text-green s-12 font-weight-bold">Automated Payment is Set Currently on</p>
                                <h5 class="font-weight-bold text-green">Weekly Automated Payout Settings</h5>
                            </div>
                        </div>     
                    </div>       
                </div>
            </div>  

            <div class="d-flex justify-content-center mt-5 mb-5"> <!-- Centering wrapper added -->
                <div class="col-md-6 col-sm-12"> 
                    <div class="card no-b shadow 1" style="background-color: transparent;">
                        <div class="card-body">
                            <span class="text-center text-green s-12 font-weight-bold">Select Payout Type</span>
                            <div class="form-group m-0">                       
                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" style="background-color: #2E671A; border: 2px solid #2E671A;"><i class="icon icon-date_range float-left s-20 text-white" ></i></div>
                                    </div>
                                    <select required v-model="form.withdrawal_type" class="form-control r-0 light s-12" style="background-color: #ded8c7; border: 2px solid #1b4f72;">
                                        <option value="" style="background-color: #ded8c7;">Select withdrawal type</option>
                                        <option value="weekly" style="background-color: #ded8c7;">Weekly Automated Payout</option>
                                        <option value="monthly" style="background-color: #ded8c7;">Monthly Automated Payout</option>														   
                                    </select>
                                </div>
                            </div>
                        </div>     
                    </div>       
                </div>
            </div> 

            <div  v-if="form.withdrawal_type === 'weekly'"  class="d-flex justify-content-center mt-5 mb-5"> <!-- Centering wrapper added -->
                <div class="col-md-6 col-sm-12"> 
                    <div class="card shadow1" style="background-color:#ded8c7">
                        <div class="card-body" style="overflow-x:auto;">
                            <div class="card no-b  no-r" style="background-color:#ded8c7">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/calendar.png" width="80px"  height="80px">
                                    <h6 class="mt-1 s-8 font-weight-bold">Weekly Automated Payout Settings</h6></div>
                                    
                                        <div class="form-row mb-3">
                                            <div class="col-md-12 mb-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-date_range float-left s-20 text-white" ></i></div>
                                                    </div>
                                                    <select v-model="form.withdrawal_period" class="form-control r-0 light s-12"  style="background-color:##ded8c7; border: 1px solid #2E671A">                                                       
                                                        <option value="" style="background-color: #ded8c7;">Select Day of the week</option>
                                                        <option value="1" style="background-color: #ded8c7;">Sunday</option>
                                                        <option value="2" style="background-color: #ded8c7;">Monday</option>
                                                        <option value="3" style="background-color: #ded8c7;">Tuesday</option>
                                                        <option value="4" style="background-color: #ded8c7;">Wednesday</option>
                                                        <option value="5" style="background-color: #ded8c7;">Thursday</option>
                                                        <option value="6" style="background-color: #ded8c7;">Friday</option>
                                                        <option value="7" style="background-color: #ded8c7;">Saturday</option>                                
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row ml-1">
                                            <span v-if="withdrawalTypeSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                            <button v-else type="submit" class="btn btn-sm btn-success btn-lg" @click="updateWithdrawalType"><i class="icon-save mr-2"></i>Update Data</button>
                                        </div>
                                </div>	
                            </div>
                        </div>
                    </div>       
                </div>
            </div> 

            <div v-if="form.withdrawal_type === 'monthly'" class="d-flex justify-content-center mt-5 mb-5"> <!-- Centering wrapper added -->
                <div class="col-md-6 col-sm-12"> 
                    <div class="card shadow1" style="background-color:#ded8c7">
                        <div class="card-body" style="overflow-x:auto;">
                            <div class="card no-b  no-r" style="background-color:#ded8c7">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/calendar.png" width="80px"  height="80px">
                                    <h6 class="mt-1 s-8 font-weight-bold">Monthly Automated Payout Settings</h6></div>
                                    
                                        <div class="form-row mb-3">
                                            <div class="col-md-12 mb-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><i class="icon icon-date_range float-left s-20 text-white" ></i></div>
                                                    </div>
                                                    <select v-model="form.withdrawal_period" class="form-control r-0 light s-12"  style="background-color:#ded8c7; border: 1px solid #2E671A">                                                       
                                                        <option value="">Select Day of the Month</option>
                                                        <option value="1">1st</option>
                                                        <option value="2">2nd</option>
                                                        <option value="3">3rd</option>
                                                        <option value="4">4th</option>
                                                        <option value="5">5th</option>
                                                        <option value="6">6th</option>
                                                        <option value="7">7th</option>
                                                        <option value="8">8th</option>
                                                        <option value="9">9th</option>
                                                        <option value="10">10th</option>
                                                        <option value="11">11th</option>
                                                        <option value="12">12th</option>
                                                        <option value="13">13th</option>
                                                        <option value="14">14th</option>
                                                        <option value="15">15th</option>
                                                        <option value="16">16th</option>
                                                        <option value="17">17th</option>
                                                        <option value="18">18th</option>
                                                        <option value="19">19th</option>
                                                        <option value="20">20th</option>
                                                        <option value="21">21st</option>
                                                        <option value="22">22nd</option>
                                                        <option value="23">23rd</option>
                                                        <option value="24">24th</option>
                                                        <option value="25">25th</option> 
                                                        <option value="26">26th</option> 
                                                        <option value="27">27th</option>
                                                        <option value="28">28th</option>
                                                        <option value="29">29th</option>
                                                        <option value="30">30th</option>                              
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row ml-1">
                                            <span v-if="withdrawalPeriodSubmitting" class="btn btn-sm btn-success btn-lg">...</span>
                                            <button v-else type="submit" class="btn btn-sm btn-success btn-lg" @click="updateWithdrawalType"><i class="icon-save mr-2"></i>Update Data</button>
                                        </div> 
                                </div>	
                            </div>
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
                                                <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white" ></i></div>
                                            </div>
                                            <input  disabled value="1 PV" type="text" class="form-control r-0 light s-12" placeholder="Point Value"  style="background-color:#ecf0f1; border: 1px solid #2E671A" >
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="icon icon-exchange float-left s-20 text-white" ></i></div>
                                            </div>
                                            <input v-model="unitPV.unit_point_value" required min="1" type="text" class="form-control r-0 light s-12" placeholder="Exchange Amount"  style="background-color:#ecf0f1; border: 1px solid #2E671A">
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
import { notification } from '@/util/notification';
    export default{
        name:"withdrawal-settings",

        components:{
            Modal
        },

        data(){
            return{
                selectedWithdrawalType:"", // Tracks the selected value

                unitPV:{
                    unit_point_value:null,
                },
                minWithdrawal:{
                    minimum_withdrawal:null,
                },
                maxWithdrawal:{
                    maximum_withdrawal:null,
                },
                availableBalance:0,

                minWithSubmitting:false,
                maxWithSubmitting:false,
                withdrawalChargeSubmitting:false,

                withdrawalCharge:{
                    withdrawal_charge_type:null,
                    charge:null,
                    withdrawal_charge_cap:null
                },

                form:{
                    withdrawal_type:"",
                    withdrawal_period:""
                },

                withdrawalTypeSubmitting:false,
                banks:[]
            }
        },

        

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('settingStore',['settings']),
            ...mapGetters('paymentStore',['walletBalance'])
        },

        created(){
            if(this.settings.id == undefined){
                this.all().then(res=>{
                    if(res.status == 200){
                        this.unitPV.unit_point_value = this.settings.unit_point_value
                        this.minWithdrawal.minimum_withdrawal = this.settings.minimum_withdrawal
                        this.maxWithdrawal.maximum_withdrawal = this.settings.maximum_withdrawal
                        this.withdrawalCharge.charge = this.settings.charge
                        this.withdrawalCharge.withdrawal_charge_type = this.settings.withdrawal_charge_type
                        this.form.withdrawal_type = this.settings.withdrawal_type;
                        this.form.withdrawal_period = this.settings.withdrawal_period;
                        this.selectedWithdrawalType = this.form.withdrawal_type
                    }
                })
            }else{
                this.unitPV.unit_point_value = this.settings.unit_point_value
                this.minWithdrawal.minimum_withdrawal = this.settings.minimum_withdrawal
                this.maxWithdrawal.maximum_withdrawal = this.settings.maximum_withdrawal
                this.withdrawalCharge.charge = this.settings.charge
                this.withdrawalCharge.withdrawal_charge_type = this.settings.withdrawal_charge_type
                this.form.withdrawal_type = this.settings.withdrawal_type;
                this.form.withdrawal_period = this.settings.withdrawal_period;
                this.selectedWithdrawalType = this.form.withdrawal_type
            }

            this.getWalletBalance().then(res=>{
                if(res.status==200)[
                this.availableBalance = this.walletBalance.available_balance
                ]
            })

        },

        methods:{
            ...mapActions('settingStore',['all','update']),
            ...mapActions('paymentStore',['getWalletBalance','fetchBanks']),

            updateUnitPV(){
                if(!this.isNumeric(this.unitPV.unit_point_value)){
                    notification.warning('unit point value is invalid')
                    return
                }
                this.update(this.unitPV).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            },

            updateMaxWithrawal(){
                if(this.maxWithdrawal.maximum_withdrawal && !this.isNumeric(this.maxWithdrawal.maximum_withdrawal)){
                    notification.warning('maximum withdrawal is invalid')
                    return
                }
                this.maxWithSubmitting = true
                this.update(this.maxWithdrawal).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.maxWithSubmitting = false
                })
            },

            updateMinWithdrawal(){
                if(this.minWithdrawal.minimum_withdrawal && !this.isNumeric(this.minWithdrawal.minimum_withdrawal)){
                    notification.warning('minimum withdrawal is invalid')
                    return
                }
                this.minWithSubmitting = true
                this.update(this.minWithdrawal).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.minWithSubmitting = false
                })
            },

            reloadBalance(){
                this.getWalletBalance()
            },

            updateWithdrawalChagre(){
                if(this.withdrawalCharge.charge && !this.isNumeric(this.withdrawalCharge.charge)){
                    notification.warning("charge field is invalid")
                    return
                }
                if(this.withdrawalCharge.withdrawal_charge_cap && !this.isNumeric(this.withdrawalCharge.withdrawal_charge_cap)){
                    notification.warning("withdrawal charge cap field is invalid")
                    return
                }
                this.withdrawalChargeSubmitting = true
                this.update(this.withdrawalCharge).then(()=>this.withdrawalChargeSubmitting = false)
            },

            isNumeric(n){
                return !isNaN(parseFloat(n)) && isFinite(n)
            },

            updateWithdrawalType(){
                this.withdrawalTypeSubmitting = true
                this.update(this.form).then(()=>this.withdrawalTypeSubmitting = false)
            }
            
        }
    }
</script>