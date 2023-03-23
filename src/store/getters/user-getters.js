
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

    profile(state){
        return state.profile
    },

    totalPV(state){
        return state.totalPV
    },

    uplineDetails(state){
        return state.uplineDetails
    }
}