import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.packages}/all`)
    },

    create(data){
        return http().post(`${endPoints.packages}/create`,data)
    },

    update(id,data){
        return http().put(`${endPoints.packages}/${id}/update`,data)
    },

    single(id){
        return http().get(`${endPoints.packages}/${id}`)
    }
}