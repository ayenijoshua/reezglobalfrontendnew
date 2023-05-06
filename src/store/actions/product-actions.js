import api from '../../api/products'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
import { notification } from '@/util/notification'

export default {

    async getProducts({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                commit('products',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async createProduct({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            if(res && res.status==200){
                toastr.success("Product created successfully")
            }else{
                toastr.warning(res.data.message)
            }
        commit('submitted',null,{root:true})
        return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async updateProduct({commit},{id,data}){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.update(id,data)
            if(res.status==200){
                notification.success("Product updated successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async toggleStatus({commit,dispatch},{id,data}){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.toggleStatus(id,data)
            if(res.status==200){
                data.is_active 
                ? notification.success("Product enabled successfully")
                : notification.success("Product disabled successfully")
                dispatch('getProducts')
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },
}