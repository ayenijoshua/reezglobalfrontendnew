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
                                        <div class="col-md-4">
                                            <template v-if="loading && directDownlinesLoading">
                                                <b-skeleton-table
                                                    :rows="3"
                                                    :columns="3"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </template>
                                            <template v-else>
                                                <div v-if="directDownlines.length==0" class="card bg-white mb-3" >
                                                    <div class="card bg-white mb-3">
                                                        <div class="card-header bg-white">
                                                            <h6 class="green-text"><strong class="font-weight-bold">Direct Downlines</strong></h6>
                                                        </div>
                                                        <div class="card-body text-center">
                                                            <div class="alert alert-info">
                                                                <p>There are no direct downlines</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <template v-else>
                                                    <div v-for="dirDown,i in directDownlines" class="card bg-white mb-3" :key="i" >
                                                        <div class="card-header bg-white">
                                                            <h6 class="green-text"><strong class="font-weight-bold">Referral-{{ dirDown.username }} | Direct Downline</strong></h6>
                                                        </div>
                                                        <div class="card-body text-center">
                                                            <div class="avatar avatar-xl mb-3 ">
                                                                <img class="user_avatar" :src="imageURL(dirDown.photo_path)" alt="User Image">
                                                            </div>
                                                            <div class="">
                                                                <ul class="list-group list-group-flush" >
                                                                    <li class="list-group-item"><i class="icon icon-vcard float-left s-20 green-text border-right" ></i> <span class="float-right s-12 font-weight-medium green-text">{{ dirDown.package }}</span></li>
                                                                    <li class="list-group-item" ><i class="icon icon-person float-left s-20 green-text border-right" ></i> <span class="float-right s-12 font-weight-medium green-text ">{{ dirDown.name }}</span></li>
                                                                    <li class="list-group-item"  ><i class="icon icon-mail-envelope-closed4 green-text float-left s-20  border-right"></i> <span class="float-right s-12 font-weight-medium green-text">{{ dirDown.email }}</span></li>
                                                                    <li class="list-group-item" ><i class="icon icon-account_box float-left s-20 green-text border-right"></i>  <span class="float-right s-12 font-weight-medium green-text">{{ dirDown.username }}</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </template>
                                        </div>
                                        <!-- bar charts group -->
                                        <div class="col-md-8">
                                            <div class="card">
                                                <div class="card-header bg-white">
                                                    <h6 class="green-text"><strong class="font-weight-bold">Downlines</strong></h6>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                    data-options='{ "paging": false; "searching":false}'>
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">S/N</th>
                                                        <th scope="col">Full Name</th>
                                                        <th scope="col">User Name</th>
                                                        <th scope="col">Package</th>
                                                        <th scope="col">Direct Downlines</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-if="loading && downlinesLoading">
                                                            <td colspan="5">
                                                                <b-skeleton-table
                                                                    :rows="3"
                                                                    :columns="5"
                                                                    :table-props="{ bordered: true, striped: true }"
                                                                ></b-skeleton-table>
                                                            </td>
                                                        </tr>

                                                        <template v-else>
                                                            <tr v-if="downlines.length == 0">
                                                                <td colspan="4">There are no downlines</td>
                                                            </tr>
                                                            <tr v-else v-for="user,i in downlines" :key="i">
                                                                <th scope="row">{{ ++i }}</th>
                                                                <td>{{ user.name }}</td>
                                                                <td>{{ user.username }}</td>
                                                                <td>{{ user.package }}</td>
                                                                <td>{{ user.downlines }}</td>
                                                            </tr>
                                                        </template>
                                                    </tbody>
                                                    </table>
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

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:'user-downlines',

        data(){
            return {
                downlinesLoading:false,
                directDownlinesLoading:false
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('userStore',['downlines','directDownlines']),
            ...mapGetters('authStore',['authUser']),
        },

        created(){
            if(this.directDownlines.length == 0 || this.downlines.length==0){
                if(Object.entries(this.authUser).length==0){
                    this.getUser().then(res=>{
                        this.downlinesLoading = true
                        this.directDownlinesLoading = true
                        this.getDownlines(res.data.uuid).then(()=>this.downlinesLoading = false)
                        this.getDirectDownlines(this.authUser.uuid).then(()=>this.directDownlinesLoading = false)
                    })
                }else{
                    this.downlinesLoading = true
                    this.directDownlinesLoading = true
                    this.getDownlines(this.authUser.uuid).then(()=>this.downlinesLoading = false)
                    this.getDirectDownlines(this.authUser.uuid).then(()=>this.directDownlinesLoading = false)
                }
            }
        },

        methods:{
            ...mapActions('userStore',['getDownlines','getDirectDownlines']),
            ...mapActions('authStore',['getUser']),

            imageURL(image){
                let img = image
               return img ? process.env.VUE_APP_IMAGE_PATH+'/'+img : '/assets/img/dummy/u2a.png'
            },
        }
    }
</script>