/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:43:34
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:45:01
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

export const setStorage = (k, v) => {
  localStorage.setItem(k, JSON.stringify(v))
}
export const getStorage = k => {
  return JSON.parse(localStorage.getItem(k))
}
export const removetorage = k => {
  return localStorage.removeItem(k)
}
