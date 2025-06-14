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
            sotckistsOrders:[],
            stockistUpgrades:[],

            stockistsAction:null,
            stockistsState:null,
            stockistsCurrentPage:null,
            stockistsLastPage:null,
            stockistsPerPage:null,
            stockistsTotalPages:null,

            stockistsOrdersAction:null,
            stockistsOrdersState:null,
            stockistsOrdersCurrentPage:null,
            stockistsOrdersLastPage:null,
            stockistsOrdersPerPage:null,
            stockistsOrdersTotalPages:null,

            stockistUpgradesAction:null,
            stockistUpgradesState:null,
            stockistUpgradesCurrentPage:null,
            stockistUpgradesLastPage:null,
            stockistUpgradesPerPage:null,
            stockistUpgradesTotalPages:null
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