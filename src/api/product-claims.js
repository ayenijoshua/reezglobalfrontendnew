import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(`${endPoints.productClaims}/all`)
    },

    create(uuid,data){
        return http().post(`${endPoints.productClaims}/${uuid}/create`,data)
    },

    approve(uuid){
        return http().put(`${endPoints.productClaims}/${uuid}/approve`)
    },

    decline(uuid){
        return http().put(`${endPoints.productClaims}/${uuid}/decline`)
    },

    claims(uuid,processing){
        return http().get(`${endPoints.productClaims}/${uuid}/claims?processing=${processing}`);
    },

    totalProductSold(){
        return http().get(`${endPoints.productClaims}/total-product-sold`);
    },

    totalProductPV(){
        return http().get(`${endPoints.productClaims}/total-product-sold`);
    },

    sumClaimedProducts(){
        return http().get(`${endPoints.productClaims}/sum-claimed-products`);
    },
}