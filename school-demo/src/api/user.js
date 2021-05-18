import axios from "axios";
function login(name, pass) {
  return axios.get("/api/user/login?username=" + name + "&password=" + +pass);
}
function addLog(obj) {
  console.log(obj);
  return axios.get(
    "/api/user/addLog?date=" +
      obj.date +
      "&latitude=" +
      obj.latitude +
      "&longitude=" +
      obj.longitude +
      "&computed=" +
      obj.computed +
      "&username=" +
      obj.username
  );
}
function searchLog(username) {
  return axios.get("/api/user/searchLog?username=" + username);
}
function register(name, pass) {
  return axios.get(
    "/api/user/register?username=" + name + "&password=" + +pass
  );
}
function deleteUser(name) {
  return axios.get("/api/user/deleteUser?username=" + name);
}
function searchUser() {
  return axios.get("/api/user/searchUse");
}
function updateJuris(name, jurisdiction) {
  return axios.get(
    "/api/user/updateJuris?username=" + name + "&jurisdiction=" + jurisdiction
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
function searchOrder() {
  return axios.get("/api/user/queryOrder");
}
function deleteOrder(id) {
  return axios.get("/api/user/deleteOrder?id=" + id);
}
export {
  login,
  upload,
  register,
  addOrderList,
  searchOrder,
  searchUser,
  updateJuris,
  deleteUser,
  addLog,
  searchLog,
  deleteOrder,
};
