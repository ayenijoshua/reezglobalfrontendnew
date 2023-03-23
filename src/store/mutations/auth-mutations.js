

export default {
    
    authUser(state,data){
        state.authUser = data
        localStorage.setItem('delishcare-token',data.access_token)
    },

    authUserReset(state,data){
        state.authUser = data
    },

    loggedOut(state){
        state.authUser = {}
        localStorage.removeItem('delishcare-token')
    }
}