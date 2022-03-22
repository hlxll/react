import React, { createRef } from "react";
//createPortal实现将dom节点挂载到其他地方，不是默认挂载到最近父节点上
//虽然DOM是不在父DOM下，但是像context这样的功能还是不变的
class RefCompon extends React.Component {
    constructor(props) {
        super(props)
        this.divRef = createRef()
        this.refElement = ''
        this.pullRef = this.pullRef.bind(this)
        this.refCallback = this.refCallback.bind(this)
    }
    pullRef() {
        console.log(this.divRef);
    }
    refCallback() {
        console.log(this.refElement);
    }
    render() {
        return (
            <div>
                {/* ref也可以使用回调函数获取，子组件暴露ref出来 */}
                <RefChild refInput={el => this.refElement = el} />
                <button onClick={this.pullRef}>获取ref</button>
                <button onClick={this.refCallback}>获取Child的ref</button>
                <RefComponent ref={this.divRef} />
            </div>
        )
    }
}
class RefChild extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input ref={this.props.refInput} />
            </div>
        )
    }
}

//函数接收传递的ref，返回渲染函数，创建一个react组件
const RefComponent = React.forwardRef((props, ref) => (
    <div style={{ textAlign: 'center' }} ref={ref}>forwardRef接收ref</div>
))

export default RefCompon;