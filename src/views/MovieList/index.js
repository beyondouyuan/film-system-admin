/*
* @Author: beyondouyuan
* @Date:   2019-02-22 14:57:25
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-23 02:02:05
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

import React, { Component } from 'react'
import {
    Table,
    Divider,
    Button
} from 'antd'
import './index.less'
import { requestMovieList, requestDeleteMovie } from '../../api'
import { formatDate } from '../../utils'
const requestCode = 200
const { Column } = Table
// movieId,
      // uid,
export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            isLoading: true,
            pagination: {
              total: 1
            }
        }
    }
    componentDidMount() {
        this.fetchMovieList()
    }
    fetchMovieList() {
      if (this.state.isLoading === false) {
        this.setState({
          isLoading: true
        })
      }
      requestMovieList().then(res => {
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
            movieList: list,
            pagination,
            isLoading: false
          })
        }
      })
    }
    handleEdit(item) {
      console.log(`正在编辑${item.name}`)
    }
    handledelete(item) {
      requestDeleteMovie({
        movieId: item.id,
        uid: 1
      }).then(res => {
        console.log(res)
        this.fetchMovieList()
      })
      console.log(`确定删除${item.name}？`)
    }
    render () {
        const {
          movieList,
          isLoading
        } = this.state
        return (
          <div>
            <Table
              dataSource={movieList}
              rowKey={record => record.id}
              pagination={this.state.pagination}
              bordered
              loading={isLoading}
              scroll={{x: 2000}}
              >
              <Column
                title="电影名称"
                dataIndex="name"
                key="name"
                width="150px"
                align="center"
              />
              <Column
                title="发布国家"
                dataIndex="country"
                key="country"
                width="100px"
                align="center"
              />
              <Column
                title="分类"
                dataIndex="classify"
                key="classify"
                width="80px"
                align="center"
              />
              <Column
                title="上映时间"
                dataIndex="releaseTime"
                key="releaseTime"
                width="150px"
                align="center"
              />
              <Column
                title="海报"
                dataIndex="cover"
                key="cover"
                width="80px"
                align="center"
                render={(text, record, index) => {
                  return <img className="cover" src={record.cover} alt="海报" />

                }}
              />

              <Column
                title="链接"
                dataIndex="link"
                key="link"
                width="100px"
                align="center"
                render={(value, record, index) => {
                  return <a className="link" href={value}>点击观看</a>

                }}
              />
              <Column
                title="评分"
                dataIndex="star"
                key="star"
                width="80px"
                align="center"
              />
              <Column
                title="时长"
                dataIndex="timeLong"
                key="timeLong"
                width="100px"
                align="center"
              />
              <Column
                title="类型"
                dataIndex="type"
                key="type"
                width="120px"
                align="center"
              />
              <Column
                title="主演"
                dataIndex="actors"
                key="actors"
                width="150px"
                align="center"
              />
              <Column
                title="导演"
                dataIndex="director"
                key="director"
                width="150px"
                align="center"
              />
              <Column
                title="状态"
                dataIndex="status"
                key="status"
                width="120px"
                align="center"
                render={(value, record) => {
                  return value === 0 ? '正在热映' : value === 1 ? '即将上映' : '其他'
                }}
              />
              <Column
                title="简述"
                dataIndex="description"
                key="description"
                align="center"
              />
              <Column
                title="票房"
                dataIndex="box"
                key="box"
                align="center"
                width="100px"
              />
              <Column
                title="创建时间"
                dataIndex="createTime"
                key="createTime"
                width="150px"
                align="center"
                render={(value, record) => {
                  return formatDate(value)
                }}
              />
              <Column
                title="操作"
                dataIndex="action"
                key="action"
                align="center"
                width="220px"
                render={(value, record) => (
                  <div>
                    <Button type="primary" icon="edit" onClick={this.handleEdit.bind(this, record)}>编辑</Button>
                    <Divider type="vertical" />
                    <Button type="danger" icon="delete" onClick={this.handledelete.bind(this, record)}>删除</Button>
                  </div>
                )}
              />
            </Table>
          </div>
        )
    }
}
