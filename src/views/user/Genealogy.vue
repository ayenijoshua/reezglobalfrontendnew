<template>
    <div>
        <div class="">
            <div class="container-fluid animatedParent my-3">
                <div class="animated">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row my-3">
                                        <!-- bar charts group -->
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header bg-white">
                                                    <h4 class="green-text"><strong class="font-weight-bold"><i class="icon icon-sitemap mr-2" ></i>Network Structure</strong></h4>
                                                    <small>View tree structure of your direct downlines</small>
                                                </div>
                                                <template v-if="loading">
                                                    <b-skeleton-table
                                                        :rows="3"
                                                        :columns="5"
                                                        :table-props="{ bordered: true, striped: true }"
                                                    ></b-skeleton-table>
                                                </template>
                                                <div v-else class="card-body">
                                                    <organization-chart :datasource="genealogy" :pan='true'></organization-chart>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /bar charts group -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import OrganizationChart from 'vue-organization-chart'
    import 'vue-organization-chart/dist/orgchart.css'
import { mapActions, mapGetters, mapState } from 'vuex';
    export default{
        name:'user-genealogy',

        components:{
            OrganizationChart
        },
        data(){
            return {
                ds:{
                    "id": 1,
                    "name": "BASIC VIP1",
                    "title": "James",
                    "children":[
                        {
                            "id": 20,
                            "name": "BUSINESS VIP2",
                            "title": "Larry"
                        },
                        {
                            "id": 10,
                            "name": "EXECUTIVE VIP3",
                            "title": "Charles"
                        }
                    ] 
                }
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('userStore',['genealogy']),
            ...mapGetters('authStore',['authUser'])
        },

        created(){
            if(this.genealogy.name == undefined){
                if(this.authUser.uuid == undefined){
                    this.getUser().then(res=>{
                        this.getGenealogy(res.data.uuid)
                    })
                }else{

                    this.getGenealogy(this.authUser.uuid)
                }
            }
        },

        methods:{
            ...mapActions('userStore',['getGenealogy']),
            ...mapActions('authStore',['getUser'])
        }
    }
</script>