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

  deleteGift (context, payload) {
    return this.$axios
      .delete(`${API.GIFT}/${payload}`)
      .then(() => {
        context.commit(MUTATION.DELETE_GIFT, payload, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
