export const strict = process.env.NODE_ENV !== 'production'

const token = localStorage.getItem('auth._token.local')

export const state = () => ({
  token: token || ''
})

export const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  }
}
