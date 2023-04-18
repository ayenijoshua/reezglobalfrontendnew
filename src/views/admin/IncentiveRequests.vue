<template>
    <div>
        <div class="animated">
            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="counter-box p-40 text-white shadow2 r-5" style="background-color: #2E671A">
                        <div class="float-right">
                            <img class="mr-3  r-3" src="/assets/img/incentive.png"  width="70px" height="70px">
                        </div>
                        <small class="mt-0text-white" >Incentives Requests</small>
                        <p class="text-dark-heading font-weight-bold text-white"><span style="font-size:32px">7</span></p>
                    </div>
                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL INCENTIVE REQUESTS</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Full Name</th>
                                    <th>Username</th>
                                    <th>Registration Package</th>
                                    <th>CPV</th>
                                    <th>Rank</th>
                                    <th>Incentive</th>
                                    <th>Cash Equivalence</th>
                                    <th>Request Status</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-if="loading && requestLoading">
                                    <td colspan="10">
                                        <b-skeleton-table
                                            :rows="3"
                                            :columns="8"
                                            :table-props="{ bordered: true, striped: true }"
                                        ></b-skeleton-table>
                                    </td>
                                </tr>
                                <template v-else>
                                    <tr v-if="incentiveClaims.length == 0">
                                        <td colspan="10">
                                            <div class="alert alert-info">There are no requests</div>
                                        </td>
                                    </tr>
                                    <tr v-else v-for="claim,i in incentiveClaims" :key="i">
                                        <td>{{ ++i }}</td>
                                        <td>{{ claim.first_name }} {{ claim.last_name }}</td>
                                        <td>{{ claim.username}}</td>
                                        <td> {{ claim.package_name }}</td>
                                        <td>{{ claim.points }}</td>
                                        <td>{{ claim.rank_name }}</td>
                                        <td>{{ claim.incentive }}</td>
                                        <td>₦{{ claim.worth }}</td>
                                        <td><span class="badge badge-warning">Pending Request</span></td>
                                        <td>
                                            <div class="dropdown"> 
                                                <button class="btn btn-sm btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="caret"></i>
                                                </button>
                                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                    <a class="dropdown-item text-green" href="#"  ><i class="icon-check-circle"></i>&nbsp;&nbsp; Approve</a>
                                                    <a class="dropdown-item text-green" href="#" ><i class="icon-times-circle"></i>&nbsp;&nbsp; Decline</a>	
                                                </div>
                                            </div>													
                                        </td>
                                    </tr>
                                </template>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:"incentive-requests",

        data(){
            return{
                requestLoading:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading,
                submitting:state=>state.submitting
            }),

            ...mapGetters('incentiveClaimStore',['incentiveClaims'])
        },

        created(){
            if(this.incentiveClaims.length == 0){
                this.requestLoading = true
                this.all().then(()=>this.requestLoading = false)
            }
        },

        methods:{
            ...mapActions('incentiveClaimStore',['all','approve','decline']),

            accept(id){
                this.approve(id)
            },

            reject(id){
                this.decline(id)
            }
        }
    }
</script>