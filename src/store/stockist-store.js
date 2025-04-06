import actions from '../store/actions/stockist-actions'
import getters from '../store/getters/stockist-getters'
import mutations from '../store/mutations/stockist-mutation'


export default{
    namespaced:true,
    state(){
        return{
            stockists:[],
            stockist:{},
            rebateEarnings:[],
            stockistsStats:{},
            sotckistsOrders:[]
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