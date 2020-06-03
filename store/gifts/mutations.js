const mutations = {
  setGifts (state, payload) {
    state.gifts = payload
  },

  setToDeleteGift (state, payload) {
    state.gifts = state.gifts.filter(item => item._id !== payload)
  }
}

export default mutations
