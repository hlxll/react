import { Component } from "react";
import Head from "../../component/head";
import OwnOrder from "./common/ownOrder";
import "./index.less";
export default class Order extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="orderMain">
        <Head />
        <div className="orderType">
          <div className="typeBtn">个人信息</div>
          <div className="typeBtn">账号设置</div>
          <div className="typeBtn">我的账户</div>
          <div className="typeBtn">消息</div>
        </div>
        <div className="ownOrder">
          <OwnOrder />
        </div>
      </div>
    );
  }
}
