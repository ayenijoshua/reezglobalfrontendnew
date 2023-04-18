<template>
    <div class="card border-0 justify-content-center">
        <div class="card-body"> 
            <div class="text-center mt-2 mb-4"><img  src="/assets/img/private-account.png" width="80px" height="80px" alt=""></div>
            <div class="text-center mb-4">
                <h6 class="font-weight-bold text-green"><i class="icon-lock mr-2"></i>Login 2Factor Authentication</h6>
                <small>Disable or Enable Login 2FA Authentication</small>
                <div class="form-row mt-2">
                    <div style="padding-left:160px">
                        <form>
                            <input @change="submit()" type="checkbox" v-model="enable_2fa" :checked="enable_2fa"  data-toggle="switchbutton" data-width="100"  data-onstyle="success" />
                        </form>
                        
                    </div>
                </div>
            </div>	
        </div>
    </div>  	
</template>
<script>
import { mapActions, mapState } from 'vuex';

    export default{
        name:'user-toggle-2fa',
        props:{
            user:{
                type:Object,
                required:true
            }
        },

        data(){
            return{
                enable_2fa:false
            }
        },

        computed:{
            ...mapState({
                submitting:state=>state.submitting,
                loading:state=>state.loading
            })
        },

        created(){
            this.getProfileDetails(this.user.uuid).then(res=>{
                if(res.status == 200){
                    this.enable_2fa = res.data.data.enable_2fa
                }
            })
            
        },

        methods:{
            ...mapActions('userStore',['toggle2FA','getProfileDetails']),

            submit(){
                this.toggle2FA({uuid:this.user.uuid,data:{enable_2fa:this.enable_2fa}})
            }
        }
    }
</script>