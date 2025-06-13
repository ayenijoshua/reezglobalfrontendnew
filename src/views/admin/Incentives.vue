<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card shadow1">
                        <div class="card-header" style="background-color:#ded8c7;">
                            <h6 class="text-green"><strong class="font-weight-bold">OFFICIAL RANKS AND INCENTIVES</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto; background-color:#ded8c7;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Ranks/Levels</th>
                                    <th>Cumulated Point Value (CPV)</th>
                                    <!-- <th>Bonus(%)</th> -->
                                    <th>Incentive</th>
                                    <th>Cash Equivalent</th>
                                    <th>Display</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr v-if="loading && incentiveLoading">
                                    <td colspan="8">
                                        <b-skeleton-table
                                            :rows="3"
                                            :columns="6"
                                            :table-props="{ bordered: true, striped: true }"
                                        ></b-skeleton-table>
                                    </td>
                                </tr>
                                <template v-else>
                                    <tr v-if="incentives.length == 0">
                                        <td colspan="8">
                                            <div class="alert alert-info text-center">There are no incentives</div>
                                        </td>
                                    </tr>
                                    <template v-else>
                                        <tr v-for="ince,i in incentives" :key="i">
                                        <td>{{ ++i }}</td>
                                        <td>{{ ince.name }}</td>
                                        <td>{{ ince.points?.toLocaleString('en-US') }}</td>
                                        <td>{{ ince.incentive }}</td>
                                        <td>₦{{ ince.worth?.toLocaleString('en-US') }}</td>
                                        <td>
                                            <img v-if="ince.file_path" class="gift" :src="imageURL+'/'+ince.file_path" style="width:100px" >
                                        </td>
                                        <td>
                                            <a @click="setIncentive(ince)" class="btn btn-sm btn-success text-white caret" v-b-modal.edit-incentive href="#"><i class="icon-edit"></i></a>
                                        </td>
                                    </tr>
                                    </template>
                                    
                                </template>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Modal modal-id="edit-incentive" modal-title="Incentive details" modal-size="md">
                <template v-if="incentive==null">
                    <b-skeleton-table
                        :rows="3"
                        :columns="8"
                        :table-props="{ bordered: true, striped: true }"
                    ></b-skeleton-table>
                </template>
                <EditIncentive v-else :incentive="incentive" @updated="edited()"/>
            </Modal>
            
            <!-- <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="background-color:#ded8c7">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL PROFIT POOL BONUS</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;background-color:#ded8c7">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>Package</th>
                                    <th>Bonus(%)</th>
                                    <th>Eligible registrations</th>
                                    <th>Duration (Months)</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr>
                                    <td>Premium</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>6</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#poolModal"><i class="icon-edit"></i></a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div> -->
        
            <!-- <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL GLOBAL PROFIT SHARING</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;background-color:#ded8c7">
                            <div class="card-body no-gutters" style="overflow-x:auto;background-color:#ded8c7">
                                <table class="table table-bordered table-hover">
                                    <tr>
                                        <th>1st percentage(%)</th>
                                        <th>2nd percentage(%)</th>
                                        <th>Edit Details</th>
                                    </tr>
                                    <tr>
                                        <td>12.5</td>
                                        <td>10</td>
                                        <td>
                                            <a class="btn btn-sm btn-success text-white caret" href="#" data-toggle="modal" data-target="#globalModal"><i class="icon-edit"></i></a>
                                        </td>
                                    </tr>
                                </table>
                            </div>	
                        </div>
                    </div>
                </div>
            </div>	 -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Modal from '@/components/Modal.vue';
import EditIncentive from '@/components/admin/EditIncentive.vue';

    export default{
        name:"admin-incentives",

        components:{
            Modal,
            EditIncentive
        },

        data(){
            return {
                incentive:null,
                incentiveLoading:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('incentiveStore',['incentives']),

            imageURL(){
                return process.env.VUE_APP_IMAGE_PATH
            }
        },

        created(){
            if(this.incentives.length == 0){
                this.incentiveLoading = true
                this.all().then(()=>this.incentiveLoading = false)
            }
        },

        methods:{
            ...mapActions('incentiveStore',['all','update']),

            setIncentive(incentive){
                this.incentive = incentive
            },

            edited(){
                this.incentiveLoading = true
                this.all().then(()=>this.incentiveLoading = false)
            }

            
        }


    }
</script>