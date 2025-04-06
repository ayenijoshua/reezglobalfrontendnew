
export default {

    stockists(state,data){
        state.stockists = data
    },

    stockist(state,data){
        state.stockist = data
    },

    rebateEarnings(state,data){
        return state.rebateEarnings = data
    },

    stockistsStats(state,data){
        return state.stockistsStats = data
    },

    stockistsOrders(state,data){
        return state.sotckistsOrders = data
    }
}