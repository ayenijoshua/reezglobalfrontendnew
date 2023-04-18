import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    update(data){
        return http().put(`${endPoints.settings}/update`,data)
    },

    updateReferralBonus(id,data){
        return http().put(`${endPoints.settings}/update-referral-bonus/${id}`,data)
    },

    referralBonusSettings(){
        return http().get(`${endPoints.settings}/referral-bonus`)
    },

    all(){
        return http().get(`${endPoints.settings}/all`)
    },

    setting(column){
        return http().get(`${endPoints.settings}/${column}`)
    },

}