import actions from '../store/actions/package-actions'
import getters from '../store/getters/package-getters'
import mutations from '../store/mutations/package-mutations'


export default{
    namespaced:true,
    state(){
        return{
            regPackages:[],
            regPackage:{}
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