const mutations = {
  setUsers (state, payload) {
    state.users = payload
  },

  setToGetUserDetail (state, payload) {
    state.userDetail = payload
  },

  setToDeleteUser (state, payload) {
    state.users = state.users.filter(item => item._id !== payload)
  }
}

export default mutations
