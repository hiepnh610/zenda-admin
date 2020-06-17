export default function ({ store, route, redirect }) {
  const getState = store.state
  const token = getState.token

  if (!getState.auth.loggedIn || !token) {
    return redirect('/')
  }
}
