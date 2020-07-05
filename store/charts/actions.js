import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

const actions = {
  getTopReceivePoints (context) {
    return this.$axios
      .get(API.TOP_RECEIVE_POINTS)
      .then((response) => {
        context.commit(MUTATION.TOP_RECEIVE_POINTS, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  },

  getTopGivePoints (context) {
    return this.$axios
      .get(API.TOP_GIVE_POINTS)
      .then((response) => {
        context.commit(MUTATION.TOP_GIVE_POINTS, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  }
}

export default actions
