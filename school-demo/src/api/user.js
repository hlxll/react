import axios from "axios";
function login(name, pass) {
  return axios.get("/api/user/login?username=" + name + "&password=" + +pass);
}
function register(name, pass) {
  return axios.get(
    "/api/user/register?username=" + name + "&password=" + +pass
  );
}
function upload(name, file) {
  return axios.post("/api/user/upload", {
    username: name,
    file: file,
  });
}
function addOrderList(obj) {
  let query = "";
  for (let key in obj) {
    if (key == "type") {
      query += key;
      query += "=";
      query += obj[key];
    } else {
      query += "&";
      query += key;
      query += "=";
      query += obj[key];
    }
  }
  return axios.get("/api/user/addOrder?" + query);
}
export { login, upload, register, addOrderList };
