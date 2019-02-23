/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:28:33
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:28:35
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import React, { Component } from 'react'
import { Layout } from 'antd'
import './bottom.less'

const { Footer } = Layout


export default class Bottom extends Component {
    render() {
        return (
            <Footer className="bottom animated bounceInLeft">
                <div className="text">
                    <div>
                        <span className="me"><p>Copyright &copy; 2018 beyondouyuan</p></span>
                        <span className="tips">酒虽好，可不要贪杯哦！</span>
                    </div>
                </div>
            </Footer>
        )
    }
}
