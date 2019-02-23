/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:30:43
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:30:44
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

export const allMenu = [{
  name: '仪表盘',
  url: 'dashboard',
  icon: 'wallet',
}, {
  name: '电影管理',
  url: 'movie',
  icon: 'safety',
  children: [{
    name: '添加电影',
    url: 'create'
  }, {
    name: '电影列表',
    url: 'list'
  }],
}, {
  name: '数据管理',
  url: 'statement',
  icon: 'usergroup-add',
  children: [{
    name: '评论管理',
    url: 'comment'
  }, {
    name: '评分管理',
    url: 'star'
  }, {
    name: '收藏管理',
    url: 'collect'
  }, {
    name: '订单管理',
    url: 'order'
  }, ],
}, {
  name: '系统管理',
  url: 'sys',
  icon: 'setting',
  children: [{
    name: '用户管理',
    url: 'user'
  }, {
    name: '角色管理',
    url: 'role'
  }, {
    name: '资源管理',
    url: 'resources'
  }]
}]
