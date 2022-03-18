import { Component, Fragment } from "react";

export default class FragmentCom extends Component {
    render() {
        return (
            //Fragment可以使用<>代替，是缩写。唯一支持的属性：key。在for展示时候使用。
            <Fragment>
                <p style={{ textAlign: "center" }}>展示无根组件</p>
                <p style={{ textAlign: "center" }}>展示无根组件</p>
            </Fragment>
        )
    }
}