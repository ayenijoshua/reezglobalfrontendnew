
export default {

    users(state){
        return state.users
    },

    user(state){
        return (id)=>{
            return state.users.find(ele=>ele.id==id)
        }
    },

    totalUsers(state){
        return state.totalUsers
    },

    activeUsers(state){
        return state.activeUsers
    },

    totalActiveUsers(state){
        return state.totalActiveUsers
    },

    upgradedUsers(state){
        return state.upgradedUsers
    },

    profile(state){
        return state.profile
    },

    totalPV(state){
        return state.totalPV
    },

    uplineDetails(state){
        return state.uplineDetails
    },

    downlines(state){
        return state.downlines
    },

    directDownlines(state){
        return state.directDownlines
    },

    genealogy(state){
        return state.genealogy
    },

    totalRegistrations(state){
        return state.totalRegistrations
    },

    totalRegistrationPV(state){
        return state.totalRegistrationPV
    },

    paidUsers(state){
        return state.paidUsers
    },

    totalPaidUsers(state){
        return state.totalPaidUsers
    },

    sumPaidUsers(state){
        return state.sumPaidUsers
    },

    userAction(state){
        return state.userAction
    },
    userState(state){
        return state.userState
    },
    usersCurrentPage(state){
        return state.usersCurrentPage
    },
    usersLastPage(state){
        return state.usersLastPage
    },
    usersPerPage(state){
        return state.usersPerPage
    },
    usersTotalPages(state){
        return state.usersTotalPages
    },

    paidUserAction(state){
        return state.paidUserAction
    },
    paidUsersCurrentPage(state){
        return state.paidUsersCurrentPage
    },
    paidUsersLastPage(state){
        return state.paidUsersLastPage
    },
    paidUsersPerPage(state){
        return state.paidUsersPerPage
    },
    paidUsersTotalPages(state){
        return state.paidUsersTotalPages
    }
}