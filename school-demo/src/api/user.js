import axios from "axios";
function login (name, pass) {
  return axios.get(
    "/api/user/login?username=" + name + "&password=" + +pass
  );
}
function upload (name, file) {
  return axios.post(
    "/api/user/upload", {
    username: name,
    file: file
  }
  );
}
export { login, upload };
