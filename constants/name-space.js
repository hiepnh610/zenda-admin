export const ACTION = {
  USERS: 'users/getUsers',
  DELETE_USER: 'users/deleteUser',

  GIFTS: 'gifts/getGifts',
  CREATE_GIFT: 'gifts/createGift',
  UPDATE_GIFT: 'gifts/updateGift',
  DELETE_GIFT: 'gifts/deleteGift',
  GIFT_DETAIL: 'gifts/getGiftDetail',

  GIFT_REQUEST: 'giftRequest/getGifts',

  TRANSACTIONS: 'transactions/getTransactions',
  DELETE_TRANSACTION: 'transactions/deleteTransaction',

  SETTINGS: 'settings/updateSettings'
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

  GIFT_REQUEST: 'giftRequest/setGifts',

  TRANSACTIONS: 'transactions/setTransactions',
  DELETE_TRANSACTION: 'transactions/setToDeleteTransaction',

  SETTINGS: 'settings/setToUpdateSettings'
}

export const GETTER = {
  LOADING: 'loading/getLoading',
  USERS: 'users/getUsers',
  GIFTS: 'gifts/getGifts',
  GIFT_DETAIL: 'gifts/getGiftDetail',
  GIFT_REQUEST: 'giftRequest/getGifts',
  TRANSACTIONS: 'transactions/getTransactions',
  SETTINGS: 'settings/getSettings'
}
