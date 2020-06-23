import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToastError from '@/utils/toast'

const actions = {
  getUsers (context) {
    return this.$axios
      .get(API.USERS)
      .then((response) => {
        context.commit(MUTATION.USERS, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToastError(STATUS_TOAST.ERROR, error)
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
        showToastError(STATUS_TOAST.ERROR, error)
      })
  }
}

export default actions
