import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.banks}/all`)
    },

    create(data){
        return http().post(`${endPoints.banks}/create`,data)
    },

    update(id,data){
        return http().put(`${endPoints.banks}/${id}/update`,data)
    },

    single(id){
        return http().get(`${endPoints.banks}/${id}/single`)
    },

    delete(id){
        return http().delete(`${endPoints.banks}/${id}/delete`)
    }
}