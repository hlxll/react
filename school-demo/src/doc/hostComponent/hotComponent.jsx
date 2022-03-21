import { Component } from "react";

class HotCom extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>高阶组件的参数组件</div>
        )
    }
}
function HotComponent(Children) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name: '黄林'
            }
        }
        render() {
            return (
                <Children name={this.state.name} />
            )
        }
    }
}
export default HotComponent(HotCom);