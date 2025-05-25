<template>
    <div class="card border-0 justify-content-center" style="background-color:#ded8c7">
        <div class="card-body border rounded" style="background-color:#ded8c7"> 
            <div class="card-body" style="background-color:#ded8c7" >
                <div class="d-flex align-items-center border p-4">
                    <div class="avatar avatar-xl ml-3 mr-4 ">
                        <img class="user_avatar" src="/assets/img/dummy/u14.jpg" alt="User Image">
                    </div>
                    <div class="border-left">
                        <span class="ml-5 text-green" id="d1" style="font-size:10px" >Full Name</span>
                        <h6 class="ml-5 font-weight-bold text-green" id="d1">{{ user.first_name }} {{ user.last_name }}</h6>
                        <span class="ml-5 text-green" id="d1" style="font-size:10px">Username</span>
                        <h6 class="ml-5 font-weight-bold text-green" id="d1">{{ user.username }}</h6>
                        <span class="ml-5 text-green" id="d1" style="font-size:10px" >Password</span>
                        <h6 class="ml-5 font-weight-bold text-green" id="d1">**********</h6>
                        
                    </div>
                </div>
            </div>

            <form @submit.prevent="update()">
                <div class="card no-b no-r" style="background-color:#ded8c7">
                    <div class="card-body no-gutters" style="background-color:#ded8c7">
                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-lock float-left s-20 green-text " ></i></div>
                                    </div>
                                    <input v-model="form.password" type="text" required class="form-control r-0 light s-12"  placeholder="Password">
                                </div>
                            </div>
                            <div class="ml-1 mt-3">
                                <span v-if="submitting" class="btn btn-sm btn-success btn-lg">...</span>
                                <button v-else type="submit" class="btn btn-sm btn-success btn-lg"><i class="icon-save mr-2"></i>Update Data</button>
                            </div>	
                        </div>
                    </div>	
                </div>
            </form>
        </div>
    </div>  
</template>

<script>
import { mapActions, mapState } from 'vuex';

    export default{
        name:'edit-password',
        props:{
            user:{
                type:Object,
                required:true
            }
        },

        data(){
            return{
                form:{
                    password:null
                }
            }
        },

        computed:{
            ...mapState({
                submitting:state=>state.submitting
            })
        },

        methods:{
            ...mapActions('authStore',['changeUserPassword']),

            update(){
                this.changeUserPassword({uuid:this.user.uuid,data:this.form})
            }
        }
    }
</script>