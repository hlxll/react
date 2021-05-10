import axios from "axios";

function searchTicket(city) {
  return axios.get("/api/tickets/searchTicket?city=" + city);
}
export { searchTicket };
