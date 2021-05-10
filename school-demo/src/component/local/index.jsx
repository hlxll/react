import { Component } from "react";
import { Menu, Image, Row, Col, Pagination } from "antd";
import { MailOutlined, CalendarOutlined } from "@ant-design/icons";
import LocalForm from "./common/LocalForm.jsx";
import LocalData from "./common/LocalData.jsx";
import * as localApi from "../../api/local";
import "./index.less";
class Local extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "杭州",
      localData: [
        {
          money: 27,
          name: "东南亚7国随声Wi-Fi4G香港机场领取不限流量不限时长",
          city: "越南",
          num: 1,
          type: 2,
        },
      ],
      dataType: 1,
      localType: 1,
    };
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
    this.searchLocalData = this.searchLocalData.bind(this);
  }
  componentDidMount() {
    this.searchLocalData();
  }
  async searchLocalData(type, location) {
    let resData = await localApi.searchLocal(type, location);
    this.setState({
      localData: resData.data.data,
    });
  }
  selectForm = (e) => {
    console.log(e);
    this.setState({
      localType: +e.key,
    });
  };
  selectDataType = (e) => {
    console.log(e.key);
    if (e.key == -1) {
      this.searchLocalData();
    } else {
      this.searchLocalData(e.key);
    }
  };
  onShowSizeChange(size, page) {
    console.log(size);
    console.log(page);
  }
  localDetail = () => {
    this.props.history.push("/localDetail");
  };
  getChildCity = (e) => {
    console.log(e);
    this.searchLocalData(this.state.localType, e);
  };
  render() {
    let ColMain = [];
    this.state.localData.forEach((item) => {
      ColMain.push(
        <Col span={6} className="localDataCol" onClick={this.localDetail}>
          <LocalData data={item} />
        </Col>
      );
    });
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
              <Menu.Item key="0" icon={<MailOutlined />}>
                目的地
              </Menu.Item>
              <Menu.Item key="1" icon={<CalendarOutlined />}>
                WIFI租赁
              </Menu.Item>
            </Menu>
            <div className="dataForm">
              <LocalForm getCity={this.getChildCity} />
            </div>
          </div>
          <div className="img">
            <Image
              preview={false}
              src="./img/formRight.png"
              className="imgWH"
              height={240}
            />
          </div>
        </div>
        <div className="localDataTitle">{this.state.title}的搜索结果页</div>
        <div className="typeMenu">
          <Menu
            onSelect={this.selectDataType}
            mode="horizontal"
            value={this.state.dataType}
          >
            <Menu.Item key="-1">全部</Menu.Item>
            <Menu.Item key="0">当地游玩</Menu.Item>
            <Menu.Item key="1">WIFI租赁</Menu.Item>
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
          <Row>{ColMain}</Row>
        </div>
      </div>
    );
  }
}
export default Local;
