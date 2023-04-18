<template>
    <div>
        <div class="animated">				
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL REFERRAL BONUSES PER PACKAGE</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Registration Package</th>
                                    <th>1st Generation</th>
                                    <th>2nd Generation</th>
                                    <th>3rd Generation</th>
                                    <th>4th Generation</th>
                                    <th>5th Generation</th>
                                    <th>6th Generation</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr v-if="loading && requestLoading">
                                    <td colspan="8">
                                        <b-skeleton-table
                                            :rows="3"
                                            :columns="6"
                                            :table-props="{ bordered: true, striped: true }"
                                        ></b-skeleton-table>
                                    </td>
                                </tr>
                                <template v-else>
                                    <tr v-if="referralBonusSetting.length == 0">
                                        <td colspan="8">
                                            <div class="alert alert-info">There are no Referral bonus settings</div>
                                        </td>
                                    </tr>
                                    <tr v-else v-for="refBo, i in referralBonusSetting" :key="i">
                                        <td>{{ ++i }}</td>
                                        <td>{{ refBo.name }}</td>
                                        <td>{{ refBo.generation_1_percentage }} PV</td>
                                        <td>{{refBo.generation_2_percentage}} PV</td>
                                        <td>{{refBo.generation_3_percentage}}</td>
                                        <td>{{refBo.generation_4_percentage}}</td>
                                        <td>{{refBo.generation_5_percentage}}</td>
                                        <td>{{refBo.generation_6_percentage}}</td>
                                        <td>
                                            <a @click="setSetting(refBo)" v-b-modal.edit-settings class="btn btn-sm btn-success text-white caret" href="#"><i class="icon-edit"></i></a>
                                        </td>
                                    </tr>
                                </template>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal modal-id="edit-settings" modal-title="Referral Bonus Settings" modal-size="md">
            <template v-if="setting==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
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
    export default{
        name:"referral-bonus-settings",

        components:{
            Modal,
            EditReferralBonusSetting
        },

        data(){
            return{
                setting:null,
                requestLoading:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),
            ...mapGetters('settingStore',['referralBonusSetting'])
        },

        created(){
            if(this.referralBonusSetting.length == 0){
                this.requestLoading = true
                this.getReferralBonusSetting().then(()=>this.requestLoading = false)
            }
        },

        methods:{
            ...mapActions('settingStore',['getReferralBonusSetting']),

            setSetting(setting){
                this.setting = setting
            },

            edited(){
                this.requestLoading = true
                this.getReferralBonusSetting().then(()=>this.requestLoading = false)
            }
        }
    }
</script>