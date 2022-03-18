import React, { Component } from "react";
import { ComponAndPropFun, ComponAndProp } from "./componentAndProp";
import StateAndLife from "./stateAndLife";
import ExtendSetup from "./extendAndsetup";

import ContextCom from "./hostComponent/context";
import { MyContext, UserContext } from './hostComponent/createContext'
import FragmentCom from "./hostComponent/fragment";
import HotComponent from "./hostComponent/hotComponent";

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
        <p style={{ textAlign: "center" }}>context学习</p>
        <MyContext.Provider value="MyContext_providerValue">
          <UserContext.Provider value="UserContext_provideValue">
            <ContextCom />
          </UserContext.Provider>
        </MyContext.Provider>
        <p style={{ textAlign: "center" }}>fragment组件</p>
        <FragmentCom></FragmentCom>
        <p style={{ textAlign: "center" }}>高阶组件</p>
        <HotComponent />
      </div>
    );
  }
}
export default Doc;
