import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

const actions = {
  getUsers (context, payload) {
    return this.$axios
      .get(`${API.USERS}?offset=${payload}`)
      .then((response) => {
        context.commit(MUTATION.USERS, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  },

  deleteUser (context, payload) {
    return this.$axios
      .delete(`${API.USER}/${payload}`)
      .then(() => {
        context.commit(MUTATION.DELETE_USER, payload, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  }
}

export default actions
