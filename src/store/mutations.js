import * as types from './mutation-types'

const mutations = {
    [types.SET_USERINFO](state, userInfo){
        state.userInfo = userInfo
    },
    [types.SET_COMPLETEPAGE](state, completePage){
        state.completePage = completePage
    },
    [types.SET_MUTUALID](state, mutualId){
        state.mutualId = mutualId;
    }
}

export default mutations


