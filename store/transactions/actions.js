import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

const actions = {
  getTransactions (context, payload) {
    context.commit(MUTATION.LOADING, true, {
      root: true
    })

    return this.$axios
      .get(`${API.TRANSACTIONS}?offset=${payload}`)
      .then((response) => {
        context.commit(MUTATION.TRANSACTIONS, response.data, {
          root: true
        })

        context.commit(MUTATION.LOADING, false, {
          root: true
        })
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)

        context.commit(MUTATION.LOADING, false, {
          root: true
        })
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
