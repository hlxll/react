import React, { Component } from "react";
import "./index.less";
let BMap = window.BMap;
class Hmap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //生成百度地图
    this.map = new BMap.Map("bmap");
    //聚焦到杭州
    this.map.centerAndZoom(this.props.pointCity, 10);
    this.drawMap(this.props.point);
  }
  drawMap = (v) => {
    this.map.clearOverlays();
    let point = new BMap.Point(v.longitude, v.latitude);
    this.map.centerAndZoom(point, 40);
    let label = new BMap.Label("<div class='circle'>" + v.label + "</div>", {
      offset: new BMap.Size(0, 0),
      position: point,
    });
    label.setStyle({
      backgroundColor: "tranparent",
      border: "none",
    });
    this.map.addOverlay(label);
  };
  render() {
    return <div id="bmap" style={{ height: "700px" }} />;
  }
}
export default Hmap;
