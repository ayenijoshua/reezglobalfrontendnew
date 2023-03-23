import actions from '../store/actions/withdrawal-actions'
import getters from '../store/getters/withdrawal-getters'
import mutations from '../store/mutations/withdrawal-mutations'

export default{
    namespaced:true,
    state(){
        return{
            settings:{},
            setting:{},
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