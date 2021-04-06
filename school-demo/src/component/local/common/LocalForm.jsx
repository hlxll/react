import { Component } from "react";
import { Input, DatePicker, Space, Button } from "antd";
import "./LocalForm.less";
class LocalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "搜索当地自由行最热门的玩法",
    };
  }
  dateChange() {}
  overDateChange() {}
  render() {
    return (
      <div className="localForm">
        <div className="formTitle">{this.state.title}</div>
        <Input
          className="coutriy"
          size="large"
          placeholder="请输入你想去的国家.地区"
        />
        <Space className="startOverDate">
          <DatePicker onChange={this.dateChange} placeholder="开始日期" />
          <DatePicker onChange={this.overDateChange} placeholder="结束日期" />
        </Space>
        <div className="searchBtn">
          <Button>立即搜索</Button>
        </div>
      </div>
    );
  }
}
export default LocalForm;
