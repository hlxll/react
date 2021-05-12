import React, { Component } from "react";
import {
  Image,
  Carousel,
  DatePicker,
  Form,
  Button,
  InputNumber,
  message,
} from "antd";
import store from "../../../store";
import { withRouter } from "react-router-dom";
import * as groupApi from "../../../api/groupBuy";
import * as buyApi from "../../../api/user";
import moment from "moment";
import "./index.less";
const dateFormat = "YYYY/MM/DD";
class HolidayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselList: [
        "https://imgs.qunarzz.com/vs_ceph_b2c_001/01f2c207-11d0-4964-935e-a9d9daa10f88.jpg_r_390x260x95_3c8281e1.jpg",
        "https://imgs.qunarzz.com/vs_ceph_b2c_001/208d4953-e059-44a4-955a-f435aabb27d5.jpg_r_390x260x95_7d3d0037.jpg",
      ],
      detailData: {
        name:
          "【跟团游】含机票丨下单立减600丨昆明大理丽江泸沽湖/香格里拉6-14天任选丨雪山温泉",
        money: 1568,
        childMoney: 2287,
        productNum: 2406647408,
        moveGroup: ["丽江", "大理", "昆明"],
        productCharac: [
          "玉龙雪山",
          "网红打卡点",
          "洱海私人游艇",
          "赠送大型晚会",
        ],
      },
      PeopleNum: 0,
      HomeNum: 0,
      allMoney: 0,
      startDate: "",
    };
    this.searchData = this.searchData.bind(this);
    this.nowBuyHoliday = this.nowBuyHoliday.bind(this);
  }
  componentDidMount() {
    //度假跳转传递的标题参数，在这个生命周期获取数据
    this.searchData(this.props.location.state.title);
  }
  setNumValue = (e) => {
    let money = 0;
    money += (e + this.state.HomeNum) * this.state.detailData.money;
    this.setState({
      PeopleNum: e,
      allMoney: money,
    });
  };
  setHomeValue = (e) => {
    let money = 0;
    money += (e + this.state.PeopleNum) * this.state.detailData.money;
    this.setState({
      HomeNum: e,
      allMoney: money,
    });
  };
  async searchData(name) {
    let resData = await groupApi.groupList(name);
    let data = resData.data[0];
    console.log(data);
    debugger;
    let obj = {
      name: data.name,
      money: data.money,
      childMoney: data.money / 2,
      productNum: data._id,
      moveGroup: data.moveCity.split(","),
      productCharac: data.productCharac.split(","),
    };
    this.setState({
      detailData: obj,
    });
  }
  async nowBuyHoliday(e) {
    let date = new Date(e.startDate);
    let time =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    if (!store.getState().loginUsername) {
      message.error("请先登录");
      this.props.history.push("/login");
      return;
    }
    let obj = {
      type: 5,
      time: time,
      name: this.state.detailData.name,
      HomeNum: this.state.HomeNum,
      PeopleNum: this.state.PeopleNum,
      money: this.state.allMoney,
      username: store.getState().loginUsername,
    };
    let resData = await buyApi.addOrderList(obj);
    console.log(resData);
    if (resData.data.status == 200) {
      message.success(resData.data.message);
      this.props.history.push("/groupBuying");
    }
  }
  render() {
    return (
      <div id="holidayDetail">
        <div className="holidayHead">
          <div className="holidayCarousel">
            <Carousel>
              {this.state.carouselList.map((item, index) => (
                <div key={index}>
                  <Image src={item} preview={false} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="holidayText">
            <div className="HTName">{this.state.detailData.name}</div>
            <div className="HTMoney">
              <span className="people">
                ￥{this.state.detailData.money}起/人
              </span>
              <span>(儿童￥{this.state.detailData.childMoney})</span>
            </div>
            <div className="holidayProduct">
              <span className="productTitle">产品编号</span>
              <span>{this.state.detailData.productNum}</span>
            </div>
            <div className="holidayProduct">
              <span className="productTitle">浏览城市</span>
              {this.state.detailData.moveGroup.map((item) => (
                <span>{item},</span>
              ))}
            </div>
            <div className="holidayProduct">
              <span className="productTitle">产品特色</span>
              {this.state.detailData.productCharac.map((item) => (
                <div className="characList">{item}</div>
              ))}
            </div>
            <div className="holidayProduct">
              <span className="productTitle">产品编号</span>
              <div className="fuwuList">
                <div className="iconBg" />
                认证商家
              </div>
            </div>
          </div>
        </div>
        <div className="holidayBuy">
          <div className="buyTitle">
            <span className="titleLeft">选择出游日期和人数 </span>
            <span className="titleRight"> 建议至少在当天23:59分前预订</span>
          </div>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.nowBuyHoliday}
            onFinishFailed={this.buyFailed}
          >
            <Form.Item label="出游日期" name="startDate">
              <DatePicker format={dateFormat} />
            </Form.Item>
            <Form.Item label="出行人数">
              <div className="movePeople">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InputNumber
                    min={0}
                    max={6}
                    value={this.state.PeopleNum}
                    onChange={this.setNumValue}
                  />
                </div>
                人员
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <InputNumber
                    min={0}
                    max={6}
                    value={this.state.HomeNum}
                    onChange={this.setHomeValue}
                  />
                </div>
                房间
              </div>
            </Form.Item>
            <Form.Item label="总价">
              <span className="allMoney">{this.state.allMoney}</span>
            </Form.Item>
            <div className="footerBuy">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  立即预订
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default withRouter(HolidayDetail);
