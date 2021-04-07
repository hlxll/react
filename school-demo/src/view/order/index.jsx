import { Component } from "react";
import Head from "../../component/head";
import OwnOrder from "./common/ownOrder";
import "./index.less";
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: 1,
    };
  }
  render() {
    return (
      <div className="orderMain">
        <Head />
        <div className="orderType">
          <div
            className={this.state.orderType == 1 ? "typeBtnClick" : "typeBtn"}
          >
            个人信息
          </div>
          <div
            className={this.state.orderType == 2 ? "typeBtnClick" : "typeBtn"}
          >
            账号设置
          </div>
          <div
            className={this.state.orderType == 3 ? "typeBtnClick" : "typeBtn"}
          >
            我的账户
          </div>
          <div
            className={this.state.orderType == 4 ? "typeBtnClick" : "typeBtn"}
          >
            消息
          </div>
        </div>
        <div className="ownOrder">
          {this.state.orderType == 1 ? <OwnOrder /> : ""}
          {this.state.orderType == 2 ? <OwnOrder /> : ""}
          {this.state.orderType == 3 ? <OwnOrder /> : ""}
          {this.state.orderType == 4 ? <OwnOrder /> : ""}
        </div>
      </div>
    );
  }
}
