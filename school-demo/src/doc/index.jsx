import React, { Component } from "react";
import { ComponAndPropFun, ComponAndProp } from "./componentAndProp";
import StateAndLife from "./stateAndLife";
import ExtendSetup from "./extendAndsetup";

import ContextCom from "./hostComponent/context";
import { MyContext, UserContext } from './hostComponent/createContext'
import FragmentCom from "./hostComponent/fragment";
import HotComponent from "./hostComponent/hotComponent";
import YouHua from "./hostComponent/youhua"
import ProtalCom from "./hostComponent/protalCom";
import RefCompon from "./hostComponent/refCompon";
import RenderProp from "./hostComponent/renderProp";
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

        <p style={{ textAlign: "center" }}>render prop术语??</p>
        <RenderProp />
        <p style={{ textAlign: "center" }}>ref获取</p>
        <RefCompon />
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
        <p style={{ textAlign: "center" }}>优化</p>
        <YouHua />
        <p style={{ textAlign: "center" }}>Protal</p>
        <ProtalCom>
          protal挂载到body上
        </ProtalCom>
      </div>
    );
  }
}
export default Doc;
