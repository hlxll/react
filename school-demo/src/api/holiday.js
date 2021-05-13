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
    "/api/holiday/addHoliday?startCity=" + obj.startCity + query
  );
}
export { searchHoliday, deleteHoliday, addHoliday };
