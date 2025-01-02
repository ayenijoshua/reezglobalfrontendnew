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
                                            <div class="card shadow1" style="background-color: transparent">
                                                <div class="card-header"  style="background-color: #2E671A">
                                                    <h4 class="text-white"><strong class="font-weight-bold"><i class="icon icon-sitemap mr-2" ></i>Network Structure</strong></h4>
                                                    <small class="text-white">View tree structure of your direct downlines</small>
                                                </div>
                                                <template v-if="loading">
                                                    <b-skeleton-table
                                                        :rows="3"
                                                        :columns="5"
                                                        :table-props="{ bordered: true, striped: true }"
                                                    ></b-skeleton-table>
                                                </template>
                                                <div v-else class="card-body">
                                                    <organization-chart :datasource="genealogy" :pan='true' ></organization-chart>
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
<style>
.orgchart .node .title {
    background-color: rgb(46, 103, 26) !important;
}
    .orgchart .node .lines .rightLine{
        border-right:#2E671A !important
    }
    .orgchart .node .lines .leftLine{
        border-left:#2E671A !important
    }
    .orgchart .node .content {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 20px;
        font-size: 11px;
        line-height: 18px;
        border: 1px solid #2E671A;
        border-radius: 0 0 4px 4px;
        text-align: center;
        background-color: #fff;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .orgchart {
        -webkit-box-sizing: border-box;
        box-sizing: none;
        display: block;
        min-height: 0px;
        min-width: 0px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: -webkit-gradient(linear,left top,right top,color-stop(10%,#1b4f72),color-stop(0,transparent)),-webkit-gradient(linear,left top,left bottom,color-stop(10%,rgba(200,0,0,.15)),color-stop(0,transparent));
        background-image: 
        linear-gradient(90deg, #ecf0f1 10%, transparent 0), 
        linear-gradient(#ecf0f1 10%, transparent 0) !important;
        background-size: 10px 10px;
        border: 0px dashed transparent;
        padding: 20px;
    }

    .orgchart .lines .downLine {
    background-color: #2E671A;
    margin: 0 auto;
    height: 20px;
    width: 2px;
    float: none;
}

.orgchart .lines .rightLine {
    border-right: 1px solid #2E671A;
    float: none;
    border-radius: 0;
}

.orgchart .lines .leftLine {
    border-left: 1px solid #2E671A;
    float: none;
    border-radius: 0;
}

.orgchart .lines .topLine {
    border-top: 2px solid #2E671A;
}
</style>
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