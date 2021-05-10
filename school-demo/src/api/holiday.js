import axios from "axios";
function searchHoliday(title, money) {
  return axios.get(
    "/api/holiday/searchTicket?title=" + title + "&money=" + money
  );
}
export { searchHoliday };
