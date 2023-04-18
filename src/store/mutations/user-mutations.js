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
    }

}