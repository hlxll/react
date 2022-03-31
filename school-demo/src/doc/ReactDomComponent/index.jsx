import React, { Component } from "react";
import ReactDOM from "react-dom";

const renderResult = ReactDOM.render(
    <div>
        render渲染
    </div>,
    //获取节点container，必须是html文件的DOM，不能是react元素,如果之前在这个地方渲染过，再次执行会更新
    document.getElementById('renderId'),
    //可选回调函数，在组件渲染或更新之后执行
    () => {
        console.log(document.getElementById('renderId'));
    }
)
//返回该组件引用,但是尽量避免使用，如果需要可以使用ref回调
renderResult.style.color = 'red'
//访问底层DOM节点，不推荐，推荐使用ref
// ReactDOM.findDOMNode(component)

//创建protal，挂载到其他指定dom上
function Child(props) {
    return ReactDOM.createPortal(props.children, document.getElementById('root'))
}
class RDComponent extends Component {
    constructor(props) {
        super(props);
        this.unmountNode = this.unmountNode.bind(this)
        this.focuButton = this.focuButton.bind(this)

    }
    unmountNode() {
        //从DOM中卸载组件，会将事件和state一并清除，返回布尔值
        ReactDOM.unmountComponentAtNode(document.getElementById('renderId'))

    }
    focuButton(e) {
        console.log(e);
    }
    render() {
        return (
            <div>
                渲染RD
                {/* DOM事件，都是注册的冒泡阶段的事件处理函数，如果想处理捕获阶段的，请使用onClickCapture类似的。加Capture */}
                <button onClickCapture={this.unmountNode} onFocus={this.focuButton}>卸载DOM</button>
                <Child>渲染DOM在外部</Child>
            </div >
        );
    }
}
export default RDComponent;
