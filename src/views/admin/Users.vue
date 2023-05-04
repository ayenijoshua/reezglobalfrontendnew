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
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}'>
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Profile Image</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Package</th>
                                            <th scope="col">Date of Reg.</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading && usersLoading">
                                            <td colspan="7">
                                                <b-skeleton-table
                                                    :rows="3"
                                                    :columns="7"
                                                    :table-props="{ bordered: true, striped: true }"
                                                ></b-skeleton-table>
                                            </td>
                                        </tr>
                                        <template v-else>
                                            <tr v-if="users.length == 0">
                                                <td colspan="7">There are no users</td>
                                            </tr>
                                            <tr v-else v-for="user,i in users" :key="i">
                                                <td>{{ (usersPerPage * (usersCurrentPage - 1)) + ( ++i) }}</td>
                                                <td> <img :src="imageURL(user.photo_path)" :style="{'width': '50px'}" class="img-responsive"/></td>
                                                <td>{{ user.first_name }} {{ user.last_name }}</td>
                                                <td>{{ user.username }}</td>
                                                <td>{{ user.name }}</td>
                                                <td>{{ user.created_at }}</td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i class="caret"></i>
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:fixed">
                                                            <a @click="setUser(user)" href="#" v-b-modal.user-dashboard class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                            <a @click="setUser(user)" v-b-modal.user-profile class="dropdown-item text-green" >
                                                                <i  class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                            <a @click="setUser(user)" v-b-modal.user-genealogy class="dropdown-item text-green" href="#"><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                            <a @click="setUser(user)" v-b-modal.user-wallet class="dropdown-item text-green" href="#"><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                            <a @click="setUser(user)" v-b-modal.user-bank-details class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                            <a @click="setUser(user)" v-b-modal.user-password class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                            <a @click="setUser(user)" v-b-modal.send-message class="dropdown-item text-green" href="#" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                            <a @click="setUser(user)" v-b-modal.user-2fa class="dropdown-item text-green" data-toggle="modal" data-target="#popModal-4"><i class="icon-lock3"></i>&nbsp;&nbsp;Login 2FA</a> 
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                                <br>
                                <BasePaginator v-if="userAction" :action="userAction" :current_page="usersCurrentPage" :last_page="usersLastPage" :total_pages="usersTotalPages" :per_page="usersPerPage"></BasePaginator>
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
            <Profile v-else :user="user"/>
        </Modal>
        <Modal modal-id="user-genealogy" modal-title="" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <Genealogy v-else :user="user"/>
        </Modal>
        
        <Modal modal-id="user-bank-details" modal-title="" modal-size="md">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditBankDetails v-else :user="user"/>
        </Modal>
        <Modal modal-id="user-password" modal-title="" modal-size="lg">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <EditPassword v-else :user="user"/>
        </Modal>
        <Modal modal-id="user-2fa" modal-title="" modal-size="lg">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <Toggle2fa v-else :user="user"/>
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
            <Wallet v-else :user="user"/>
        </Modal>
        <Modal modal-id="user-dashboard" modal-title="" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <Dashboard v-else :user="user"/>
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
            usersLoading:false
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
            this.getUsers().then(()=>this.usersLoading = false);
        }
    },
    methods: {
        ...mapActions("userStore", ["getUsers"]),
        setUser(user) {
            this.user = user;
        },

        imageURL(image){
            return image ? process.env.VUE_APP_IMAGE_PATH+'/'+image : '/assets/img/dummy/u2a.png'
        }  
    },
    
}
</script>