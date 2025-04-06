<template>
    <div>
        <div class="animated">				
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card shadow1">
                        <div class="card-header" style="background-color:#2E671A" >
                            <h6 class="text-white"><strong class="font-weight-bold">UPGRADE BONUS EARNING LEVEL</strong></h6>
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
                                        <tr v-if="upgradeBonusSetting.length == 0">
                                            <td colspan="13">
                                                <div class="alert alert-info">There are no Upgrade bonus settings</div>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-for="(refBo, i) in upgradeBonusSetting" :key="i">
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
            <br>

            <!--<div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="background-color: #2E671A;">
                            <h6 class="text-white"><strong class="font-weight-bold">UPGRADE PRODUCTS PICK-UP</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-hover table-bordered">
                                <tr>
                                    <th>S/N</th>
                                    <th>Package Range</th>
                                    <th>Upgrade Amount</th>
                                    <th>Upgrade Product Pickup QTY</th>
                                </tr>
                                <tr >
                                    <td>1</td>
                                    <td>starter - Booster</td>
                                    <td>₦ 10,000</td>
                                    <td><input class="form-control" type="number" min="1"  style="background-color: transparent; border: 2px solid #2E671A;"></td>
                                </tr>
                                <tr >
                                    <td>2</td>
                                    <td>Booster - Member</td>
                                    <td>₦ 21,000</td>
                                    <td><input class="form-control" type="number" min="1"  style="background-color: transparent; border: 2px solid #2E671A;"></td>
                                </tr>
                                <tr >
                                    <td>3</td>
                                    <td>Member - Leader</td>
                                    <td>₦ 37,000</td>
                                    <td><input class="form-control" type="number" min="1"  style="background-color: transparent; border: 2px solid #2E671A;"></td>
                                </tr>
                                
                            </table>
                        </div>
                    </div>
                </div
            </div>-->
        </div>
        <Modal modal-id="edit-settings" modal-title="Upgrade Bonus Settings" modal-size="md">
            <template v-if="setting == null">
                <b-skeleton-table
                    :rows="3"
                    :columns="13"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditUpgradeBonusSetting v-else :setting="setting" @updated="edited()"/>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import { mapGetters, mapState, mapActions } from 'vuex';
import EditUpgradeBonusSetting from '@/components/admin/EditUpgradeBonusSetting.vue';

export default {
    name: "upgrade-bonus-settings",

    components: {
        Modal,
        EditUpgradeBonusSetting
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
        ...mapGetters('settingStore', ['upgradeBonusSetting'])
    },

    created() {
        if (this.upgradeBonusSetting.length === 0) {
            this.requestLoading = true;
            this.getUpgradeBonusSetting().then(() => (this.requestLoading = false));
        }
    },

    methods: {
        ...mapActions('settingStore', ['getUpgradeBonusSetting']),

        setSetting(setting) {
            this.setting = setting;
        },

        edited() {
            this.requestLoading = true;
            this.getUpgradeBonusSetting().then(() => (this.requestLoading = false));
        }
    }
};
</script>
