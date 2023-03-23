import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    initiate(uuid,data){
        return http().post(`${endPoints.withdrawals}/${uuid}/initiate`,data)
    },

    all(){
        return http().get(`${endPoints.withdrawals}/all`)
    },

    userHistory(uuid){
        return http().get(`${endPoints.withdrawals}/${uuid}/user-history`)
    },

    userTotal(uuid){
        return http().get(`${endPoints.withdrawals}/${uuid}/user-total`)
    },

    total(){
        return http().get(`${endPoints.withdrawals}/total`)
    },

    details(id){
        return http().get(`${endPoints.withdrawals}/${id}/details`)
    }
}