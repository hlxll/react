import React, { Component } from "react";
import { Image } from "antd";
import "./colMain.less";
class ColMainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render () {
    return (
      <div className="colMain">
        <Image src="https://imgs.qunarzz.com/sight/p0/1508/97/ea51af995c4d4de85c53855302b2f5af.water.jpg_224x148_0a434be8.jpg" preview={false} className="colImage" />
        <div className="colMainDetail">
          <div className="name">{this.state.data.name}</div>
          <div className="detail">{this.state.data.text}</div>
          <div className="money">¥{this.state.data.money}起</div>
        </div>
      </div>
    );
  }
}
export default ColMainComponent;
