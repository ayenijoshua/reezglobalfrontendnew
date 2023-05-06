import api from '../../api/withdrawals'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
import { notification } from '@/util/notification'

export default {

    async all({commit},page=null){
        try {
            commit('loading',null,{root:true})
            const res = await api.all(page)
            if(res && res.status==200){
                commit('withdrawals',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async searchWithdrawals({commit},{query,page=null}){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.search(query,page)
            if(res.status==200){
                commit('withdrawals',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getDetails({commit},id){
        try {
            commit('loading',null,{root:true})
            const res = await api.details(id)
            if(res && res.status==200){
                commit('withdrawal',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async initiate({commit},{uuid,data}){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.initiate(uuid,data)
            if(res.status==200){
                notification.success("Withdrawal Request successful")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async getTotal({commit}){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.total()
            if(res.status==200){
                commit('totalWithdrawals',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getUserTotal({commit},uuid){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.userTotal(uuid)
            if(res.status==200){
                commit('userTotalWithdrawals',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getUserHistory({commit},uuid){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.userHistory(uuid)
            if(res.status==200){
                commit('userWithdrawals',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    
}