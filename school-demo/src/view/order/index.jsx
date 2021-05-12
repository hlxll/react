/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-bind */
import { Component } from "react";
import Head from "../../component/head";
import OwnOrder from "./common/ownOrder";
import UserData from "./common/UserData";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { NavLink as Link } from "react-router-dom";
import "./index.less";
const routeMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
  </Menu>
);
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: 2,
    };
    this.changeTad = this.changeTad.bind(this);
  }
  changeTad(id) {
    this.setState({
      orderType: id,
    });
  }
  render() {
    return (
      <div className="orderMain">
        <div className="leftRouter">
          <div className="shouye">
            <Link to={{ pathname: "/main" }}>首页</Link>
          </div>
          <Dropdown overlay={routeMenu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Hover me <DownOutlined />
            </a>
          </Dropdown>
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
