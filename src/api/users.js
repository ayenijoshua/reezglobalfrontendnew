import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    users(){
        return http().get(`${endPoints.users}`)
    },

    user(uuid){
        return http().get(`${endPoints.users}/${uuid}/user`)
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
    },

    downlines(uuid){
        return http().get(`${endPoints.users}/${uuid}/downlines`)
    },

    directDownlines(uuid){
        return http().get(`${endPoints.users}/${uuid}/direct-downlines`)
    },

    genealogy(uuid){
        return http().get(`${endPoints.users}/${uuid}/genealogy`)
    },

    inviteGuest(uuid,data){
        return http().post(`${endPoints.users}/${uuid}/invite-guest`,data)
    },

    totalRegistrations(){
        return http().get(`${endPoints.users}/total-registrations`)
    },

    totalRegistrationPV(){
        return http().get(`${endPoints.users}/total-registration-pv`)
    },

    sendMessage(uuid,data){
        return http().post(`${endPoints.users}/${uuid}/send-message`,data)
    },

    toggle2FA(uuid,data){
        return http().put(`${endPoints.users}/${uuid}/toggle-2fa`,data)
    },

    setBankEditable(uuid,data){
        return http().put(`${endPoints.users}/${uuid}/bank-editable`,data)
    },

    paidUsers(){
        return http().get(`${endPoints.users}/paid-users`)
    },

    totalPaidUsers(){
        return http().get(`${endPoints.users}/total-paid-users`)
    },

    sumPaidUsers(){
        return http().get(`${endPoints.users}/sum-paid-users`)
    }
}