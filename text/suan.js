// function sortArrayData(arrayData) {
//   // write code here
//   for (let i = 0; i < arrayData.length; i++) {
//     for (let j = 0; j < arrayData.length - i - 1; j++) {
//       if (arrayData[j + 1] < arrayData[j]) {
//         let center = arrayData[j];
//         arrayData[j] = arrayData[j + 1];
//         arrayData[j + 1] = center;
//       }
//     }
//   }
//   if (arrayData.length > 1) {
//     for (let i = arrayData.length - 2; i >= 0; i--) {
//       if (arrayData[i + 1] === arrayData[i]) {
//         arrayData.splice(i + 1, 1);
//       }
//     }
//   }
//   return arrayData;
// }
// console.log(sortArrayData([5, 8, 4, 5, 6, 9, 30, 33, 8, 4, 5, 6, 10, 8]));
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 */
function climbStairs(n) {
  // write code here
  let type = 0;
  function climb(n, x) {
    if (n === 0) {
      return;
    }
    if (n >= 1 && x === 1) {
      n = n - 1;
      if (n === 0) {
        type++;
      }

      climb(n, 1);
      climb(n, 2);
    }
    if (n >= 2 && x === 2) {
      n = n - 2;
      if (n === 0) {
        type++;
      }
      climb(n, 1);
      climb(n, 2);
    }
  }
  climb(n, 1);
  climb(n, 2);
  return type;
}
console.log(climbStairs(2));
