export default function ({ store, route, redirect }) {
  const getState = store.state
  const token = getState.token

  if (!store.state.auth.loggedIn || !token) {
    return redirect('/')
  }
}
