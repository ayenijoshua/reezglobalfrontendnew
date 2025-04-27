<template>
    <div>
        <div class="animated">
            <div class="row mb-5">
                <div class="col-md-12">
                    <div class="card shadow1 mb-3" style="">
                        <div class="card-header" style="background-color: #2E671A;">
                            <div class="row justify-content-end">
                                <div class="col">
                                    <ul class="nav nav-tabs card-header-tabs nav-material">
                                        <li class="nav-item">
                                            <a class="nav-link text-white font-weight-bold" id="w1-tab1" data-toggle="tab" >MEMBERS INFORMATION</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" style="background-color: #ecf0f1">
                            <div class=" mb-3" style="float:left">
                                <div class="dropdown">
                                    <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="caret"></i>{{usersType.charAt(0).toUpperCase() + usersType.slice(1) }} Users
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:fixed; background-color: #ecf0f1;">
                                        <button @click="loadUsers('all')" class="dropdown-item text-green"> All Members</button>
                                        <button @click="loadUsers('active')" class="dropdown-item text-green"> Active Members</button>
                                        <button @click="loadUsers('inactive')" class="dropdown-item text-green">Inactive Users</button>
                                        <button @click="loadUsers('stockist')" class="dropdown-item text-green">Stockists</button>
                                    </div>
                                </div>
                            </div>
                            <div class=" mb-3" style="float:right">
                                <form class="form-inline my-2 my-lg-0" @submit.prevent="search()">
                                    <input v-model="searche" v-b-popover.hover.top="'first name/ last name/ username/ email/ package'" class="form-control float-left mr-sm-2" type="text" placeholder="" aria-label="Search" style="background-color: #ecf0f1; border: 2px solid #2E671A;">
                                    <span v-if="loading" class="btn btn-success my-2 my-sm-0">...</span>
                                    <button v-else class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
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
                                            <th scope="col">Stockist Package</th>
                                            <th scope="col">Stockist Status</th>
                                            <th scope="col">Stockist Date of Reg.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="loading && usersLoading">
                                            <td colspan="11">
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
                                            <template v-else>
                                                <tr v-for="user,i in users" :key="i">
                                                    <td>{{ (usersPerPage * (usersCurrentPage - 1)) + ( ++i) }}</td>
                                                    <td> <img :src="imageURL(user.photo_path)" :style="{'width': '50px'}" class="user_avatar img-responsive"/></td>
                                                    <td>{{ user.first_name }} {{ user.last_name }}</td>
                                                    <td>{{ user.email }}</td>
                                                    <td>{{ user.username }}</td>
                                                    <td>{{ user.package_name }}</td>
                                                    <td>{{ user.created_at }}</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="caret"></i>
                                                            </button>
                                                            <div class="dropdown-menu"  style="background-color: #ecf0f1">
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-dashboard class="dropdown-item text-green" ><i class="icon-barometer2"></i>&nbsp;&nbsp; Dashboard</a>
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-profile class="dropdown-item text-green" >
                                                                    <i class="icon-drivers-license-o"></i>&nbsp;&nbsp; Profile</a>
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-genealogy class="dropdown-item text-green" ><i class="icon-sitemap"></i>&nbsp;&nbsp;Geneology</a>
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-wallet class="dropdown-item text-green" ><i class="icon-account_balance_wallet"></i>&nbsp;&nbsp;Wallet</a>
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-order-history class="dropdown-item text-green" ><i class="icon-shopping-cart"></i>&nbsp;&nbsp;Repurchase History</a>
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-bank-details class="dropdown-item text-green" data-toggle="modal" data-target="#popModal-1"><i class="icon-bank"></i>&nbsp;&nbsp;Enable Bank Account Change</a>	
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.user-password class="dropdown-item text-green" data-toggle="modal" data-target="#popModal-2"><i class="icon-lock"></i>&nbsp;&nbsp;Login Details Change</a>											
                                                                <a @click="setUser(user)" v-b-modal.send-message class="dropdown-item text-green" data-toggle="modal" data-target="#popModal-3"><i class="icon-mail-envelope-open6"></i>&nbsp;&nbsp;Send Message</a>
                                                                <a @click="setUser(user)" class="dropdown-item text-green" v-b-modal.make-transfer>Make Payout<i class="icon-mail-money"></i>&nbsp;&nbsp;</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span class="font-weight-bold">{{ user.stockist_package_name }}</span></td>
                                                    <td>
                                                        <div class="dropdown" v-if="user.is_stockist==1">
                                                            <button class="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="caret"></i> Active
                                                            </button>
                                                            <div class="dropdown-menu" style="background-color: #ecf0f1">
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.stockist-profile class="dropdown-item text-green" ><i class="icon-account_box"></i>&nbsp;&nbsp; Stockist Profile</a>
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.stockist-record class="dropdown-item text-green" ><i class="icon-clipboard-list"></i>&nbsp;&nbsp; Stockist Record</a>
                                                                <a v-if="usersType !== 'inactive'" @click="setUser(user)" v-b-modal.stockist-processed-orders class="dropdown-item text-green" ><i class="icon-payment"></i>&nbsp;&nbsp; Processed Orders</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{{ user.stockist_created_at }}</td>
                                                </tr>
                                            </template>
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
        <Modal modal-id="user-order-history" modal-title="User Repurchase History" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <UserOrderHistory :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>

        <Modal modal-id="stockist-profile" modal-title="Stockist Profile" modal-size="md">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <StockistProfile :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>

        <Modal modal-id="stockist-record" modal-title="Stockist Record" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <StockistRecord :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>

        <Modal modal-id="stockist-processed-orders" modal-title="Stockist Processed Orders" modal-size="xl">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <StockistProcessedOrders :user="user"/>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>

        <Modal modal-id="make-transfer" modal-title="Make Transfer" modal-size="md">
            <template v-if="user==null">
                <b-skeleton-table
                    :rows="3"
                    :columns="8"
                    :table-props="{ bordered: true, striped: true }"
                ></b-skeleton-table>
            </template>
            <template v-else>
                <div v-if="userIsActive">
                    <form @submit.prevent="bankTransfer">
                        <div class="form-row mb-3 d-flex justify-content-center">
                            <div class="col-md-8">
                                <div class="input-group mb-2" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-money float-left s-20 text-white"></i></div>
                                    </div>
                                    <input type="number" required v-model="bankTransferForm.amount" class="form-control r-1 light s-12" placeholder="Amount" style="background-color:transparent; border: 2px solid #2E671A;"> 
                                </div>
                                <div class="input-group mb-2" >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="icon icon-money float-left s-20 text-white"></i></div>
                                    </div>
                                    <textarea required v-model="bankTransferForm.reason" class="form-control r-1 light s-12" placeholder="Enter narration" style="background-color:transparent; border: 2px solid #2E671A;"></textarea> 
                                </div>
                                <span class="btn btn-success btn-sm" v-if="submitting">...</span>
                                <button v-else type="submit" class="btn btn-success btn-sm btn-block">
                                    <i class="icon-check-square-o mr-2"></i>Make payment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div v-else class="alert alert-info">
                    <span v-if="userDataLoading">User data loading</span>
                    <span v-else>This user is Inactive</span>
                </div>
            </template>
        </Modal>
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
    .card {
        margin-bottom: 250px !important; /* Increase bottom margin to give room */
        position: relative; /* Ensure dropdowns are positioned correctly */
    }

    .border {
        border-left: 1px solid #2E671A !important;
    }

    .border-left-green {
        border-left: 1px solid #2E671A !important;
    }

    /* Dropdown Menu Styling */
    .dropdown-menu {
        position: absolute !important; /* Make sure the dropdown is positioned absolutely */
        top: auto; /* Allow it to adjust position */
        left: auto; /* Allow it to adjust position */
        z-index: 1050; /* Ensure it appears above other elements */
        background-color: #ecf0f1; /* Your dropdown background color */
        border: 1px solid #2E671A; /* Match your design style */
        padding: 0.5rem 0; /* Adjust padding */
    }

    /* Ensure dropdown is not clipped by the table */
    .table-responsive {
        overflow-x: visible !important;
    }

    /* Dropdown Menu Styling */
    .dropdown-menu {
        position: absolute !important; /* Ensure absolute positioning */
        top: auto; /* Adjust position */
        left: auto; /* Adjust position */
        z-index: 1050; /* Place it above other elements */
        background-color: #ecf0f1; /* Background color */
        border: 1px solid #2E671A; /* Match your design */
        padding: 0.5rem 0; /* Adjust padding */
    }

    /* Prevent dropdown clipping */
    .table-responsive {
        overflow-x: visible !important;
    }

    /* Default text and icon styles */
    .dropdown-menu .dropdown-item {
        color: #2E671A !important; /* Ensure default text color */
        font-weight: bold;
        display: flex; /* Align icon and text together */
        align-items: center;
        gap: 8px; /* Space between icon and text */
        padding: 10px 15px; /* Adjust padding for spacing */
    }

    /* Hover effect: Ensure all parts change */
    .dropdown-menu .dropdown-item:hover {
        background-color: #2E671A !important; /* Background on hover */
        color: white !important; /* Text color on hover */
    }

    /* Ensure icons also change color on hover */
    .dropdown-menu .dropdown-item:hover i {
        color: white !important;
    }

    /* Add smooth transitions */
    .dropdown-menu .dropdown-item {
        transition: background-color 0.3s ease, color 0.3s ease;
    }
</style>

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
    import UserOrderHistory from '@/components/user/UserOrderHistory.vue';
    import StockistProfile from '@/components/user/StockistProfile.vue';
    import StockistProcessedOrders from '@/components/user/StockistProcessedOrders.vue';
    import StockistRecord from '@/components/user/StockistRecord.vue';
    //import UserOrderHistory from '@/components/user/UserOrderHistory.vue';
    


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
        BasePaginator,
        UserOrderHistory,
        StockistProcessedOrders,
        StockistProfile,
        StockistRecord,
    },
    data() {
        return {
            user: null,
            usersLoading:false,
            searche:null,
            usersType:'all',
            userIsActive:false,
            userDataLoading:false,
            bankTransferForm:{
                amount:0,
                reason:null
            },
            
            makingPayment:false
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
        ...mapActions("paymentStore", ["makePayment"]),

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
        },

        bankTransfer(){
            this.makingPayment = true
            this.makePayment({uuid:this.user.uuid, data:this.bankTransferForm}).then(()=>this.makingPayment=false)
        }
    },
    
}
</script>