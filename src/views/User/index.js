/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:32:32
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 21:53:06
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import React, { Component } from 'react'
import {
    Table,
    Divider,
    Button,
    Avatar
} from 'antd'
import './index.less'
import { requestUserList } from '../../api'
import { formatDate } from '../../utils'
const requestCode = 200
const { Column } = Table

const columns = [{
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName',
    width: 150,
    align: 'center'
  },{
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 150,
    align: 'center',
    render: (value, record) => <Avatar src={record.avatar} size="large" alt={record.userName} />
  },{
    title: '用户角色',
    dataIndex: 'role',
    key: 'role',
    width: 150,
    align: 'center',
    render: (value, record) => value === 0 ? '管理员' : '会员'
  },{
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 150,
    align: 'center',
    render: (value, record) => formatDate(value)
  }]

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            isLoading: true,
            pagination: {
              total: 1
            }

        }
    }
    componentDidMount() {
      this.formatActionToColumns()
      this.fetchUserList()
    }
    fetchUserList() {
      requestUserList().then(res => {
        const {
          code,
          data: {
            list,
            total
          }
        } = res
        if (code === requestCode) {
          const {
            pagination
          } = this.state
          pagination.total = total
          this.setState({
            userList: list,
            pagination,
            isLoading: false
          })
        }
      })
    }
    handleEdit(item) {
      console.log(`正在编辑${item.userName}`)
    }
    handledelete(item) {
      console.log(`确定删除${item.userName}？`)
    }
    formatActionToColumns() {
      const actionSheet = {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width: 150,
      align: 'center',
      render: (value, record) => (
          <Button type="danger" icon="delete" onClick={this.handledelete.bind(this, record)}>删除</Button>
        )
      }

      if (columns.length === 4) {
        columns.push(actionSheet)
      }

      return columns

    }
    render () {
      const {
        userList,
        isLoading
      } = this.state
        return (
            <div>
              <Table
                dataSource={userList}
                rowKey={record => record.id}
                pagination={this.state.pagination}
                bordered
                loading={isLoading}
                scroll={{x: 1000}}
                columns={columns}
              >
              </Table>
            </div>
        )
    }
}
