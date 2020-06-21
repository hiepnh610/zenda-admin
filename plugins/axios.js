export default function ({ $axios, redirect }) {
  $axios.onError((e) => {
    const statusCode = e.response.status
    const authErrorCode = [401, 403]
    const serverErrorCode = [500]

    if (authErrorCode.includes(statusCode)) {
      localStorage.removeItem('auth._token.local')

      redirect('/')
    }

    if (serverErrorCode.includes(statusCode)) {
      redirect('/error')
    }
  })
}
