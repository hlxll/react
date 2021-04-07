import { Component } from "react";
import { Image } from "antd";
import "./LocalData.less";
export default class LocalData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="dataCol">
        <Image src="./img/local/dataBg.jpg" />
        <div className="text">{this.props.data.name}</div>
        <div className="money">￥{this.props.data.money}/天</div>
        <div className="footText">
          <div className="location">{this.props.data.city}</div>
          <div>已售{this.props.data.number}</div>
        </div>
        <div className="leftTop">
          {this.props.data.type == 1 ? "WIFI" : "票卷代购"}
        </div>
      </div>
    );
  }
}
