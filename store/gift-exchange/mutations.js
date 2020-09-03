const mutations = {
  setGifts (state, payload) {
    state.gifts = payload
  },

  setToUpdateGift (state, payload) {
    const gifts = state.gifts.rows

    if (gifts) {
      const gift = gifts.find(e => e.id === payload.id)

      gift.status = !gift.status
    }
  },

  setToDeleteGift (state, payload) {
    const gifts = state.gifts.rows

    state.gifts.rows = gifts.filter(gift => gift.id !== payload)
  }
}

export default mutations
