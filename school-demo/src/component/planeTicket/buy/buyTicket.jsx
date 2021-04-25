import React, { Component } from 'react'
import { Form, Input, Radio, Image, Button } from 'antd'

import './buyTicket.less'
class BuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startCity: '北京',
      arriverCity: '澳门',
      time: '3小时40分',
      planeType: '澳门航空 NX9 空客321(中)经济舱',
      startTime: '05月27日-20:30',
      arriveTime: '05月28日-00:30',
    }
  }
  render () {
    return (
      <div id="buyTicket">
        <div className="buyLeft">
          <span>乘客信息</span>
          <span>乘机人信息需与证件保持一致，否则会影响登机</span>
          <div className="leftForm">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '中文姓名' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="radio-group">
                <Radio.Group>
                  <Radio value="a">男</Radio>
                  <Radio value="b">女</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="Identification"
                rules={[{ required: true, message: '证件号码' }]}
              >
                <Input />
              </Form.Item>
              <div>
                <p>联系人</p>
                <span>请准确填写联系人信息，以便我们与您联系(*为必填项)</span>
              </div>
              <Form.Item
                name="name"
                label="姓名"
                rules={[{ required: true, message: '姓名' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="telephone"
                label="电话"
                rules={[{ required: true, message: '手机号码，用于接收短信' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[{ required: true, message: '电子邮箱，用于接收电子行程单' }]}
              >
                <Input />
              </Form.Item>
              <div className="footerText">
                <span>点击提交订单表示已阅读并同意 </span>
                <a href="http://touch.qunar.com/hd/contentStatement.html">内容声明、锂电池及危险品乘机须知，去哪儿网机票预订网络服务合同</a>
                <span>出票方:官网优选</span>
                <a href="https://qnf.trade.qunar.com/ns/licenseError">工商执照信息</a>
              </div>
              <Form.Item className="submitTwoForm">  
                  <Button type="primary" htmlType="submit">
                    同意并提交订单
                  </Button>
                </Form.Item>
            </Form>
          </div>
        </div>
        <div className="buyRight">
          <div className="buyHead">
            <Image src="../../img/plane/flight_plane.png" /><span>{this.state.startCity+'-'+this.state.arriverCity}</span>
            <p>{this.state.time}</p>
            <p>{this.state.planeType}</p>
          </div>
          <div className="buyTime">
            <div className="startTime">
              <span className="textDay">{this.state.startTime.split('-')[0]}</span>
              <div className="textTime"><span>{this.state.startTime.split('-')[1]}</span></div>
              <span className="textCity">{this.state.startCity}国际机场</span>
            </div>
            <div className="startEndLine">
              飞行时间{this.state.time}
            </div>
            <div className="endTime">
              <span className="textDay">{this.state.arriveTime.split('-')[0]}</span>
              <div className="textTime"><span>{this.state.arriveTime.split('-')[1]}</span></div>
              <span className="textCity">{this.state.arriverCity}国际机场</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BuyTickets;