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
  }
}

export default actions
