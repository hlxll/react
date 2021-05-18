import axios from "axios";
function searchLocal(type, location) {
  return axios.get(
    "/api/local/searchLocal?type=" + type + "&location=" + location
  );
}
function addLocal(obj) {
  return axios.post("/api/local/addLocal", obj);
}
function deleteLocal(id) {
  return axios.get("/api/local/deleteLocal?id=" + id);
}
export { searchLocal, addLocal, deleteLocal };
