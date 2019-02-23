/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:30:10
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:30:11
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'

import Layout from 'layout'
import Login from 'views/Login'

const history = createHistory()
const location = history.location
const Routes = () => (
  <div className="app-container">
    <Router
        history={history}
        location={location}
    >
        <Switch>
            <Route exec path="/login" component={Login}></Route>
            <Route exec path="/" component={Layout} />
        </Switch>
    </Router>
  </div>
)


export default Routes
