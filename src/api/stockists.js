import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.stockists}/all`)
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

    productOrders(){
        return http().get(`${endPoints.stockists}/product-orders`)
    },

    salesStats(uuid){
        return http().get(`${endPoints.stockists}/${uuid}/sales-stats`)
    }



}