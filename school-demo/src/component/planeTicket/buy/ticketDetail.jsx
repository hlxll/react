import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as planeApi from "../../../api/planeTicket";
import chinaJson from "./china.json";
import { Col, Form, Image, Radio, Select, Row, DatePicker, Button } from "antd";
import "./ticketDetail.less";
const dateFormat = "YYYY/MM/DD";
const { Option } = Select;
class BuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planeList: [],
      moveNum: 1,
      chinaCity: [],
    };
    this.moveChange = this.moveChange.bind(this);
    this.pushDetail = this.pushDetail.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.toTwoNum = this.toTwoNum.bind(this);
  }
  toTwoNum(num) {
    if (num < 10) {
      return 0 + "" + num;
    } else {
      return num;
    }
  }
  async componentDidMount() {
    let propsData = this.props.location.query.data;
    let start = propsData.start.split("");
    start.pop();
    let arrive = propsData.arrive.split("");
    arrive.pop();
    let startTime = new Date(propsData.startTime);
    let Stime =
      startTime.getFullYear() +
      "/" +
      this.toTwoNum(startTime.getMonth() + 1) +
      "/" +
      this.toTwoNum(startTime.getDate());

    let resData = await planeApi.searchPlate(
      start.join(""),
      arrive.join(""),
      Stime
    );
    this.setState({
      planeList: resData.data.data,
    });
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
  moveChange(e) {
    this.setState({
      moveNum: e.target.value,
    });
  }
  pushDetail() {
    this.props.history.push("/PlateTSearch/detail");
    this.props.childData(this.state.planeList);
  }
  async onFinish(e) {
    let date = new Date(e.startDay);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month <= 9) {
      month = 0 + "" + month;
    }
    let day = date.getDate();
    if (day <= 9) {
      day = 0 + "" + day;
    }
    let queryDate = year + "/" + month + "/" + day;

    let sArr = e.start.split("");
    if (sArr.indexOf("市") != -1) {
      sArr.pop();
      e.start = sArr.join("");
    }
    let aArr = e.arriver.split("");
    if (aArr.indexOf("市") != -1) {
      aArr.pop();
      e.arriver = aArr.join("");
    }
    let resData = await planeApi.searchPlate(e.start, e.arriver, queryDate);
    this.setState({
      planeList: resData.data.data,
    });
  }
  onFinishFailed() {}
  //计算时间差
  textTime = (arriver, time) => {
    let arr1 = time.split(":");
    let arr2 = arriver.split(":");
    let newArr = [];
    if (arr2[1] >= arr1[1]) {
      newArr.push(arr2[0] - arr1[0]);
      newArr.push("小时");
      newArr.push(arr2[1] - arr1[1]);
      newArr.push("分钟");
    } else {
      newArr.push(arr2[0] - arr1[0] - 1);
      newArr.push("小时");
      newArr.push(arr2[1] - arr1[1] + 60);
      newArr.push("分钟");
    }
    return newArr.join("");
  };
  render() {
    return (
      <div id="detailTicket">
        <div className="detailHead">
          <div className="">
            <Form
              name="basic"
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item>
                <Radio.Group
                  value={this.state.moveNum}
                  onChange={this.moveChange}
                >
                  <Radio value={1}>单程</Radio>
                  <Radio value={2}>往返</Radio>
                </Radio.Group>
              </Form.Item>
              <div className="startEndCityTime">
                <Row>
                  <Col span={4}>
                    <Form.Item
                      name="start"
                      rules={[
                        {
                          required: true,
                          message: "Please select!",
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="从 国家/城市"
                        optionFilterProp="children"
                      >
                        {this.state.chinaCity.map((item) => (
                          <Option value={item}>{item}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      name="arriver"
                      rules={[
                        {
                          required: true,
                          message: "Please select!",
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="到 国家/城市"
                        optionFilterProp="children"
                      >
                        {this.state.chinaCity.map((item) => (
                          <Option value={item}>{item}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      name="startDay"
                      rules={[
                        {
                          required: true,
                          message: "Please select!",
                        },
                      ]}
                    >
                      <DatePicker format={dateFormat} />
                    </Form.Item>
                  </Col>
                  {this.state.moveNum == 1 ? (
                    ""
                  ) : (
                    <Col span={4}>
                      <Form.Item
                        name="arriveDay"
                        rules={[
                          {
                            required: true,
                            message: "Please select!",
                          },
                        ]}
                      >
                        <DatePicker format={dateFormat} />
                      </Form.Item>
                    </Col>
                  )}

                  <Col span={4}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        min-width="264px"
                        className="loginBtn"
                      >
                        搜索
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Form>
          </div>
        </div>
        <div className="detailMain">
          {this.state.planeList.map((item) => (
            <div className="MainItem" onClick={this.pushDetail}>
              <div className="planeLog">
                <Image src={item.src} />
              </div>
              <div className="MainLeftName">
                <span className="leftNameC">{item.name}</span>
                <div className="leftNameE">{item.Ename}</div>
              </div>
              <div className="MainCenterTime">
                <div className="startEndTime">
                  <span className="SETime">{item.startTime}</span>
                  <p className="SECity">{item.start}</p>
                </div>
                <div className="allTime">
                  {this.textTime(item.arriveTime, item.startTime)}
                </div>
                <div className="startEndTime">
                  <span className="SETime">{item.arriveTime}</span>
                  <p className="SECity">{item.arriver}</p>
                </div>
              </div>
              <div className="rightMoney">
                <div>
                  ￥<span className="rightMoneyText">{item.money}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default withRouter(BuyTickets);
