import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vueclass-8171b.firebaseio.com'
})

instance.defaults.headers['Authorization'] = 'token'

export default instance;