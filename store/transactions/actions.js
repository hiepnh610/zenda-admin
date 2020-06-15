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
  },

  deleteTransaction (context, payload) {
    return this.$axios
      .delete(`${API.TRANSACTION}/${payload}`)
      .then(() => {
        context.commit(MUTATION.DELETE_TRANSACTION, payload, {
          root: true
        })
      })
      .catch(() => {})
  }
}

export default actions
