import { Component } from "react";
import { Row, Col } from "antd";
import ColMainComponent from "./ColMainComponent";
import "./scienco.less";
class Scienco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      colData: [1, 2, 3, 4, 5],
    };
  }
  render() {
    const ColMain = [];
    this.state.colData.forEach((item, index) => {
      ColMain.push(
        <Col span={6}>
          <ColMainComponent />
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
