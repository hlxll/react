import React from "react"
import {
    CloseOutlined,
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Tooltip, Radio, Form, Input, Button, message } from 'antd'
import './index.less'
import * as userApi from '../../api/user'
class SmallLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1,
            options: { //默认options参数值
                id: "VerificationCode", //容器Id
                canvasId: "verifyCanvas", //canvas的ID
                width: "80", //默认canvas宽度
                height: "30", //默认canvas高度
                type: "number", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
                numArr: "0,1,2,3,4,5,6,7,8,9".split(",")
            },
            code: "",
            numCode: [],// 验证码数据
            size: 4
        }
        this.userFormRef = React.createRef();
        this.teleFormRef = React.createRef();
        this.onChange = this.onChange.bind(this)
        this.onUserPassFinish = this.onUserPassFinish.bind(this)
        this.onUserPassFailed = this.onUserPassFailed.bind(this)
        this.CreateVerification = this.CreateVerification.bind(this)
        this.refresh = this.refresh.bind(this)
        this.randomNum = this.randomNum.bind(this)
        this.randomColor = this.randomColor.bind(this)
        this.onTelePassFailed = this.onTelePassFailed.bind(this)
        this.onTelePassFinish = this.onTelePassFinish.bind(this)
    }
    componentDidMount () {
        this.CreateVerification()
        this.refresh()
    }
    onChange (e) {
        this.setState({
            value: e.target.value
        })
        if (e.target.value === 2) {
            this.userFormRef.current.resetFields()
        } else {
            this.teleFormRef.current.resetFields()
        }
    }
    async onUserPassFinish (value) {
        console.log(value)
        console.log(this.state.numCode)
        let resData = await userApi.login()
        if (resData.status === 200 && resData.data.login) {
            message.success('登录成功');
        } else {
            message.success('账号或密码错误');
        }
    }
    onUserPassFailed () { }
    onTelePassFinish (value) {
        console.log(value)
    }
    onTelePassFailed () { }
    // 创建验证码
    CreateVerification () {
        var con = document.getElementById(this.state.options.id);
        var canvas = document.createElement("canvas");
        this.setState({
            width: con.offsetWidth > 0 ? con.offsetWidth : "100",
            height: con.offsetHeight > 0 ? con.offsetHeight : "30"
        })
        canvas.id = this.state.options.canvasId;
        canvas.width = this.state.options.width;
        canvas.height = this.state.options.height;
        canvas.style.cursor = "pointer";
        canvas.innerHTML = "您的浏览器版本不支持canvas";
        con.appendChild(canvas);
        var parent = this;
        canvas.onclick = function () {
            parent.refresh();
        }
    }
    randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**生成一个随机色**/
    randomColor (min, max) {
        let r = this.randomNum(min, max);
        let g = this.randomNum(min, max);
        let b = this.randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    refresh () {
        this.setState({
            code: ''
        })
        this.setState({
            numCode: []
        })
        var canvas = document.getElementById(this.state.options.canvasId);
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
        } else {
            return;
        }
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.randomColor(180, 240);
        ctx.fillRect(0, 0, this.state.options.width, this.state.options.height);
        var txtArr = this.state.options.numArr;
        for (var i = 1; i <= this.state.size; i++) {
            if (i === 2) {
                this.setState((state) => {
                    return {
                        code: state + '+'
                    }
                })
                ctx.font = this.randomNum(this.state.options.height / 2, this.state.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色        
                ctx.shadowOffsetX = this.randomNum(-3, 3);
                ctx.shadowOffsetY = this.randomNum(-3, 3);//阴影与字体垂直距离
                ctx.shadowBlur = this.randomNum(-3, 3);//阴影模糊级别
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                let x = this.state.options.width / (this.state.size + 1) * i;
                let y = this.state.options.height / 2;
                let deg = this.randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText('+', 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            } else if (i === 4) {
                this.setState((state) => {
                    return {
                        code: state + '='
                    }
                })
                ctx.font = this.randomNum(this.state.options.height / 2, this.state.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色        
                ctx.shadowOffsetX = this.randomNum(-3, 3);
                ctx.shadowOffsetY = this.randomNum(-3, 3);
                ctx.shadowBlur = this.randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                let x = this.state.options.width / (this.state.size + 1) * i;
                let y = this.state.options.height / 2;
                let deg = this.randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText('=', 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            } else {
                let txt = txtArr[this.randomNum(0, txtArr.length)];
                this.setState((state) => {
                    return {
                        code: state + txt
                    }
                })
                this.setState((state) => {
                    return {
                        numCode: [...state.numCode, txt]
                    }
                })
                ctx.font = this.randomNum(this.state.options.height / 2, this.state.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色        
                ctx.shadowOffsetX = this.randomNum(-3, 3);
                ctx.shadowOffsetY = this.randomNum(-3, 3);
                ctx.shadowBlur = this.randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                var x = this.state.options.width / (this.state.size + 1) * i;
                var y = this.state.options.height / 2;
                var deg = this.randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }

        }
        /**绘制干扰点**/
        for (let i = 0; i < this.state.options.width / 4; i++) {
            ctx.fillStyle = this.randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(this.randomNum(0, this.state.options.width), this.randomNum(0, this.state.options.height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    render () {
        return (
            <div className="login">
                <div className="loginType">
                    <div className="loginClose">
                        <Tooltip title="关闭">
                            <CloseOutlined className="closeClick" onClick={this.props.openLogin} />
                        </Tooltip>
                    </div>
                    <div className="radiuBtn">
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            <Radio value={1}>账号登录</Radio>
                            <Radio value={2}>短信验证码登录</Radio>
                        </Radio.Group>
                    </div>
                    <div className={this.state.value === 1 ? 'UsernamePassword' : 'LoginNone'}>
                        <Form
                            layout="horizontal"
                            ref={this.userFormRef}
                            onFinish={this.onUserPassFinish}
                            onFinishFailed={this.onUserPassFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号/邮箱/用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请输入密码"
                                />
                            </Form.Item>
                            <Form.Item
                                name="code"
                            >
                                <div className="Verification">
                                    <Input placeholder="请输入验证码" />
                                    <div className="VerificationContent" id="VerificationCode" />
                                </div>
                                <Button type="text" className="VerificationBtn" onClick={this.refresh}>换一张</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" min-width="264px" className="loginBtn">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className={this.state.value === 2 ? 'telephonePassword' : 'LoginNone'} >
                        <Form
                            layout="horizontal"
                            ref={this.teleFormRef}
                            onFinish={this.onTelePassFinish}
                            onFinishFailed={this.onTelePassFailed}
                        >
                            <Form.Item
                                name="telephone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your telephone!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入手机号" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your code!',
                                    },
                                ]}
                            >
                                <Input
                                    className="Verification"
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请输入验证码"
                                />
                                <Button type="info" className="VerificationBtn">获取验证码</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" min-width="264px" className="loginBtn">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SmallLogin