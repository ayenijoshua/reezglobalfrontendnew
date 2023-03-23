<template>
    <div>
        <div class="">
            <div class="container-fluid animatedParent animateOnce my-3">
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
                                                <div class="card-body">
                                                    <organization-chart :datasource="ds" :pan='true'></organization-chart>

                                                </div>
                                            </div>
                                        </div>
                                        <!-- /bar charts group -->
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-payments" role="tabpanel" aria-labelledby="v-pills-payments-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card no-b">
                                        <div class="card-header bg-white">
                                            <h4 class="green-text"><strong class="font-weight-bold">Network Tree</strong></h4>
                                            <small>View tree structure of your Network</small>
                                        </div>
                                        <div class="collapse show" id="invoiceCard">
                                            <div class="card-body p-0">
                                                <div class="card no-b  no-r">
                                                    <div class="card-body">
                                                        <div class="form-row">
                                                        </div>
                                                    </div>
                                                    <br>
                                                </div>
                                            </div>
                                        </div>
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
    }
</script>