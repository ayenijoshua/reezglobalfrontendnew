<template>
    <div>
        <div class="animated">				
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card shadow1">
                        <div class="card-header" style="background-color:#2E671A ;">
                            <h6 class="text-white"><strong class="font-weight-bold">OFFICIAL REFERRAL BONUSES PER PACKAGE</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Registration Package</th>
                                        <th>1st Generation</th>
                                        <th>2nd Generation</th>
                                        <th>3rd Generation</th>
                                        <th>4th Generation</th>
                                        <th>5th Generation</th>
                                        <th>6th Generation</th>
                                        <th>7th Generation</th>
                                        <th>8th Generation</th>
                                        <th>9th Generation</th>
                                        <th>10th Generation</th>
                                        <th>Edit Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="loading && requestLoading">
                                        <td colspan="13">
                                            <b-skeleton-table
                                                :rows="3"
                                                :columns="13"
                                                :table-props="{ bordered: true, striped: true }"
                                            ></b-skeleton-table>
                                        </td>
                                    </tr>
                                    <template v-else>
                                        <tr v-if="referralBonusSetting.length == 0">
                                            <td colspan="13">
                                                <div class="alert alert-info">There are no Referral bonus settings</div>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr  v-for="(refBo, i) in referralBonusSetting" :key="i">
                                                <td>{{ ++i }}</td>
                                                <td>{{ refBo.name }}</td>
                                                <td><span v-if="refBo.generation_1_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_1_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_2_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_2_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_3_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_3_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_4_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_4_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_5_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_5_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_6_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_6_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_7_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_7_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_8_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_8_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_9_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_9_percentage }} %</span>
                                                </td>
                                                <td><span v-if="refBo.generation_10_percentage === 0">-</span>
                                                    <span v-else>{{ refBo.generation_10_percentage }} %</span>
                                                </td>
                                                <td>
                                                    <a @click="setSetting(refBo)" v-b-modal.edit-settings class="btn btn-sm btn-success text-white caret" href="#">
                                                        <i class="icon-edit"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </template>
                                        
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="card shadow1" style="background-color:transparent">
                        <div class="card-body" style="overflow-x:auto;">
                        <form @submit.prevent="updateMatchBonusPV">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green"> {{ settings.matching_bonus_total_pv?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">MATCHING BONUS TOTAL PV <br><small> Edit matching bonus PV</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="matchingBonusPV.matching_bonus_total_pv" required  type="number" class="form-control r-0 light s-12" placeholder="Bonus total PV"  style="background-color:#ecf0f1; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="updatingMatchingPv" class="btn btn-sm btn-success btn-lg">...</span>
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
                        <form @submit.prevent="updateMatchBonusPercent">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">% {{ settings.matching_bonus_percent?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">MATCHING BONUS %<br><small> Edit matching bonus percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="matchingBonusPercent.matching_bonus_percent"  required type="number" class="form-control r-0 light s-12" placeholder="Bonus %"  style="background-color:#ecf0f1; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="updatingMatchingPercentage" class="btn btn-sm btn-success btn-lg">...</span>
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
                        <form @submit.prevent="updateRepurchaseBonus">
                            <div class="card no-b  no-r" style="background-color:transparent">
                                <div class="card-body no-gutters">
                                    <div class="text-center mb-3"><img  src="/assets/img/cash-withdrawal.png" width="80px"  height="80px">
                                    <h5 class="s-36 font-weight-bold mt-2 text-green">% {{ settings.repurchase_bonus_percentage?.toLocaleString('en-US') }}</h5>
                                    <h6 class="mt-1 s-8 font-weight-bold">REPURCHASE BONUS %<br><small> Edit repurchase bonus percentage</small></h6></div>
                                    <div class="form-row mb-3">
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="icon icon-money-3 float-left s-20 text-white " ></i></div>
                                                </div>
                                                <input v-model="repurchaseBonus.repurchase_bonus_percentage" required type="number" class="form-control r-0 light s-12" placeholder="Bonus %"  style="background-color:#ecf0f1; border: 1px solid #2E671A">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row ml-1">
                                        <span v-if="updatingRepurchaseBonus" class="btn btn-sm btn-success btn-lg">...</span>
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
        <Modal modal-id="edit-settings" modal-title="Referral Bonus Settings" modal-size="md">
            <template v-if="setting == null">
                <b-skeleton-table
                    :rows="3"
                    :columns="13"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditReferralBonusSetting v-else :setting="setting" @updated="edited()"/>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import EditReferralBonusSetting from '@/components/admin/EditReferralBonusSetting.vue';
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
    name: "referral-bonus-settings",

    components: {
        Modal,
        EditReferralBonusSetting
    },

    data() {
        return {
            setting: null,
            requestLoading: false,
            updatingMatchingPv:false,
            updatingMatchingPercentage:false,
            updatingRepurchaseBonus:false,

            matchingBonusPercent:{
                matching_bonus_percent:null,
            },

            matchingBonusPV:{
                matching_bonus_total_pv:null,
            },
            repurchaseBonus:{
                repurchase_bonus_percentage:null
            }
        };
    },

    computed: {
        ...mapState({
            loading: state => state.loading
        }),
        ...mapGetters('settingStore', ['referralBonusSetting','settings'])
    },

    created() {
        if (this.referralBonusSetting.length === 0) {
            this.requestLoading = true;
            this.getReferralBonusSetting().then(() => (this.requestLoading = false));
        }

        if(this.settings.id == undefined){
            this.all().then((res)=>{
                this.matchingBonusPV.matching_bonus_total_pv = res.matching_bonus_total_pv
                this.matchingBonusPercent.matching_bonus_percent = res.matching_bonus_percent
                this.repurchaseBonus.repurchase_bonus_percentage = res.repurchase_bonus_percentage
            })
        }else{
            this.matchingBonusPV.matching_bonus_total_pv = this.settings.matching_bonus_total_pv
            this.matchingBonusPercent.matching_bonus_percent = this.settings.matching_bonus_percent
            this.repurchaseBonus.repurchase_bonus_percentage = this.settings.repurchase_bonus_percentage
        }
    },

    methods: {
        ...mapActions('settingStore', ['getReferralBonusSetting','all','update']),

        setSetting(setting) {
            this.setting = setting;
        },

        edited() {
            this.requestLoading = true;
            this.getReferralBonusSetting().then(() => (this.requestLoading = false));
        },

        updateMatchBonusPV(){
            this.updatingMatchingPv = true
            this.update(this.matchingBonusPV).then(()=>{this.updatingMatchingPv=false; this.all()})
        },
        updateMatchBonusPercent(){
            this.updatingMatchingPercentage = true
            this.update(this.matchingBonusPercent).then(()=>{this.updatingMatchingPercentage=false; this.all()})
        },
        updateRepurchaseBonus(){
            this.updatingRepurchaseBonus = true
            this.update(this.repurchaseBonus).then(()=>{this.updatingRepurchaseBonus=false; this.all()})
        }
    }
};
</script>
