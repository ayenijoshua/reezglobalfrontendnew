import api from '../../api/product-purchase'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
//import { notification } from '@/util/notification'

export default {

    async userPurchase({commit},data){
        try {
            commit('loading',null,{root:true})
            const res = await api.userPurchase(data.uuid,data.reqData)
            if(res && res.status==200){
                toastr.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
        
    },

    async getOrders({commit},code){
        try {
            commit('loading',null,{root:true})
            const res = await api.order(code)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                //commit('userPurchases',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getVendorProcessedOrders({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.vendorProcessedPurchases(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit('vendorProcessedOrders',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getUserPurchases({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.userPurchaseHistory(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit('userPurchases',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async pushStockistPurchase({commit},{uuid,data}){
        try {
            commit('loading',null,{root:true})
            const res = await api.stockistPurchase(uuid,data)
            if(res && res.status==200){
                toastr.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getStockistPurchases({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.stockistPurchaseHistory(uuid)
            if(res && res.status==200){
                toastr.success(res.data.message)
                commit("stockistPurchases",res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    //admin approves stock
    async approveStock({commit},purchaseId){
        try {
            commit('loading',null,{root:true})
            const res = await api.approveStock(purchaseId)
            if(res && res.status==200){
                toastr.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    //disapprove stock
    async disapproveStock({commit},purchaseId){
        try {
            commit('loading',null,{root:true})
            const res = await api.disapproveStock(purchaseId)
            if(res && res.status==200){
                toastr.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async vendorApprovePurchase({commit},purchaseId){
        try {
            commit('loading',null,{root:true})
            const res = await api.vendorApprovePurchase(purchaseId)
            if(res && res.status==200){
                toastr.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchStockDetails({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.stockDetails(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit("stockDetails",res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getPickupStats({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.pickupStats()
            if(res && res.status==200){
                toastr.success(res.data.message)
                commit("pickupStats",res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getSumTotalPrices({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.sumTotalPrices()
            if(res && res.status==200){
                toastr.success(res.data.message)
                //commit("pickupStats",res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getMonthlyRepurchases({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.monthlyRepurchases()
            if(res && res.status==200){
                toastr.success(res.data.message)
                commit("monthlyRepurchases",res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async approvePurchase({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.approveStock(id)
            if(res && res.status==200){
                toastr.success(res.data.message)
                //commit("monthlyRepurchases",res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async disapprovePurchase({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.disapproveStock(id)
            if(res && res.status==200){
                toastr.success(res.data.message)
                //commit("monthlyRepurchases",res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchStockPrevMonthSales({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.stockistPrevMonthSales(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit("stockistPrevMonthSales",res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },
}