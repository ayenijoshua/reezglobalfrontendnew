import api from '../../api/settings'
import toastr from 'toastr'
import { LogError } from '@/util/responseHandler'
import { notification } from '@/util/notification'

export default {

    async all({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                commit('settings',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getSetting({commit},column){
        try {
            commit('loading',null,{root:true})
            const res = await api.setting(column)
            if(res && res.status==200){
                //console.log('set',res.data.data)
                commit('setting',res.data.data)
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async update({commit},{id,data}){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.update(id,data)
            if(res.status==200){
                notification.success("Setting updated successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async updateReferralBonus({commit},{id,data}){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.updateReferralBonus(id,data)
            if(res.status==200){
                notification.success("Setting updated successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },
}