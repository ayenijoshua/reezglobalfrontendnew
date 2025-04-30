<template>
    <div class="card border-0 justify-content-center" style="background-color: #ecf0f1">
        <div class="card-body rounded" style="background-color: #ecf0f1"> 
            <div class="text-center"><img  src="/assets/img/wallet1.png" width="80px"  height="80px" style=" opacity: 0.5;">
            <h6 class="mt-1 s-8 font-weight-bold">OFFICIAL REFERRAL BONUSES PER PACKAGE<br><small> Edit preferred Referral bonuses per package</small></h6></div>
            <form @submit.prevent="update()">
                <div class="text-center"><h6 class="font-weight-bold mt-2">{{ setting.name }}</h6></div>
                <div class="card no-b  no-r">
                    <div class="card-body no-gutters" style="background-color: #ecf0f1">
                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_1_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="1st generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mr-sm-2 mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white" ></i></div>
                                    </div>
                                    <input v-model="form.generation_2_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="2nd generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_3_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="3rd generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_4_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="4th generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_5_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="5th generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_6_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="6th generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_7_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="7th generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_8_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="8th generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_9_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="9th generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
                                </div>
                                <div class="input-group mt-3 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-sitemap float-left s-20 text-white " ></i></div>
                                    </div>
                                    <input v-model="form.generation_10_percentage" type="" class="form-control r-0 light s-12" 
                                            placeholder="10th generation" style="background-color:#ded8c7; border: 1px solid #2E671A">
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
</template>


<script>
import { notification } from '@/util/notification';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'edit-referral-bonus',
    props: {
        setting: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            form: {
                generation_1_percentage: null,
                generation_2_percentage: null,
                generation_3_percentage: null,
                generation_4_percentage: null,
                generation_5_percentage: null,
                generation_6_percentage: null,
                generation_7_percentage: null,
                generation_8_percentage: null,
                generation_9_percentage: null,
                generation_10_percentage: null
            }
        }
    },

    computed: {
        ...mapState({
            submitting: state => state.submitting
        })
    },

    created() {
        for (let i = 1; i <= 10; i++) {
            this.form[`generation_${i}_percentage`] = this.setting[`generation_${i}_percentage`];
        }
    },

    methods: {
        ...mapActions('settingStore', ['updateReferralBonus']),

        update() {
            let error = false;
            console.log(Object.entries(this.form));
            Object.entries(this.form).forEach((ele) => {
                for (let i = 0; i < ele.length; i++) {
                    if (i === 0) continue;
                    if (ele[i] && !this.isNumeric(ele[i])) {
                        notification.warning(`${ele[0]} is not a valid number`);
                        error = true;
                    }
                }
            });
            if (error) {
                return;
            }
            this.updateReferralBonus({ id: this.setting.id, data: this.form }).then((res) => {
                if (res.status === 200) {
                    this.$emit('updated');
                }
            });
        },

        isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }
}
</script>
