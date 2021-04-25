import React, { Component } from 'react'
import { Form, Input, Radio } from 'antd'
class BuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div id="buyTicket">
        <div className="buyLeft">
          <span>乘客信息</span>
          <span>乘机人信息需与证件保持一致，否则会影响登机</span>
          <div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="radio-group" label="Radio.Group">
                <Radio.Group>
                  <Radio value="a">男</Radio>
                  <Radio value="b">女</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="buyRight">
          <div />
        </div>
      </div>
    )
  }
}
export default BuyTickets;