const mutations = {
  setUsers (state, payload) {
    state.users = payload
  },

  setToDeleteUser (state, payload) {
    state.users = state.users.filter(item => item._id !== payload)
  }
}

export default mutations
