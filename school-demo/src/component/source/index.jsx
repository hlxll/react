import { Component } from "react";
import { Image } from "antd";
import { NavLink as Link } from "react-router-dom";
import Head from "../head";
import "./index.less";
export default class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="source">
        <Head />
        <div className="imgRouter">
          <Link to={{ pathname: "/" }}>首页</Link>
        </div>
        <p>积分商城</p>
        <p>玩转积分商城，旅行所需一站购</p>
        <div className="sourceNuym">
          <div className="item">
            <Image src="" />
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
