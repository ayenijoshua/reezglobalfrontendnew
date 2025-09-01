
export default {

    walletBalance(state){
        return state.walletBalance
    },

    pendingPackagePaymentApprovals(state){
        return state.pendingPackagePaymentApprovals
    },

    pendingPackagePaymentApprovalsCount(state){
        return state.pendingPackagePaymentApprovalsCount
    },

    packagePaymentHistory(state){
        return state.packagePaymentHistory
    },

    packagePaymentHistoryCount(state){
        return state.packagePaymentHistoryCount
    }
}