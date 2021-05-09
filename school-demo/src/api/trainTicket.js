import axios from "axios";
function searchTrain(start, arrive) {
  return axios.get(
    "/api/trainTicket/searchTicket?startCity=" + start + "&arriveCity=" + arrive
  );
}
function addOrderList(obj) {
  let query = "";
  for (let key in obj) {
    if (key == "type") {
      query += key;
      query += "=";
      query += obj[key];
    } else {
      query += "&";
      query += key;
      query += "=";
      query += obj[key];
    }
  }
  return axios.get("/api/trainTicket/buyTicket?" + query);
}
export { searchTrain, addOrderList };
