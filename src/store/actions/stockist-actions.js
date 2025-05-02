import api from '../../api/stockists'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
import { notification } from '@/util/notification'
//import { notification } from '@/util/notification'

export default {

    async getStockists({commit},{page=null}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all(page)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit('stockists',res.data.data.data)

                commit('stockistsAction','stockistsStore/getStockists')
                commit('stockistsState',res.data.data.data)
                commit('stockistsCurrentPage',res.data.data.current_page)
                commit('stockistsLastPage',res.data.data.last_page)
                commit('stockistsPerPage',res.data.data.per_page)
                commit('stockistsTotalPages',res.data.data.total)
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
            alert()
            commit('loading',null,{root:true})
            const res = await api.update(id,data)
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
                //toastr.success(res.data.message)
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
                //toastr.success(res.data.message)
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

    async getStockistsOrders({commit},{page=null}){
        try {
            commit('loading',null,{root:true})
            const res = await api.productOrders(page)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                commit('stockistsOrders',res.data.data.data)

                commit('stockistsOrdersAction','stockistStore/getStockistsOrders')
                commit('stockistsOrdersState',res.data.data.data)
                commit('stockistsOrdersCurrentPage',res.data.data.current_page)
                commit('stockistsOrdersLastPage',res.data.data.last_page)
                commit('stockistsOrdersPerPage',res.data.data.per_page)
                commit('stockistsOrdersTotalPages',res.data.data.total)
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
    },

    async approveStockist({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.approveStockist(id)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                //commit('stockistsOrders',res.data.data.data)
                notification.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async disapproveStockist({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.disapproveStockist(id)
            if(res && res.status==200){
                //toastr.success(res.data.message)
                notification.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    }
}