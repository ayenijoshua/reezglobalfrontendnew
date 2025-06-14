import actions from '../store/actions/product-purchase-actions'
import getters from '../store/getters/product-purchase-getters'
import mutations from '../store/mutations/product-purchase-mutations'


export default{
    namespaced:true,
    state(){
        return{
            userPurchases:[],
            stockistPurchases:[],
            vendorProcessedOrders:[],
            stockDetails:[],
            pickupStats:{},
            monthlyRepurchases:[],
            stockistPrevMonthSale:null,

            userPurchasesAction:null,
            userPurchasesState:null,
            userPurchasesCurrentPage:null,
            userPurchasesLastPage:null,
            userPurchasesPerPage:null,
            userPurchasesTotalPages:null
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