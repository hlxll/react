function copyObject(obj) {
  let newObj = {};
  let dataArr = obj.getOwnPrototype();
  dataArr.forEach((item) => {
    if (obj[item] && typeof obj[item] == "object") {
      newObj[item] = copyObject(obj[item]);
    }
    if (typeof obj[item] == "number") {
    }
  });
}
