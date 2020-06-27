import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

const actions = {
  getTransactions (context) {
    return this.$axios
      .get(API.TRANSACTIONS)
      .then((response) => {
        context.commit(MUTATION.TRANSACTIONS, response.data, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  },

  deleteTransaction (context, payload) {
    return this.$axios
      .delete(`${API.TRANSACTION}/${payload}`)
      .then(() => {
        context.commit(MUTATION.DELETE_TRANSACTION, payload, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  }
}

export default actions
