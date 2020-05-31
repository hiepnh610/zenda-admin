import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'

const actions = {
  getTransactions (context) {
    return this.$axios
      .get(API.TRANSACTIONS)
      .then((response) => {
        context.commit(MUTATION.TRANSACTIONS, response.data, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
