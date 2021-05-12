import { Component } from "react";
import { Row, Col, Image, Button, message } from "antd";
import ColMainComponent from "./ColMainComponent";
import { NavLink as Link } from "react-router-dom";
import * as buyApi from "../../../api/user";
import { withRouter } from "react-router-dom";

import store from "../../../store";
import "./scienco.less";
import Modal from "antd/lib/modal/Modal";
class Scienco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      colData: this.props.data,
      ticketModal: false,
      modalTicketDetail: {},
    };
    this.buyTicket = this.buyTicket.bind(this);
  }
  ticketDetail = (item) => {
    console.log(item);
    this.setState({
      ticketModal: true,
      modalTicketDetail: item,
    });
  };
  handleCancel = () => {
    this.setState({
      ticketModal: false,
    });
  };
  async buyTicket() {
    if (!store.getState().loginUsername) {
      message.error("请先登录");
      this.props.history.push("/login");
      return;
    }
    let Data = this.state.modalTicketDetail;
    let obj = {
      type: 6,
      name: Data.name,
      money: Data.money,
      city: Data.city,
      username: store.getState().loginUsername,
    };
    let resData = await buyApi.addOrderList(obj);
    message.success("添加成功");
  }
  render() {
    const ColMain = [];
    this.props.data.forEach((item, index) => {
      ColMain.push(
        <Col span={6} onClick={this.ticketDetail.bind(this, item)}>
          <ColMainComponent data={item} />
        </Col>
      );
    });
    return (
      <div className="sciencoDiv">
        <div className="sciencoHead">{this.props.name}必游景点</div>
        <div>
          <Row>{ColMain}</Row>
        </div>
        <Modal
          width={1000}
          title="门票预定"
          footer={null}
          visible={this.state.ticketModal}
          onCancel={this.handleCancel}
        >
          <div className="headMain">
            <Image
              preview={false}
              src="https://imgs.qunarzz.com/sight/p0/1904/ad/ad852cd6480654d3a3.img.jpg_710x360_4ef588d1.jpg"
            />
            <div className="headRight">
              <div className="headRightName">
                <span className="headRightNameName">
                  {this.state.modalTicketDetail.name}
                </span>
                <span className="headRightNameType">
                  {this.state.modalTicketDetail.ticketType}A景区
                </span>
              </div>
              <div>自游行的绝佳选择</div>
              <div>
                位置：{this.state.modalTicketDetail.location}
                <Button style={{ marginLeft: "10px" }}>
                  <Link
                    to={{
                      pathname: "/ticketsMap",
                      query: {
                        latlon: this.state.modalTicketDetail.latlon,
                        city: this.props.name,
                        name: this.state.modalTicketDetail.name,
                      },
                    }}
                  >
                    查看地图
                  </Link>
                </Button>
              </div>
              <div>
                用户点评：
                <span style={{ color: "#f60" }}>
                  {this.state.modalTicketDetail.number}
                </span>
                /5分
              </div>
              <div className="headRightFooterBtn">
                <span style={{ color: "#f60" }}>
                  ￥{this.state.modalTicketDetail.money}
                </span>
                起
                <Button type="primary" onClick={this.buyTicket}>
                  立刻预订
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default withRouter(Scienco);
