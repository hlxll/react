import axios from "axios";
function searchHoliday() {
  return axios.get("/api/holiday/searchTicket");
}
export { searchHoliday };
