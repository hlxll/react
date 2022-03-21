import React, { Component } from "react";
import { ComponAndPropFun, ComponAndProp } from "./componentAndProp";
import StateAndLife from "./stateAndLife";
import RefCompon from "./refCompon";

class Doc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 22,
    };
  }
  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>严格模式检查</p>

        <React.StrictMode>
          <p style={{ textAlign: "center" }}>文档学习</p>
          <p style={{ textAlign: "center" }}>组件和props</p>
          <ComponAndPropFun name="huanglin" age={this.state.age} />
          <ComponAndProp name="huanglin" age={this.state.age} />
          <p style={{ textAlign: "center" }}>state和生命周期</p>
          <StateAndLife />
          <p style={{ textAlign: "center" }}>ref转发</p>
          <RefCompon />
        </React.StrictMode>
      </div>
    );
  }
}
export default Doc;
