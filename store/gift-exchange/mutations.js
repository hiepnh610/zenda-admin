const mutations = {
  setGifts (state, payload) {
    state.gifts = payload
  },

  setToUpdateGift (state, payload) {
    const gift = state.gifts.find(e => e.id === payload.id)
    gift.status = !gift.status
  },

  setToDeleteGift (state, payload) {
    state.gifts = state.gifts.filter(gift => gift.id !== payload)
  }
}

export default mutations
