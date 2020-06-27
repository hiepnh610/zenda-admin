export const ACTION = {
  USERS: 'users/getUsers',
  DELETE_USER: 'users/deleteUser',

  GIFTS: 'gifts/getGifts',
  UPDATE_GIFT: 'gifts/updateGift',
  GIFT_DETAIL: 'gifts/getGiftDetail',

  GIFT_EXCHANGE: 'gift-exchange/getGifts',
  GIFT_EXCHANGE_UPDATE_STATUS: 'gift-exchange/updateGift',
  GIFT_EXCHANGE_DELETE_STATUS: 'gift-exchange/deleteGift',

  TRANSACTIONS: 'transactions/getTransactions',
  DELETE_TRANSACTION: 'transactions/deleteTransaction',

  TOASTED: 'toast/showToast',

  TOP_POINTS: 'charts/getTopPoints'
}

export const MUTATION = {
  NOTIFICATION: 'notification/setNotification',
  LOADING: 'loading/setLoading',

  USERS: 'users/setUsers',
  DELETE_USER: 'users/setToDeleteUser',

  GIFTS: 'gifts/setGifts',
  GIFT_DETAIL: 'gifts/setToGetGiftDetail',

  GIFT_EXCHANGE: 'gift-exchange/setGifts',
  GIFT_EXCHANGE_UPDATE_STATUS: 'gift-exchange/setToUpdateGift',
  GIFT_EXCHANGE_DELETE_STATUS: 'gift-exchange/setToDeleteGift',

  TRANSACTIONS: 'transactions/setTransactions',
  DELETE_TRANSACTION: 'transactions/setToDeleteTransaction',

  TOASTED: 'toast/setToShowToast',

  TOP_POINTS: 'charts/setTopPoints'
}

export const GETTER = {
  LOADING: 'loading/getLoading',
  USERS: 'users/getUsers',
  GIFTS: 'gifts/getGifts',
  GIFT_DETAIL: 'gifts/getGiftDetail',
  GIFT_EXCHANGE: 'gift-exchange/getGifts',
  TRANSACTIONS: 'transactions/getTransactions',
  TOASTED: 'toast/getToast',
  TOP_POINTS: 'charts/getTopPoints'
}
