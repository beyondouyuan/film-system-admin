/*
 * @Author: beyondouyuan
 * @Date:   2019-02-22 16:50:40
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2019-02-23 01:52:26
 * @E-mail: beyondouyuan@gmail.com
 * @Github: https://beyondouyuan.github.io/
 * @description: 写代码就像写诗一样
 * @version: 1.0.0
 */

import reqwest from 'reqwest'

const request = config => {
  const setting = {
    method: 'get',
    type: 'json',
    headers: {
      token: 'irving'
    },
    success: () => {},
    error: () => {},
    data: {},
    ...config
  }
  return reqwest(setting)
}


export default request
