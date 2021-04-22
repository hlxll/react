import axios from "axios";
function login(name, pass) {
  return axios.get(
    "http://localhost:3000/user/login?username=" + name + "&password=" + +pass
  );
}
function upload(name, file) {
  return axios.get(
    "http://localhost:3000/user/upload?username=" + name + "&file=" + file
  );
}
export { login, upload };
