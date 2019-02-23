/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:32:42
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:32:45
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import React from 'react'
import {
  Provider
} from 'react-redux';
import './App.less'
import Routes from 'routes'

import configureStore from './store/configureStore'
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
