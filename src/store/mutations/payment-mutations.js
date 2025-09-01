
export default {

    walletBalance(state,data){
        state.walletBalance = data
    },

    pendingPackagePaymentApprovals(state,data){
        return state.pendingPackagePaymentApprovals = data
    },

    pendingPackagePaymentApprovalsCount(state,data){
        return state.pendingPackagePaymentApprovalsCount = data
    },

    packagePaymentHistory(state,data){
        return state.packagePaymentHistory = data
    },

    packagePaymentHistoryCount(state,data){
        return state.packagePaymentHistoryCount = data
    }
}