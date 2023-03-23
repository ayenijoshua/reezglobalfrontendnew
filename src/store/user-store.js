import actions from '../store/actions/user-actions'
import getters from '../store/getters/user-getters'
import mutations from '../store/mutations/user-mutations'


export default{
    namespaced:true,
    state(){
        return{
            users:[],
            activeUsers:[],
            totalUsers:null,
            totalActiveUsers:null,
            profile:{},
            totalPV:null,
            uplineDetails:{}
        }
    },
    actions:{
        ...actions
    },
    getters:{
        ...getters
    },
    mutations:{
        ...mutations
    }
}