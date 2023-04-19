

export default {
    
    authUser(state,data){
        state.authUser = data
        localStorage.setItem('delishcare-token',data.access_token)
    },

    authUserReset(state,data){
        state.authUser = data
    },

    loggedOut(){
        localStorage.clear();window.location.reload()
        //localStorage.removeItem('delishcare-token')
    }
}