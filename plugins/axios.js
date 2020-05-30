export default function ({ $axios, redirect }) {
  $axios.onError((e) => {
    const statusCode = e.response.status
    const errorCode = [500, 401, 403]

    if (errorCode.includes(statusCode)) {
      redirect('/error')
    }
  })
}
