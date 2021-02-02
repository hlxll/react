import axios from 'axios'
function login () {
  return axios.get('/api/login')
}
export {
  login
}