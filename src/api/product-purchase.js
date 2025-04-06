import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    userPurchase(uuid,data){
        return http().post(`${endPoints.productPurchases}/user/${uuid}`,data)
    },

    userPurchaseHistory(uuid){
        return http().get(`${endPoints.productPurchases}/user/${uuid}/history`)
    },

    stockistPurchase(uuid,data){
        return http().post(`${endPoints.productPurchases}/stockist/${uuid}`,data)
    },

    stockistPurchaseHistory(uuid){
        return http().get(`${endPoints.productPurchases}/stockist/${uuid}/history`)
    },

    orderDetails(purchaseId){
        return http().get(`${endPoints.productPurchases}/${purchaseId}/order-details`)
    },

    order(orderCode){
        return http().get(`${endPoints.productPurchases}/fetch-order/${orderCode}`)
    },

    approveStock(purchaseId){
        return http().patch(`${endPoints.productPurchases}/${purchaseId}/approve-stock`)
    },

    disapproveStock(purchaseId){
        return http().patch(`${endPoints.productPurchases}/${purchaseId}/disapprove-stock`)
    },

    vendorApprovePurchase(purchaseId){
        return http().patch(`${endPoints.productPurchases}/${purchaseId}/vendor-approve`)
    },

    vendorProcessedPurchases(uuid){
        return http().get(`${endPoints.productPurchases}/vendor/${uuid}/processed-orders`)
    },

    stockDetails(uuid){
        return http().get(`${endPoints.productPurchases}/${uuid}/stock-details`)
    },

    pickupStats(){
        return http().get(`${endPoints.productPurchases}/pickup-stats`)
    },

    sumTotalPrices(){
        return http().get(`${endPoints.productPurchases}/sum-prices`)
    },

    monthlyRepurchases(){
        return http().get(`${endPoints.productPurchases}/monthly-repurchases`)
    }
}