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

    globalProfits(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/global-profits`)
    },
    
    totalBonus(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/total-bonus`)
    },

    walletBalance(uuid){
        return http().get(`${endPoints.bonuses}/${uuid}/wallet-balance`)
    },

    totalEquilibrumBonus(type=null){
        return http().get(`${endPoints.bonuses}/total-equilibrum-bonus?type=${type}`)
    },

    totalProfitPoolBonus(type=null){
        return http().get(`${endPoints.bonuses}/total-profit-pool-bonus?type=${type}`)
    },

    totalLoyaltyBonus(type=null){
        return http().get(`${endPoints.bonuses}/total-loyalty-bonus?type=${type}`)
    },

    totalGlobalProfitBonus(type=null){
        return http().get(`${endPoints.bonuses}/total-global-profit-bonus?type=${type}`)
    },

    companyWalletBalance(){
        return http().get(`${endPoints.bonuses}/company-wallet-balance`);
    },

    totalCompanyWallet(){
        return http().get(`${endPoints.bonuses}/total-company-wallet`);
    }

    
}