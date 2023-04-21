<template>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card no-b">
                <div class="card-header bg-white text-green">
                    <h4 class="card-title green-text text-center"><strong class="font-weight-bold">Upload Proof of payment</strong></h4>
                </div>
                <div class="collapse show" id="invoiceCard">
                    <div class="card-body p-0">
                        <div class="card no-b  no-r">
                            <div class="card-body">
                                <div class="form-row">
                                    <div class="col-md-8 offset-md-2">
                                        <form class="form-horizontal" id="pop-form" method="POST" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <div class="col-md-12">
                                                    <template v-if="processing">
                                                        <b-card>
                                                            <b-skeleton animation="throb" width="85%"></b-skeleton>
                                                            <b-skeleton animation="throb" width="55%"></b-skeleton>
                                                            <b-skeleton animation="throb" width="70%"></b-skeleton>
                                                        </b-card>
                                                    </template>
                                                    <div v-else class="dropbox">
                                                        <input required type="file" name="image" @change="filesChange($event.target.name, $event.target.files);" class="form-control form-control-line input-file">
                                                        <input type="hidden" name="payment_mode" value="pop">
                                                        <p>
                                                          Drag your POP here to begin<br> or click to browse
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div v-if="processing" class="col-sm-12">
                                                    <button class="btn btn-success" id="update-profile-photo">...Uploading</button>
                                                </div>
                                            </div>
                                        </form>
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
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>

<script>
import {mapState} from 'vuex'
//import toastr from 'toastr';
export default {
    
    data() {
        return {
            uploadedFiles: [],
            uploadError: null,
            currentStatus: null,
            uploadFieldName: 'photos',
        }
    },
    computed:{
        ...mapState({
            processing:state=>state.processing
        }),
    },

    mounted() {
        this.reset();
    },

    methods:{

        //...mapActions('userStore',['uploadPop']),

        reset() {
            // reset form to initial state
            
        },

        // save(formData) {
        //     this.uploadPop({data:formData,cb:()=>{
        //         this.$emit('reg-submitted')
        //     }})
        //     .catch(err => {
        //         console.log(err);
        //         if (err.response && err.response.status === 422) {
        //             this.errors = err.response.data.errors;
        //             toastr.error(err.response.data.message)
        //         }else{
        //             toastr.error("An error occured")
        //         }
        //         this.$store.commit('processed',null,{root:true})
        //     });
        // },

        filesChange(fieldName, fileList) {
            // handle file changes
            
            const form = document.getElementById('pop-form');
            const formData = new FormData(form);

            if (!fileList.length) return;
            //this.save(formData);
        }
    }
}
</script>