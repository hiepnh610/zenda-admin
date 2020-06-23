import Vue from 'vue'

const showToastError = (type, payload) => {
  let message = 'Error happened.'

  if (
    payload.response &&
    payload.response.data &&
    payload.response.data.message
  ) {
    message = payload.response.data.message
  }

  Vue.toasted.show(message, { type })
}

export default showToastError
