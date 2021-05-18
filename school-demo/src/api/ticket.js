import axios from "axios";

function searchTicket(city) {
  return axios.get("/api/tickets/searchTicket?city=" + city);
}
function addTicket(obj) {
  return axios.post("/api/tickets/addTicket", obj);
}
function deleteTicket(id) {
  return axios.get("/api/tickets/deleteTicket?id=" + id);
}
export { searchTicket, addTicket, deleteTicket };
