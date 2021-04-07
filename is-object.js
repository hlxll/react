
function type (val) {
  function isBuffer (val) {
    if (val.constructor && typeof val.constructor.isBuffer === 'function') {
      return val.constructor.isBuffer(val);
    }
    return false;
  }
  function isError (val) {
    return (
      val instanceof Error ||
      (typeof val.message === 'string' &&
        val.constructor &&
        typeof val.constructor.stackTraceLimit === 'number')
    );
  }
  function isArguments (val) {
    try {
      if (typeof val.length === 'number' && typeof val.callee === 'function') {
        return true;
      }
    } catch (err) {
      if (err.message.indexOf('callee') !== -1) {
        return true;
      }
    }
    return false;
  }
  if (val === void 0) {
    return 'Undefined';
  }
  if (val === null) {
    return 'Null';
  }
  const ctorName = val => {
    return val.constructor ? val.constructor.name : null;
  };
  switch (ctorName(val)) {
    case 'Symbol':
      return 'Symbol';
    case 'Promise':
      return 'Promise';
    case 'Map':
      return 'Map';
    case 'Set':
      return 'Set';
    case 'WeakMap':
      return 'WeakMap';
    case 'WeakSet':
      return 'WeakSet';
  }
  if (isBuffer(val)) {
    return 'Buffer';
  }
  if (isError(val)) {
    return 'Error';
  }
  if (isArguments(val)) {
    return 'Arguments';
  }
  const type = Object.prototype.toString
    .call(val)
    .slice(8, -1)
    .replace(/\s/g, '');
  if (type === 'Number' && val % 1 === 0) {
    return 'Integer';
  }
  if (type === 'Number' && /.*\..*/.test(val)) {
    return 'Float';
  }
  return type;
}
function isFunction (val) {
  return type(val) === 'Function'
}
function isNil (val) {
  return (typeof val === 'undefined') || (val === null)
}
const isObject = val => {
  if (isNil(val)) {
    return false;
  }
  const ctor = val.constructor;
  if (!isFunction(ctor)) {
    return false;
  }
  const prot = ctor.prototype;
  if (type(prot) !== 'Object') {
    return false;
  }
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }
  return type(val) === 'Object';
};
console.log(isObject({ name: '黄林' }))


const objectEqual = (obj1, obj2) => {
  // 当前Object对象
  var propsCurr = Object.getOwnPropertyNames(obj1);
  // 要比较的另外一个Object对象
  var propsCompare = Object.getOwnPropertyNames(obj2);
  if (propsCurr.length != propsCompare.length) {
    return false;
  }
  for (var i = 0, max = propsCurr.length; i < max; i++) {
    var propName = propsCurr[i];
    if (!isObject(obj1[propName]) && !isObject(obj2[propName])) {
      if (obj1[propName] !== obj2[propName]) {
        return false;
      }
    }else if (isObject(obj1[propName]) && isObject(obj2[propName])){
      return objectEqual(obj1[propName], obj2[propName])
    }else{
      return false
    }

  }
  return true;
}
let obj1 = {
  name: '黄林',
  age: {
    name: '黄林'
  }
}
let obj2 = {
  name: '黄林',
  age: {
    name: '123'
  }
}
console.log(objectEqual(obj1, obj2))
