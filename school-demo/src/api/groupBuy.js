import axios from "axios";
function groupList(name) {
  return axios.get("/api/groupBuying/searchTicket?name=" + name);
}
export { groupList };
