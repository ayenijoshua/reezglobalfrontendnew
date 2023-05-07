import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.products}/all`)
    },

    create(data){
        return http().post(`${endPoints.products}/create`,data)
    },

    update(id,data){
        return http().put(`${endPoints.products}/${id}/update`,data)
    },

    single(id){
        return http().get(`${endPoints.products}/${id}`)
    },

    toggleStatus(id,data){
        return http().put(`${endPoints.products}/${id}/toggle-status`,data)
    },

    activeProducts(){
        return http().get(`${endPoints.products}/active`)
    }
}