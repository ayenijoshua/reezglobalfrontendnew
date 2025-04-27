import actions from '../store/actions/setting-actions'
import getters from '../store/getters/setting-getters'
import mutations from '../store/mutations/setting-mutations'


export default{
    namespaced:true,
    state(){
        return{
            settings:{},
            setting:{},
            referralBonusSetting:[],
            upgradeBonusSetting:[],
            unilevelBonusSetting:[],
            stockistUplineBonusSetting:[]
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