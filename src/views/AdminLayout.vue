<template>
    <div id="app">
        <aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
            <section class="sidebar">
                <div class="w-80px mt-3 mb-3 ml-3">
                    <img src="/assets/img/deli_logo.png" width="200" height="90" alt="logo">
                </div>
                <div class="relative">
                    <a data-toggle="collapse" href="#adminSettingsCollapse" role="button" aria-expanded="false"
                    aria-controls="adminSettingsCollapse" class="btn-fab btn-fab-sm absolute fab-right-bottom fab-top btn-success shadow1 ">
                        <i class="icon icon-arrow-down"></i>
                    </a>
                    <div class="admin-panel p-3 light mb-2">
                        <div>
                            <div class="float-left image">
                                <img class="user_avatar" src="/assets/img/dummy/u2a.png" alt="User Image">
                            </div>
                            <div class="float-left info">
                                <h6 class="font-weight-light mt-2 mb-1" style="color:#2E671A">Admin</h6>
                                <a class="text-success" href="#" ><i class="icon-circle text-success blink"></i> Online</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="collapse multi-collapse" id="adminSettingsCollapse">
                            <div class="list-group mt-3 shadow">
                                <a href="#" class="list-group-item list-group-item-action ">
                                    <i class="mr-2 icon icon-sign-out text-green"></i>
                                    <span class="green-text" v-b-modal.logOut>Logout</span>
                                </a>
                                <router-link :to="{name:'admin-security'}" class="list-group-item list-group-item-action">
                                    <i class="mr-2 icon-key5 text-green"></i><span class="green-text">Change Password</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="sidebar-menu">
                    <li :class="['treeview', activeMenu()=='admin-dashboard' ? 'active' : '']" @click="setMenu('admin-dashboard')">
                        <router-link :to="{name:'admin-dashboard'}" >
                            <i class="icon icon-barometer2 green-text s-18"></i><span class="green-text">Dashboard</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-users' ? 'active' : '']" @click="setMenu('admin-users')">
                        <router-link :to="{name:'admin-users'}" >
                            <i class="icon icon-users green-text s-18"></i><span class="green-text">Users</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-wallet' ? 'active' : '']" @click="setMenu('admin-wallet')">
                        <router-link :to="{name:'admin-wallet'}" >
                            <i class="icon icon-wallet green-text s-18"></i><span class="green-text">Wallet</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-transactions' ? 'active' : '']" @click="setMenu('admin-transactions')">
                        <router-link :to="{name:'admin-transactions'}">
                            <i class="icon icon-account_balance_wallet green-text s-18"></i> <span class="green-text">Transactions</span>
                        </router-link>
                    </li>

                    <li :class="['treeview', activeMenu()=='admin-incentives' ? 'active' : '']" @click="setMenu('admin-incentives')">
                        <a href="#"><i class="icon icon-settings light-green-text s-18"></i>
                            <span class="green-text">Incentives</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>
                        <ul class="treeview-menu menu-open" style="display: block;">
                            <li>
                                <router-link :to="{name:'admin-incentives'}" >
                                    <i class="icon icon-circle-o"></i>Update Incentives
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'incentive-requests'}" >
                                    <i class="icon icon-circle-o"></i>Incemtive Requests
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li :class="['treeview', activeMenu()=='admin-incentives' ? 'active' : '']" @click="setMenu('admin-incentives')">
                        <a href="#"><i class="icon icon-settings light-green-text s-18"></i>
                            <span class="green-text">Products</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>
                        <ul class="treeview-menu menu-open" style="display: block;">
                            <li>
                                <router-link :to="{name:'admin-incentives'}">
                                    <i class="icon icon-circle-o"></i>Update Products
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'incentive-requests'}" >
                                    <i class="icon icon-circle-o"></i>Product Requests
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li :class="['treeview', activeMenu()=='admin-packages' ? 'active' : '']" @click="setMenu('admin-packages')">
                        <router-link :to="{name:'admin-packages'}" >
                            <i class="icon icon-lock3 green-text s-18"></i>
                            <span class="green-text">Packages</span>
                        </router-link>
                    </li>

                    <!-- <li :class="['treeview', activeMenu()=='admin-packages' ? 'active' : '']" @click="setMenu('admin-packages')">
                        <router-link :to="{name:'admin-packages'}" >
                            <i class="icon icon-lock3 green-text s-18"></i>
                            <span class="green-text">Ranks</span>
                        </router-link>
                    </li> -->
                    
                    <li :class="['treeview', activeMenu()=='admin-security' ? 'active' : '']" @click="setMenu('admin-security')">
                        <router-link :to="{name:'admin-security'}" >
                            <i class="icon icon-lock3 green-text s-18"></i>
                            <span class="green-text">Security</span>
                        </router-link>
                    </li>
                    
                    <li :class="['treeview', activeMenu()=='admin-settings' ? 'active' : '']" @click="setMenu('admin-settings')">
                        <a href="#"><i class="icon icon-settings light-green-text s-18"></i>
                            <span class="green-text">Settings</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>
                        <ul class="treeview-menu menu-open" style="display: block;">
                            <!-- <li>
                                <router-link :to="{name:'admin-providers'}" >
                                    <i class="icon icon-circle-o"></i>Provider
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'admin-product-services'}" >
                                    <i class="icon icon-circle-o"></i>Product services
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'admin-charges'}" >
                                    <i class="icon icon-circle-o"></i>Charges & Fees
                                </router-link>
                            </li> -->
                            <li>
                                <router-link :to="{name:'bonus-settings'}" >
                                    <i class="icon icon-circle-o"></i>Bonus Settings
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
                        <div class="d-none d-md-block">
                            <h5 class="nav-title text-green">admin</h5>
                        </div>
                    </div>
                </div>
                <!--Top Menu Start -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Messages-->
                        <li class="dropdown custom-dropdown messages-menu">
                            <a class="nav-link ml-2" data-toggle="control-sidebar">
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

         <modal :modalId="'logOut'" :modalSize="'sm'" :modalTitle="'Log out'">
             <div class="alert alert-danger">
                 Are you sure you want to log out?
                 <button class="btn btn-danger" @click="logOut()">Yes</button>
             </div>
         </modal>
    </div>
</template>

<script>
import modal from '@/components/Modal'
//import {mapActions} from 'vuex'
export default {
    components:{
        modal
    },

    computed:{
        
    },

    created(){
    //     const pageArr = location.pathname.split('/')
    //     let activeMenu = pageArr[1]+'-'+pageArr[2]
    //    this.setMenu(activeMenu)

    //    document.querySelector('title').innerHTML = 'Bfree | Admin'
       //alert(document.getElementsByTagName('title').text)
    },

    methods:{
        //...mapActions('authStore',['logOut']),

        setMenu(){
            //this.$store.state.activeMenu = menu
        },
        activeMenu(){
            return '' //this.$store.state.activeMenu
        }
    }
    
}
</script>