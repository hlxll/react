import { Component } from "react";
import Head from "../../component/head";
import OwnOrder from "./common/ownOrder";
import UserData from "./common/UserData";
import "./index.less";
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: 2,
    };
  }
  changeTad(id) {
    this.setState({
      orderType: id,
    });
  }
  render() {
    return (
      <div className="orderMain">
        <Head />
        <div className="orderType">
          <div
            className={this.state.orderType == 1 ? "typeBtnClick" : "typeBtn"}
            onClick={this.changeTad.bind(this, 1)}
          >
            个人信息
          </div>
          <div
            className={this.state.orderType == 2 ? "typeBtnClick" : "typeBtn"}
            onClick={this.changeTad.bind(this, 2)}
          >
            账号设置
          </div>
          <div
            className={this.state.orderType == 3 ? "typeBtnClick" : "typeBtn"}
            onClick={this.changeTad.bind(this, 3)}
          >
            我的账户
          </div>
          <div
            className={this.state.orderType == 4 ? "typeBtnClick" : "typeBtn"}
            onClick={this.changeTad.bind(this, 4)}
          >
            消息
          </div>
        </div>
        <div className="ownOrder">
          {this.state.orderType == 1 ? <OwnOrder /> : ""}
          {this.state.orderType == 2 ? <UserData /> : ""}
          {this.state.orderType == 3 ? <OwnOrder /> : ""}
          {this.state.orderType == 4 ? <OwnOrder /> : ""}
        </div>
      </div>
    );
  }
}
