export const state = () => ({
  list: []
})

export const mutations = {
  addUSer(state, user) {
    state.list.push(user)
  }
}

export const actions = {
  addUser({ commit }, { user }) {
    commit('addUser', user)
  }
}