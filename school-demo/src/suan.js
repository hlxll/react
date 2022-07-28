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

function InterceptorManager() {
  // 用于存放Axios拦截行为及数据请求的Promise链条
  this.handlers = [];
}
// 增加拦截器
InterceptorManager.prototype.use = function (fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  })
}

function Axios(instanceConfig) {
  // defaults 属性为配置对象
  this.defaults = instanceConfig;
  // interceptors 属性用来设置请求和响应拦截器
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  }
}
Axios.prototype.request = function (config) {
  function dispatchRequest() {
    // 将请求方式全部转为大写
    const method = (config.method || "get").toUpperCase();
    // 返回Promise
    return new Promise((resolve, reject) => {
      // 声明xhr
      const xhr = new XMLHttpRequest();
      // 定义一个onreadystatechange监听事件
      xhr.onreadystatechange = function () {
        // 数据全部加载完成
        if (xhr.readyState === 4) {
          // 判断状态码是否正确
          if (xhr.status >= 200 && xhr.status < 300) {
            // 得到响应体的内容
            const data = JSON.parse(xhr.responseText);
            // 得到响应头
            const headers = xhr.getAllResponseHeaders();
            // request 即是 xhr
            const request = xhr;
            // 状态码
            const status = xhr.status;
            // 状态码的说明
            const statusText = xhr.statusText
            resolve({
              config,
              data,
              headers,
              request,
              status,
              statusText
            });
          } else {
            reject("请求失败" + xhr.status + xhr.statusText);
          }
        }
      }
      // http://127.0.0.1/two?a=1&b=2
      // 判断是否拥有params,且类型为object
      if (typeof config.params === "object") {
        // 将object 转为 urlencoded {a:1,b:2} a=1&b=2
        // ["a","b"]
        const arr = Object.keys(config.params);
        // ["a=1","b=2"]
        const arr2 = arr.map(v => v + "=" + config.params[v]);
        // a=1&b=2
        const url = arr2.join("&");
        // config.url = config.url + "?" + url;
        config.url += "?" + url;
      }
      xhr.open(method, config.url);
      // post put patch
      if (method === "POST" || method === "PUT" || method === "PATCH") {
        if (typeof config.data === "object")
          xhr.setRequestHeader("content-type", "application/json");
        else if (typeof config.data === "string")
          xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(JSON.stringify(config.data));
      } else {
        xhr.send();
      }

    })
  }
  // dispatchRequest 发送请求，undefined 用来补位
  var chain = [dispatchRequest, undefined];
  // 遍历实例对象的请求拦截器
  this.interceptors.request.handlers.forEach(interceptor => {
    // 将请求拦截器压入数组的最前面
    chain.unshift(interceptor.fulfilled, interceptor.rejected)
  })
  // 遍历实例对象的响应拦截器
  this.interceptors.response.handlers.forEach(interceptor => {
    // 将请求拦截器压入数组的最后面
    chain.push(interceptor.fulfilled, interceptor.rejected);
  })
  // 创建一个成功的 promise 且成功的值为合并后的请求配置
  let promise = Promise.resolve(config);

  // 如果链条长度不为 0
  while (chain.length) {
    // 依次取出 chain 的回调函数, 并执行
    promise = promise.then(chain.shift(), chain.shift())
  }
  return promise;
}

// axios 本质不是Axios构造函数的实例，而是一个函数对象。函数是request
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  Axios.prototype.request.bind(context);
  // instance 是一个函数。该函数是request,并且内部this指向context.
  var instance = Axios.prototype.request.bind(context);// 等同于上面那行代码
  // 将Axios的原型方法放置到instance函数属性中
  Object.keys(Axios.prototype).forEach(method => {
    instance[method] = Axios.prototype[method].bind(context)
  })
  Object.keys(context).forEach(attr => {
    instance[attr] = context[attr];
  })
  return instance;
}

export default createInstance();