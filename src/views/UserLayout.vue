<template>
    <div id="app">
        <aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas' >
            <section class="sidebar" style="height: 821px; overflow: hidden; width: auto;">
                <div class="w-80px mt-3 mb-3 ml-3">
                    <img src="/assets/img/logo1.png" alt="" style="max-width: 300%;">
                </div>
                <div class="relative ">
                    <a data-toggle="collapse" href="#userSettingsCollapse" role="button" aria-expanded="false"
                    aria-controls="userSettingsCollapse" class="btn-fab btn-fab-sm absolute fab-right-bottom fab-top btn-success shadow1 ">
                        <i class="icon icon-arrow-down"></i>
                    </a>
                    <div class="user-panel p-3 light mb-2">
                        <div>
                            <div class="float-left image">
                                <img class="user_avatar" :src="imageURL" alt="User Image">
                            </div>
                            <div class="float-left info">
                                <h6 class="font-weight-bold mt-2 mb-1" style="color:#2E671A">{{ authUser.first_name }} {{ authUser.last_name }}</h6>
                                <a class="" href="#" style="color:#2E671A; text-decoration: none;" ><i class="icon-circle blink"  style="color:#2E671A" ></i> Online</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="collapse multi-collapse shadow" id="userSettingsCollapse" >
                            <div class="list-group mt-3 shadow">
                                <a href="#" class="list-group-item list-group-item-action shadow1">
                                    <i class="mr-2 icon icon-sign-out"></i>
                                    <span class="text-green" v-b-modal.logOut>Logout</span>
                                </a>
                                <router-link :to="{name:'user-security'}" class="list-group-item list-group-item-action shadow1">
                                    <i class="mr-2 icon-lock3 text-green"></i><span class="text-green">Change Password</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="sidebar-menu" >
                    <li :class="['treeview', 'shadow', activeMenu()=='user-dashboard' ? 'active' : ''] " @click="setMenu('user-dashboard')">
                        <router-link :to="{name:'user-dashboard'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-barometer2 text-green s-18"></i><span class="text-green">Dashboard</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', 'shadow', activeMenu()=='user-profile' ? 'active' : '']" @click="setMenu('user-profile')">
                        <router-link :to="{name:'user-profile'}" :style="{'text-decoration':'none'}" >
                            <i class="icon icon-vcard text-green s-18"></i><span class="text-green">Profile</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', 'shadow', activeMenu()=='user-downlines' ? 'active' : '']" @click="setMenu('user-downlines')">
                        <router-link :to="{name:'user-downlines'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-people text-green s-18"></i><span class="text-green">Downlines</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview','shadow', activeMenu()=='user-genealogy' ? 'active' : '']" @click="setMenu('user-genealogy')">
                        <router-link :to="{name:'user-genealogy'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-sitemap text-green s-18"></i><span class="text-green">Genealogy</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview','shadow', activeMenu()=='user-wallet' ? 'active' : '']" @click="setMenu('user-wallet')">
                        <router-link :to="{name:'user-wallet'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-account_balance_wallet text-green s-18"></i><span class="text-green">Transactions</span> 
                        </router-link>
                    </li>
                    <!---Work on this-->
                    <li :class="['treeview','shadow', activeMenu() == 'user-repurchase' ? 'active' : '']" @click="setMenu('user-repurchase')">
                        <router-link :to="{ name: 'user-repurchase' }" :style="{ 'text-decoration': 'none' }">
                        <i class="icon icon-shopping-cart text-green s-18"></i>
                        <span class="text-green">Repurchase</span>
                        </router-link>
                    </li>

                    <li v-if="authUser.is_stockist==0" :class="['treeview', 'shadow', activeMenu() == 'user-stockist_reg' ? 'active' : '']" @click="setMenu('user-stockist_reg')">
                        <router-link :to="{ name: 'user-stockist_reg' }" :style="{ 'text-decoration': 'none' }">
                        <i class="icon icon-account_box text-green s-18"></i>
                        <span class="text-green">Become a Stockist</span>
                        </router-link>
                    </li>

                    <li class="shadow" v-if="authUser.is_stockist==1">
                        <a href="#" style="text-decoration:none;">
                            <i class="icon icon-web text-green"></i>
                            <span class="font-weight-bold text-green">Stockist Portal</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>

                        <!-- Dynamically add 'open' class to keep it expanded when any item is active -->
                        <ul class="treeview-menu" :class="{  }" style="background-color: #1b4f72">
                            <li :class="['treeview', activeMenu() === 'user-stockistprofile' ? 'active' : '']" 
                                @click="setMenu('user-stockistprofile')">
                                <router-link :to="{ name: 'user-stockistprofile' }" style="text-decoration:none;">
                                    <i class="icon icon-account_box text-white"></i>Stockist Profile
                                </router-link>
                            </li>

                            <li :class="['treeview', activeMenu() === 'user-stockpurchase' ? 'active' : '']" 
                                @click="setMenu('user-stockpurchase')">
                                <router-link :to="{ name: 'user-stockpurchase' }" style="text-decoration:none;">
                                    <i class="icon icon-shopping-cart text-white"></i> Stock Purchase
                                </router-link>
                            </li>

                            <li :class="['treeview', activeMenu() === 'user-stockistrecord' ? 'active' : '']" 
                                @click="setMenu('user-stockistrecord')">
                                <router-link :to="{ name: 'user-stockistrecord' }" style="text-decoration:none;">
                                    <i class="icon icon-clipboard-list text-white"></i> Stockist Record
                                </router-link>
                            </li>

                            <li :class="['treeview', activeMenu() === 'user-order' ? 'active' : '']" 
                                @click="setMenu('user-order')">
                                <router-link :to="{ name: 'user-order' }" style="text-decoration:none;">
                                    <i class="icon icon-payment text-white"></i> Order Processing
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li :class="['treeview', 'shadow', activeMenu()=='user-security' ? 'active' : '']" @click="setMenu('user-security')">
                        <router-link :to="{name:'user-security'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-lock3 text-green s-18"></i>
                            <span class="text-green">Security</span>
                        </router-link>
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
            <div class="navbar navbar-expand d-flex navbar-dark justify-content-between bd-navbar blue accent-3 shadow">
                <div class="relative">
                    <div class="d-flex">
                        <div>
                            <a href="#" data-toggle="push-menu" class="paper-nav-toggle pp-nav-toggle"  @click="toggleSidebar">
                                <i></i>
                            </a>
                        </div>
                        <div class="d-none d-md-block">
                            <div v-if="!true" class="preloader-wrapper small active">
                                <div class="spinner-layer spinner-green-only">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="gap-patch">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>
                            <h5 v-else class="nav-title text-green"></h5>
                        </div>
                    </div>
                </div>
                     <!-- Conditionally Show Image When Sidebar is Hidden -->
                    <img
                        v-if="isSidebarHidden"
                        src="/assets/img/logo1.png"
                        class="img-responsive"
                        alt=""
                        style="width: 200px; height:auto"
                    />
                <!--Top Menu Start -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Messages-->
                        <li class="dropdown custom-dropdown messages-menu">
                            <a class="nav-link ml-2">
                                <i class="icon icon-sign-out" :style="{color:'#2E671A'}" v-b-modal.logOut></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container-fluid  my-3">
                <router-view/>
            </div>

        </div>

       <!-- <div class="control-sidebar-bg shadow white fixed"></div>
        <modal :modalId="'logOut'" :modalSize="'md'" :modalTitle="''">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content border-0 custom-modal-bg">
                    <div class="modal-header custom-modal-bg">
                        <h6 class="font-weight-bold text-green m-0">Are you sure you want to signout?</h6>
                    </div>
                    <div class="modal-body custom-modal-bg p-0">
                        <div class="p-sm-3 p-2 justify-content-center">
                            <small>Confirm this is not a mistake.</small>
                            <div class="px-sm-4 mb-2 pt-1 pb-0">
                                <div class="row justify-content-end no-gutters">
                                    <div class="col-auto mr-2">
                                        <button type="button" class="btn btn-sm btn-success px-4" @click="logOut()" data-dismiss="modal">Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>--->


        <div class="control-sidebar-bg shadow white fixed"></div>           
        <modal :modalId="'logOut'" :modalSize="'md'" :modalTitle="''" class="modal fade">
            <div class="modal-dialog" style="background-color: #ded8c7 !important;">
                <div class="modal-content" style="background-color: #ded8c7 !important;">
                    <div class="d-flex justify-content-center align-items-center mb-2" > <!-- Added styling and classes -->
                        <img  src="/assets/img/exit.png" width="auto" height="100px">
                    </div>
                    <div class="ibox-content modalContent text-center" id="modalContent">
                        <span class="font-weight-bold">Are you sure you want to log out?</span><br>
                        <small>Confirm this is not a mistake.</small>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-sm btn-success px-4" @click="logOut()" data-dismiss="modal">Confirm</button>
                    </div>
                </div><!-- /.modal-content -->
            </div>
        </modal>

        



    </div>
