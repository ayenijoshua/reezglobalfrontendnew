import api from '@/api/users'
import {notification} from '@/util/notification'
import { LogError,processResponse } from '@/util/responseHandler'

export default {

    async getUsers({commit},page=null){
        try {
            //alert()
            commit('loading',null,{root:true})
            const res = await api.users(page)
            if(res.status==200){
                commit('users',res.data.data.data)

                commit('userAction','userStore/getUsers')
                commit('userState',res.data.data.data)
                commit('usersCurrentPage',res.data.data.current_page)
                commit('usersLastPage',res.data.data.last_page)
                commit('usersPerPage',res.data.data.per_page)
                commit('usersTotalPages',res.data.data.total)
            }else{
                notification.error(res.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getUser({commit},uuid){
        try {
            //alert()
            commit('loading',null,{root:true})
            const res = await api.user(uuid)
            
            if(res.status==200){
                commit('user',res.data.data)
            }else{
                notification.error(res.message)
            }
            commit('loaded',null,{root:true})
            return res
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
            //processResponse(commit,res,'user','user updated successfully')
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
            notification.success("Bank details updated successfully")
            //console.log(res.data)
            //processResponse(null,null,null,'Bank details updated successfully')
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

    async getDownlines({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.downlines(uuid)
            commit('downlines',res.data.data)
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getDirectDownlines({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.directDownlines(uuid)
            commit('directDownlines',res.data.data)
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getGenealogy({commit},uuid){
        try {
            commit('loading',null,{root:true})
            const res = await api.genealogy(uuid)
            commit('genealogy',res.data.data)
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async inviteGuest({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.inviteGuest(uuid,data)
            if(res.status == 200){
                notification.success("Friend invited successfully");
            }
            
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getTotalRegistrations({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalRegistrations()
            if(res.status == 200){
                commit('totalRegistrations',res.data.data)
                //notification.success("Friend invited successfully");
            }
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalRegistrationPV({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalRegistrationPV()
            if(res.status == 200){
                commit('totalRegistrationPV',res.data.data)
                //notification.success("Friend invited successfully");
            }
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async sendMessage({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.sendMessage(uuid,data)
            if(res.status == 200){
                notification.success("Message Sent successfully");
            }
            
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async toggle2FA({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.toggle2FA(uuid,data)
            if(res.status == 200){
                data.enable_2fa 
                ? notification.success("2FA enabled successfully")
                : notification.success("2FA disabled successfully");
            }
            
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async setBankEditable({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.setBankEditable(uuid,data)
            if(res.status == 200){
                data.bank_editable
                ? notification.success("Bank editable enabled successfully")
                : notification.success("Bank editable disabled successfully");
            }
            
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getPaidUsers({commit},page=null){
        try {
            commit('loading',null,{root:true})
            const res = await api.paidUsers(page)
            if(res.status == 200){
                commit('paidUsers',res.data.data.data)

                commit('paidUserAction','userStore/getPaidUsers')
                commit('paidUsersCurrentPage',res.data.data.current_page)
                commit('paidUsersLastPage',res.data.data.last_page)
                commit('paidUsersPerPage',res.data.data.per_page)
                commit('paidUsersTotalPages',res.data.data.total)
            }
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalPaidUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalPaidUsers()
            if(res.status == 200){
                commit('totalPaidUsers',res.data.data)
            }
            
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getSumPaidUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.sumPaidUsers()
            if(res.status == 200){
                commit('sumPaidUsers',res.data.data)
            }
            
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