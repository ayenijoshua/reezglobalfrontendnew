import api from '../../api/incentive-claims'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
import { notification } from '@/util/notification'

export default {

    async all({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                commit('incentiveClaims',res.data.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async create({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(uuid,data)
            if(res && res.status==200){
                toastr.success("incentive claimed successfully")
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
                notification.success("Incentive approved successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
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
                notification.success("Incentive declined successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async getClaims({commit},uuid){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.claims(uuid)
            if(res.status==200){
                //notification.success("Incentive approved successfully")
                commit('claims',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },

    async getCurrentIncentive({commit},uuid){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.currentIncentive(uuid)
            if(res.status==200){
                //notification.success("Incentive approved successfully")
                commit('currentIncentive',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },
}