import jwtDecode from "jwt-decode";

// 处理 token
export const isLogin = () => {
  // 判断是否登录就是判断是否有 token
  let token = window.sessionStorage.getItem('token')
  if (!token) return false;
  // 解析 token
  return jwtDecode(token, 'jindu520')
}
// 深拷贝
export const deepClone = (obj) => {
  // 处理环形对象带来的递归栈内存溢出
  let cache = new WeakMap(); // 避免强引用
  function innerDeepClone(obj) {
    // 处理了基本数据类型  undefined null function
    if (typeof obj !== 'object' || !obj) {
      return obj;
    }
    // obj不是方法的参数, 改变的this,由于不同类型的对象的type不同,
    // toString从不同this拿到的就不一样
    // var type = Object.prototype.toString.call(obj);
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    let tmp;
    // 处理非对象和数组
    if (obj instanceof Map) {
      tmp = new Map();
      cache.set(obj, tmp);
      obj.forEach((val, key) => {
        tmp.set(innerDeepClone(key), innerDeepClone(val))
      })
    } else if (obj instanceof Set) {
      tmp = new Set();
      cache.set(obj, tmp);
      obj.forEach(val => {
        tmp.add(innerDeepClone(val))
      })
    } else if (obj instanceof RegExp || obj instanceof Date) {
      tmp = new obj.constructor(obj);
      cache.set(obj, tmp);
    } else {
      tmp = new obj.constructor();
      cache.set(obj, tmp);
      for (let key in obj) {
        tmp[key] = innerDeepClone(obj[key]);
      }
    }
    return tmp;
  }
  return innerDeepClone(obj)
}
// 防抖
export function debounce(fn, wait = 1000) {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this)
    }, wait)
  }
}
// 日期处理
export function plusZero(n){
  return n > 10 ? n : '0' + n
}
export function dateConvert(dateStr){
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const minute = date.getMinutes()
  return year + '-' + plusZero(month) + '-' + plusZero(day)
}