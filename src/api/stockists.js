import endPoints from "./endpoints"
import {http} from './axios-config'
import endpoints from "./endpoints"

export default {

    all(page){
        return http().get(`${endPoints.stockists}/all?page=${page}`)
    },

    single(id){
        return http().get(`${endPoints.stockists}/${id}/single`)
    },

    //fetch with user uuid
    userSingle(uuid){
        return http().get(`${endPoints.stockists}/user/${uuid}/single`)
    },

    create(data){
        return http().post(`${endPoints.stockists}/create`,data)
    },

    update(id,data){
        return http().put(`${endPoints.stockists}/${id}/update`,data)
    },

    upgrade(id,data){
        return http().post(`${endPoints.stockists}/${id}/upgrade`,data)
    },

    packageDifference(newPackageId){
        return http().get(`${endPoints.stockists}/package/${newPackageId}/difference`)
    },

    stats(uuid){
        return http().get(`${endPoints.stockists}/${uuid}/stats`)
    },

    stock(uuid){
        return http().get(`${endPoints.stockists}/${uuid}/stock`)
    },

    rebateEarnings(uuid){
        return http().get(`${endPoints.stockists}/${uuid}/rebate-earnings`)
    },

    allStats(){
        return http().get(`${endPoints.stockists}/stats`)
    },

    productOrders(page){
        return http().get(`${endPoints.stockists}/product-orders?page=${page}`)
    },

    salesStats(uuid){
        return http().get(`${endPoints.stockists}/${uuid}/sales-stats`)
    },

    approveStockist(id){
        return http().patch(`${endpoints.stockists}/${id}/approve-registration`)
    },

    disapproveStockist(id){
        return http().patch(`${endpoints.stockists}/${id}/disapprove-registration`)
    },

    searchStockist(search,page){
        return http().get(`${endpoints.stockists}/search?page=${page}&search=${search}`)
    },

    upgrades(page){
        return http().get(`${endpoints.stockists}/upgrades?page=${page}`)
    },

    approveUpgrade(id){
        return http().patch(`${endpoints.stockists}/${id}/approve-upgrade`)
    },

    disapproveUpgrade(id){
        return http().patch(`${endpoints.stockists}/${id}/disapprove-upgrade`)
    }



}