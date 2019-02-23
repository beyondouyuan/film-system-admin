/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:30:20
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:30:22
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        // compose(applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension())
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );
};

export default configureStore;


