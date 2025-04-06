import actions from '../store/actions/stockist-package-actions'
import getters from '../store/getters/stockist-package-getters'
import mutations from '../store/mutations/stockist-package-mutations'


export default{
    namespaced:true,
    state(){
        return{
            stockistPackages:[],
            stockistPackage:{},
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