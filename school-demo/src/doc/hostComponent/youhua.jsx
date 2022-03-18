import React, { Component } from "react";

class YouHua extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red'
        }
    }
    //该生命周期发回布尔值，判断是否需要渲染组件，优化组件渲染
    shouldComponentUpdate(nextProp, nextState) {
        if (this.props.color !== nextProp.color) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <div></div>
        )
    }
}
//可以使用类似“浅比较”的模式来检查 props 和 state 中所有的字段,这个PureComponent就是简单封装该功能
//对于大部分可以使用这个替代上述生命周期，但是特殊情况，比如数组添加一个数据进去，但是数组还是数组，不会更新
class PureCom extends React.PureComponent {
    render() {
        return (
            <div>自动封装了shouldComponentUpdate生命周期</div>
        )
    }
}

export default PureCom;