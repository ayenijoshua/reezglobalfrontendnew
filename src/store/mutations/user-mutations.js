export default {
    
    users(state,data){
        state.users = data
    },

    activeUsers(state,data){
        state.activeUsers = data
    },

    storeUser(state,data){
        state.users.push(data)
    },

    deleteUser(state,data){
        let users = state.users
        let index = users.findIndex(ele=>ele.id==data.id)
        users.splice(index,1)
    },

    totalUsers(state,data){
        state.totalUsers = Number(data)
    },

    upgradedUsers(state,data){
        state.upgradedUsers = data
    },

    totalActiveUsers(state,data){
        state.totalActiveUsers = Number(data)
    },

    profile(state,data){
        state.profile = data
    },

    totalPV(state,data){
        state.totalPV = data
    },

    uplineDetails(state,data){
        state.uplineDetails = data
    },

    downlines(state,data){
        state.downlines = data
    },

    directDownlines(state,data){
        state.directDownlines = data
    },

    genealogy(state,data){
        state.genealogy = data
    },

    totalRegistrations(state,data){
        state.totalRegistrations = data
    },

    totalRegistrationPV(state,data){
        state.totalRegistrationPV = data
    },

    paidUsers(state,data){
        state.paidUsers = data
    },

    totalPaidUsers(state,data){
        state.totalPaidUsers = data
    },

    sumPaidUsers(state,data){
        state.sumPaidUsers = data
    },

    userAction(state,data){
        state.userAction = data
        //alert(state.userAction)
    },
    userState(state,data){
        state.userState = data
    },
    usersCurrentPage(state,data){
        state.usersCurrentPage = data
    },
    usersLastPage(state,data){
        state.usersLastPage = data
    },
    usersPerPage(state,data){
        return state.usersPerPage = data
    },
    usersTotalPages(state,data){
        return state.usersTotalPages = data
    },

    paidUserAction(state,data){
        state.paidUserAction = data
    },
    paidUsersCurrentPage(state,data){
        state.paidUsersCurrentPage = data
    },
    paidUsersLastPage(state,data){
        state.paidUsersLastPage = data
    },
    paidUsersPerPage(state,data){
        state.paidUsersPerPage = data
    },
    paidUsersTotalPages(state,data){
        state.paidUsersTotalPages = data
    }

}