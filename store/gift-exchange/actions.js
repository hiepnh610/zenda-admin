import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'

const actions = {
  getGifts (context) {
    return this.$axios
      .get(API.GIFT_EXCHANGE)
      .then((response) => {
        context.commit(MUTATION.GIFT_EXCHANGE, response.data, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
