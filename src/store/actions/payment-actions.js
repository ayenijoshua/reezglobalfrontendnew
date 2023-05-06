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

    async verify({commit},data){
        try {
            commit('submitting',null,{root:true})
            console.log(data)
            const res = await api.verify(data)
            if(res.status==200){
                commit('transactionStore/addUserWalletTransaction',res.data.data,{root:true})
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
}
