function changeNum(num, len) {
  console.log(num);
  let newArr = [];
  let show = false;
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] == "a" && num[i + 1] == "b") {
      newArr.push("b");
      newArr.push("b");
      newArr.push("a");
      len++;
      i++;
      show = true;
    } else {
      newArr.push(num[i]);
      if (i == num.length - 2) {
        newArr.push(num[i + 1]);
      }
    }
  }
  if (show) {
    return changeNum(newArr, len);
  } else {
    return len;
  }
}
let arr = "aab".split("");
console.log(changeNum(arr, 0));
