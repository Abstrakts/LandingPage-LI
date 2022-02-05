import * as types from '../mutation-types'

export const setSidebar = (state, bool) => {
    state.commit(types.SET_SIDEBAR, bool)
}