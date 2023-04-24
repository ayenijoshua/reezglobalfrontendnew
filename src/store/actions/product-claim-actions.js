import api from '../../api/product-claims'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
import { notification } from '@/util/notification'

export default {

    async all({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                commit('productClaims',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res;
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async claimProduct({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(uuid,data)
            if(res && res.status==200){
                commit('userProductClaims',res.data.data)
                toastr.success("Product claimed successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async approve({commit},id){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.approve(id)
            if(res.status==200){
                notification.success("Product approved successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async decline({commit},id){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.decline(id)
            if(res.status==200){
                notification.success("Product declined successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async getProductClaims({commit},uuid){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.claims(uuid)
            if(res.status==200){
                //notification.success("Incentive approved successfully")
                commit('userProductClaims',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getTotalProductSold({commit},uuid){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.totalProductSold(uuid)
            if(res.status==200){
                //notification.success("Incentive approved successfully")
                commit('totalProductSold',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getTotalProductPV({commit}){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.totalProductPV()
            if(res.status==200){
                //notification.success("Incentive approved successfully")
                commit('totalProductPV',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getSumClaimedProducts({commit}){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.sumClaimedProducts()
            if(res.status==200){
                commit('sumClaimedProducts',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },
}