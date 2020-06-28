import { MUTATION } from '@/constants/name-space'
import { API } from '@/constants/api'
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

const actions = {
  getGifts (context, payload) {
    context.commit(MUTATION.LOADING, true, {
      root: true
    })

    return this.$axios
      .get(`${API.GIFTS}?offset=${payload}`)
      .then((response) => {
        context.commit(MUTATION.GIFTS, response.data, {
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

  createGift (context, payload) {
    return this.$axios
      .post(`${API.GIFT}`, { payload })
      .then(() => {
        showToast(STATUS_TOAST.SUCCESS, 'Create Successfully.')
        this.app.router.push('/gifts')
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  },

  updateGift (context, payload) {
    return this.$axios
      .put(`${API.GIFT}/${payload.id}`, payload)
      .then(() => {
        showToast(STATUS_TOAST.SUCCESS, 'Update Successfully.')
        this.app.router.push('/gifts')
      })
      .catch((error) => {
        showToast(STATUS_TOAST.ERROR, error)
      })
  },

  getGiftDetail (context, payload) {
    context.commit(MUTATION.LOADING, true, {
      root: true
    })

    return this.$axios
      .get(`${API.GIFT}/${payload}`)
      .then((response) => {
        context.commit(MUTATION.GIFT_DETAIL, response.data, {
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
  }
}

export default actions
