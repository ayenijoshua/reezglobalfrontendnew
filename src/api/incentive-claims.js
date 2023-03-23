import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.incentiveClaims}/all`)
    },

    create(data){
        return http().post(`${endPoints.incentiveClaims}/create`,data)
    },

    approve(id){
        return http().put(`${endPoints.incentiveClaims}/${id}/approve`)
    },

    decline(id){
        return http().put(`${endPoints.incentiveClaims}/${id}/decline`)
    },

    claims(uuid){
        return http().get(`${endPoints.incentiveClaims}/${uuid}/claims`);
    }
}