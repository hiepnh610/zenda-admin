import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

const actions = {
  getUsers (context, payload) {
    context.commit(MUTATION.LOADING, true, {
      root: true
    })

    return this.$axios
      .get(`${API.USERS}?offset=${payload}`)
      .then((response) => {
        context.commit(MUTATION.USERS, response.data, {
          root: true
        })
        context.commit(MUTATION.LOADING, false, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
        context.commit(MUTATION.LOADING, false, {
          root: true
        })
      })
  },

  getUserDetail (context, payload) {
    context.commit(MUTATION.LOADING, true, {
      root: true
    })

    return this.$axios
      .get(`${API.USER}/${payload}`)
      .then((response) => {
        context.commit(MUTATION.USER_DETAIL, response.data, {
          root: true
        })
        context.commit(MUTATION.LOADING, false, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
        context.commit(MUTATION.LOADING, false, {
          root: true
        })
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
