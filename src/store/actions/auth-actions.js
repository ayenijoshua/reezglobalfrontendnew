import api from '../../api/auth'
import toastr from 'toastr'
import vm from '../../main'
import store from '../index'
import { LogError } from '@/util/responseHandler'

export default {

    async login({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.login(data)
            if(res && res.status==200){
                if(res.data.data.email_verified_at == null){
                    vm.$router.push({name:'user-email-confirmation',query:{email:data.username}})
                    commit('submitted',null,{root:true})
                    return
                }

                if(res.data.data.enable_2fa == true){
                    vm.$router.push({name:'user-two-factor-auth',query:{email:data.username}})
                    commit('submitted',null,{root:true})
                    return
                }

                commit('authUser',res.data.data)

                if(res.data.data.payment == 'approved'){
                    vm.$router.push({name:'user-dashboard'})
                }else{
                    vm.$router.push({name:'welcome'})
                }
                //res.data.token = res.data.data.access_token
                //console.log('token',res.data.data.headers)
                
                
            }else{
                toastr.warning(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async adminLogin({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.adminLogin(data)
            if(res && res.status==200){
                res.data.token = res.data.data.access_token
                res.data.isAdmin = true

                if(res.data.data.enable_2fa == true){
                    vm.$router.push({name:'admin-two-factor-auth',query:{email:data.email}})
                    commit('submitted',null,{root:true})
                    return
                }

                commit('authUser',res.data.data)
                vm.$router.push({name:'admin-dashboard'})
            }else{
                toastr.warning(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async sendTwoFactorAuthMail({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.send2faVerificatioEmail(data)
            if(res && res.status==200){
                toastr.success(res.data.message)
            }else{
                toastr.warning(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async twoFactorAuth({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.twoFactorAuth(data)
            if(res && res.status==200){
                res.data.token = res.data.data.access_token
                //res.data.isAdmin = true
                commit('authUser',res.data.data)
                if(res.data.data.is_admin){
                    //res.data.isAdmin = true
                    vm.$router.push({name:'admin-dashboard'})
                }else{
                    vm.$router.push({name:'user-dashboard'})
                }
                
            }else{
                toastr.warning(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async register({commit},data){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.register(data)
            if(res.status==200){
                toastr.success("Account created successfully, and a confirmation code has been send to your mail")
                vm.$router.push({name:'user-email-confirmation',query:{'email':data.email}})
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async emailConfirmation({commit},data){
        try {
            commit('submitting',null,{root:true})
            var res = await api.emailConfirmation(data)
            if(res.status == 200){
                toastr.success("Email confirmed successfully, plase login to continue")
                vm.$router.push({name:'user-login'})
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async resendEmailConfirmation({commit},data){
        try {
            commit('submitting',null,{root:true})
            var res = await api.resendEmailConfirmationCode(data)
            if(res.status == 200){
                toastr.success("Email confirmed code resent successfully")
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async logOut({commit}){
        try {
            commit('submitting',null,{root:true})
            let authUser = store.getters['authStore/authUser']
            //console.log(authUser)
            if(authUser.is_admin){
                vm.$router.push({name:'admin-login'})
            }else{
                vm.$router.push({name:'user-login'})
            }
            //store.commit('authStore/authUser',null)
            commit('loggedOut')
            commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getUser({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.user()
            console.log(res)
            commit('authUserReset',res.data)
            commit('loaded',null,{root:true})
            //alert(res.data._id)
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getAdmin({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.admin()
            console.log(res)
            commit('authUserReset',res.data)
            commit('loaded',null,{root:true})
            //alert(res.data._id)
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async resetPasswordLink({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.resetPasswordLink(data)
            if(res && res.status==200){
                toastr.success('Reset password code has been sent to your email address')
                data.user_type == 'user' 
                ? vm.$router.push({name:'user-password-reset',query:{'email':data.email}})
                : vm.$router.push({name:'admin-password-reset',query:{'email':data.email}})
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async changePasswordLink({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.changePasswordLink(data)
            if(res && res.status==200){
                toastr.success('Change password code has been sent to your email address')
            }else{
                toastr.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async resetPassword({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.resetPassword(data)
            if(res && res.status==200){
                toastr.success('password has been reset successfully, please login to continue')
                data.user_type == 'user' ? vm.$router.push({name:'user-login'}) : vm.$router.push({name:'admin-login'})
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async changePassword({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.changePassword(data)
            if(res && res.status==200){
                toastr.success('password has been changed successfully')
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async changeUserPassword({commit},{uuid,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.changeUserPassword(uuid,data)
            if(res && res.status==200){
                toastr.success('user password has been changed successfully')
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async toggleAdmin2fa({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.toggleAdmin2fa(data)
            if(res && res.status==200){
                toastr.success('2fa toggled successfully')
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async send2faVerificationCode({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.send2faVerificatioEmail(data)
            if(res && res.status==200){
                toastr.success('2fa toggled successfully')
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },


}

// const LogError = (commit,err,commitType)=>{
//     console.log(err)
//     if(err.response !== undefined){
//         let {response} = err
//         //console.log(err.response)
//         response.status==422 || response.status==400 ? toastr.warning(response.data.message) : toastr.warning('An error occred')
//     }else{
//         console.log(err)
//         toastr.warning("Response not found")
//     }
//     commit(commitType,null,{root:true})
// }