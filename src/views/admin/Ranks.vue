<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card shadow1">
                        <div class="card-header" style="background-color:#2E671A;">
                            <h6 class="text-white"><strong class="font-weight-bold">OFFICIAL RANKS</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Points</th>
                                    <th>Global Profit Eligible</th>
                                    <th>Package</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr v-if="ranksLoading==true">
                                    <td colspan="5">
                                        <b-skeleton-table
                                            :rows="3"
                                            :columns="6"
                                            :table-props="{ bordered: true, striped: true }"
                                        ></b-skeleton-table>
                                    </td>
                                </tr>
                                <template v-else>
                                    <tr v-if="ranks.length == 0">
                                        <td colspan="6">
                                            <div class="alert alert-info">There are no ranks</div>
                                        </td>
                                    </tr>
                                    <template v-else>
                                        <tr  v-for="pack,i in ranks" :key="i">
                                            <td>{{ ++i }}</td>
                                            <td>{{ pack.name }}</td>
                                            <td>{{ pack.points?.toLocaleString('en-US') }}PV</td>
                                            <td>
                                                <span :class="['btn btn-small',pack.is_global_profit_eligible?'btn-success':'btn-danger']">{{ pack.is_global_profit_eligible?'Eligible':'Not-Eligible'}}</span>
                                            </td>
                                            <td>
                                                {{ pack.package_name }}
                                            </td>
                                            <td>
                                                <a @click="setRank(pack)" v-b-modal.edit-rank class="btn btn-sm btn-success text-white caret" href="#"><i class="icon-edit"></i></a>
                                            </td>
                                        </tr>
                                    </template>
                                    
                                </template>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateUplineBonus">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">% {{ settings.award_winner_sponsor_bonus_percentage?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">AWARD WINNER UPLINE BONUS %<br><small> Edit award winner upline bonus percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="awardWinnerUplineBonus.award_winner_sponsor_bonus_percentage" type="number" class="form-control r-0 light s-12" placeholder="Bonus %"  style="background-color:#ecf0f1; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submittingForUpline" class="btn btn-sm btn-success btn-lg">...</span>
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
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateDownlineBonus">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">% {{ settings.award_winner_dd_bonus_percentage?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">AWARD WINNER DIRECT DOWNLINE BONUS %<br><small> Edit award winner direct downline bonus percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="awardWinnerDownlineBonus.award_winner_dd_bonus_percentage" type="number" class="form-control r-0 light s-12" placeholder="Bonus %"  style="background-color:#ecf0f1; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="submittingForDownline" class="btn btn-sm btn-success btn-lg">...</span>
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

        <Modal modal-id="edit-rank" modal-title="Edit Rank" modal-size="md">
            <template v-if="rank==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditPackage v-else :rank="rank" @updated="edited()"/>
        </Modal>
    </div>
</template>



<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import Modal from '@/components/Modal.vue';
    import EditPackage from '@/components/admin/EditRank.vue';

    export default{
        name:"admin-ranks",

        components:{
            Modal,
            EditPackage
        },

        data(){
            return {
                rank:null,
                ranksLoading:false,
                awardWinnerUplineBonus:{
                    award_winner_sponsor_bonus_percentage:0
                },
                awardWinnerDownlineBonus:{
                    award_winner_dd_bonus_percentage:0
                },
                submittingForUpline:false,
                submittingForDownline:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('rankStore',['ranks']),
            ...mapGetters('settingStore',['settings'])
        },

        created(){
            if(this.ranks.length == 0){
                this.rankLoading = true
                this.allRanks().then(()=>this.rankLoading = false)
            }

            if(this.settings.id == undefined){
                this.allSettings().then(res=>{
                    if(res.status == 200){
                        this.awardWinnerUplineBonus.award_winner_sponsor_bonus_percentage = this.settings.award_winner_sponsor_bonus_percentage
                        this.awardWinnerDownlineBonus.award_winner_dd_bonus_percentage = this.settings.award_winner_dd_bonus_percentage
                    }
                })
            }else{
                this.awardWinnerUplineBonus.award_winner_sponsor_bonus_percentage = this.settings.award_winner_sponsor_bonus_percentage
                this.awardWinnerDownlineBonus.award_winner_dd_bonus_percentage = this.settings.award_winner_dd_bonus_percentage
            }
        },

        methods:{
            ...mapActions('rankStore',['allRanks','update']),
            ...mapActions('settingStore',{allSettings:'all', updateSetting:'update'}),

            setRank(rank){
                this.rank = rank
            },

            edited(){
                this.allRanks()
            },

            updateUplineBonus(){
                this.submittingForUpline = true
                this.updateSetting(this.awardWinnerUplineBonus).then(()=>{this.submittingForUpline = false; this.allSettings()})
            },

            updateDownlineBonus(){
                this.submittingForDownline = true
                this.updateSetting(this.awardWinnerDownlineBonus).then(()=>{this.submittingForDownline = false; this.allSettings()})
            }
        }

    }
</script>