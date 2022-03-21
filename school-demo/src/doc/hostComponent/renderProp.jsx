import { Component } from "react"
//render prop是一种术语，表示：值为函数的prop
class RenderProp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div></div>
        )
    }
}
class Child extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div></div>
        )
    }
}
export default RenderProp;