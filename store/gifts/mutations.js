const mutations = {
  setGifts (state, payload) {
    state.gifts = payload
  },

  setToCreateGift (state, payload) {
    state.gifts = state.gifts.push(payload)
  },

  setToUpdateGift (state, payload) {
    state.gifts = state.gifts.push(payload)
  },

  setToDeleteGift (state, payload) {
    state.gifts = state.gifts.filter(gift => gift.id !== payload)
  }
}

export default mutations
