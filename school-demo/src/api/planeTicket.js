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
export { searchPlate };
