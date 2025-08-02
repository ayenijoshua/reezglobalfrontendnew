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
                                                <div v-if="directDownlines.length==0" class="card shadow  mb-3" style="background-color: transparent" >
                                                    <div class="card  mb-3" style="background-color: transparent">
                                                        <div class="card-header " style="background-color:transparent">
                                                            <h6 class="text-green"><strong class="font-weight-bold">Direct Downlines</strong></h6>
                                                        </div>
                                                        <div class="card-body text-center ">
                                                            <div class="alert alert-info">
                                                                <p>There are no direct downlines</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <template v-else>
                                                    <div v-for="dirDown,i in directDownlines" class="card mb-3" :key="i" style="background-color: transparent; border: 2px solid #2E671A !important;" >
                                                        <div class="card-header" style="background-color: transparent;">
                                                            <h6 class="text-green"><strong class="font-weight-bold">Referral-{{ dirDown.username }} | Direct Downline</strong></h6>
                                                        </div>
                                                        <div class="card-body text-center" style="background-color: transparent; border: 2px solid #1b4f72 !important;">
                                                            <div class="avatar avatar-xl mb-3 ">
                                                                <img class="user_avatar" :src="imageURL(dirDown.photo_path)" alt="User Image">
                                                            </div>
                                                            <div class="">
                                                                <ul class="list-group list-group-flush">
                                                                    <li class="list-group-item"><i class="icon icon-vcard float-left s-20 text-green border-right" ></i> <span class="float-right s-12 font-weight-medium text-green">{{ dirDown.package }}</span></li>
                                                                    <li class="list-group-item"><i class="icon icon-person float-left s-20 text-green border-right" ></i> <span class="float-right s-12 font-weight-medium text-green ">{{ dirDown.name }}</span></li>
                                                                    <li class="list-group-item"><i class="icon icon-mail-envelope-closed4 text-green float-left s-20  border-right"></i> <span class="float-right s-12 font-weight-medium text-green">{{ dirDown.email }}</span></li>
                                                                    <li class="list-group-item"><i class="icon icon-account_box float-left s-20 text-green border-right"></i>  <span class="float-right s-12 font-weight-medium text-green">{{ dirDown.username }}</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </template>
                                        </div>
                                        <!-- bar charts group -->
                                        <div class="col-md-8">
                                            <div class="card shadow" style="background-color: transparent">
                                                <div class="card-header" style="background-color: transparent">
                                                    <h6 class="text-green"><strong class="font-weight-bold">Downlines</strong></h6>
                                                </div>
                                                <div class="card-body" style="overflow-x:auto;">
                                                    <table id="example2" class="table table-bordered table-hover data-tables"
                                                    data-options='{ "paging": false; "searching":false}'>
                                                    <thead>
                                                        <tr>
                                                        <th class="font-weight-bold" scope="col">S/N</th>
                                                        <th class="font-weight-bold" scope="col">Full Name</th>
                                                        <th class="font-weight-bold" scope="col">User Name</th>
                                                        <th class="font-weight-bold" scope="col">Package</th>
                                                        <th class="font-weight-bold" scope="col">Direct Downlines</th>
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
                                                                <td colspan="4" class="text-center">There are no downlines</td>
                                                            </tr>
                                                            <template v-else>
                                                                <!---<tr v-for="user,i in downlines" :key="i">--->
																<tr v-for="(user, i) in paginatedDownlines" :key="i"> 
                                                                    <!--<th scope="row">{{ ++i }}</th>-->
                                                                    <td>{{ user.name }}</td>
                                                                    <td>{{ user.username }}</td>
                                                                    <td>{{ user.package }}</td>
                                                                    <td>{{ user.downlines }}</td>
                                                                </tr>
                                                            </template>
                                                        </template>
                                                    </tbody>
                                                    </table>
													<div class="container" v-if="pageCount > 1">
                                                            <ul class="pagination">
                                                                <li>
                                                                <a href="#" @click.prevent="prevPage">Prev</a>
                                                                </li>

                                                                <li
                                                                v-for="page in pageCount"
                                                                :key="page"
                                                                :class="{ active: page === currentPage }"
                                                                >
                                                                <a href="#" @click.prevent="goToPage(page)">
                                                                    {{ page }}
                                                                </a>
                                                                </li>

                                                                <li>
                                                                <a href="#" @click.prevent="nextPage">Next</a>
                                                                </li>
                                                            </ul>
                                                        </div>
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

<style scoped>
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
background: #2E671A;
color: #ecf0f1;

}
</style>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:'user-downlines',

        data() {
            return {
                downlinesLoading: false,
                directDownlinesLoading: false,
                currentPage: 1,
                pageSize: 5, // can be 10, 25, 50 etc.
            };
        },


        computed: {
            ...mapState({
            loading: state => state.loading
            }),
            ...mapGetters('userStore', ['downlines', 'directDownlines']),
            ...mapGetters('authStore', ['authUser']),

            paginatedDownlines() {
            const start = (this.currentPage - 1) * this.pageSize;
            return this.downlines.slice(start, start + this.pageSize);
            },
            pageCount() {
            return Math.ceil(this.downlines.length / this.pageSize);
            },
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

        methods: {
            ...mapActions('userStore', ['getDownlines', 'getDirectDownlines']),
            ...mapActions('authStore', ['getUser']),

            imageURL(image) {
                let img = image;
                return img ? process.env.VUE_APP_IMAGE_PATH + '/' + img : "/assets/img/mock-image.jpeg";
            },

            goToPage(page) {
                if (page < 1 || page > this.pageCount) return;
                this.currentPage = page;
            },
            prevPage() {
                if (this.currentPage > 1) this.currentPage--;
            },
            nextPage() {
                if (this.currentPage < this.pageCount) this.currentPage++;
            }
        }

    }
</script>