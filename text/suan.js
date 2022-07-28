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
