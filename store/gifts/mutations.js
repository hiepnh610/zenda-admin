const mutations = {
  setGifts (state, payload) {
    state.gifts = payload
  },

  setToDeleteGift (state, payload) {
    state.gifts = state.gifts.filter(gift => gift.id !== payload)
  }
}

export default mutations
