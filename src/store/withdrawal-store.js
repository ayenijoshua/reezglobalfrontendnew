import actions from '../store/actions/withdrawal-actions'
import getters from '../store/getters/withdrawal-getters'
import mutations from '../store/mutations/withdrawal-mutations'

export default{
    namespaced:true,
    state(){
        return{
            withdrawals:[],
            userWithdrawals:[],
            totalWithdrawals:null,
            userTotalWithdrawals:null,
            withdrawal:{}
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