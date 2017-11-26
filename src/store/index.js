import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NOOE_ENV !== 'production'

export default new Vuex.Store({
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})