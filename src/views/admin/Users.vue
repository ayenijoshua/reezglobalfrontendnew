<template>
    <div>
        <div class="animated">
            <div class="row mb-5">
                <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="card-header white">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-green" id="w1-tab1" data-toggle="tab" >MEMBERS INFORMATION</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body ">
                            <div class=" mb-3" style="float:left">
                                <div class="dropdown">
                                    <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="caret"></i>{{usersType.charAt(0).toUpperCase() + usersType.slice(1) }} Users
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:fixed">
                                        <button @click="loadUsers('all')" class="dropdown-item text-green"> All Users</button>
                                        <button @click="loadUsers('active')" class="dropdown-item text-green"> Active Users</button>
                                        <button @click="loadUsers('inactive')" class="dropdown-item text-green">Inactive Users</button>
                                    </div>
                                </div>
                            </div>
                            <div class=" mb-3" style="float:right">
                                <form class="form-inline my-2 my-lg-0" @submit.prevent="search()">
                                    <input v-model="searche" v-b-popover.hover.top="'first name/ last name/ username/ email/ package'" class="form-control float-left mr-sm-2" type="text" placeholder="" aria-label="Search">
                                    <span v-if="loading" class="btn btn-outline-success my-2 my-sm-0">...</span>
                                    <button v-else class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}'>
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Profile Image</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Package</th>
                                            <th scope="col">Date of Reg.</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading && usersLoading">
                                            <td colspan="8">
                                                <b-skeleton-table
                                                    :rows="3"
                                                    :columns="8"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="users.length == 0">
                                                <td colspan="8"> 
                                                    <template v-if="usersLoading">
                                                        <span>..loading</span>
                                                    </template>
                                                    <template v-else>
                                                        <span v-if="usersType=='all'">There are no users</span>
                                                        <span v-else>There are no {{ usersType }} users</span>
                                                    </template>
                                                </td>
                                            </tr>
                                            <tr v-else v-for="user,i in users" :key="i">
                                                <td>{{ (usersPerPage * (usersCurrentPage - 1)) + ( ++i) }}</td>
                                                <td> <img :src="imageURL(user.photo_path)" :style="{'width': '50px'}" class="img-responsive"/></td>
                                                <td>{{ user.first_name }} {{ user.last_name }}</td>
                                                <td>{{ user.email }}</td>
                                                <td>{{ user.username }}</td>
                                                <td>{{ user.name }}</td>
                                                <td>{{ user.created_at }}</td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i class="caret"></i>
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                            <a v-if="usersType !== 'inactive'" @click="setUser(user)" href="#" v-b-modal.user-dashboard class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                            <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-profile class="dropdown-item text-green" >
                                                                <i  class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                            <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-genealogy class="dropdown-item text-green" href="#"><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                            <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-wallet class="dropdown-item text-green" href="#"><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                            <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-bank-details class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                            <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-password class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                            <a @click="setUser(user)" v-b-modal.send-message class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                            <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-2fa class="dropdown-item text-green" data-toggle="modal" data-target="#popModal-4"><i class="icon-lock3"></i>&nbsp;&nbsp;Login 2FA</a> 
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                                <br>
                                <BasePaginator v-if="userAction" :action="userAction" :current_page="usersCurrentPage" :last_page="usersLastPage" :total_pages="usersTotalPages" :per_page="usersPerPage" :type="usersType"></BasePaginator>
                            </div>
                        </div>
                    </div>
                </div>				
            </div>	
        </div>
        <Modal modal-id="user-profile" modal-title="" :modalSize="'xl'">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <Profile :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
        <Modal modal-id="user-genealogy" modal-title="" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <Genealogy :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
        
        <Modal modal-id="user-bank-details" modal-title="" modal-size="md">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <EditBankDetails :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
        <Modal modal-id="user-password" modal-title="" modal-size="lg">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <EditPassword :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
        <Modal modal-id="user-2fa" modal-title="" modal-size="lg">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <Toggle2fa :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
        <Modal modal-id="send-message" modal-title="" modal-size="lg">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <SendMessage v-else :user="user"/>
        </Modal>
        <Modal modal-id="user-wallet" modal-title="" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <Wallet :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
        <Modal modal-id="user-dashboard" modal-title="" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <Dashboard :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import Modal from '@/components/Modal.vue';
    import Profile from '@/components/user/Profile.vue';
    import Genealogy from '@/components/user/Genealogy.vue';
    import EditBankDetails from '@/components/user/EditBankDetails.vue';
    import Dashboard from '@/components/user/Dashboard.vue';
    import EditPassword from '@/components/user/EditPassword.vue';
    import Toggle2fa from '@/components/user/Toggle2fa.vue';
    import SendMessage from '@/components/user/SendMessage.vue';
    import Wallet from '@/components/user/Wallet.vue';
    import BasePaginator from '@/components/BasePaginator.vue';

    export default{
    name: "admin-users",
    components: {
        Modal,
        Profile,
        Genealogy,
        EditBankDetails,
        EditPassword,
        Toggle2fa,
        SendMessage,
        Wallet,
        Dashboard,
        BasePaginator
    },
    data() {
        return {
            user: null,
            usersLoading:false,
            searche:null,
            usersType:'all',
            userIsActive:false,
            userDataLoading:false
        };
    },
    computed: {
        ...mapState({
            loading: state => state.loading,
            submitting: state => state.submitting
        }),
        ...mapGetters("userStore", 
        ["users",'userAction','usersCurrentPage','usersLastPage','usersPerPage','usersTotalPages'])
    },
    created() {
        if (this.users.length == 0) {
            this.usersLoading = true
            this.getUsers({page:null,type:this.usersType}).then(()=>this.usersLoading = false);
        }
    },
    methods: {
        ...mapActions("userStore", ["getUsers",'searchUsers','getUser']),

        setUser(user) {
            this.user = user;
            this.userDataLoading = true
            this.getUser(this.user.uuid).then(reslt=>{
                if(reslt.status == 200){
                    if(reslt.data.data.status){
                        this.userIsActive = true
                    }
                }
                this.userDataLoading = false
            })
        },

        imageURL(image){
            return image ? process.env.VUE_APP_IMAGE_PATH+'/'+image : '/assets/img/mock-image.jpeg'
        },

        search(){
            this.searchUsers({search:this.searche})
        },

        loadUsers(type){
            this.usersType = type
            this.getUsers({page:1,type})
        }
    },
    
}
</script>