import { Component } from "react";
import { Row, Col } from "antd";
import ColMainComponent from "./ColMainComponent";
import "./scienco.less";
class Scienco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      colData: this.props.data,
    };
  }
  render() {
    const ColMain = [];
    this.state.colData.forEach((item, index) => {
      ColMain.push(
        <Col span={6}>
          <ColMainComponent data={item} />
        </Col>
      );
    });
    return (
      <div className="sciencoDiv">
        <div className="sciencoHead">{this.state.name}必游景点</div>
        <div>
          <Row>{ColMain}</Row>
        </div>
      </div>
    );
  }
}
export default Scienco;
