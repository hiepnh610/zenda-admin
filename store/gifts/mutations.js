const mutations = {
  setGifts (state, payload) {
    state.gifts = payload
  },

  setToGetGiftDetail (state, payload) {
    state.giftDetail = payload
  }
}

export default mutations
