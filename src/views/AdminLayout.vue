<template>
    <div id="app">
        <aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
            <section class="sidebar">
                <div class="w-80px mt-3 mb-3 ml-3">
                    <img src="/assets/img/deli_logo.png" style="max-width: 300%;" alt="logo">
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
                        <router-link :to="{name:'admin-dashboard'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-barometer2 green-text s-18"></i><span class="green-text">Dashboard</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-users' ? 'active' : '']" @click="setMenu('admin-users')">
                        <router-link :to="{name:'admin-users'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-people green-text s-18"></i><span class="green-text">Memebers</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-wallet' ? 'active' : '']" @click="setMenu('admin-wallet')">
                        <router-link :to="{name:'admin-wallet'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-account_balance_wallet green-text s-18"></i><span class="green-text">Company Finance</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-transactions' ? 'active' : '']" @click="setMenu('admin-transactions')">
                        <router-link :to="{name:'admin-transactions'}" :style="{'text-decoration': 'none'}">
                            <i class="icon icon-account_balance green-text s-18"></i> <span class="green-text">Transactions</span>
                        </router-link>
                    </li>

                    <li :class="['treeview', activeMenu()=='admin-ranks' ? 'active' : '']" @click="setMenu('admin-packages')">
                        <router-link :to="{name:'admin-ranks'}" :style="{'text-decoration': 'none'}" >
                            <i class="icon icon-medal5 green-text s-18"></i>
                            <span class="green-text">Ranks</span>
                        </router-link>
                    </li>

                    <li :class="['treeview', activeMenu()=='admin-incentives' ? 'active' : '']" @click="setMenu('admin-incentives')">
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

                    <li :class="['treeview', activeMenu()=='admin-products' ? 'active' : '']" @click="setMenu('admin-product')">
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
                    </li>

                    <li :class="['treeview', activeMenu()=='admin-packages' ? 'active' : '']" @click="setMenu('admin-packages')">
                        <router-link :to="{name:'admin-packages'}" :style="{'text-decoration': 'none'}">
                            <i class="icon icon-package2 green-text s-18"></i>
                            <span class="green-text">Packages</span>
                        </router-link>
                    </li>
                    
                    <li :class="['treeview', activeMenu()=='admin-security' ? 'active' : '']" @click="setMenu('admin-security')">
                        <router-link :to="{name:'admin-security'}" :style="{'text-decoration': 'none'}">
                            <i class="icon icon-lock3 green-text s-18"></i>
                            <span class="green-text">Security</span>
                        </router-link>
                    </li>
                    
                    <li :class="['treeview', activeMenu()=='admin-settings' ? 'active' : '']" @click="setMenu('admin-settings')">
                        <a href="#" :style="{'text-decoration': 'none'}"><i class="icon icon-gear green-text s-18"></i>
                            <span class="green-text">Settings</span>
                            <i class="icon icon-angle-left s-18 pull-right"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <router-link :to="{name:'referral-bonus-settings'}" :style="{'text-decoration': 'none'}">
                                    <i class="icon icon-arrow-right"></i>Referral Bonus Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'profit-pool-settings'}" :style="{'text-decoration': 'none'}" >
                                    <i class="icon icon-arrow-right"></i>Profit Pool Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'global-profit-settings'}" :style="{'text-decoration': 'none'}" >
                                    <i class="icon icon-arrow-right"></i>Global Profit Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'bonus-settings'}" :style="{'text-decoration': 'none'}" >
                                    <i class="icon icon-arrow-right"></i>Bonus Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'withdrawal-settings'}" :style="{'text-decoration': 'none'}">
                                    <i class="icon icon-arrow-right"></i>Withdrawal Settings
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'company-details'}" :style="{'text-decoration': 'none'}">
                                    <i class="icon icon-arrow-right"></i>Company Details
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

         <modal :modalId="'logOut'" :modalSize="'md'" :modalTitle="''">
            <div class="card border-0 p-sm-3 p-2 justify-content-center">
                <div class="card-header pb-0 bg-white border-0 mb-2">
                    <h6 ><span class="font-weight-bold "> Are you sure you want to signout ?</span>
                    <br><small>Confirm this is not a mistake.</small></h6>
                </div>
                <div class="card-body px-sm-4 mb-2 pt-1 pb-0"> 
                    <div class="row justify-content-end no-gutters">
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

       document.querySelector('title').innerHTML = 'Delsihcare | Admin'
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