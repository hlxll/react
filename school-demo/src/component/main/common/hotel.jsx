import { Component } from "react";
import { Menu, Row, Col, Image } from "antd";
import * as hotelApi from "../../../api/hotel";
import { MailOutlined } from "@ant-design/icons";
import "./hotel.less";

class PlaneTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "china",
      chinaList: [
        { titel: "试睡员推荐榜", content: "" },
        { titel: "必住主题酒店榜单", content: "主题酒店，享受绝佳体验" },
        { titel: "必住商务酒店榜单", content: "品质商旅，品质随性" },
        { titel: "必住度假酒店榜单", content: "身的休息，心的享受" },
      ],
      wordList: [
        {
          name: "whoe",
          number: 12,
          sawNum: 123,
          address: "江西上饶",
          type: "亲子家庭",
          money: 69,
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    let resData = await hotelApi.searchHotel();
    let resDa = resData.data;
    let wordArr = [];
    for (let i = 0; i < resDa.length; i++) {
      for (let j = 0; j < resDa.length - i - 1; j++) {
        if (resDa[j].number < resDa[j + 1].number) {
          let center = resDa[j];
          resDa[j] = resDa[j + 1];
          resDa[j + 1] = center;
        }
      }
    }
    for (let i = 0; i < (resDa.length >= 5 ? 5 : resDa.length); i++) {
      wordArr.push(resDa[i]);
    }
    console.log(wordArr);
    this.setState({
      wordList: wordArr,
    });
  }
  handleClick(e) {
    console.log(e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="fiveHotel">
        <div className="fiveHotelHead">
          <Menu
            onClick={this.handleClick}
            selectedKeys={this.state.current}
            mode="horizontal"
          >
            <Menu.Item key="china" icon={<MailOutlined />}>
              国内酒店必住榜
            </Menu.Item>
            <Menu.Item key="word" icon={<MailOutlined />}>
              国内酒店推荐
            </Menu.Item>
          </Menu>
        </div>
        <div className="hotelContent">
          {this.state.current == "china" ? (
            <>
              <Row gutter={16}>
                {this.state.chinaList.map((d, index) => {
                  return (
                    <Col key={index} className="gutter-row" span={6}>
                      <div className="hotelText">
                        <p className="title">{d.titel}></p>
                        <p className="content">{d.content}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </>
          ) : (
            <>
              <Row gutter={16}>
                {this.state.wordList.map((d, index) => {
                  return (
                    <Col key={index} className="imgList" span={6}>
                      <div className="hotelImgText">
                        <Image className="hotelImg" src={d.src} />
                        <p className="hotelImgTitle">{d.name}</p>
                        <p className="hotelImgTwo">
                          <span style={{ color: "#00d0d4", fontSize: "14px" }}>
                            {d.number}分
                          </span>
                          <span>{d.sawNum}条评论</span>
                        </p>
                        <p className="hotelImgThree">{d.location}</p>
                        <div className="hotelImgFour">
                          <p className="speak">免费取消</p>
                          {/* <p className="hotelImgType">{d.type}</p> */}
                          <p className="hotelImgMoney">
                            <span className="hotelImgMoneyNum">¥{d.money}</span>
                            起
                          </p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default PlaneTickets;
