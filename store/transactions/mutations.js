const mutations = {
  setTransactions (state, payload) {
    state.transactions = payload
  },

  setToDeleteTransaction (state, payload) {
    state.transactions = state.transactions.filter((transaction) => {
      return payload !== transaction.id
    })
  }
}

export default mutations
