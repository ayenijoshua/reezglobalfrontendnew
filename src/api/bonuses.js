import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    welcomeBonus(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/welcome-bonus`)
    },

    referralBonus(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/referral-bonus`)
    },

    placementBonus(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/placement-bonus`)
    },

    equilibrumBonus(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/equilibrum-bonus`)
    },

    loyaltyBonus(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/loyalty-bonus`)
    },

    profitPool(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/profit-pool`)
    },
    
    profitPools(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/profit-pools`)
    },

    globalProfit(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/global-profit`)
    },
    
    totalBonus(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/total-bonus`)
    }
}