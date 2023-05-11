<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h6 class="green-text"><strong class="font-weight-bold">OFFICIAL REGISTRATION PACKAGE RATES</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Registration Package</th>
                                    <th>Point Value</th>
                                    <th>Registration Amount</th>
                                    <th>Edit Details</th>
                                </tr>
                                <tr v-if="loading && packagesLoading">
                                    <td colspan="5">
                                        <b-skeleton-table
                                            :rows="3"
                                            :columns="5"
                                            :table-props="{ bordered: true, striped: true }"
                                        ></b-skeleton-table>
                                    </td>
                                </tr>
                                <template v-else>
                                    <tr v-if="regPackages.length == 0">
                                        <td colspan="5">
                                            <div class="alert alert-info">There are no packages</div>
                                        </td>
                                    </tr>
                                    <tr v-else v-for="pack,i in regPackages" :key="i">
                                        <td>{{ ++i }}</td>
                                        <td>{{ pack.name }}</td>
                                        <td>{{ pack.point_value }}PV</td>
                                        <td>₦ {{ pack.registration_value?.toLocaleString('en-US') }}</td>
                                        <td>
                                            <a @click="setPackage(pack)" v-b-modal.edit-package class="btn btn-sm btn-success text-white caret" href="#"><i class="icon-edit"></i></a>
                                        </td>
                                    </tr>
                                </template>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal modal-id="edit-package" modal-title="Edit Package" modal-size="md">
            <template v-if="currPackage==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditPackage v-else :currPackage="currPackage" @updated="edited()"/>
        </Modal>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import Modal from '@/components/Modal.vue';
    import EditPackage from '@/components/admin/EditPackage.vue';

    export default{
        name:"admin-packages",

        components:{
            Modal,
            EditPackage
        },

        data(){
            return {
                currPackage:null,
                packagesLoading:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('packageStore',['regPackages'])
        },

        created(){
            if(this.regPackages.length == 0){
                this.packagesLoading = true
                this.all().then(()=>this.packagesLoading = false)
            }
        },

        methods:{
            ...mapActions('packageStore',['all','update']),

            setPackage(pack){
                this.currPackage = pack
            },

            edited(){
                this.all()
            }
        }

    }
</script>