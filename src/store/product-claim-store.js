import actions from '../store/actions/product-claim-actions'
import getters from '../store/getters/product-claim-getters'
import mutations from '../store/mutations/product-claim-mutations'


export default{
    namespaced:true,
    state(){
        return{
            productClaims:[],
            userProductClaims:[],
            totalProductSold:null,
            totalProductPV:null,
            sumClaimedProducts:null
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