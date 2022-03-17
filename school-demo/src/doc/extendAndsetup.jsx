const { Component } = require("react");


function ExtendSetupChild(props) {
    return (<div>
        <div style={{ textAlign: "center" }}>{props.left}</div>
        <div style={{ textAlign: "center" }}>{props.children}</div>
        <div onClick={props.change}>gaibian</div>
    </div>)
}

class ExtendSetup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'huanglin'
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName() {
        this.setState({
            name: 'xunlinlin'
        })
    }
    render() {
        return (
            <div>
                <p style={{ textAlign: "center" }}>组合使用</p>
                <p style={{ textAlign: "center" }}>{this.state.name}</p>
                <button onClick={this.changeName}>改变</button>

                {/* react没有插槽概念，但是有和VUE插槽一样的功能，使用上不同，没有插槽那么多限制,传递的对象，本质上就是对象,组件中间部分是children，attr添加children无效。
                传递方法，让子组件调用父组件方法*/}
                <ExtendSetupChild left={<div>父组件传递的数据，和VUE的插槽一样</div>} change={this.changeName}>
                    children数据使用组合展示，子组件使用props.children展示
                </ExtendSetupChild>
            </div>
        )
    }
}
export default ExtendSetup;