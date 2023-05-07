
export default {

    withdrawals(state,data){
        state.withdrawals = data
    },

    withdrawal(state,data){
        state.withdrawal = data
    },

    userWithdrawals(state,data){
        state.userWithdrawals = data
    },

    totalWithdrawals(state,data){
        state.totalWithdrawals = data
    },

    userTotalWithdrawals(state,data){
        state.userTotalWithdrawals = data
    },

    userPendingWithdrawals(state,data){
        state.userPendingWithdrawals = data
    },

}