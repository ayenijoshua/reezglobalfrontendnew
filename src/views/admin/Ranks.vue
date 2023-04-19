<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL RANKS</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Points</th>
                                    <th>Global profit eligible</th>
                                    <th>Description</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr v-if="loading && ranksLoading">
                                    <td colspan="6">
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
                                    <tr v-else v-for="pack,i in ranks" :key="i">
                                        <td>{{ ++i }}</td>
                                        <td>{{ pack.name }}</td>
                                        <td>{{ pack.points }}PV</td>
                                        <td>
                                            <span :class="['btn btn-small',pack.is_global_profit_eligible?'btn-success':'btn-danger']">{{ pack.is_global_profit_eligible?'ELigible':'Not-eligible'}}</span>
                                        </td>
                                        <td>{{ pack.description }}</td>
                                        <td>
                                            <a @click="setRank(pack)" v-b-modal.edit-rank class="btn btn-sm btn-success text-white caret" href="#"><i class="icon-edit"></i></a>
                                        </td>
                                    </tr>
                                </template>
                            </table>
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
                ranksLoading:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('rankStore',['ranks'])
        },

        created(){
            if(this.ranks.length == 0){
                this.rankLoading = true
                this.allRanks().then(()=>this.rankLoading = false)
            }
        },

        methods:{
            ...mapActions('rankStore',['allRanks','update']),

            setRank(rank){
                this.rank = rank
            },

            edited(){
                this.allRanks()
            }
        }

    }
</script>