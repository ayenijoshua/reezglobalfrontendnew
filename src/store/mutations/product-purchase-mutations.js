
export default {

    userPurchases(state,data){
        state.userPurchases = data
    },

    stockistPurchases(state,data){
        state.stockistPurchases = data
    },

    vendorProcessedOrders(state,data){
        state.vendorProcessedOrders = data
    },

    stockDetails(state,data){
        state.stockDetails = data
    },

    pickupStats(state,data){
        state.pickupStats = data
    },

    monthlyRepurchases(state,data){
        state.monthlyRepurchases = data
    },

    stockistPrevMonthSales(state,data){
        state.stockistPrevMonthSales = data
    },

    //----pagination data

    userPurchasesAction(state,data){
        state.userPurchasesAction = data
    },

    userPurchasesState(state,data){
        state.userPurchasesState = data
    },

    userPurchasesCurrentPage(state,data){
        state.userPurchasesCurrentPage = data
    },

    userPurchasesLastPage(state,data){
        state.userPurchasesLastPage = data
    },

    userPurchasesPerPage(state,data){
        state.userPurchasesPerPage = data
    },

    userPurchasesTotalPages(state,data){
        state.userPurchasesTotalPages = data
    }

    //--pagination data
}