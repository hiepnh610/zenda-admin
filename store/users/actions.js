import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'

const actions = {
  getUsers (context) {
    return this.$axios
      .get(API.USERS)
      .then((response) => {
        context.commit(MUTATION.USERS, response.data, {
          root: true
        })
      })
      .catch(() => {})
  },

  deleteUser (context, payload) {
    return this.$axios
      .delete(`${API.USER}/${payload}`)
      .then(() => {
        context.commit(MUTATION.DELETE_USER, payload, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
