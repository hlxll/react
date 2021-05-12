import axios from "axios";
function searchHotel(city, name) {
  return axios.get("/api/hotel/searchTicket?city=" + city + "&name=" + name);
}
function addPlane(obj) {
  let query = "";
  for (let key in obj) {
    if (key != "name") {
      query += "&";
      query += key;
      query += "=";
      query += obj[key];
    }
  }
  return axios.get("/api/hotel/addHotel?name=" + obj.name + query);
}
function addHotelHome(obj) {
  return axios.get(
    "/api/hotel/addHotelHome?homeType=" +
      obj.homeType +
      "&bedType=" +
      obj.bedType +
      "&breakfast=" +
      obj.breakfast +
      "&number=" +
      obj.number +
      "&money=" +
      obj.money +
      "&id=" +
      obj.id
  );
}
function deleteHotel(id) {
  return axios.get("/api/hotel/deleteHotel?id=" + id);
}
export { searchHotel, addPlane, deleteHotel, addHotelHome };
