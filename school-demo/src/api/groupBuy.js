import axios from "axios";
function groupList(name) {
  return axios.get("/api/groupBuying/searchTicket?name=" + name);
}
function addGroup(obj) {
  return axios.post("/api/groupBuying/addGroup", obj);
}
function deleteGroup(id) {
  return axios.get("/api/groupBuying/deleteGroup?id=" + id);
}
export { groupList, addGroup, deleteGroup };
