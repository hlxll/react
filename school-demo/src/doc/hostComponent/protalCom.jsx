import React, { Profiler } from "react";
import ReactDOM from 'react-dom'
//createPortal实现将dom节点挂载到其他地方，不是默认挂载到最近父节点上
//虽然DOM是不在父DOM下，但是像context这样的功能还是不变的
class ProtalCom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ReactDOM.createPortal(
            <div>
                <ProfileCom />
                {this.props.children}
            </div>,
            document.body
        )
    }
}
class ProfileCom extends React.Component {
    constructor(props) {
        super(props)
        this.callback = this.callback.bind(this)
    }
    callback(...data) {
        console.log(data);
        // data包括以下参数
        // id, // 发生提交的 Profiler 树的 “id”
        // phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        // actualDuration, // 本次更新 committed 花费的渲染时间
        // baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
        // startTime, // 本次更新中 React 开始渲染的时间
        // commitTime, // 本次更新中 React committed 的时间
        // interactions // 属于本次更新的 interactions 的集合
    }
    render() {
        return (
            <Profiler id="oneDemo" onRender={this.callback}>
                <div>渲染不同节点的时间检测，需要两个参数，id和渲染数据的回调函数</div>
            </Profiler>
        )
    }
}
export default ProtalCom;