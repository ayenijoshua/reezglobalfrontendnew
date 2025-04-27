
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
    }
}