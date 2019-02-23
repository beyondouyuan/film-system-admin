/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:29:53
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 16:29:55
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/


import React, { Component } from 'react'
import { Menu, Icon, Layout, Switch } from 'antd'
import { Link } from 'react-router-dom'
import { allMenu } from 'utils/Menu'
import TopHeader from './header'
import Contents from './content'
import Footer from './bottom'

import './index.less'

const SubMenu = Menu.SubMenu
const { Sider } = Layout

export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'dark',
            current: 'index',
            collapsed: false,
            mode: 'inline'
        }
        this.handleTheme = this.handleTheme.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.handleClick([], 'index')
    }
    handleTheme(value) {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    handleToggle() {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: this.state.collapsed ? 'inline' : 'vertical',
        });
    }
    handleClear() {
        this.setState({
            current: 'index',
        });
    }
    handleClick(event, special) {
        this.setState({
            current: event.key || special,
        });
    }
    render() {
        return (
            <Layout className="layout-container">
                {/*菜单*/}
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    className="leftMenu"
                >
                {this.state.theme === 'light' ? <a href="http://beyondouyuan.github.io" target='_blank' rel='noopener noreferrer'><Icon type="dashboard" className="github" /></a> :
                    <a href="http://beyondouyuan.github.io" target='_blank' rel='noopener noreferrer'><Icon type="dashboard" className="github white" /></a>
                }
                { this.state.theme === 'light' ? <span className="author">FilmSys</span> : <span className="author white">FilmSys</span>
                }
                    <Menu
                        theme={this.state.theme}
                        onClick={this.handleClick}
                        defaultOpenKeys={['']}
                        selectedKeys={[this.state.current]}
                        mode={this.state.mode}
                        className="menu"
                    >
                        {
                            allMenu.map((subMenu) => {
                            /*具有子级的菜单则下拉显示*/
                                if (subMenu.children && subMenu.children.length) {
                                    return (
                                        <SubMenu
                                            key={subMenu.url}
                                            title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}
                                        >
                                            {
                                                subMenu.children.map(menu => (
                                                    <Menu.Item
                                                        key={menu.url}
                                                    >
                                                        <Link to={`/${menu.url}`}>{menu.name}</Link>
                                                    </Menu.Item>
                                                ))
                                            }
                                        </SubMenu>
                                    )
                                }
                            /*无子菜单*/
                                return (
                                    <Menu.Item
                                        key={subMenu.url}
                                    >
                                        <Link to={`/${subMenu.url}`}>
                                            <Icon type={subMenu.icon} />
                                            <span className="nav-text">{subMenu.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                    <div className="switch">
                        <Switch
                            checked={this.state.theme === 'dark'}
                            onChange={this.handleTheme}
                            checkedChildren='Dark'
                            unCheckedChildren='Light'
                        />
                    </div>
                </Sider>
                {/*布局*/}
                <Layout>
                    <TopHeader
                        toggle={this.handleToggle}
                        clear={this.handleClear}
                        collapsed={this.state.collapsed} />
                    <Contents />
                    <Footer />
                </Layout>
            </Layout>
        )
    }
}
