import { Component, React } from "react"
import {
    CloseOutlined,
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Tooltip, Radio, Form, Input, Button } from 'antd'
import './index.less'
class SmallLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
        this.canvasRef = React.createRef();
        this.onChange = this.onChange.bind(this)
        this.onFormValuesChange = this.onFormValuesChange.bind(this)
    }
    onChange (e) {
        this.setState({
            value: e.target.value
        })
    }
    onFormValuesChange () {

    }
    reloadPic () {
        this.drawPic()
    }
    drawPic () {
        let random = ''
        // 去掉了I l i o O
        const str = 'QWERTYUPLKJHGFDSAZXCVBNMqwertyupkjhgfdsazxcvbnm1234567890'
        for (let i = 0; i < this.state.codeLength; i++) {
            let index = Math.floor(Math.random() * 57);
            random += str[index];
        }
        this.setState({
            code: random
        }, () => {
            let canvas = this.canvas.current;
            let ctx = canvas.getContext('2d')
            ctx.textBaseline = 'bottom'
            // 绘制背景
            ctx.fillStyle = this.randomColor(this.state.backgroundColorMin, this.state.backgroundColorMax)
            ctx.fillRect(0, 0, this.state.contentWidth, this.state.contentHeight)
            // 绘制文字
            for (let i = 0; i < this.state.code.length; i++) {
                this.drawText(ctx, this.state.code[i], i)
            }
            this.drawLine(ctx)
            this.drawDot(ctx)
        })
    }
    render () {
        return (
            <div className="login">
                <div className="loginType">
                    <div className="loginClose">
                        <Tooltip title="关闭">
                            <CloseOutlined className="closeClick" onClick={this.closeLeft} />
                        </Tooltip>
                    </div>
                    <div className="radiuBtn">
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            <Radio value={1}>账号登录</Radio>
                            <Radio value={2}>短信验证码登录</Radio>
                        </Radio.Group>
                    </div>
                    <div className="UsernamePassword">
                        <Form
                            layout="horizontal"
                            onValuesChange={this.onFormValuesChange}
                        >
                            <Form.Item>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号/邮箱/用户名" />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请输入密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <div className="Verification">
                                    <Input />
                                    <div className="VerificationContent">
                                        <canvas
                                            onClick={this.reloadPic}
                                            ref={this.canvasRef}
                                            width="100"
                                            height="40"
                                        />
                                    </div>
                                </div>
                                <Button type="text" className="VerificationBtn">换一张</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SmallLogin