import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.ranks}/all`)
    },

    create(data){
        return http().post(`${endPoints.ranks}/create`,data)
    },

    update(id,data){
        return http().put(`${endPoints.ranks}/${id}/update`,data)
    },

    single(id){
        return http().get(`${endPoints.ranks}/${id}`)
    },

    currentRankBadge(id){
        return http().get(`${endPoints.ranks}/current-rank-badge/${id}`)
    }
}