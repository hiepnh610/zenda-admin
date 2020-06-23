export const ACTION = {
  USERS: 'users/getUsers',
  DELETE_USER: 'users/deleteUser',

  GIFTS: 'gifts/getGifts',
  CREATE_GIFT: 'gifts/createGift',
  UPDATE_GIFT: 'gifts/updateGift',
  DELETE_GIFT: 'gifts/deleteGift',
  GIFT_DETAIL: 'gifts/getGiftDetail',

  GIFT_EXCHANGE: 'gift-exchange/getGifts',
  GIFT_EXCHANGE_UPDATE_STATUS: 'gift-exchange/updateGift',
  GIFT_EXCHANGE_DELETE_STATUS: 'gift-exchange/deleteGift',

  TRANSACTIONS: 'transactions/getTransactions',
  DELETE_TRANSACTION: 'transactions/deleteTransaction',

  SETTINGS: 'settings/updateSettings',

  TOASTED: 'toast/showToast'
}

export const MUTATION = {
  NOTIFICATION: 'notification/setNotification',
  LOADING: 'loading/setLoading',

  USERS: 'users/setUsers',
  DELETE_USER: 'users/setToDeleteUser',

  GIFTS: 'gifts/setGifts',
  CREATE_GIFT: 'gifts/setToCreateGift',
  DELETE_GIFT: 'gifts/setToDeleteGift',
  GIFT_DETAIL: 'gifts/setToGetGiftDetail',

  GIFT_EXCHANGE: 'gift-exchange/setGifts',
  GIFT_EXCHANGE_UPDATE_STATUS: 'gift-exchange/setToUpdateGift',
  GIFT_EXCHANGE_DELETE_STATUS: 'gift-exchange/setToDeleteGift',

  TRANSACTIONS: 'transactions/setTransactions',
  DELETE_TRANSACTION: 'transactions/setToDeleteTransaction',

  SETTINGS: 'settings/setToUpdateSettings',

  TOASTED: 'toast/setToShowToast'
}

export const GETTER = {
  LOADING: 'loading/getLoading',
  USERS: 'users/getUsers',
  GIFTS: 'gifts/getGifts',
  GIFT_DETAIL: 'gifts/getGiftDetail',
  GIFT_EXCHANGE: 'gift-exchange/getGifts',
  TRANSACTIONS: 'transactions/getTransactions',
  SETTINGS: 'settings/getSettings',
  TOASTED: 'toast/getToast'
}
