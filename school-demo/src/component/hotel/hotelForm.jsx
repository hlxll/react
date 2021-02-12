import { Component } from "react";
import { Menu, Button, Form, Input, Select, DatePicker } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import "./hotelForm.less";
const { Option } = Select;
class HotelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "1",
    };
    this.handleClick = this.handleClick.bind(this);
    this.hotelFinished = this.hotelFinished.bind(this);
    this.hotelFinishFailed = this.hotelFinishFailed.bind(this);
  }
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }
  hotelFinished(e) {
    console.log(e);
  }
  hotelFinishFailed() {}
  render() {
    return (
      <div className="hotelForm">
        <div className="headBtn">
          <Menu
            className="BtnMenu"
            style={{ height: 40 }}
            onClick={this.handleClick}
            selectedKeys={this.state.current}
            mode="horizontal"
          >
            <Menu.Item key="1" icon={<MailOutlined />}>
              酒店搜索
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              客栈民宿
            </Menu.Item>
          </Menu>
        </div>
        <div className="HotelContent">
          <Form
            name="basic"
            className="OutForm"
            initialValues={{ remember: true }}
            onFinish={this.hotelFinished}
            onFinishFailed={this.hotelFinishFailed}
          >
            <Form.Item
              name="city"
              rules={[
                {
                  required: true,
                },
              ]}
              className="city"
            >
              <Select placeholder="目的地" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                },
              ]}
              className="name"
            >
              <Input placeholder="Basic usage" />
            </Form.Item>
            <Form.Item
              name="inHotelDate"
              rules={[
                {
                  required: true,
                },
              ]}
              className="inHotelDate"
            >
              <DatePicker placeholder="入住日期" />
            </Form.Item>
            <Form.Item
              name="outHotelDate"
              rules={[
                {
                  required: true,
                },
              ]}
              className="outHotelDate"
            >
              <DatePicker placeholder="离店日期" />
            </Form.Item>
            <Form.Item className="submitHotelForm">
              <Button type="primary" htmlType="submit" className="hotelOneBtn">
                立即搜索
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default HotelForm;
