import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.incentiveClaims}/all`)
    },

    create(uuid,data){
        return http().post(`${endPoints.incentiveClaims}/${uuid}/create`,data)
    },

    approve(id){
        return http().put(`${endPoints.incentiveClaims}/${id}/approve`)
    },

    decline(id){
        return http().put(`${endPoints.incentiveClaims}/${id}/decline`)
    },

    claims(uuid){
        return http().get(`${endPoints.incentiveClaims}/${uuid}/claims`);
    },

    currentIncentive(uuid){
        return http().get(`${endPoints.incentiveClaims}/${uuid}/current-incentive`);
    }
}