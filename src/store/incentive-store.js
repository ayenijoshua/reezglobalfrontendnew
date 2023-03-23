import actions from '../store/actions/incentive-actions'
import getters from '../store/getters/incentive-getters'
import mutations from '../store/mutations/incentive-mutations'


export default{
    namespaced:true,
    state(){
        return{
            incentives:[],
            incentive:{}
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