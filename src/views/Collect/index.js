/*
* @Author: beyondouyuan
* @Date:   2019-02-22 14:58:37
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-22 21:49:24
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
import { requestCollectList } from '../../api'
import { formatDate } from '../../utils'

const requestCode = 200
const { Column } = Table

const columns = [{
    title: '电影海报',
    dataIndex: 'userName',
    key: 'userName',
    width: 150,
    align: 'center',
    render: (value, record) => value ? value : '暂无数据'
  },{
    title: '用户头像',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 150,
    align: 'center',
    render: (value, record) => value ?  <Avatar src={record.avatar} size="large" alt={record.userName} /> : '暂无数据'
  },{
    title: '电影名称',
    dataIndex: 'movieName',
    key: 'movieName',
    width: 150,
    align: 'center',
    render: (value, record) => value ? value : '暂无数据'
  },{
    title: '电影海报',
    dataIndex: 'movieCover',
    key: 'movieCover',
    width: 150,
    align: 'center',
    render: (value, record) => <img className="cover" src={record.movieCover} alt={record.movieCover} />
  },{
    title: '收藏时间',
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
            collectList: [],
            isLoading: true,
            pagination: {
              total: 1
            }

        }
    }
    componentDidMount() {
      this.fetchCollectList()
    }
    fetchCollectList() {
      requestCollectList().then(res => {
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
            collectList: list,
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
    render () {
      const {
        collectList,
        isLoading
      } = this.state
        return (
            <div>
              <Table
                dataSource={collectList}
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
