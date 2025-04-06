import api from '../../api/bonuses'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
//import { notification } from '@/util/notification'

export default {

    async getTotalBonus({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalBonus(uuid)
            if(res && res.status==200){
                console.log('total-bonus',res.data)
                commit('totalBonus',res.data.bonus)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getWalletBalance({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.walletBalance(uuid)
            if(res && res.status==200){
                //console.log('total-bonus',res.data)
                commit('walletBalance',res.data.balance)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getWelcomeBonus({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.welcomeBonus(uuid)
            if(res && res.status==200){
                commit('welcomeBonus',res.data.bonus)
                //toastr.success("Package created successfully")
            }else{
                toastr.warning(res.data.message)
            }
        commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getEquilibrumBonus({commit},uuid){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.equilibrumBonus(uuid)
            if(res.status==200){
                commit('equilibrumBonus',res.data.bonus)
                //notification.success("Package updated successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getLoyaltyBonus({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.loyaltyBonus(uuid)
            if(res && res.status==200){
                commit('loyaltyBonus',res.data.bonus)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getReferralBonus({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.referralBonus(uuid)
            if(res && res.status==200){
                commit('referralBonus',res.data.bonus)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getProfitPool({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.profitPool(uuid)
            if(res && res.status==200){
                commit('profitPool',res.data.profit_pool)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getGlobalProfit({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.globalProfit(uuid)
            if(res && res.status==200){
                commit('globalProfit',res.data.bonus)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getPlacementBonus({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.placementBonus(uuid)
            if(res && res.status==200){
                commit('placementBonus',res.data.bonus)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getProfitPools({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.profitPools(uuid)
            if(res && res.status==200){
                commit('profitPools',res.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getGlobalProfits({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.globalProfits(uuid)
            if(res && res.status==200){
                commit('globalProfits',res.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalEquilibrumBonus({commit},type=null){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalEquilibrumBonus(type)
            if(res && res.status==200){
                type=='count' ? commit('countEquilibrumBonus',res.data.data)
                : commit('totalEquilibrumBonus',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalLoyaltyBonus({commit},type=null){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalLoyaltyBonus(type)
            if(res && res.status==200){
                type=='count' ? commit('countLoyaltyBonus',res.data.data)
                : commit('totalLoyaltyBonus',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalProfitPoolBonus({commit},type=null){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalProfitPoolBonus()
            if(res && res.status==200){
                type=='count' ? commit('countProfitPoolBonus',res.data.data)
                : commit('totalProfitPoolBonus',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalGlobalProfitBonus({commit},type=null){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalGlobalProfitBonus()
            if(res && res.status==200){
                type=='count' ? commit('countGlobalProfitBonus',res.data.data)
                : commit('totalGlobalProfitBonus',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getCompanyWalletBalance({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.companyWalletBalance()
            if(res && res.status==200){
                commit('companyWalletBalance',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalCompanyWallet({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalCompanyWallet()
            if(res && res.status==200){
                commit('totalCompanyWallet',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getBonusStats({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.bonusStats()
            if(res && res.status==200){
                commit('bonusStats',res.data.data)
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