</template>



<style scoped>


/* Override the modal's background colors */
.modal-dialog {
    background-color: #ded8c7 !important;
}

.modal-content {
    background-color: #ded8c7 !important;
    border: none; /* Remove borders if any */
}

.modal-body {
    background-color: #ded8c7 !important;
    color: #333; /* Adjust text color if necessary */
}

.modal-footer {
    background-color: #ded8c7 !important;
    border-top: none; /* Remove top border if any */
}

/* Ensure any nested elements within modal-body also inherit the background */
.modal-body .ibox-content,
.modal-body #modalContent,
.modal-body small {
    background-color: #ded8c7 !important;
}

/* Optional: Adjust button color for consistency */
.modal-footer .btn {
    background-color: #2E671A; /* Example button color */
    color: white;
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
    border-bottom: 1px solid #ded8c7;
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
    color: #ded8c7; /* Active text color */
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
    background-color: #ded8c7 !important;
}

.modal-content {
    background-color: #ded8c7 !important;
    border: none; /* Remove borders if any */
}

.modal-body {
    background-color: #ded8c7 !important;
    color: #333; /* Adjust text color if necessary */
}

.modal-footer {
    background-color: #ded8c7 !important;
    border-top: none; /* Remove top border if any */
}

/* Ensure any nested elements within modal-body also inherit the background */
.modal-body .ibox-content,
.modal-body #modalContent,
.modal-body small {
    background-color: #ded8c7
	!important;
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
import modal from '@/components/Modal';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    modal,
  },

  data() {
    return {
      isSidebarHidden: false, // Tracks if the sidebar is hidden
    };
  },

  computed: {
    ...mapGetters('authStore', ['authUser']),
    ...mapGetters('userStore', ['profile']),

    imageURL() {
      let img = this.profile.photo_path;
      return img ? process.env.VUE_APP_IMAGE_PATH + '/' + img : '/assets/img/mock-image.jpeg';
    },
  },

  created() {
    const pageArr = location.pathname.split('/');
    let activeMenu = pageArr[1] + '-' + pageArr[2];
    this.setMenu(activeMenu);

    document.querySelector('title').innerHTML = 'Startwin | User';

    this.getUser().then((res) => {
      if (res.status === 200) {
        this.getProfileDetails(this.authUser.uuid);
      }
    });
  },

  methods: {
    ...mapActions('authStore', ['logOut', 'getUser']),
    ...mapActions('userStore', ['getProfileDetails']),

    setMenu(menu = 'dashboard') {
      this.$store.state.activeMenu = menu;
    },
    activeMenu() {
      return this.$store.state.activeMenu;
    },

    toggleSidebar() {
      this.isSidebarHidden = !this.isSidebarHidden; // Toggle the sidebar state
    },
  },
};
</script>


<style scoped>
/* Ensures open submenu items remain visible */
.treeview-menu.open {
    display: block !important;
}
</style>