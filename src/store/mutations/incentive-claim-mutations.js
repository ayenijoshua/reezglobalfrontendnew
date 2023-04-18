
export default {

    //all incentive claims
    incentiveClaims(state,data){
        state.incentiveClaims = data
    },

    //user incentive claims
    claims(state,data){
        state.claims = data
    },

    currentIncentive(state,data){
        state.currentIncentive = data
    }
}