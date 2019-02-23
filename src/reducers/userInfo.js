/*
* @Author: beyondouyuan
* @Date:   2019-02-22 14:30:32
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:34:08
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import * as actionTypes from '../constants/user';

const initialState = {
  userName: 'ouyuan'
};

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_INFO:
            return action.data;
            break;
        default:
            return state
    }
};

export default userInfo;
