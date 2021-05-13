import axios from "axios";
function groupList(name) {
  return axios.get("/api/groupBuying/searchTicket?name=" + name);
}
function addGroup(obj) {
  let query = "";
  for (let key in obj) {
    if (key != "startCity") {
      query += "&";
      query += key;
      query += "=";
      query += obj[key];
    }
  }
  return axios.get(
    "/api/groupBuying/addGroup?startCity=" + obj.startCity + query
  );
}
function deleteGroup(id) {
  return axios.get("/api/groupBuying/deleteGroup?id=" + id);
}
export { groupList, addGroup, deleteGroup };
