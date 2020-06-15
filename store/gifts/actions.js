import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'

const actions = {
  getGifts (context) {
    return this.$axios
      .get(API.GIFTS)
      .then((response) => {
        context.commit(MUTATION.GIFTS, response.data, {
          root: true
        })
      })
      .catch(() => {})
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
      .catch(() => {})
  },

  updateGift (context, payload) {
    return this.$axios
      .put(`${API.GIFT}/${payload.id}`, payload)
      .then(() => {
        this.app.router.push('/gifts')
      })
      .catch(() => {})
  },

  deleteGift (context, payload) {
    return this.$axios
      .delete(`${API.GIFT}/${payload}`)
      .then(() => {
        context.commit(MUTATION.DELETE_GIFT, payload, {
          root: true
        })
      })
      .catch(() => {})
  },

  getGiftDetail (context, payload) {
    return this.$axios
      .get(`${API.GIFT}/${payload}`)
      .then((response) => {
        context.commit(MUTATION.GIFT_DETAIL, response.data, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
