
export default {

    userPurchases(state){
        return state.userPurchases
    },

    stockistPurchases(state){
        return state.stockistPurchases
    },

    vendorProcessedOrders(state){
        return state.vendorProcessedOrders
    },

    stockDetails(state){
        return state.stockDetails
    },

    pickupStats(state){
        return state.pickupStats
    },

    monthlyRepurchases(state){
        return state.monthlyRepurchases
    },

    stockistPrevMonthSales(state){
        return state.stockistPrevMonthSales
    },

    userPurchasesAction(state){
        return state.userPurchasesAction
    },

    userPurchasesState(state){
        return state.userPurchasesState
    },

    userPurchasesCurrentPage(state){
        return state.userPurchasesCurrentPage
    },

    userPurchasesLastPage(state){
        return state.userPurchasesLastPage
    },

    userPurchasesPerPage(state){
        return state.userPurchasesPerPage
    },

    userPurchasesTotalPages(state){
        return state.userPurchasesTotalPages
    }


}