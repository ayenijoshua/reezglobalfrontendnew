import endPoints from "./endpoints"
import {http} from './axios-config'
import endpoints from "./endpoints"

export default {

    initiate(data){
        return http().post(`${endPoints.payments}/initiate`,data)
    },

    initiatePayment(data){
        return http().post(`${endPoints.payments}/initiate-payment`,data)
    },

    verify(data){
        return http().post(`${endPoints.payments}/verify`,data)
    },

    walletBalance(){
        return http().get(`${endPoints.payments}/provider-wallet-balance`)
    },

    banks(){
        return http().get(`${endPoints.payments}/banks`)
    },

    verifyBankDetails(data){
        return http().post(`${endPoints.payments}/verify-bank-details`,data)
    },

    userHistory(uuid){
        return http().get(`${endPoints.payments}/${uuid}/user-upgrade-history`)
    },

    stockistHistory(stockistId){
        return http().get(`${endPoints.payments}/${stockistId}/stockist-upgrade-history`)
    },

    bankTransfer(uuid,data){
        return http().post(`${endpoints.payments}/${uuid}/bank-transfer`,data)
    }
}