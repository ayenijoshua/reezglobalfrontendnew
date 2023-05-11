<template>
    <div class="card border-0 justify-content-center">
        <div class="card-body border rounded"> 
            <div class="text-center image border p-4 rounded">
                <img class="user_avatar" :src="imageURL" alt="User Image" style="width:90px">
                <h6 class="font-weight-bold text-green mt-2">{{ user.first_name }} {{ user.last_name }}</h6>
                <small class="">Full Name</small>
            </div>
            <form @submit.prevent="send()">
                <div class="card no-b  no-r">
                    <div class="card-body no-gutters">
                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="input-group mb-2 mr-sm-2 mb-3">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-message float-left s-20 green-text " ></i></div>
                                    </div>
                                    <input v-model="form.subject" type="text" class="form-control r-0 light s-12" 
                                            placeholder="Message Subject">
                                </div>
                                <div class="form-group m-0 mb-3">
                                    <textarea v-model="form.body" name="address" rows="5" type="text" class="form-control  light s-12"
                                    placeholder="Compose..."></textarea>
                                </div>	
                            </div>
                            <div class="form-group ml-2">
                                <span v-if="submitting" class="btn btn-sm btn-success btn-lg">...</span>
                                <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-arrow_forward mr-2"></i>Send Message</button>
                            </div>
                        </div>
                    </div>	
                </div>
            </form>
        </div>
    </div>  
</template>

<script>
    import { mapActions,mapState,mapGetters } from 'vuex';  
    export default{
        name:'send-message',
        props:{
            user:{
                type:Object,
                required:true
            }
        },

        data(){
            return{
                form:{
                    subject:null,
                    body:null
                }
            }
        },

        computed:{
            ...mapState({
                submitting:state=>state.submitting
            }),

            ...mapGetters('userStore',['profile']),

            imageURL(){
                let img = this.profile?.photo_path
               return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/mock-image.jpeg'
            },
        },

        created(){
            this.getProfileDetails(this.user.uuid)
        },

        methods:{
            ...mapActions('userStore',['sendMessage','getProfileDetails']),

            send(){
                this.sendMessage({uuid:this.user.uuid,data:this.form})
            }
        }
    }
</script>