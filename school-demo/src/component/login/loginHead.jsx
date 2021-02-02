import { Component } from "react"
import { NavLink as Link } from 'react-router-dom'
import { Button } from 'antd';
class loginHead extends Component {
    constructor(props) {
        super()
    }
    render () {
        return (
            <div style={{textAlign: "right",backgroundColor: "#ddd",paddingRight: "10%"}}>
                <Button type="link">登录</Button>
                <Button type="link">注册</Button>|
                <Link to={{pathname:'/'}} style={{color: '#ff7c00', margin: '0 10px 0 10px'}}>去哪儿网首页</Link>|
                <Button type="link">联系客服</Button>
            </div>
        )
    }
}
export default loginHead