import { Component } from "react";
import { Input, Form, Radio, Button, Image } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.less";
const { Search } = Input;
class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBottom: true,
      holidayList: [
        {
          title: "标题",
          startCity: "上饶",
          lowTime: "2021-02-11",
          type: "自然风光",
          money: 120,
          number: 10,
          num: 10,
        },
        {
          title: "标题",
          startCity: "上饶",
          lowTime: "2021-02-11",
          type: "自然风光",
          money: 120,
          number: 10,
          num: 10,
        },
      ],
    };
    this.onCitySearch = this.onCitySearch.bind(this);
    this.rotateBottomTop = this.rotateBottomTop.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
    this.byDataSearch = this.byDataSearch.bind(this);
  }
  onCitySearch() {}
  rotateBottomTop() {
    let state = !this.state.toBottom;
    this.setState({
      toBottom: state,
    });
  }
  onFinish() {}
  onFinishFailed() {}
  byDataSearch() {}
  render() {
    const productNum = this.state.holidayList.length;
    return (
      <div className="holiday">
        <div className="holidayInput">
          <Search
            className="searchInput"
            placeholder="请输入目的地，主题，关键字"
            onSearch={this.onCitySearch}
            enterButton
          />
          <div className="toMoreSearch" onClick={this.rotateBottomTop}>
            <span>高级搜索</span>
            <p className={this.state.toBottom ? "toBottom" : "rotateIcon"}>
              <DownOutlined />
            </p>
          </div>
          <div
            className={this.state.toBottom ? "moreQueryForm" : "NoneQueryForm"}
          >
            <Form
              name="MoreQuery"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="关键字"
                name="keyword"
                rules={[{ message: "请输入目的地主题或关键字!" }]}
                style={{ width: 260 }}
              >
                <Input placeholder="请输入目的地主题或关键字" />
              </Form.Item>
              <Form.Item label="出发日期" name="startDate">
                <Radio.Group>
                  <Radio value="a">不限</Radio>
                  <Radio value="b">具体日期</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="行程天数" name="TravelNum">
                <Radio.Group>
                  <Radio value="a">不限</Radio>
                  <Radio value="b">具体行程天数</Radio>
                </Radio.Group>
                <Input style={{ width: 100 }} />～
                <Input style={{ width: 100 }} />
              </Form.Item>
              <Form.Item label="价格区间" name="PriceRange">
                <Input style={{ width: 100 }} />～
                <Input style={{ width: 100 }} />
              </Form.Item>
              <Form.Item label="出行方式" name="TravelMode">
                <Radio.Group>
                  <Radio value="a">不限</Radio>
                  <Radio value="b">自由行</Radio>
                  <Radio value="b">跟团游</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="住宿等级" name="grade">
                <Radio.Group>
                  <Radio value="a">不限</Radio>
                  <Radio value="b">五星级/豪华</Radio>
                  <Radio value="b">四星级/高档</Radio>
                  <Radio value="a">三星级/舒适</Radio>
                  <Radio value="b">二星级/其他</Radio>
                  <Radio value="b">经济型</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  搜索
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="holidayData">
            <div className="head">
              <div className="headAllNum">
                <span>{productNum}</span>个产品满足条件
              </div>
              <div className="headInput">
                <Search
                  placeholder="在结果里继续搜索"
                  onSearch={this.byDataSearch}
                  enterButton
                />
              </div>
            </div>
            <div className="ListMain">
              {this.state.holidayList.map((d, index) => {
                return (
                  <div key={index} className="Datalist">
                    <Image
                      className="img"
                      src="https://imgs.qunarzz.com/vs_ceph_b2c_001/d6dcefcf-0dc2-404d-95dd-c1ec3b3db8cb.jpg_180x120x90_4a6033dd.jpg"
                    />
                    <div className="content">
                      <div className="contentTitle">{d.title}</div>
                      <div className="contentStart">{d.startCity}</div>
                      <div className="lowTime">低价团期:{d.lowTime}出行</div>
                      <div className="type">{d.type}</div>
                    </div>
                    <div className="money">
                      <div className="forPeopleMOney">
                        ¥<div style={{ fontSize: 28 }}>{d.money}</div>起/人
                      </div>
                      <div className="number">
                        {d.number}分｜{d.num}条评分>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="rightSpeak"></div>
      </div>
    );
  }
}
export default Holiday;
