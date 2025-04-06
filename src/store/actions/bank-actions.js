import api from '../../api/banks'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
import { notification } from '@/util/notification'

export default {

    async getBanks({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                console.log(res.data.data)
                commit('banks',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async createBank({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            if(res && res.status==200){
                toastr.success("Bank created successfully")
            }else{
                toastr.warning(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async updateBank({commit},{id,data}){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.update(id,data)
            if(res.status==200){
                notification.success("Bank updated successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async getBank({commit},id){
        try {
            commit('loading',null,{root:true})
            const res = await api.single(id)
            if(res && res.status==200){
                //console.log(res.data.data.data)
                commit('bank',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async deleteBank({commit},id){
        try {
            commit('loading',null,{root:true})
            const res = await api.delete(id)
            if(res && res.status==200){
                toastr.warning(res.data.message)
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