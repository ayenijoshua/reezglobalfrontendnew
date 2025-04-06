<template>
    <div id="app">
        <aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
            <section class="sidebar">
                <div class="w-80px mt-3 mb-3 ml-3">
                    <img src="/assets/img/logo2b.png" style="max-width: 300%;" alt="logo">
                </div>
                <div class="relative">
                    <a data-toggle="collapse" href="#adminSettingsCollapse" role="button" aria-expanded="false"
                    aria-controls="adminSettingsCollapse" class="btn-fab btn-fab-sm absolute fab-right-bottom fab-top btn-success shadow1 ">
                        <i class="icon icon-arrow-down"></i>
                    </a>
                    <div class="admin-panel p-3 light mb-2">
                        <div>
                            <div class="float-left image">
                                <img class="user_avatar" src="/assets/img/mock-image.jpeg" alt="User Image">
                            </div>
                            <div class="float-left info">
                                <h6 class="font-weight-bold mt-2 mb-1 ml-4" style="color:#2E671A">Administrator</h6>
                                <a class="text-success ml-3" href="#" ><i class="icon-circle text-success blink"></i> Online</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="collapse multi-collapse shadow" id="adminSettingsCollapse" >
                            <div class="list-group mt-3 shadow">
                                <a href="#" class="list-group-item list-group-item-action shadow1">
                                    <i class="mr-2 icon icon-sign-out"></i>
                                    <span class="text-blue" v-b-modal.logOut>Logout</span>
                                </a>
                                <router-link :to="{name:'user-security'}" class="list-group-item list-group-item-action shadow1">
                                    <i class="mr-2 icon-lock3 text-blue"></i><span class="text-blue">Change Password</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="sidebar-menu">
                    <li :class="['treeview',  'shadow', activeMenu()=='admin-dashboard' ? 'active' : '']" @click="setMenu('admin-dashboard')">
                        <router-link :to="{name:'admin-dashboard'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-barometer2 green-text s-18"></i><span class="green-text">Dashboard</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', 'shadow', activeMenu()=='admin-users' ? 'active' : '']" @click="setMenu('admin-users')">
                        <router-link :to="{name:'admin-users'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-people green-text s-18"></i><span class="green-text">Memebers</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', 'shadow', activeMenu()=='admin-wallet' ? 'active' : '']" @click="setMenu('admin-wallet')">
                        <router-link :to="{name:'admin-wallet'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-account_balance_wallet green-text s-18"></i><span class="green-text">Company Finance</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', 'shadow', activeMenu()=='admin-transactions' ? 'active' : '']" @click="setMenu('admin-transactions')">
                        <router-link :to="{name:'admin-transactions'}" :style="{'text-decoration': 'none'}">
                            <i class="icon icon-account_balance green-text s-18"></i> <span class="green-text">Transactions</span>
                        </router-link>
                    </li>

                    <li :class="['treeview', 'shadow', activeMenu()=='admin-ranks' ? 'active' : '']" @click="setMenu('admin-packages')">
                        <router-link :to="{name:'admin-ranks'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-medal5 green-text s-18"></i>
                            <span class="green-text">Ranks</span>
                        </router-link>
                    </li>

                    <li :class="['treeview', 'shadow', activeMenu()=='admin-incentives' ? 'active' : '']" @click="setMenu('admin-incentives')">
                        <a href="#" :style="{'text-decoration': 'none'}"><i class="icon icon-gift green-text s-18" ></i>
                            <span class="green-text">Incentives</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <router-link :to="{name:'admin-incentives'}"  :style="{'text-decoration': 'none'}">
                                    <i class="icon icon-arrow-right"></i>Update Incentives
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'incentive-requests'}" :style="{'text-decoration': 'none'}" >
                                    <i class="icon icon-arrow-right"></i>Incentive Requests
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li :class="['treeview', 'shadow', activeMenu()=='admin-product' ? 'active' : '']" @click="setMenu('admin-product')">
                        <router-link :to="{name:'products'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-shopping-bag green-text s-18"></i><span class="green-text">Products</span> 
                        </router-link>
                    </li>

                    <!----<li :class="['treeview', activeMenu()=='admin-products' ? 'active' : '']" @click="setMenu('admin-product')">
                        <a href="#" :style="{'text-decoration': 'none'}"><i class="icon icon-shopping-bag green-text s-18"></i>
                            <span class="green-text">Products</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <router-link :to="{name:'products'}" :style="{'text-decoration': 'none'}">
                                    <i class="icon icon-arrow-right"></i>Update Products
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'product-requests'}" :style="{'text-decoration': 'none'}">
                                    <i class="icon icon-arrow-right"></i>Product Requests
                                </router-link>
                            </li>
                        </ul>
                    </li>-->

                    <li :class="['treeview', 'shadow', activeMenu()=='admin-packages' ? 'active' : '']" @click="setMenu('admin-packages')">
                        <router-link :to="{name:'admin-packages'}" :style="{'text-decoration': 'none'}">
                            <i class="icon icon-package2 green-text s-18"></i>
                            <span class="green-text">Packages</span>
                        </router-link>
                    </li>
                    
                    <li :class="['treeview', 'shadow', activeMenu()=='admin-security' ? 'active' : '']" @click="setMenu('admin-security')">
                        <router-link :to="{name:'admin-security'}" :style="{'text-decoration': 'none'}">
                            <i class="icon icon-lock3 green-text s-18"></i>
                            <span class="green-text">Security</span>
                        </router-link>
                    </li>
                    
                    <li :class="['treeview', 'shadow', activeMenu()=='admin-settings' ? 'active' : '']" @click="setMenu('admin-settings')">
                        <a href="#" @click.prevent="toggleSettings" style="text-decoration: none;">
                            <i class="icon icon-gear green-text s-18"></i>
                            <span class="green-text">Settings</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <router-link :to="{name:'referral-bonus-settings'}">
                                    <i class="icon icon-arrow-right"></i> Referral Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'global-profit-settings'}">
                                    <i class="icon icon-arrow-right"></i> Global Profit Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'create-stockist-package' }">
                                    <i class="icon icon-arrow-right"></i>  Stockist Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'upgrade-settings' }">
                                    <i class="icon icon-arrow-right"></i> Upgrade Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'unilevel-settings' }">
                                    <i class="icon icon-arrow-right"></i> Unilevel Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'withdrawal-settings'}">
                                    <i class="icon icon-arrow-right"></i> Withdrawal Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'company-details'}">
                                    <i class="icon icon-arrow-right"></i> Company Details
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
        <!--Sidebar End-->
        <div class="page has-sidebar-left">
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark pt-2 pb-2 pl-4 pr-2">
                        <div class="search-bar">
                            <input class="transparent s-24 text-white b-0 font-weight-lighter w-128 height-50" type="text"
                                placeholder="start typing...">
                        </div>
                        <a href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation" class="paper-nav-toggle paper-nav-white active "><i></i></a>
                    </div>
                </div>
            </div>
            <div class="navbar navbar-expand d-flex navbar-dark justify-content-between bd-navbar accent-3 shadow">
                <div class="relative">
                    <div class="d-flex">
                        <div>
                            <a href="#" data-toggle="push-menu" class="paper-nav-toggle pp-nav-toggle">
                                <i></i>
                            </a>
                        </div>
                    </div>
                </div>
                <!--Top Menu Start -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Messages-->
                        <li class="dropdown custom-dropdown messages-menu">
                            <a class="nav-link ml-2">
                                <i class="icon icon-sign-out" :style="{color:'green'}" v-b-modal.logOut></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container-fluid  my-3">
                <router-view/>
            </div>

        </div>


        <div class="control-sidebar-bg shadow white fixed"></div>
         <modal :modalId="'logOut'" :modalSize="'md'" :modalTitle="''" >
            <div class="card no-b" style="background-image: #ecf0f1 !important">

                <div class="card-body px-sm-4 mb-2 pt-1 pb-0" style="background-image: #ecf0f1"> 
                    <div class="d-flex justify-content-center align-items-center" > <!-- Added styling and classes -->
                        <img  src="/assets/img/exit.png" width="auto" height="100px">
                        <h6 ><span class="font-weight-bold green-text"> Are you sure you want to signout ?</span>
                            <br><small class="font-weight-normal green-text">Confirm this is not a mistake.</small></h6>
                    </div>
                    <div class="row justify-content-center no-gutters">
                        <div class="col-auto mr-2">
                            <button type="button" class="btn btn-sm btn-success px-4" @click="logOut()" data-dismiss="modal">Confirm</button>
                        </div>
                        <!-- <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-light text-muted" data-dismiss="modal">Cancel</button>
                        </div> -->
                    </div>
                </div>
            </div>  
         </modal>
    </div>
