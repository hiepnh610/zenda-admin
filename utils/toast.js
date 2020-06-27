import Vue from 'vue'

const showToast = (type, payload) => {
  let message = payload

  if (
    payload.response &&
    payload.response.data &&
    payload.response.data.message
  ) {
    message = payload.response.data.message
  }

  Vue.toasted.show(message, { type })
}

export default showToast
