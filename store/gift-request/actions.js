import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'

const actions = {
  getGifts (context) {
    return this.$axios
      .get(API.GIFT_REQUEST)
      .then((response) => {
        context.commit(MUTATION.GIFT_REQUEST, response.data, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
