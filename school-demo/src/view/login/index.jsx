import { Component } from "react"
import { Button } from 'antd';
import './index.less'
class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="loginTitle">
                    <Button type="text">登录</Button>
                    <Button type="text">注册</Button>|
                    <Button type="text" className="goHome">去哪儿网首页</Button>|
                    <Button type="text">联系客服</Button>
                </div>
            </div>
        )
    }
}
export default Login