import { Component } from "react";

class ComponAndProp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>class组件</p>
        <span>
          {this.props.name}+{this.props.age}
        </span>
      </div>
    );
  }
}
//默认prop，当他未赋值，但是不能未null的时候
ComponAndProp.defaultProps = {
  name: '默认props'
}
function ComponAndPropFun(props) {
  return (
    <div>
      <p>函数组件</p>
      <span>
        {props.name}+{props.age}
      </span>
    </div>
  );
}
export { ComponAndPropFun, ComponAndProp };