</template>

<style scoped>
.card {
    background-color: #ecf0f1;
    background-clip: border-box;

}


.img-responsive {
  transition: opacity 0.3s ease-in-out; /* Smooth transition for visibility */
} 

.user_avatar {
    width: 60px;
    border: 1px solid #eee;
    background: #2E671A;
    padding: 5px;
    border-radius: 50%;
}

.offcanvas .sidebar-menu>li {
    border-bottom: 1px solid #ecf0f1;
}

/* Sidebar Menu Item Default State */
.sidebar-menu li a {
    color: #2E671A; /* Default text color for links */
    text-decoration: none;
}

.sidebar-menu li a i {
    color: #2E671A; /* Default icon color */
}

.sidebar-menu li a:hover i,
.sidebar-menu li a:focus i {
    color: #2E671A; /* Hover icon color */
}

/* Active Menu Item */
.sidebar-menu .active > a {
    background-color: #2E671A; /* Active background */
    color: #ecf0f1; /* Active text color */
}

.sidebar-menu .active > a i {
    color: #2E671A; /* Active icon color */
}

.offcanvas .sidebar-menu > li.active:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 100%;
    background: #2E671A;
    position: absolute;
    right: 0;
    bottom: 0;
}

.btn-success {
    color: #FFFFFF !important;
    background-color: #2E671A !important;
    border-color: #2E671A !important;
}


