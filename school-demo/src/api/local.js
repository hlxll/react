import axios from "axios";
function searchLocal(type, location) {
  return axios.get(
    "/api/local/searchLocal?type=" + type + "&location=" + location
  );
}
export { searchLocal };
