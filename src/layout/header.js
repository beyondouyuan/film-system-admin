/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:28:55
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:28:59
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import React, { Component } from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'

import './header.less'

const SubMenu = Menu.SubMenu
const { Header } = Layout

export default class TopHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
        this.handleClear = this.handleClear.bind(this)
    }
    handleClear(item) {
        if (item.key === 'logOut') {
            this.props.clear()
        }
    }
    render() {
        return (
            <Header style={{background: '#FFFFFF'}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logout" onClick={this.handleClear}>
                    <SubMenu title={<span><Icon type="user" />beyondouyuan</span>}>
                        <Menu.Item key="logoout">
                            <Link to="/login">瑞出</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}

