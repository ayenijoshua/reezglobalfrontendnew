<template>
    <div class="row">
        <div class="col-md-12">
            <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}'>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Package</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Trans Reference</th>
                        <th>Upgrade Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="loading">
                        <td colspan="8">
                            <b-skeleton-table
                                :rows="3"
                                :columns="6"
                                :table-props="{ bordered: true, striped: true }"
                            ></b-skeleton-table>
                        </td>
                    </tr>
                    <template v-else>
                        <tr v-if="packagePayments.length == 0">
                            <td colspan="8">
                                <div class="alert alert-info">
                                    There are no upgrade History
                                </div>
                            </td>
                        </tr>
                        <template v-else>
                            <tr v-for="user,i in packagePayments" :key="i">
                                <!--<td>{{ (paidUsersPerPage * (paidUsersCurrentPage - 1)) +( ++i) }}</td>-->
                                <td>{{ ++i }}</td>
                                <td>{{ user.first_name }} {{ user.last_name }}</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.package_name }}</td>
                                <td>₦{{ user.amount?.toLocaleString('en-US') }}</td>
                                <td>{{ user.status }}</td>
                                <td>{{ user.reference }}</td>
                                <td>{{ user.created_at }}</td>
                            </tr>
                        </template>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapActions} from 'vuex';
    export default {
        name:"user-package-payment",

        props:{
            user:{
                type:Object,
                required:true
            }
        },

        data(){
            return {
                loading:false,
                packagePayments:[]
            }
        },

        computed:{

        },

        created(){
            //if(this.packagePayments.length == 0){
                this.loading = true
                this.getUserPackagePayments(this.user.uuid).then((res)=>{this.packagePayments = res.data.data.data; this.loading=false})
            //}
        },

        methods:{
            ...mapActions("paymentStore",['getUserPackagePayments'])
        }
    }
</script>