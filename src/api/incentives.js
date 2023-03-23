import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.incentives}/all`)
    },

    create(data){
        return http().post(`${endPoints.incentives}/create`,data)
    },

    update(id,data){
        return http().post(`${endPoints.incentives}/${id}/update`,data)
    },

    single(id){
        return http().get(`${endPoints.incentives}/${id}`)
    }
}