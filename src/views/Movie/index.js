/*
* @Author: beyondouyuan
* @Date:   2019-02-22 14:56:17
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-23 01:59:59
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/
import React, { Component } from 'react'
import {
  Form,
  Icon,
  Upload,
  Input,
  Button,
  Select,
  DatePicker,
  message
} from 'antd'
import './index.less'
//
import { requestUploadMovie } from '../../api'
const { Option } = Select

// name,
//       country,
//       classify,
//       releaseTime,
//       cover,
//       link,
//       timeLong,
//       type,
//       actors,
//       director,
//       status,
//       description,
//       box
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collectList: [],
            isLoading: true,
            isUpdateing: false,
            pagination: {
              total: 1
            },
            cover: '',
            releaseTime: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(event) {
      event.preventDefault()
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const data = {
            ...values,
            cover: this.state.cover,
            releaseTime: this.state.releaseTime,
          }
          console.log(data)
          requestUploadMovie(data).then(res => {
            console.log(res)
          })
        }
      })
    }
    handleChange(info){
      // info.event.preventDefault()
      if (info.file.status === 'uploading') {
        this.setState({ isUpdateing: true });
        return;
      }
      if (info.file.status === 'done') {
        const {
          response
        } = info.file
        const {
          code,
          data: {
            src
          }
        } = response
        if (code === 200) {
          this.setState({
            cover: src,
            isUpdateing: false
          })
        }
        // Get this url from response in real world.
        // getBase64(info.file.originFileObj, cover => this.setState({
        //   cover,
        //   isUpdateing: false,
        // }))
      }
    }
    onChange(date, dateString) {
      console.log(date)
      console.log(dateString);
      this.setState({
        releaseTime: dateString
      })
    }
    render () {
        const { getFieldDecorator } = this.props.form
        const {
          cover
        } = this.state
        const uploadButton = (
          <div>
            <Icon type={this.state.isUpdateing ? 'loading' : 'plus'} />
            <div className="ant-upload-text">电影海报</div>
          </div>
        )
        return (
            <div className="container">
                <div className="form-container">
                  <Form className="login-form">
                    <Form.Item
                      label="影视名称"
                    >
                      {getFieldDecorator('name', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视名称" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('country', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Select initialValue="中国">
                            <Option value="中国">中国</Option>
                            <Option value="泰国">泰国</Option>
                            <Option value="日本">日本</Option>
                            <Option value="韩国">韩国</Option>
                            <Option value="印度">印度</Option>
                            <Option value="美国">美国</Option>
                            <Option value="加拿大">加拿大</Option>
                            <Option value="墨西哥">墨西哥</Option>
                            <Option value="英国">英国</Option>
                            <Option value="法国">法国</Option>
                            <Option value="西班牙">西班牙</Option>
                            <Option value="德国">德国</Option>
                            <Option value="俄罗斯">俄罗斯</Option>
                          </Select>
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('classify', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视分类" />
                      )}
                    </Form.Item>
                    <DatePicker format="YYYY-MM-DD" onChange={this.onChange.bind(this)} placeholder="选择上映时间" />
                    <Form.Item>
                      {getFieldDecorator('link', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视链接" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('timeLong', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视时长" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('type', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视类型" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('box', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视票房" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('actors', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视主演" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('director', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视导演" />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('status', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Select>
                          <Option value="0">正在上映</Option>
                          <Option value="1">即将上映</Option>
                          <Option value="2">全部</Option>
                        </Select>

                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('description', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="影视简述" />
                      )}
                    </Form.Item>
                    <Upload
                      name="cover"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="http://127.0.0.1:8889/api/upload/cover"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChange}
                    >
                      {cover ? <img className="upload-cover" src={cover} alt="cover" /> : uploadButton}
                    </Upload>
                    <Form.Item>
                      <Button type="primary" size="large" onClick={this.handleSubmit.bind(this)} className="login-form-button">
                        确定
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
            </div>
        )
    }
}
// 使用Form.create来构造antd的表单 才能正常使用antd提供的诸如getFieldDecorator等表单方法
const MoviePage = Form.create({ name: 'MovieForm' })(Movie)
export default MoviePage
