// let arrStr = "DAB*B*ACD".split("");
// function qiuChild(arr) {
//   if (!arr || arr.length < 2) {
//     return arr;
//   }
//   var start = 0;
//   var end = 0;
//   var n = arr.length;
//   function centerEc(left, right) {
//     while (
//       left >= 0 &&
//       right < n &&
//       (arr[left] == arr[right] || arr[left] == "*" || arr[right] == "*")
//     ) {
//       left--;
//       right++;
//     }
//     return right - left - 1;
//   }
//   for (var i = 0; i < n; i++) {
//     let len1 = centerEc(i, i);
//     var len2 = centerEc(i, i + 1);
//     var maxLen = Math.max(len1, len2);
//     if (maxLen > end - start) {
//       start = i - ((maxLen - 1) >> 1);
//       end = i + (maxLen >> 1);
//     }
//   }
//   console.log(arr);
//   console.log(start, end + 1);
//   return arr.slice(start, end + 1);
// }
// console.log(qiuChild(arrStr));

// function quickSort(arr, left, right) {
//   var len = arr.length,
//     partitionIndex,
//     left = typeof left != "number" ? 0 : left,
//     right = typeof right != "number" ? len - 1 : right;

//   if (left < right) {
//     partitionIndex = partition(arr, left, right);
//     quickSort(arr, left, partitionIndex - 1);
//     quickSort(arr, partitionIndex + 1, right);
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   // 分区操作
//   var pivot = left, // 设定基准值（pivot）
//     index = pivot + 1;
//   for (var i = index; i <= right; i++) {
//     if (arr[i] < arr[pivot]) {
//       swap(arr, i, index);
//       index++;
//     }
//   }
//   swap(arr, pivot, index - 1);
//   return index - 1;
// }

// function swap(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function quickSort(array) {
//   function sort(arr, left = 0, right = arr.length - 1) {
//     if (left >= right) {
//       //如果左边的索引大于等于右边的索引说明整理完毕
//       return;
//     }
//     console.log(arr);
//     console.log(arr[right]);
//     let i = left;
//     let j = right;
//     const baseVal = arr[j]; // 取无序数组最后一个数为基准值
//     while (i < j) {
//       //把所有比基准值小的数放在左边大的数放在右边
//       while (i < j && arr[i] <= baseVal) {
//         //找到一个比基准值大的数交换
//         i++;
//       }
//       console.log(arr[i]);
//       arr[j] = arr[i]; // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
//       console.log(arr);
//       while (j > i && arr[j] >= baseVal) {
//         //找到一个比基准值小的数交换
//         j--;
//       }
//       console.log(arr[j]);
//       arr[i] = arr[j]; // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
//     }
//     console.log(arr);
//     arr[j] = baseVal; // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
//     console.log(arr);
//     // sort(arr, left, j - 1); // 将左边的无序数组重复上面的操作
//     // sort(arr, j + 1, right); // 将右边的无序数组重复上面的操作
//   }
//   const newArr = array.concat(); // 为了保证这个函数是纯函数拷贝一次数组
//   sort(newArr);
//   return newArr;
// }
// console.log(quickSort([5, 3, 7, 6, 4, 1, 0, 2, 9, 10, 8]));

function getMaxLengthChar(str) {
  // write code here
  function maxStr(arr, newStr, len) {
    if (arr.length == 0) {
      return [newStr, len];
    }
    if (arr.length == 1) {
      if (len > 1) {
        return [newStr, len];
      } else {
        return [arr[0], 1];
      }
    }
    let moreStr = [];
    moreStr.push(arr[arr.length - 1]);
    let length = arr.length;
    arr.splice(length - 1, 1);
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == moreStr[0]) {
        moreStr.push(arr[i]);
        arr.splice(i, 1);
      }
    }
    console.log(arr);
    console.log(moreStr.length);
    if (moreStr.length > len) {
      newStr = moreStr[0];
      len = moreStr.length;
      if (arr.length > 0) {
        return maxStr(arr, newStr, len);
      }
    } else {
      if (arr.length > 0) {
        return maxStr(arr, newStr, len);
      } else {
        return [newStr, len];
      }
    }
  }
  return maxStr(str.split(""), "", 0);
}
console.log(getMaxLengthChar("abcbabbabacbbcbabacccccc"));
