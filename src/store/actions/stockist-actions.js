import api from '../../api/stockists'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
//import { notification } from '@/util/notification'

export default {

    async getStockists({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                toastr.success(res.data.message)
                commit('stockists',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async create({commit},data){
        try {
            commit('loading',null,{root:true})
            const res = await api.create(data)
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

    async update({commit},{id,data}){
        try {
            commit('loading',null,{root:true})
            const res = await api.update(id,data)
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

    async upgrade({commit},{id,data}){
        try {
            commit('loading',null,{root:true})
            const res = await api.upgrade(id,data)
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

    async fetchStockist({commit},id){
        try {
            commit('loading',null,{root:true})
            const res = await api.single(id)
            if(res && res.status==200){
                toastr.success(res.data.message)
                commit('stockist',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchStockistByUuid({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.userSingle(uuid)
            if(res && res.status==200){
                toastr.success(res.data.message)
                commit('stockist',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchPackageDifference({commit},newPackageId){
        try {
            commit('loading',null,{root:true})
            const res = await api.packageDifference(newPackageId)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                //commit('stockist',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchStock({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.stock(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                //commit('stockist',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchStats({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.stats(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                //commit('stockist',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchRebateEarnings({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.rebateEarnings(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit('rebateEarnings',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getStockistsStats({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.allStats()
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit('stockistsStats',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getStockistsOrders({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.productOrders()
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit('stockistsOrders',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getSalesStats({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.salesStats(uuid)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                //commit('stockistsOrders',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    }
}