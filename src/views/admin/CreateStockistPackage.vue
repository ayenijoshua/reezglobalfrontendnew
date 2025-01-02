<template>
    <div>
        <div class="animated">
            <div class="row my-3">
                
                    
                <div class="col-md-12">
                <div class="card shadow1" style="background-color:transparent">
                    <div class="card-body p-4" style="background-color:transparent" >
                        <form >
                            <div class="row column-row"> 
                                <div class="col-md-2 ml-3 mt-3">
                                    <p class="green-text s-12 font-weight-bold">Add Package</p>
                                </div>
                                
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend" >
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important" ><i class="icon icon-add_shopping_cart float-left s-20 text-white"></i></div>
                                        </div>
                                        <input required type="text" class="form-control r-0 light s-12" placeholder="Stockist Package Name" style="background-color: #ecf0f1; border:1px solid #2E671A !important">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend" >
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important" ><i class="icon icon-add_shopping_cart float-left s-20 text-white"></i></div>
                                        </div>
                                        <input required type="number" class="form-control r-0 light s-12" placeholder="Stockist Package Fee" style="background-color: #ecf0f1; border:1px solid #2E671A !important">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text" style="background-color: #2E671A; border:1px solid #2E671A !important" ><i class="icon icon-tag3 float-left s-20 text-white " ></i></div>
                                        </div>
                                        <input  required type="text" class="form-control r-0 light s-12" placeholder="Rebate" style="background-color: #ecf0f1; border:1px solid #2E671A !important">
                                    </div>
                                </div>
                            </div>

                            <div class="float-right" style="padding-right:110px">								
                                <button  type="submit" class="btn btn-sm btn-success"><i class="icon-save mr-2"></i>Create Stockist Package</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="row my-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="background-color:#2E671A">
                            <h6 class="text-white"><strong class="font-weight-bold">OFFICIAL STOCKIST PACKAGE RATES</strong></h6>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-hover">
                                <tr>
                                    <th>S/N</th>
                                    <th>Stockist Package Name</th>
                                    <th>Stockist Package Prie</th>
                                    <th>Rebate</th>
                                    <th>Edit Details</th>
                                </tr>
                                <template>
                                    <tr >
                                        <td>1</td>
                                        <td>Minor</td>
                                        <td>₦ 750,000</td>
                                        <td>%3</td>
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

<style scoped>
.table th,
.table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #2E671A;
    border-bottom: 1px solid #2E671A;
}

/* Hide default checkbox */
.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #2E671A;
  border-radius: 4px;
  background-color: #ecf0f1;
  cursor: pointer;
}

/* Checkbox checked state */
.custom-checkbox:checked {
  background-color: #ecf0f1;
  border-color: #2E671A;
}

/* Inner tick mark for checked checkbox */
.custom-checkbox:checked::after {
  content: "✔";
  display: block;
  color: #2E671A;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
}

.border-left-green {
    border-left: 1px solid #2E671A !important;
}

.container {

  display: flex;
  align-items: center;
  justify-content: center;
}
.container .pagination {
  position: relative;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  border-radius: 2px;
}
.container .pagination li {
  list-style-type: none;
  display: inline-block;
}
.container .pagination li a {
  position: relative;
  padding: 10px 15px;
  text-decoration: none;
  color: #2E671A;
  font-weight: 500;
}
.container .pagination li a:hover,
.container .pagination li.active a {
  background: rgba(255, 255, 255, 0.2);
}

</style>

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