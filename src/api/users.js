import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    users(){
        return http().get(`${endPoints.users}`)
    },

    updateUser(uuid,data){
        return http().put(`${endPoints.users}/${uuid}/update`,data)
    },

    createProfile(data){
        return http().post(`${endPoints.users}/create-profile`,data)
    },

    updateProfile(uuid,data){
        return http().post(`${endPoints.users}/${uuid}/update-profile`,data)
    },

    updateBankDetails(uuid,data){
        return http().put(`${endPoints.users}/${uuid}/update-bank-details`,data)
    },

    profileDetails(uuid){
        return http().get(`${endPoints.users}/${uuid}/profile`)
    },

    // states(country){
    //     return http().get(`${endPoints.users}/states?country_code=${country}`)
    // },

    // countries(){
    //     return http().get(`${endPoints.users}/countries`)
    // },

    // identityTypes(country_code){
    //     return http().get(`${endPoints.users}/identity-types?country_code=${country_code}`)
    // },

    //-----------------------admin---------------------------------//

    //admin get uer profile details
    userProfileDetails(owner_uuid){
        return http().get(`${endPoints.users}/${owner_uuid}/profile-details`)
    },

    //admin get total users
    totalUsers(){
        return http().get(`${endPoints.users}/total-users`)
    },

    activeUsers(){
        return http().get(`${endPoints.users}/active-users`)
    },

    totalActiveUsers(){
        return http().get(`${endPoints.users}/total-active-users`)
    },

    totalPVs(uuid){
        return http().get(`${endPoints.users}/${uuid}/total-pv`)
    },

    uplineDetails(uuid){
        return http().get(`${endPoints.users}/${uuid}/upline-details`)
    }
}