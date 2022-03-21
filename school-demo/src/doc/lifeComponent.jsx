import { Component } from "react";

class LifeComponent extends Component {
  //不初始化state，不绑定方法this，可以不要controller，挂载前调用
  //不要使用setState，直接初始state，不要引入任何副作用和订阅。
  constructor(prop) {
    //挂载，更新是执行
    super(prop);
    this.state = {};
  }
  //组件挂载后执行componentDidMount，请求数据展示DOM的可以在这里调用，适合添加订阅。这里可以获取DOM
  //需要获取DOM实现功能的，可以在这里
  //使用setState会触发额外渲染，此渲染会在浏览器更新屏幕之前
  componentDidMount() {
    //挂载时执行
  }
  //render之前调用，初始挂载和更新都会调用，返回对象更新state，只用于state依赖于props使用
  static getDerivedStateFromProps() {
    //   ？？？？？？
    //更新，挂载是执行
  }
  //不常用：根据返回布尔值，判断react组件的输出是否受props和state影响，默认state变化会重新渲染。
  //使用forceUpdate不会执行该方法。这个用于性能优化，少使用，可以考虑SureComponent
  //返回false，子组件还是会重新渲染，不建议定义深层比较，影响性能
  shouldComponentUpdate(nextProp, nextState) {
    //更新时执行
  }
  getSnapshotBeforeUpdate() {
    //更新时执行
  }
  //更新后执行，首次渲染不会执行，可以进行DOM操作，可以直接调用setState，但是小心死循环
  componentDidUpdate() {
    //更新时执行
  }
  //只有class组件可以做错误边界，错误边界只可以获取子组件错误，无法捕获自己的错误，如果错误边界无法渲染错误信息，会把错误
  //冒泡往上层最近的错误边界
  //错误边界，定义这两个生命周期之一就行,这个错误边界是一个普通组件一样，props.children会展示子组件
  static getDerivedStateFromError(error) {
    //错误处理执行
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    //错误处理执行
    //打印错误信息
    // logErrorToMyService(error, errorInfo);
  }
  //组件销毁和卸载前调用执行一些清理操作
  componentWillUnmount() {
    //卸载时执行
  }
  //render应该是纯函数，不直接与浏览器交互shouldComponentUpdate返回false，就不会执行render
  render() {
    //挂载是执行
    return <div>生命周期</div>;
  }
}
export default LifeComponent;
