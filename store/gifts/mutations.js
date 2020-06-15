const mutations = {
  setGifts (state, payload) {
    state.gifts = payload
  },

  setToCreateGift (state, payload) {
    state.gifts = state.gifts.push(payload)
  },

  setToDeleteGift (state, payload) {
    state.gifts = state.gifts.filter(gift => gift.id !== payload)
  },

  setToGetGiftDetail (state, payload) {
    state.giftDetail = payload
  }
}

export default mutations
