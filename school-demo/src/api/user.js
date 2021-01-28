import axios from 'axios'
function login () {
  return axios.get('/api/users/login')
}
export {
  login
}