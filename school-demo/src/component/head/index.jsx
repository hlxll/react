import { Component } from "react";
import { Button, Menu, Dropdown } from "antd";
import { NavLink as Link } from "react-router-dom";
import "./index.less";
import {
  MailOutlined,
  DownOutlined,
  MobileOutlined,
  WechatOutlined,
} from "@ant-design/icons";
class Head extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      condition: true,
    };
  }
  render() {
    return (
      <div className="Head">
        <div className="loginTitle">
          <div className="loginBtn">
            请
            <Link to={{ pathname: "/login", query: { type: "login" } }}>
              登录
            </Link>
            或
            <Link to={{ pathname: "/login", query: { type: "register" } }}>
              免费注册
            </Link>
          </div>
          |
          <div className="mail">
            <MailOutlined />
            <Button type="text">消息</Button>
            <DownOutlined style={{ fontSize: "12px" }} />
          </div>
          ｜
          <div className="order">
            <div className="orderBtn">
              <Link to={{ pathname: "/order" }}> 查看订单 </Link>
            </div>
          </div>
          |
          <div className="integral">
            <Button type="text">积分商城</Button>
          </div>
          |<Button type="text">联系客服</Button>|
          <div className="mobile">
            <MobileOutlined />
          </div>
          <WechatOutlined />
        </div>
      </div>
    );
  }
}
export default Head;
