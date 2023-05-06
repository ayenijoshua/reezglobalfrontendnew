<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updatePercentage()">
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/investors.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green"> {{ settings.profit_pool_percentage }} %</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Profit Pool Percentage<br><small> Edit profit pool percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="profitPoolPerc.profit_pool_percentage" type="number" class="form-control r-0 light s-12" required placeholder="Percentage">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting">...</span>
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
                        <form @submit.prevent="updateDuration()">
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/calendar.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.profit_pool_duration }} Months</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Profit Pool Duration<br><small> Edit profit pool duration</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-calendar float-left s-20 green-text"></i></div>
                                                </div>
                                                <input v-model="profitPoolDur.profit_pool_duration" type="number" class="form-control r-0 light s-12" required placeholder="Duration">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting">...</span>
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
                    <div class="card">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateOffset()">
                            <input type="hidden" name="_token" value="6BwLvKulnhkAcUn3BgPaQHev2ZNKme6XDhncAZzL">									
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/calendar.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">{{ settings.profit_pool_days_offset }} Days After Activation</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Profit Pool Days Offset<br><small> Edit profit Pool days offset</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-calendar float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="profitPoolOff.profit_pool_days_offset" type="number" class="form-control r-0 light s-12" required placeholder="Offset">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting">...</span>
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
                        <form @submit.prevent="updateDownline()">
                            <div class="card no-b  no-r">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/pv1.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">Requires {{ settings.profit_pool_num_of_downlines }} Downlines</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">Profit Pool Required Downlines<br><small> Edit profit pool reequired downlines</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 green-text " ></i></div>
                                                </div>
                                                <input v-model="profitPoolNumD.profit_pool_num_of_downlines" type="number" class="form-control r-0 light s-12" required placeholder="Required downlines">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span class="btn btn-sm btn-success btn-lg" v-if="submitting">...</span>
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
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:"profit-pool-settings",

        data(){
            return{
                profitPoolPerc:{
                    profit_pool_percentage:null,
                },
                profitPoolNumD:{
                    profit_pool_num_of_downlines:null,
                },
                profitPoolDur:{
                    profit_pool_duration:null,
                },
                profitPoolOff:{
                    profit_pool_days_offset:null
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
                        this.profitPoolPerc.profit_pool_percentage = this.settings.profit_pool_percentage
                        this.profitPoolNumD.profit_pool_num_of_downlines = this.settings.profit_pool_num_of_downlines
                        this.profitPoolDur.profit_pool_duration = this.settings.profit_pool_duration
                        this.profitPoolOff.profit_pool_days_offset = this.settings.profit_pool_days_offset
                    }
                })
            }
        },

        methods:{
            ...mapActions('settingStore',['all','update']),

            updateDownline(){
                this.update(this.profitPoolNumD).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            },

            updateDuration(){
                this.update(this.profitPoolDur).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            },

            updateOffset(){
                this.update(this.profitPoolOff).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            },

            updatePercentage(){
                this.update(this.profitPoolPerc).then(res=>{
                    if(res.status == 200){
                        this.all()
                    }
                })
            }
        }
    }
</script>