/* eslint-disable react/jsx-no-bind */
import { Component } from "react";
import Head from "../../component/head";
import OwnOrder from "./common/ownOrder";
import UserData from "./common/UserData";
import { Button } from 'antd'
import "./index.less";
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: 2,
    };
    this.changeTad = this.changeTad.bind(this)
  }
  changeTad (id) {
    this.setState({
      orderType: id,
    });
  }
  render () {
    return (
      <div className="orderMain">
        <div className="leftRouter">
          <div className="shouye">首页</div>
          <div className="route">网站导航
            <div className="allRouter"></div>
          </div>
        </div>
        <Head />
        <div className="orderType">
          <div
            className={this.state.orderType === 1 ? "typeBtnClick" : "typeBtn"}
            onClick={this.changeTad.bind(this, 1)}
          >
            个人信息
          </div>
          <div
            className={this.state.orderType === 2 ? "typeBtnClick" : "typeBtn"}
            onClick={this.changeTad.bind(this, 2)}
          >
            账号设置
          </div>
        </div>
        <div className="ownOrder">
          {this.state.orderType === 1 ? <OwnOrder /> : ""}
          {this.state.orderType === 2 ? <UserData /> : ""}
        </div>
      </div>
    );
  }
}
