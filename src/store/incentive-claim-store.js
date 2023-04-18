import actions from '../store/actions/incentive-claim-actions'
import getters from '../store/getters/incentive-claim-getters'
import mutations from '../store/mutations/incentive-claim-mutations'


export default{
    namespaced:true,
    state(){
        return{
            incentiveClaims:[],
            claims:[],
            currentIncentive:null
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