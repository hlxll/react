import React, { Component } from "react";
import * as hotelApi from "../../../api/hotel";
import {
  Form,
  Radio,
  Select,
  DatePicker,
  Button,
  Row,
  Col,
  Image,
  Modal,
} from "antd";
import { withRouter } from "react-router-dom";
import Hmap from "../../map";
import HotelDetail from "../detail";
import "./search.less";
const Option = Select;
const dateFormat = "YYYY/MM/DD";

class HotelSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chinaCity: "",
      form: {
        hotelMoney: "",
        travelVersion: "",
        trvalType: "",
      },
      hotelNum: 0,
      hotelDetail: [
        {
          src: "",
          name: "北京燕山大酒店",
          number: 4.5,
          type: 1,
          money: 200,
          location: "中关村/五道口·靠近中国人民大学东门",
        },
      ],
      hotelDetailData: {},
      trvalType: ["不限", "浪漫情侣", "亲子精选", "民宿", "钟点房"],
      travelVersion: ["不限", "二星", "三星", "四星", "五星"],
      visible: false,
      mapVisible: false,
      //酒店地图展示坐标
      point: {
        longitude: 115.877477,
        latitude: 28.742922,
        label: "母校",
      },
      pointCity: "",
    };
    this.formFinish = this.formFinish.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
    this.closeMapDetail = this.closeMapDetail.bind(this);
  }
  async componentDidMount() {
    let resData = await hotelApi.searchHotel();
    this.setState({
      hotelDetail: resData.data,
    });
  }
  formFinish() {}
  toDetail(index) {
    console.log(index);
    console.log(this.state.hotelDetail[index]);

    this.setState({
      visible: true,
      hotelDetailData: this.state.hotelDetail[index],
    });
  }
  closeDetail() {
    this.setState({
      visible: false,
    });
  }
  closeMapDetail() {
    this.setState({
      mapVisible: false,
      point: {},
    });
  }
  openMapModal(index) {
    console.log(this.state.hotelDetail[index]);
    let lonlat = this.state.hotelDetail[index].latlon;
    let obj = {
      longitude: lonlat[0],
      latitude: lonlat[1],
      label: this.state.hotelDetail[index].name,
    };
    console.log(obj);

    this.setState({
      mapVisible: true,
      point: obj,
      pointCity: this.state.hotelDetail[index].city,
    });
  }
  render() {
    return (
      <div id="hotelSearch">
        <div className="formSearch">
          <Form
            name="form"
            onFinish={this.formFinish}
            className="hotelHeadForm"
          >
            <div className="searchHead">
              <Row>
                <Col span={4}>
                  <Form.Item name="travelDate" label="目的地">
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name="travelDate" label="入住">
                    <DatePicker format={dateFormat} />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name="travelDate" label="离店">
                    <DatePicker format={dateFormat} />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Button type="primary">搜索</Button>
                </Col>
              </Row>
            </div>
            <Form.Item name="travelDate" label="价格">
              <Radio.Group
                className="radioButton"
                value={this.state.form.hotelMoney}
              >
                <Radio.Button value="1">不限</Radio.Button>
                <Radio.Button value="2">¥150以下</Radio.Button>
                <Radio.Button value="4">¥300-450</Radio.Button>
                <Radio.Button value="4">¥450-600</Radio.Button>
                <Radio.Button value="4">¥600以上</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="travelType" label="星级">
              <Radio.Group
                className="radioButton"
                value={this.state.form.travelVersion}
              >
                {this.state.travelVersion.map((item, index) => (
                  <Radio.Button value={index}>{item}</Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
            <Form.Item name="travelDays" label="热门">
              <Radio.Group
                className="radioButton"
                value={this.state.form.trvalType}
              >
                {this.state.trvalType.map((item, index) => (
                  <Radio.Button value={index}>{item}</Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
        <div className="hotelNum">
          <span>{this.state.hotelNum}</span>家酒店满足条件
        </div>
        <div className="sortHotel">
          <Button>推荐排序</Button>
          <Button>好评优先</Button>
          <Button>价格</Button>
        </div>
        <div className="sortHotelDetail">
          {this.state.hotelDetail.map((item, index) => (
            <div className="sortHotelList">
              <Image src={item.src} className="listLeftImage" />
              <div className="sortHotelListRight">
                <div className="listRightName">
                  <div className="listRightBgLog">{index}</div>
                  <div className="listRightNameText">{item.name}</div>
                  <div>{this.state.travelVersion[index]}</div>
                </div>
                <div className="listRightNum">
                  <span className="listRightNumber">{item.number}分</span>
                  <span>"房间简洁"</span>
                  <span>共2046条评论</span>
                </div>
                <div style={{ marginTop: 10 + "px" }}>{item.location}</div>
                <div className="listRightType">
                  {this.state.trvalType[item.type]}
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Button onClick={this.openMapModal.bind(this, index)}>
                    查看地图
                  </Button>
                </div>
              </div>
              <div className="listRightMoney">
                <div className="listRightMon">
                  ¥<span style={{ fontSize: 30 + "px" }}>{item.money}</span>起
                </div>
                <div className="searchDetail">
                  <Button
                    type="primary"
                    shape="round"
                    onClick={this.toDetail.bind(this, index)}
                  >
                    查看详情
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal
          className="hotelModalDetail"
          style={{ width: "1200px" }}
          title="酒店地图"
          visible={this.state.mapVisible}
          closable
          onCancel={this.closeMapDetail}
          footer={null}
        >
          {this.state.mapVisible ? (
            <Hmap point={this.state.point} city={this.state.pointCity} />
          ) : (
            ""
          )}
        </Modal>
        <Modal
          className="hotelModalDetail"
          style={{ width: "600px" }}
          title="酒店详情"
          visible={this.state.visible}
          closable
          onCancel={this.closeDetail}
          footer={null}
        >
          <HotelDetail data={this.state.hotelDetailData} />
        </Modal>
      </div>
    );
  }
}
export default withRouter(HotelSearch);
