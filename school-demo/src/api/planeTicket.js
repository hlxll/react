import axios from "axios";
function searchPlate(start, arriver, queryDate) {
  return axios.get(
    "/api/plane/searchPlane?start=" +
      start +
      "&arriver=" +
      arriver +
      "&date=" +
      queryDate
  );
}
function deletePlane(id) {
  return axios.get("/api/plane/deletePlane?id=" + id);
}
function addPlane(obj) {
  let query = "";
  for (let key in obj) {
    if (key != "date") {
      query += "&";
      query += key;
      query += "=";
      query += obj[key];
    }
  }
  return axios.get("/api/plane/addPlane?date=" + obj.date + query);
}
export { searchPlate, deletePlane, addPlane };
