export default function ({ $axios, redirect }) {
  // console.log('$axios', $axios)
  $axios.onError((error) => {
    // check if the API returns 404 status and redirects to not-found page
    if (error.response.status === '404') {
      redirect('/not-found')
    }
  })
}
