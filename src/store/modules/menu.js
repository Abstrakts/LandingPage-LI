import * as types from '../mutation-types'

const state = {
  sidebarVisible: false
}

const mutations = {
  [types.SET_SIDEBAR] (state, bool) {
    state.sidebarVisible = bool
  }
}

export default {
  state,
  mutations
}