function changeTime(time) {
  let startTime = new Date(time);
  let Stime =
    startTime.getFullYear() +
    "/" +
    this.toTwoNum(startTime.getMonth() + 1) +
    "/" +
    this.toTwoNum(startTime.getDate());
  return Stime;
}
function deleteShi(name) {
  let start = name.split("");
  start.pop();
  return start.join("");
}
export { changeTime, deleteShi };
