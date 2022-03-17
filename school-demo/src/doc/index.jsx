import { Component } from "react";
import { ComponAndPropFun, ComponAndProp } from "./componentAndProp";
import StateAndLife from "./stateAndLife";
import ExtendSetup from "./extendAndsetup";



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
        <p style={{ textAlign: "center" }}>文档学习</p>
        <p style={{ textAlign: "center" }}>组件和props</p>
        <ComponAndPropFun name="huanglin" age={this.state.age} />
        <ComponAndProp name="huanglin" age={this.state.age} />
        <p style={{ textAlign: "center" }}>state和生命周期</p>
        <StateAndLife />
        <p style={{ textAlign: "center" }}>组合和继承</p>
        <ExtendSetup />
      </div>
    );
  }
}
export default Doc;
