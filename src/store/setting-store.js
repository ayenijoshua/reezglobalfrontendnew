import actions from '../store/actions/setting-actions'
import getters from '../store/getters/setting-getters'
import mutations from '../store/mutations/setting-mutations'


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