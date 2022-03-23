import React, { Component, isValidElement } from "react";

import ErrorComponent from "../stateAndLife";

//react对象
// React.isValidElement，判断是否是react对象
//React.Children表示组件子节点：提供许多方法
//map,forEach遍历，count组件数量，only验证是否只有一个子节点，有则返回他，只接收数组参数。
//toArray转为数组，分配key，当你想操作子节点很有用

//动态加载组件，有助于减少bundle体积，并延迟加载在初次渲染时使用的组件，配合suspense使用
const LazyComponent = React.lazy(() => import("./hotComponent"));
function OwnComponent() {
  return (
    // 显示 <ErrorComponent> 组件直至 OtherComponent 加载完成
    <React.Suspense fallback={<ErrorComponent />}>
      <div>
        <LazyComponent />
      </div>
    </React.Suspense>
  );
}
class YouHua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  //该生命周期发回布尔值，判断是否需要渲染组件，优化组件渲染
  shouldComponentUpdate(nextProp, nextState) {
    if (this.props.color !== nextProp.color) {
      return true;
    }
    return false;
  }
  render() {
    return <div></div>;
  }
}
//可以使用类似“浅比较”的模式来检查 props 和 state 中所有的字段,这个PureComponent就是简单封装该功能
//对于大部分可以使用这个替代上述生命周期，但是特殊情况，比如数组添加一个数据进去，但是数组还是数组，不会更新
//只是对比简单数据，复杂数据对比会有对比错误，且shouldComponentUpdate会忽略子组件的prop更新。
//因此要确保子组件是纯展示组件
class PureCom extends React.PureComponent {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div>自动封装了shouldComponentUpdate生命周期</div>
        <p style={{ textAlign: "center" }}>创建element节点</p>
        <CreateNotJsx />
        <p style={{ textAlign: "center" }}>克隆element节点</p>
        <CloneElementCom />
        <p style={{ textAlign: "center" }}>懒加载</p>
        <OwnComponent />
      </>
    );
  }
}

//memo只适用函数组件，对props相同的，渲染结果就相同的组件封装，以记忆组件功能优化渲染，第二次渲染直接
//取用缓存。memo仅检查props。如果有useState或useContext，当context变化，还是会重新渲染
//第二个参数可选，是自定义比较方法
function qreEqual(pre, next) { }
const MemoCompn = React.memo(function MyComponent(prop) { }, qreEqual);

//创建react元素，JSX方式创建组件也会转化成createElement形式,createElement第一个参数可以是组件或html字符串
class CreateNotJsx extends React.Component {
  render() {
    return React.createElement("div", null, []);
  }
}
//克隆其他element，并返回element，大多使用在for展示时候，props合并，ref和key保留
class CloneElementCom extends React.Component {
  render() {
    return React.cloneElement(React.createElement("div", null, []), null, null);
  }
}

export default PureCom;
