import { Component } from "react"
import { Button } from 'antd';
import './index.less'
import {
    MailOutlined,
    DownOutlined,
    MobileOutlined,
    WechatOutlined
  } from '@ant-design/icons';
class Head extends Component {
    render() {
        return (
            <div className="Head">
                <div className="loginTitle">
                    <div className="loginBtn">
                        请<Button type="text">登录</Button>
                        或<Button type="text">免费注册</Button>
                    </div>|
                    <div className="mail">
                        <MailOutlined />
                        <Button type="text">消息</Button>
                        <DownOutlined style={{ fontSize: '12px' }}/>
                    </div>｜
                    <div className="order">
                        <Button type="text">查看订单</Button>
                        <DownOutlined style={{ fontSize: '12px' }}/>
                    </div>|
                    <div className="integral">
                        <Button type="text">积分商城</Button>
                    </div>|
                    <Button type="text">联系客服</Button>|
                    <div className="mobile">
                        <MobileOutlined />
                    </div>
                    
                    <WechatOutlined />
                </div>
            </div>
        )
    }
}
export default Head