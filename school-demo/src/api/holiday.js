import axios from "axios";
function searchHoliday(title, money) {
  return axios.get(
    "/api/holiday/searchTicket?title=" + title + "&money=" + money
  );
}
function deleteHoliday(id) {
  return axios.get("/api/holiday/deleteHoliday?id=" + id);
}
function addHoliday(obj) {
  return axios.post("/api/holiday/addHoliday", obj);
}
export { searchHoliday, deleteHoliday, addHoliday };
