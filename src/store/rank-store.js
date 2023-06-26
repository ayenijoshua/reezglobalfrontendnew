import actions from '../store/actions/rank-actions'
import getters from '../store/getters/rank-getters'
import mutations from '../store/mutations/rank-mutations'


export default{
    namespaced:true,
    state(){
        return{
            ranks:[],
            rank:{},
            currentRankBadge:null
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