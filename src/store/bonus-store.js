import actions from '../store/actions/bonus-actions'
import getters from '../store/getters/bonus-getters'
import mutations from '../store/mutations/bonus-mutations'


export default{
    namespaced:true,
    state(){
        return{
            welcomeBonus:null,
            referralBonus:null,
            equilibrumBonus:null,
            loyaltyBonus:null,
            placementBonus:null,
            totalBonus:null,
            profitPool:null,
            globalProfit:null,
            profitPools:[],
            globalProfits:[],
            //totalBonus:null
        }
    },
    actions:{
        ...actions
    },
    getters:{
        ...getters
    },
    mutations:{
        ...mutations
    }
}