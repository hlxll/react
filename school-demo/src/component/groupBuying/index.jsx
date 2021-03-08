import React, { Component } from "react";
import { Form, Input, Image, Radio, Button, Row, Col } from "antd";
import "./index.less";
import {
  VerticalAlignBottomOutlined,
  UpCircleFilled,
  PhoneOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
const { Search } = Input;
class GroupBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyTopOrBottom: true,
    };
    this.groupCitySearch = this.groupCitySearch.bind(this);
    this.formFinish = this.formFinish.bind(this);
    this.clickMoney = this.clickMoney.bind(this);
  }
  groupCitySearch() {}
  formFinish() {}
  clickMoney() {
    this.setState((state) => {
      return {
        moneyTopOrBottom: !state.moneyTopOrBottom,
      };
    });
  }
  render() {
    return (
      <div className="groupBuying">
        <div className="groupHead">
          <p>去哪儿团</p>
          <Search
            className="searchInput"
            placeholder="请输入目的地，主题，关键字"
            onSearch={this.groupCitySearch}
            enterButton
          />
        </div>
        <div className="groupBuyMain">
          <span>目的地：</span>
          <div className="destinationType">
            <Image src="@/img/groupBuy" className="imageAll" />
            <p>全部</p>
          </div>
          <div className="destinationType">
            <Image src="@/img/groupBuy" className="imageAll" />
            <p>周边游</p>
          </div>
          <div className="destinationType">
            <Image src="@/img/groupBuy" className="imageAll" />
            <p>国内游</p>
          </div>
          <div className="destinationType">
            <Image src="@/img/groupBuy" className="imageAll" />
            <p>出境游</p>
          </div>
        </div>
        <div className="formSearch">
          <Form name="form" onFinish={this.formFinish}>
            <div className="toCity">
              <div>目的地</div>
              <div className="selectCity">
                <Form.Item name="chinaCity" label="国内">
                  <Radio.Group className="radioButton">
                    <Radio.Button value="1">丽江</Radio.Button>
                    <Radio.Button value="2">三亚</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="wordCity" label="国外">
                  <Radio.Group className="radioButton">
                    <Radio.Button value="1">泰国</Radio.Button>
                    <Radio.Button value="2">日本</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
            <Form.Item name="travelDate" label="出行日期">
              <Radio.Group className="radioButton">
                <Radio.Button value="3">3月</Radio.Button>
                <Radio.Button value="4">4月</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="travelType" label="出行方式">
              <Radio.Group className="radioButton">
                <Radio.Button value="1">自由行</Radio.Button>
                <Radio.Button value="2">跟团游</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="travelDays" label="出行天数">
              <Radio.Group className="radioButton">
                <Radio.Button value="1">1天</Radio.Button>
                <Radio.Button value="2">2天</Radio.Button>
                <Radio.Button value="1">3天</Radio.Button>
                <Radio.Button value="2">4天</Radio.Button>
                <Radio.Button value="1">5天</Radio.Button>
                <Radio.Button value="2">6天</Radio.Button>
                <Radio.Button value="1">7-9天</Radio.Button>
                <Radio.Button value="2">10-12天</Radio.Button>
                <Radio.Button value="1">13天以上</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="travelStart" label="出发地">
              <Radio.Group className="radioButton">
                <Radio.Button value="1">杭州</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
        <div className="dataQuery">
          <Button>
            推荐
            <VerticalAlignBottomOutlined />
          </Button>
          <Button onClick={this.clickMoney}>
            价格
            <UpCircleFilled
              className={this.state.moneyTopOrBottom ? "" : "rotateMoney"}
            />
          </Button>
          <div className="betweenMoney">
            <p>价格区间：</p>
            <Input />-<Input value="" />
          </div>
        </div>
        <div className="dataSpeak">
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div className="dataMain">
                <div className="type">自由行</div>
                <Image src="" className="image" />
                <div className="title">张家界 3天2夜 自由行</div>
                <div className="text">
                  <p>中旅自营 </p> | <p> 高档酒店</p>|<p>玩转张家界 </p> |{" "}
                  <p> 探险天门山</p>
                </div>
                <div className="money">¥1260</div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="fightIcon">
          <div className="rightIcon">
            <PhoneOutlined />
            <p>95117</p>
          </div>
          <div className="rightIcon">
            <QuestionCircleOutlined />
            <p>帮助中心</p>
          </div>
          <div className="rightIcon">
            <MessageOutlined />
            <p>意见反馈</p>
          </div>
          <div className="rightIcon">
            <UpCircleOutlined />
            <p>返回顶部</p>
          </div>
        </div>
      </div>
    );
  }
}
export default GroupBuy;
