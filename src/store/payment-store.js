import actions from '../store/actions/payment-actions'
import getters from './getters/payment-getters'
import mutations from './mutations/payment-mutations'


export default{
    namespaced:true,
    state(){
        return{
            walletBalance:null
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