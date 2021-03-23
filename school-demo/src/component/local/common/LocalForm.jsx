import { Component } from "react";
import { Input, DatePicker, Space } from "antd";
class LocalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  dateChange() {}
  overDateChange() {}
  render() {
    return (
      <div className="localForm">
        <div className="formTitle">{this.state.title}</div>
        <Input size="large" placeholder="请输入你想去的国家.地区" />
        <Space>
          <DatePicker onChange={this.dateChange} placeholder="开始日期" />
          <DatePicker onChange={this.overDateChange} placeholder="结束日期" />
        </Space>
      </div>
    );
  }
}
export default LocalForm;
