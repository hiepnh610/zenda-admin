import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'

const actions = {
  getAccounts (context) {
    return this.$axios
      .get(API.ACCOUNTS)
      .then((response) => {
        context.commit(MUTATION.ACCOUNTS, response.data, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
