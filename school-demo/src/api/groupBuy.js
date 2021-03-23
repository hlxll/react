import axios from "axios";
function groupList() {
  return axios.get("/api/groupList");
}
export { groupList };
