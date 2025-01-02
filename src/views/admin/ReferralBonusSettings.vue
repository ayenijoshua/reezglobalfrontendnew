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
                                        <tr v-else v-for="(refBo, i) in referralBonusSetting" :key="i">
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
                                </tbody>
                            </table>
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
            requestLoading: false
        };
    },

    computed: {
        ...mapState({
            loading: state => state.loading
        }),
        ...mapGetters('settingStore', ['referralBonusSetting'])
    },

    created() {
        if (this.referralBonusSetting.length === 0) {
            this.requestLoading = true;
            this.getReferralBonusSetting().then(() => (this.requestLoading = false));
        }
    },

    methods: {
        ...mapActions('settingStore', ['getReferralBonusSetting']),

        setSetting(setting) {
            this.setting = setting;
        },

        edited() {
            this.requestLoading = true;
            this.getReferralBonusSetting().then(() => (this.requestLoading = false));
        }
    }
};
</script>
