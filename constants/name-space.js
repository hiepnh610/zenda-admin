export const ACTION = {
  USERS: 'users/getUsers',
  DELETE_USER: 'users/deleteUser',

  GIFTS: 'gifts/getGifts',
  DELETE_GIFT: 'gifts/deleteGift',

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
  DELETE_GIFT: 'gifts/setToDeleteGift',

  TRANSACTIONS: 'transactions/setTransactions',
  DELETE_TRANSACTION: 'transactions/setToDeleteTransaction',

  SETTINGS: 'settings/setToUpdateSettings'
}

export const GETTER = {
  LOADING: 'loading/getLoading',
  USERS: 'users/getUsers',
  GIFTS: 'gifts/getGifts',
  TRANSACTIONS: 'transactions/getTransactions',
  SETTINGS: 'settings/getSettings'
}
