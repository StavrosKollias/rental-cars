export const GetLocationsList = (url: string) => {
  return fetch(url)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      return { error: error.message }
    })
}
