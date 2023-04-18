import Vue from "vue";
import Vuex from "vuex";
import authStore from "./auth-store";
import packageStore from "./package-store";
import incentiveStore from "./incentive-store";
import rankStore from "./rank-store";
import settingStore from "./setting-store";
import serviceProviderStore from "./service-provider-store";
import productServiceStore from "./product-service-store";
import userStore from "./user-store";
import paymentStore from "./payment-store";
import bonusStore from "./bonus-store";
import incentiveClaimStore from "./incentive-claim-store";
import productStore from "./product-store";
import withdrawalStore from "./withdrawal-store";
import productClaimStore from "./product-claim-store";

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return{
        submitting:false,
        loading:false,
        activeMenu:null
    }
  },
  
  mutations: {
    loading(state){
      state.loading =true
    },
    loaded(state){
        state.loading = false
    },
    submitting(state){
        state.submitting = true
    },
    submitted(state){
        state.submitting = false
    }
  },
  
  modules:{
    authStore,
    serviceProviderStore,
    productServiceStore,
    rankStore,
    packageStore,
    incentiveStore,
    settingStore,
    userStore,
    paymentStore,
    bonusStore,
    incentiveClaimStore,
    productStore,
    withdrawalStore,
    productClaimStore
  }
})
