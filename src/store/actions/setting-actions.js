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
            return res
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

    async update({commit},data){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.update(data)
            if(res.status==200){
                if(data.show_front_page_message !== undefined){
                    data.show_front_page_message 
                    ? notification.success("Front Page Notification Enabled")
                    : notification.success("Front Page Notification Disabled")
                }else{
                    notification.success("data updated successfully")
                }
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
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
            return res;
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async getReferralBonusSetting({commit}){
        var res;
        try {
            commit('loading',null,{root:true})
            res = await api.referralBonusSettings()
            if(res.status==200){
                commit('referralBonusSetting',res.data.data)
                //notification.success("Setting updated successfully")
            }else{
                toastr.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res;
        } catch (err) {
            LogError(commit,err,'loaded')
        }
    },
}