import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.stockistPackage}/all`)
    },

    single(id){
        return http().get(`${endPoints.stockistPackage}/${id}/single`)
    },

    // create(data){
    //     return http().post(`${endPoints.stockists}/create`,data)
    // },

    update(id,data){
        return http().put(`${endPoints.stockistPackage}/${id}/update`,data)
    }
}