/* Override the modal's background colors */
.modal-dialog {
    background-color: #ecf0f1 !important;
}

.modal-content {
    background-color: #ecf0f1 !important;
    border: none; /* Remove borders if any */
}

.modal-body {
    background-color: #ecf0f1 !important;
    color: #333; /* Adjust text color if necessary */
}

.modal-footer {
    background-color: #ecf0f1 !important;
    border-top: none; /* Remove top border if any */
}

/* Ensure any nested elements within modal-body also inherit the background */
.modal-body .ibox-content,
.modal-body #modalContent,
.modal-body small {
    background-color: #ecf0f1 !important;
}

/* Optional: Adjust button color for consistency */
.modal-footer .btn {
    background-color: #2E671A; /* Example button color */
    color: white;
}




/* Dropdown Menu Background */
.sidebar-menu .treeview-menu {
    background-color: #2E671A !important; /* Default dropdown background */
    border-radius: 0px;
    list-style:none;
    margin: 0;
}

/* Dropdown Menu Links Default State */
.sidebar-menu .treeview-menu li a {
    color: #f6f6f2 !important; /* Default text and icon color */
    text-decoration: none;
    padding: 10px 20px;
    display: inline-block;
    align-items: right;
    transition: all 0.3s ease-in-out !important;
}

/* Dropdown Menu Links Hover State */
.sidebar-menu .treeview-menu li a:hover,
.sidebar-menu .treeview-menu li a:focus {
    background-color: #f6f6f2 !important; /* Hover background */
    color: #2E671A !important; /* Hover text color */
}

.sidebar-menu .treeview-menu li a:hover i,
.sidebar-menu .treeview-menu li a:focus i {
    color: #2E671A !important; /* Hover icon color */
}

/* Active Dropdown Menu Item */
.sidebar-menu .treeview-menu .active > a {
    background-color: #f6f6f2 !important; /* Active background */
    color: #2E671A !important; /* Active text color */
}

.sidebar-menu .treeview-menu .active > a i {
    color: #2E671A !important; /* Active icon color */
}

/* Dropdown Menu Icon Styling */
.sidebar-menu .treeview-menu li a i {
    margin-right: 10px !important; /* Space between icon and text */
    transition: all 0.3s ease-in-out !important;
}

/* Smooth transition for all elements */
.sidebar-menu .treeview-menu li a,
.sidebar-menu .treeview-menu li a i {
    transition: all 0.3s ease !important;
}
</style>

<script>
import modal from '@/components/Modal'
import {mapActions} from 'vuex'
export default {
    components:{
        modal
    },

    computed:{
        
    },

    created(){
        const pageArr = location.pathname.split('/')
        let activeMenu = pageArr[1]+'-'+pageArr[2]
       this.setMenu(activeMenu)

       document.querySelector('title').innerHTML = 'Startwins | Admin'
       //alert(document.getElementsByTagName('title').text)
    },

    methods:{
        ...mapActions('authStore',['logOut']),

        setMenu(menu){
            this.$store.state.activeMenu = menu
        },
        activeMenu(){
            return this.$store.state.activeMenu
        }
    }
    
}
</script>