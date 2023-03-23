import api from '@/api/users'
import {notification} from '@/util/notification'
import { LogError,processResponse } from '@/util/responseHandler'

export default {

    async getUsers({commit}){
        try {
            //alert()
            commit('loading',null,{root:true})
            const res = await api.users()
            
            if(res.status==200){
                
                commit('users',res.data.data.data)
            }else{
                notification.error(res.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getActiveUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.activeUsers()
            if(res.status==200){
                commit('activeUsers',res.data.data.data)
            }else{
                notification.error(res.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalUsers()
            commit('totalUsers',res.data.data)
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalActiveUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalActiveUsers()
            commit('totalActiveUsers',res.data.data)
            //processResponse(commit,res,'totalActiveUsers')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded') 
        }
    },

    async create({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            processResponse(commit,res,'user','storeUser created successfully')
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async updateUser({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.updateUser(uuid,data)
            processResponse(commit,res,'user','user updated successfully')
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async delete({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.delete(id)
            processResponse(commit,res,'submitted',"User deleted successfully")
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async createProfile({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.createProfile(data)
            //commit('profile',res.data.data)
            //alert(res.data._id)
            processResponse(commit,res,'profile','Profile created successfully')
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async updateProfile({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.updateProfile(uuid,data)
            //commit('profile',res.data)
            //alert(res.data._id)
            console.log(res.data)
            processResponse(commit,res,'profile','Profile updated successfully')
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async updateBankDetails({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.updateBankDetails(uuid,data)
            console.log(res.data)
            processResponse(commit,res,'profile','Bank details updated successfully')
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getProfileDetails({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.profileDetails(uuid)
            commit('profile',res.data.data)
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getUserProfileDetails({commit},id){
        try {
            commit('loading',null,{root:true})
            const res = await api.userProfileDetails(id)
            commit('profile',res.data.data)
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalPVs({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalPVs(uuid)
            commit('totalPV',res.data.total_pv)
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getUplineDetails({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.uplineDetails(uuid)
            commit('uplineDetails',res.data.data)
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },



    // async getStates({commit},country){
    //     try {
    //         commit('loading',null,{root:true})
    //         const res = await api.states(country)
            
    //         commit('loaded',null,{root:true})
    //         return res
    //     } catch (error) {
    //         LogError(commit,error,'loaded')
    //     }
    // },

    // async getCountries({commit}){
    //     try {
    //         commit('loading',null,{root:true})
    //         const res = await api.countries()
            
    //         commit('loaded',null,{root:true})
    //         return res
    //     } catch (error) {
    //         LogError(commit,error,'loaded')
    //     }
    // },

    // async getIdentityTypes({commit},country_code){
    //     try {
    //         commit('loading',null,{root:true})
    //         const res = await api.identityTypes(country_code)
            
    //         commit('loaded',null,{root:true})
    //         return res
    //     } catch (error) {
    //         LogError(commit,error,'loaded')
    //     }
    // },

    //-------------identity------------//

    



    

}