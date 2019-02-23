/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:28:18
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:28:20
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'


// 仪表盘
import Dashboard from 'views/Dashboard'

// 电影管理
import Movie from 'views/Movie'
import MovieList from 'views/MovieList'

// 数据管理
import Comment from 'views/Comment'
import Star from 'views/Star'
import Collect from 'views/Collect'
import Order from 'views/Order'
// 系统管理
import User from 'views/User'
import Role from 'views/Role'
import Resources from 'views/Resources'

import './content.less'

const { Content } = Layout

export default class Contents extends Component {
    render() {
        return (
            <Content className="content" id="content">
                {/*将首页默认为Dashboard*/}
                {/*<Route path="/" component={Dashboard} />*/}
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create" component={Movie} />
                <Route path="/list" component={MovieList} />
                <Route path="/comment" component={Comment} />
                <Route path="/star" component={Star} />
                <Route path="/collect" component={Collect} />
                <Route path="/order" component={Order} />
                <Route path="/user" component={User} />
                <Route path="/role" component={Role} />
                <Route path="/resources" component={Resources} />
            </Content>
        )
    }
}
