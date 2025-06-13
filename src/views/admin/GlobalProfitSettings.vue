<template>
    <div>
        <div class="animated">
            <div class="d-flex justify-content-center mt-5 pb-4">
                <div class="col-md-6"> 
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;background-color:transparent">
                        <form @submit.prevent="updateGlobalProfitAmount()">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters" style="background-color:transparent">
                                    <div class="text-center mb-3"><img  src="/assets/img/investors.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ globalProfitAmount.global_profit_value }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Global Profit Amount<br><small> Edit Amount</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="globalProfitAmount.global_profit_value" type="" class="form-control r-0 light s-12" placeholder="Global profit amount" style="background-color: #ded8c7; border: 1px solid #2E671A" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting && globalProfitAmountSubmitting">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <!--<div class="col-md-6"> 
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;background-color:transparent">
                        <form @submit.prevent="updateFirstPercentage()">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters" style="background-color:transparent">
                                    <div class="text-center mb-3"><img  src="/assets/img/investors.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.global_profit_first_percentage }}%</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Global Profit Percentage<br><small> Edit percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="globalFirstPerc.global_profit_first_percentage" type="" class="form-control r-0 light s-12" placeholder="First percentage" style="background-color: #ded8c7; border: 1px solid #2E671A" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting && firstPercSubmitting">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>-->
            </div>

            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;background-color:transparent">
                        <form @submit.prevent="updateShareMonth()">
                            <input type="hidden" name="_token" value="6BwLvKulnhkAcUn3BgPaQHev2ZNKme6XDhncAZzL">									
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/calendar.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.next_global_profit_share_month }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Global Profit Share Month<br><small> Edit share month</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-calendar float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input required v-model="globalShareMonth.next_global_profit_share_month" type="number" min="1" max="12" class="form-control r-0 light s-12" placeholder="Profit share month"
                                                v-b-popover.hover.top="'Use numeric value for month. e.g 1 for January, 10 for October'" title="Global Profit Month" style="background-color: #ded8c7; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting && shareMonthSubmitting">...</span>
                                        <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                                    </div>
                                </div>	
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;background-color:transparent">
                        <form @submit.prevent="updateShareDay()">
                            <div class="card no-b no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/calendar.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.next_global_profit_share_day }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Global Profit share day<br><small> Edit share day</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-calendar float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="globalShareDay.next_global_profit_share_day" type="number" min="1" max="31" class="form-control r-0 light s-12" placeholder="Profit Share day" style="background-color: #ded8c7; border: 1px solid #2E671A" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting && shareDaySubmitting">...</span>
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
    </div>
</template>

<script>
import { notification } from '@/util/notification';
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:"global-profit-settings",

        data(){
            return{
                globalFirstPerc:{
                    global_profit_first_percentage:null,
                },
                globalSecondPerc:{
                    global_profit_second_percentage:null,
                },
                globalShareDay:{
                    next_global_profit_share_day:null,
                },
                globalShareMonth:{
                    next_global_profit_share_month:null
                },

                globalProfitAmount:{
                    global_profit_value:null
                },

                firstPercSubmitting:false,
                secondPercSubmitting:false,
                shareMonthSubmitting:false,
                shareDaySubmitting:false,
                globalProfitAmountSubmitting:false,
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
                        this.globalFirstPerc.global_profit_first_percentage = this.settings.global_profit_first_percentage
                        this.globalSecondPerc.global_profit_second_percentage = this.settings.global_profit_second_percentage
                        this.globalShareDay.next_global_profit_share_day = this.settings.next_global_profit_share_day
                        this.globalShareMonth.next_global_profit_share_month = this.settings.next_global_profit_share_month
                    }
                })
            }else{
                this.globalFirstPerc.global_profit_first_percentage = this.settings.global_profit_first_percentage
                this.globalSecondPerc.global_profit_second_percentage = this.settings.global_profit_second_percentage
                this.globalShareDay.next_global_profit_share_day = this.settings.next_global_profit_share_day
                this.globalShareMonth.next_global_profit_share_month = this.settings.next_global_profit_share_month
            }
        },

        methods:{
            ...mapActions('settingStore',['all','update']),

            updateFirstPercentage(){
                if(!this.isNumeric(this.globalFirstPerc.global_profit_first_percentage)){
                    notification.warning("Please enter a valid number")
                    return
                }
                this.firstPercSubmitting = true
                this.update(this.globalFirstPerc).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.firstPercSubmitting = false
                })
            },

            updateSecondPercentage(){
                if(!this.isNumeric(this.globalSecondPerc.global_profit_second_percentage)){
                    notification.warning("Please enter a valid number")
                    return
                }
                this.secondPercSubmitting = true
                this.update(this.globalSecondPerc).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.secondPercSubmitting = false
                })
            },

            updateShareDay(){
                this.shareDaySubmitting = true
                this.update(this.globalShareDay).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.shareDaySubmitting = false
                })
            },

            updateShareMonth(){
                this.shareMonthSubmitting = true
                this.update(this.globalShareMonth).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.shareMonthSubmitting = false
                })
            },

            isNumeric(n){
                return !isNaN(parseFloat(n)) && isFinite(n)
            },

            updateGlobalProfitAmount(){
                if(!this.isNumeric(this.globalProfitAmount.global_profit_value)){
                    notification.warning("Please enter a valid number")
                    return
                }
                this.globalProfitAmountSubmitting = true
                this.update(this.globalProfitAmount).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                    this.globalProfitAmountSubmitting = false
                })
            }
        }
    }
</script>