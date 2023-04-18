
export default {

    //all incentive claims
    productClaims(state,data){
        state.productClaims = data
    },

    //user incentive claims
    userProductClaims(state,data){
        state.userProductClaims = data
    },

    totalProductSold(state,data){
        state.totalProductSold = data
    },

    totalProductPV(state,data){
        state.totalProductPV = data
    },

    sumClaimedProducts(state,data){
        state.sumClaimedProducts = data
    }
}