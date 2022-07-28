<<<<<<< HEAD
var rotate = function (nums, k) {
  if (nums.length == 0) {
    return nums;
  }
  let i = 1;
  while (i <= k) {
    let res = nums.pop();
    nums.unshift(res);
    i++;
  }
};

// var rotate = function (nums, k) {
//   const n = nums.length;
//   const newArr = new Array(n);
//   for (let i = 0; i < n; ++i) {
//     newArr[(i + k) % n] = nums[i];
//   }
//   for (let i = 0; i < n; ++i) {
//     nums[i] = newArr[i];
//   }
// };
console.time();
rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.timeEnd();
=======

var deserialize = function (s) {
  let list = s.split('')
  if (list.length == 0) {
    return ''
  }
  if (list[0] != '[') {
    return +s
  }
  let arr = []
  let result = []
  for (let i = 0; i < list.length; i++) {
    if (list[i] != ']') {
      arr.push(list[i])
    }
    if (list[i] == ']') {
      let popStr = arr.pop()
      let ownArr = []
      let ownStr = []
      while (popStr != '[') {
        if (popStr != ',') {
          ownStr.unshift(popStr)
        } else {
          if (ownStr.length > 0) {
            ownArr.push(+ownStr.join(''))
          }
          ownStr = []
        }
        popStr = arr.pop()
      }
      if (ownStr.length > 0) {
        ownArr.push(+ownStr.join(''))
      }
      if (result.length > 0) {
        ownArr.push(result)
      }
      result = ownArr
    }
  }
  return result
};
console.log(deserialize("324"))
>>>>>>> 80a44bfa80be652e809843c6546ec56f53b556fc
