import React, { Component } from "react";
import { Image } from "antd";
import "./colMain.less";
class ColMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "鼓浪屿",
      moneyNum: 65,
      detail: "详细介绍",
    };
  }
  render() {
    return (
      <div className="colMain">
        <Image src="" />
        <div className="colMainDetail">
          <div>{this.state.name}</div>
          <div className="detail">{this.state.detail}</div>
          <div className="money">¥{this.state.moneyNum}起</div>
        </div>
      </div>
    );
  }
}
export default ColMainComponent;
