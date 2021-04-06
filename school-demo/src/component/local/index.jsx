import { Component } from "react";
import { Menu, Image, Row, Col, Pagination } from "antd";
import { MailOutlined, CalendarOutlined } from "@ant-design/icons";
import LocalForm from "./common/LocalForm.jsx";
import LocalData from "./common/LocalData.jsx";
import "./index.less";
class Local extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "杭州",
      localData: {
        money: 27,
        name: "东南亚7国随声Wi-Fi4G香港机场领取不限流量不限时长",
        city: "越南",
        number: 1,
        type: 2,
      },
    };
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
  }
  selectForm() {}
  selectDataType() {}
  onShowSizeChange(size, page) {
    console.log(size);
    console.log(page);
  }
  render() {
    return (
      <div className="local">
        <div className="localform">
          <div className="formContent">
            <Menu
              className="leftMenu"
              style={{ width: 115, height: 240 }}
              defaultSelectedKeys={["1"]}
              onSelect={this.selectForm}
            >
              <Menu.Item key="1" icon={<MailOutlined />}>
                目的地
              </Menu.Item>
              <Menu.Item key="2" icon={<CalendarOutlined />}>
                WIFI租赁
              </Menu.Item>
            </Menu>
            <div className="dataForm">
              <LocalForm />
            </div>
          </div>
          <div className="img">
            <Image src="./img/formRight.png" className="imgWH" />
          </div>
        </div>
        <div className="localDataTitle">{this.state.title}的搜索结果页</div>
        <div className="typeMenu">
          <Menu onSelect={this.selectDataType} mode="horizontal">
            <Menu.Item key="1">全部</Menu.Item>
            <Menu.Item key="2">当地游玩</Menu.Item>
            <Menu.Item key="3">WIFI租赁</Menu.Item>
          </Menu>
        </div>
        <div className="pageHead">
          <Pagination
            showSizeChanger
            defaultCurrent={3}
            onChange={this.onShowSizeChange}
            total={500}
          />
        </div>
        <div className="contentData">
          <Row>
            <Col span={6}>
              <LocalData data={this.state.localData} />
            </Col>
            <Col span={6}>col-8</Col>
            <Col span={6}>col-8</Col>
            <Col span={6}>col-8</Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Local;
