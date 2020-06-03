import { API } from '@/constants/api'

const actions = {
  updateSettings (context, payload) {
    const data = {
      quantity: payload
    }

    return this.$axios
      .put(API.SETTINGS, data)
      .then(() => {})
      .catch(() => {})
  }
}

export default actions
