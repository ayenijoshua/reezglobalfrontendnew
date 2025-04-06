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
            uplineDetails:{},
            downlines:[],
            directDownlines:[],
            genealogy:{},
            totalRegistrations:null,
            totalRegistrationPV:null,
            paidUsers:[],
            totalPaidUsers:null,
            sumPaidUsers:null,
            upgradedUsers:[],

            userAction:null,
            userState:null,
            usersCurrentPage:null,
            usersLastPage:null,
            usersPerPage:null,
            usersTotalPages:null,

            paidUserAction:null,
            paidUserState:null,
            paidUsersCurrentPage:null,
            paidUsersLastPage:null,
            paidUsersPerPage:null,
            paidUsersTotalPages:null
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