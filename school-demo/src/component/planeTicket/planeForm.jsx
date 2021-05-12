import { Component } from "react";
import { Menu, Button, Form, Space, Select, Radio, DatePicker } from "antd";
import { NavLink as Link, withRouter } from "react-router-dom";
import Multipass from "./multipass";
import "./planeForm.less";
import chinaJson from "../china.json";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
class PlaneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chinaCity: [],
      current: "2",
      oneRadio: "one", //国内的行程类型
      twoRadio: "one", //国外的行程类型
    };
    this.handleClick = this.handleClick.bind(this);
    this.OneOnFinish = this.OneOnFinish.bind(this);
    this.OneOnFinishFailed = this.OneOnFinishFailed.bind(this);
    this.oneRadioOnChange = this.oneRadioOnChange.bind(this);
    this.twoRadioOnChange = this.twoRadioOnChange.bind(this);
    this.TwoOnFinish = this.TwoOnFinish.bind(this);
    this.TwoOnFinishFailed = this.TwoOnFinishFailed.bind(this);
    this.onStartCityChange = this.onStartCityChange.bind(this);
    this.onStartCitySearch = this.onStartCitySearch.bind(this);
    this.onArriverCityChange = this.onArriverCityChange.bind(this);
    this.onArriverCitySearch = this.onArriverCitySearch.bind(this);
  }
  componentDidMount() {
    let resCity = [];
    chinaJson.forEach((item) => {
      if (item.province.split("")[2] === "市") {
        resCity.push(item.province);
      } else {
        item.city.map((cityItem) => resCity.push(cityItem.name));
      }
    });
    this.setState({
      chinaCity: resCity,
    });
  }
  handleClick(e) {
    this.setState({ current: e.key });
  }
  OneOnFinish(e) {
    console.log(e);
    this.props.history.push({
      pathname: "/PlateTSearch",
      query: { data: e },
    });
  }
  OneOnFinishFailed() {
    console.log("不成功");
  }
  TwoOnFinish(e) {
    this.props.history.push({
      pathname: "/PlateTSearch",
      query: { data: e },
    });
  }
  TwoOnFinishFailed() {
    console.log("不成功");
  }
  oneRadioOnChange(e) {
    this.setState({
      oneRadio: e.target.value,
    });
  }
  twoRadioOnChange(e) {
    this.setState({
      twoRadio: e.target.value,
    });
  }
  // 智能搜索的起始城市选择
  onStartCityChange() {}
  onStartCitySearch() {}
  onArriverCityChange() {}
  onArriverCitySearch() {}
  render() {
    return (
      <div className="planeForm">
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
                国内机票
              </Menu.Item>
              <Menu.Item key="2" icon={<AppstoreOutlined />}>
                国外机票
              </Menu.Item>
            </Menu>
          </div>
          <div className="headRight">
            {this.props.plane && this.props.plane === "plane" ? (
              <>
                <Link to={{ pathname: "" }}>我的订单</Link>
              </>
            ) : (
              <>
                <Space>
                  <Link to={{ pathname: "" }}>出票状态查询</Link>
                  <Link to={{ pathname: "" }}>退票改签</Link>
                </Space>
              </>
            )}
          </div>
        </div>
        <div className="TwoForm">
          {+this.state.current === 1 ? (
            <Form
              name="basic"
              className="InForm"
              initialValues={{ remember: true }}
              {...formItemLayout}
              onFinish={this.OneOnFinish}
              onFinishFailed={this.OneOnFinishFailed}
            >
              <Form.Item className="one">
                <Radio.Group
                  onChange={this.oneRadioOnChange}
                  value={this.state.oneRadio}
                >
                  <Radio value="one">单程</Radio>
                  <Radio value="two">往返</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                className="two"
                name="start"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="输入国家地区城市/机场"
                  allowClear
                  showSearch
                >
                  {this.state.chinaCity.map((item) => (
                    <Option value={item}>{item}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="startTime"
                rules={[
                  {
                    required: true,
                  },
                ]}
                className="three"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="arrive"
                className="four"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="输入国家地区城市/机场"
                  allowClear
                  showSearch
                >
                  {this.state.chinaCity.map((item) => (
                    <Option value={item}>{item}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="arriveTime"
                rules={
                  this.state.oneRadio === "one"
                    ? []
                    : [
                        {
                          required: true,
                        },
                      ]
                }
                className="five"
              >
                {this.state.oneRadio === "one" ? (
                  <DatePicker disabled />
                ) : (
                  <DatePicker />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="submitOneForm"
                >
                  立即搜索
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form
              name="basic"
              className="OutForm"
              initialValues={{ remember: true }}
              {...formItemLayout}
              onFinish={this.TwoOnFinish}
              onFinishFailed={this.TwoOnFinishFailed}
            >
              <Form.Item className="one">
                <Radio.Group
                  onChange={this.twoRadioOnChange}
                  value={this.state.twoRadio}
                >
                  <Radio value="one">单程</Radio>
                  <Radio value="two">往返</Radio>
                  <Radio value="three">智能搜索</Radio>
                  <Radio value="four">多程</Radio>
                </Radio.Group>
              </Form.Item>
              {this.state.twoRadio === "one" ||
              this.state.twoRadio === "two" ? (
                <>
                  <Form.Item
                    className="two"
                    name="start"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="输入国家地区城市/机场"
                      allowClear
                      showSearch
                    >
                      {this.state.chinaCity.map((item) => (
                        <Option value={item}>{item}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="startTime"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    className="three"
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    name="arrive"
                    className="four"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="输入国家地区城市/机场"
                      showSearch
                      allowClear
                    >
                      {this.state.chinaCity.map((item) => (
                        <Option value={item}>{item}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="arriveTime"
                    rules={
                      this.state.twoRadio === "one"
                        ? []
                        : [
                            {
                              required: true,
                            },
                          ]
                    }
                    className="five"
                  >
                    {this.state.twoRadio === "one" ? (
                      <DatePicker disabled />
                    ) : (
                      <DatePicker />
                    )}
                  </Form.Item>
                </>
              ) : (
                <>
                  {this.state.twoRadio === "three" ? (
                    <>
                      <Form.Item name="startCity" className="startCity">
                        <Select
                          showSearch
                          style={{ width: 100 }}
                          placeholder="输入城市"
                          optionFilterProp="children"
                          onChange={this.onStartCityChange}
                          onSearch={this.onStartCitySearch}
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="tom">Tom</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item name="arriverCity" className="arriverCity">
                        <Select
                          showSearch
                          style={{ width: 300 }}
                          placeholder="输入城市"
                          optionFilterProp="children"
                          onChange={this.onArriverCityChange}
                          onSearch={this.onArriverCitySearch}
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="tom">Tom</Option>
                        </Select>
                      </Form.Item>
                    </>
                  ) : (
                    <Multipass />
                  )}
                </>
              )}
              {this.state.twoRadio !== "four" ? (
                <Form.Item className="submitTwoForm">
                  <Button type="primary" htmlType="submit">
                    立即搜索
                  </Button>
                </Form.Item>
              ) : (
                ""
              )}
            </Form>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(PlaneForm);
