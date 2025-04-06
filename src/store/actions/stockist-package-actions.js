import api from '../../api/stockist-package'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
//import { notification } from '@/util/notification'

export default {

    async getPackages({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                toastr.success(res.data.message)
                commit('stockistPackages',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async update({commit},data){
        try {
            commit('loading',null,{root:true})
            const res = await api.update(data.id,data.data)
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

    //admin approves stock
    async single({commit},id){
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
    }
}