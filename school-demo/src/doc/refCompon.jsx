import React, { Component } from "react";

//只有forwardRef第二个参数有ref，函数和class不存在ref，prop也没有ref。
const ChildCom = React.forwardRef((props, ref) => (
  <button ref={ref}>change</button>
));
class RefCom extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.pullRef = this.pullRef.bind(this);
  }
  pullRef() {
    let ele = this.childRef;
    console.log(ele);
  }
  render() {
    return (
      <div>
        <ChildCom ref={this.childRef} />
        <button onClick={this.pullRef}>获取ref</button>
      </div>
    );
  }
}
export default RefCom;
