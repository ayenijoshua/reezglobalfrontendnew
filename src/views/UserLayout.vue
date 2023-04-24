<template>
    <div id="app">
        <aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas' >
            <section class="sidebar" style="height: 821px; overflow: hidden; width: auto;">
                <div class="w-80px mt-3 mb-3 ml-3">
                    <img src="/assets/img/deli_logo.png" alt="" style="max-width: 300%;">
                </div>
                <div class="relative">
                    <a data-toggle="collapse" href="#userSettingsCollapse" role="button" aria-expanded="false"
                    aria-controls="userSettingsCollapse" class="btn-fab btn-fab-sm absolute fab-right-bottom fab-top btn-success shadow1 ">
                        <i class="icon icon-arrow-down"></i>
                    </a>
                    <div class="user-panel p-3 light mb-2">
                        <div>
                            <div class="float-left image">
                                <img class="user_avatar" src="/assets/img/dummy/u2a.png" alt="User Image">
                            </div>
                            <div class="float-left info">
                                <h6 class="font-weight-light mt-2 mb-1" style="color:#2E671A">{{ authUser.first_name }} {{ authUser.last_name }}</h6>
                                <a class="text-success" href="#" ><i class="icon-circle text-success blink"></i> Online</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="collapse multi-collapse" id="userSettingsCollapse">
                            <div class="list-group mt-3 shadow">
                                <a href="#" class="list-group-item list-group-item-action ">
                                    <i class="mr-2 icon icon-sign-out text-green"></i>
                                    <span class="green-text" v-b-modal.logOut>Logout</span>
                                </a>
                                <router-link :to="{name:'user-security'}" class="list-group-item list-group-item-action">
                                    <i class="mr-2 icon-lock3 text-green"></i><span class="green-text">Change Password</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="sidebar-menu">
                    <li :class="['treeview', activeMenu()=='user-dashboard' ? 'active' : '']" @click="setMenu('user-dashboard')">
                        <router-link :to="{name:'user-dashboard'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-barometer2 green-text s-18"></i><span class="green-text">Dashboard</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='user-profile' ? 'active' : '']" @click="setMenu('user-profile')">
                        <router-link :to="{name:'user-profile'}" :style="{'text-decoration':'none'}" >
                            <i class="icon icon-vcard green-text s-18"></i><span class="green-text">Profile</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='user-downlines' ? 'active' : '']" @click="setMenu('user-downlines')">
                        <router-link :to="{name:'user-downlines'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-people green-text s-18"></i><span class="green-text">Downlines</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='user-genealogy' ? 'active' : '']" @click="setMenu('user-genealogy')">
                        <router-link :to="{name:'user-genealogy'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-sitemap green-text s-18"></i><span class="green-text">Genealogy</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='user-wallet' ? 'active' : '']" @click="setMenu('user-wallet')">
                        <router-link :to="{name:'user-wallet'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-account_balance green-text s-18"></i><span class="green-text">Transactions</span> 
                        </router-link>
                    </li>
                    
                    <li :class="['treeview', activeMenu()=='user-security' ? 'active' : '']" @click="setMenu('user-security')">
                        <router-link :to="{name:'user-security'}" :style="{'text-decoration':'none'}">
                            <i class="icon icon-lock3 green-text s-18"></i>
                            <span class="green-text">Security</span>
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
                            <a href="#" data-toggle="push-menu" class="paper-nav-toggle pp-nav-toggle">
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
                <h6 ><span class="font-weight-bold"> Are you sure you want to signout ?</span>
                    <br><small>Confirm this is not a mistake.</small></h6>
                </div>
                <div class="card-body px-sm-4 mb-2 pt-1 pb-0"> 
                    <div class="row justify-content-end no-gutters">
                        <div class="col-auto mr-2">
                            <button type="button" class="btn btn-sm btn-success px-4" @click="logOut()" data-dismiss="modal">Confirm</button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-light text-muted" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>  
         </modal>
    </div>
</template>

<script>
import modal from '@/components/Modal'
import {mapActions,mapGetters} from 'vuex'
export default {
    components:{
        modal
    },

    computed:{
        ...mapGetters('authStore',['authUser']),

    },

    created(){
        const pageArr = location.pathname.split('/')
        let activeMenu = pageArr[1]+'-'+pageArr[2]
       this.setMenu(activeMenu)

       document.querySelector('title').innerHTML = 'Delishcare | User'
       //alert(document.getElementsByTagName('title').text)

       //if(Object.entries(this.authUser).length == 0){
        this.getUser()
       //}
    },

    methods:{
        ...mapActions('authStore',['logOut','getUser']),

        setMenu(menu='dashboard'){
            this.$store.state.activeMenu = menu
        },
        activeMenu(){
            return this.$store.state.activeMenu
        }
    }
    
}
</script>