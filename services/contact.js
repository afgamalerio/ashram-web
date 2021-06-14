import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
})

const contactService = {}

contactService.senEmail = (data) => {
  return api
    .post('/contact', data)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

export { contactService }
