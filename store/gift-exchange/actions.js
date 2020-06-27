import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

const actions = {
  getGifts (context, payload) {
    return this.$axios
      .get(`${API.GIFT_EXCHANGE}?offset=${payload}`)
      .then((response) => {
        context.commit(MUTATION.GIFT_EXCHANGE, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  },

  updateGift (context, payload) {
    return this.$axios
      .put(`${API.GIFT_EXCHANGE}/${payload.id}`, payload)
      .then(() => {
        context.commit(MUTATION.GIFT_EXCHANGE_UPDATE_STATUS, payload, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  },

  deleteGift (context, payload) {
    return this.$axios
      .delete(`${API.GIFT_EXCHANGE}/${payload}`)
      .then(() => {
        context.commit(MUTATION.GIFT_EXCHANGE_DELETE_STATUS, payload, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  }
}

export default actions
