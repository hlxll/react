import { Component } from "react";
import { Form, Select, Button, Input } from "antd";
import "./groupBuyForm.less";
const { Option } = Select;
class GroupBuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      cityOptions: [],
      hotTitle: [],
      hotType: [],
    };
    this.CitySearch = this.CitySearch.bind(this);
    this.CityChange = this.CityChange.bind(this);
    this.OnFinish = this.OnFinish.bind(this);
    this.OnFinishFailed = this.OnFinishFailed.bind(this);
  }
  OnFinish() {}
  OnFinishFailed() {}
  CitySearch() {}
  CityChange() {}
  render() {
    const cityOptions = this.state.cityOptions.map((d) => (
      <Option key={d.value}>{d.text}</Option>
    ));
    const hotTitle = this.state.hotTitle.map((d) => (
      <Option key={d.value}>{d.text}</Option>
    ));
    const hotType = this.state.hotType.map((d) => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <div className="groupBuyForm">
        <div className="groupBuyContent">
          <Form
            className="groupBuy"
            initialValues={{ remember: true }}
            onFinish={this.OnFinish}
            onFinishFailed={this.OnFinishFailed}
          >
            <Form.Item name="Start" className="Start">
              <Select
                showSearch
                style={{ paddingRight: 10 }}
                value={this.state.country}
                placeholder="出发"
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={this.CitySearch}
                onChange={this.CityChange}
                notFoundContent={null}
              >
                {cityOptions}
              </Select>
            </Form.Item>
            <Form.Item name="InCity" className="InCity">
              <Input placeholder="请输入目的地" />
            </Form.Item>
            <Form.Item className="submitgroupBuyForm">
              <Button type="primary" htmlType="submit">
                立即搜索
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="groupBuyfoot">
          <div className="footName">
            <div className="hotTitle">热门主题</div>
            <div className="hotCity">
              {hotTitle}
              <Button type="text">全部></Button>
            </div>
          </div>
          <div className="footName">
            <div className="hotTitle">热门分类</div>
            <div className="hotCity">
              {hotType}
              <Button type="text">全部></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GroupBuyForm;
