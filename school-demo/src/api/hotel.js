import axios from "axios";
function searchHotel(city) {
  return axios.get("/api/hotel/searchTicket?city=" + city);
}
export { searchHotel };
