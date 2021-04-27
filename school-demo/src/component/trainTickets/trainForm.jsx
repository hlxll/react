import { Component } from "react";
import { Form, Menu, Button, Select, DatePicker } from "antd";
import { withRouter } from 'react-router-dom'
import chinaJson from './common/china.json'
import { MailOutlined } from "@ant-design/icons";
import "./trainForm.less";
const { Option } = Select;
class TrainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "1",
      chinaCity: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.OnFinish = this.OnFinish.bind(this);
    this.OnFinishFailed = this.OnFinishFailed.bind(this);
  }
  componentDidMount () {
    let resCity = []
    chinaJson.forEach(item => {
      if (item.province.split('')[2] === '市') {
        resCity.push(item.province)
      } else {
        item.city.map(cityItem =>
          resCity.push(cityItem.name)
        )
      }
    })
    this.setState({
      chinaCity: resCity
    })
  }
  handleClick () { }
  OnFinish (e) {
    console.log(e);
    this.props.history.push('/trainDetail')
  }
  OnFinishFailed () { }
  render () {
    return (
      <div className="trainForm">
        <div className="head">
          <div className="headBtn">
            <Menu
              className="BtnMenu"
              style={{ height: 40 }}
              onClick={this.handleClick}
              selectedKeys={this.state.current}
              mode="horizontal"
            >
              <Menu.Item key="1" icon={<MailOutlined />}>
                站站搜索
              </Menu.Item>
            </Menu>
          </div>
          <div className="headRight">
            <Button type="text">出票状态查询</Button>
            <Button type="text">退票改签</Button>
          </div>
        </div>
        <div className="trainContent">
          <Form
            name="basic"
            className="InForm"
            initialValues={{ remember: true }}
            onFinish={this.OnFinish}
            onFinishFailed={this.OnFinishFailed}
          >
            <Form.Item
              className="start"
              rules={[
                {
                  required: true,
                },
              ]}
              name="startCity"
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="输入城市名或车站名"
                optionFilterProp="children"
              >
                {
                  this.state.chinaCity.map(item => <Option value={item}>{item}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item
              name="date"
              rules={[
                {
                  required: true,
                },
              ]}
              className="date"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="arriveCity"
              className="arriver"
              rules={[
                {
                  required: true,
                },
              ]}
            ><Select
              showSearch
              style={{ width: 200 }}
              placeholder="输入城市名或车站名"
              optionFilterProp="children"
            >
                {
                  this.state.chinaCity.map(item => <Option value={item}>{item}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item className="submitOneForm">
              <Button type="primary" htmlType="submit">
                立即搜索
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default withRouter(TrainForm);
