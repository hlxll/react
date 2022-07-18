
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