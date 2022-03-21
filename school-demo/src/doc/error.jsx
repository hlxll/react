import { Component } from "react";

class ErrorComponent extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      hasError: false,
    };
  }
  //只有class组件可以做错误边界，错误边界只可以获取子组件错误，无法捕获自己的错误，如果错误边界无法渲染错误信息，会把错误
  //冒泡往上层最近的错误边界
  //错误边界，定义这两个生命周期之一就行,这个错误边界是一个普通组件一样，props.children会展示子组件
  static getDerivedStateFromError(error) {
    //渲染备用UI
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    //打印错误信息
    logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <span>has error</span>;
    }
    return this.props.children;
  }
}
export default ErrorComponent;
