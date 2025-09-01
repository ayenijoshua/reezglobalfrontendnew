import api from '@/api/payments'
import {notification} from '@/util/notification'
import { LogError } from '@/util/responseHandler'

export default{

    async initiate({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.initiate(data)
            if(res.status==200){
                //commit('walletAccount',res.data)
               //notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async initiatePayment({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.initiatePayment(data)
            if(res.status==200){
                //commit('walletAccount',res.data)
               //notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async verify({commit},data){
        try {
            commit('submitting',null,{root:true})
            //console.log(data)
            const res = await api.verify(data)
            if(res.status==200){
                //commit('transactionStore/addUserWalletTransaction',res.data.data,{root:true})
                res.data.success == true || res.data.success == 'true'
                ? notification.success(res.data.message)
                : notification.warning(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getWalletBalance({commit}){
        try {
            commit('loading',null,{root:true})
            
            const res = await api.walletBalance()
            if(res.status==200){
                commit('walletBalance',res.data.data)
            }else{
                notification.error(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async fetchBanks({commit}){
        try {
            commit('loading',null,{root:true})
            
            const res = await api.banks()
            if(res.status==200){
                //commit('banks',res.data.data)
            }else{
                notification.error(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async verifyBankDetails({commit},data){
        try {
            commit('submitting',null,{root:true})
            
            const res = await api.verifyBankDetails(data)
            if(res.status==200){
                //commit('banks',res.data.data)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getUserPackagePayments({commit},uuid){
        try {
            commit('loading',null,{root:true})
            
            const res = await api.userHistory(uuid)
            if(res.status==200){
                //commit('banks',res.data.data)
            }else{
                notification.error(res.data.message)
            }
            commit('loading',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loading')
        }
    },

    async getStockistPackagePayment({commit},stockistId){
        try {
            commit('loading',null,{root:true})
            
            const res = await api.stockistHistory(stockistId)
            if(res.status==200){
                //commit('banks',res.data.data)
            }else{
                notification.error(res.data.message)
            }
            commit('loading',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loading')
        }
    },

    async makePayment({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            
            const res = await api.bankTransfer(uuid,data)
            if(res.status==200){
                notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async approvePackagePayment({commit},id){
        try {
            commit('submitting',null,{root:true})
            
            const res = await api.approvePackagePaymentReceipt(id)
            if(res.status==200){
                notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async disapprovePackagePayment({commit},id){
        try {
            commit('submitting',null,{root:true})
            
            const res = await api.disapprovePackagePaymentReceipt(id)
            if(res.status==200){
                notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async viewPackagePayment({commit},id){
        try {
            commit('submitting',null,{root:true})
            
            const res = await api.viewPackagePaymentReceipt(id)
            if(res.status==200){
                notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getPendingPackagePaymentApprovals({commit},count=false){
        try {
            commit('submitting',null,{root:true})
            
            const res = await api.pendingPackagePaymentApprovals(count)
            if(res.status==200){
                notification.success(res.data.message)
                if(count == true){
                    commit('pendingPackagePaymentApprovalsCount',res.data.data)
                }else{
                    commit('pendingPackagePaymentApprovals',res.data.data.data)
                }
                
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getPackagePaymentHistory({commit},count=false){
        try {
            commit('submitting',null,{root:true})
            
            const res = await api.packagePaymentHistory(count)
            if(res.status==200){
                notification.success(res.data.message)
                if(count==true){
                    commit('packagePaymentHistoryCount',res.data.data)
                }else{
                    commit('packagePaymentHistory',res.data.data.data)
                }
                
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },
}
