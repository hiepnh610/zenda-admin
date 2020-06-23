import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToastError from '@/utils/toast'

const actions = {
  getGifts (context) {
    return this.$axios
      .get(API.GIFTS)
      .then((response) => {
        context.commit(MUTATION.GIFTS, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToastError(STATUS_TOAST.ERROR, error)
      })
  },

  createGift (context, payload) {
    return this.$axios
      .post(`${API.GIFT}`, { payload })
      .then((response) => {
        context.commit(MUTATION.CREATE_GIFT, response.data, {
          root: true
        })

        this.app.router.push('/gifts')
      })
      .catch((error) => {
        showToastError(STATUS_TOAST.ERROR, error)
      })
  },

  updateGift (context, payload) {
    return this.$axios
      .put(`${API.GIFT}/${payload.id}`, payload)
      .then(() => {
        this.app.router.push('/gifts')
      })
      .catch((error) => {
        showToastError(STATUS_TOAST.ERROR, error)
      })
  },

  deleteGift (context, payload) {
    return this.$axios
      .delete(`${API.GIFT}/${payload}`)
      .then(() => {
        context.commit(MUTATION.DELETE_GIFT, payload, {
          root: true
        })
      })
      .catch((error) => {
        showToastError(STATUS_TOAST.ERROR, error)
      })
  },

  getGiftDetail (context, payload) {
    return this.$axios
      .get(`${API.GIFT}/${payload}`)
      .then((response) => {
        context.commit(MUTATION.GIFT_DETAIL, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToastError(STATUS_TOAST.ERROR, error)
      })
  }
}

export default actions
