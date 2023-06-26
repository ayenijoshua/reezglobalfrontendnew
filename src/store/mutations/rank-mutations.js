
export default {

    ranks(state,data){
        state.ranks = data
    },

    rank(state,data){
        state.rank = data
    },

    currentRankBadge(state,data){
        return state.currentRankBadge = data
    }
}