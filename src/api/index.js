/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:43:09
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-23 01:58:55
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/
import request from '../utils/request'
import parseAPI from './urls'
import qs from 'qs'
export const requestUserList = params => {
  return request({
    url: parseAPI('user')
  })
  .then(res => res)
}
export const requestMovieList = params => {
  return request({
    url: parseAPI('movie')
  })
  .then(res => res)
}

export const requestCommentList = params => {
  return request({
    url: parseAPI('comment')
  })
  .then(res => res)
}

export const requestCollectList = params => {
  return request({
    url: parseAPI('collect')
  })
  .then(res => res)
}
export const requestLikeList = params => {
  return request({
    url: parseAPI('like')
  })
  .then(res => res)
}
export const requestUploadMovie = data => {
  return request({
    url: parseAPI('movie'),
    method: 'post',
    data
  })
  .then(res => res)
}
export const requestDeleteMovie = data => {
  return request({
    url: parseAPI('movie'),
    method: 'delete',
    data
  })
  .then(res => res)
}

