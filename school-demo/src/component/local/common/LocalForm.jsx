import { Component } from "react";
import { Input, DatePicker, Space, Button, Form } from "antd";
import "./LocalForm.less";
class LocalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "搜索当地自由行最热门的玩法",
      city: "",
    };
  }
  dateChange() {}
  overDateChange() {}
  nowSearch = (e) => {
    console.log(e);
    this.props.getCity(e.city);
  };
  render() {
    return (
      <div className="localForm">
        <div className="formTitle">{this.state.title}</div>
        <Form onFinish={this.nowSearch} name="basic">
          <Form.Item name="city">
            <Input
              className="coutriy"
              size="large"
              placeholder="请输入你想去的国家.地区"
            />
          </Form.Item>
          <Form.Item name="time">
            <Space className="startOverDate">
              <DatePicker onChange={this.dateChange} placeholder="开始日期" />
              <DatePicker
                onChange={this.overDateChange}
                placeholder="结束日期"
              />
            </Space>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              立即搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default LocalForm;
