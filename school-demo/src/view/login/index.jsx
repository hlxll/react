import React,{ Component } from "react"
import SmallLogin from '../../component/login'
import LoginHead from '../../component/login/loginHead'
import './index.less'
import { Image, Select, Form, Button, Input } from 'antd';
import VerficationCode from '../../component/login/verificationCode'
const {Option} = Select
class Home extends Component {
    constructor(props) {
        super(props)
        this.verfication = React.createRef();
        this.state = {
            loginOrRegister: true
        }
        this.checkLoginRegister = this.checkLoginRegister.bind(this)
        this.onFinish = this.onFinish.bind(this)
        this.onFinishFailed = this.onFinishFailed.bind(this)
    }
    checkLoginRegister(data){
        this.setState({
            loginOrRegister: data
        })
    }
    onFinish(e){
        console.log(this.verfication.current.state)
        console.log(e)
    }
    onFinishFailed(){}
    render () {
        return (
            <div className="loginMain">
                <div className="head">
                    <LoginHead checkLoginRegister={this.checkLoginRegister}/>
                </div>
                <div className="loginCenter">
                    <div className="logImg">
                        <Image style={{width: 150, height: 50}} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
                        {
                            this.state.loginOrRegister?
                            <span>账号登录</span>
                            :
                            <span>账号注册</span>
                        }
                        
                    </div>
                    {
                        this.state.loginOrRegister?
                        <div className="CenterMain">
                            <div className="MainLeft">
                                <Image
                                    width={200}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
                            </div>
                            <SmallLogin />
                        </div>
                        :
                        <>
                            <Form
                                labelCol={{
                                span: 4,
                                }}
                                wrapperCol={{
                                span: 14,
                                }}
                                layout="horizontal"
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Form.Item label="国家/地区" name="country"
                                style={{ width: 500 }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your telephone!',
                                    },
                                    ]}>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                </Form.Item>
                                <Form.Item
                                    name="telephone"
                                    label="手机号码"
                                    style={{ width: 500 }}
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your telephone!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="登录密码"
                                    style={{ width: 500 }}
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    name="Code"
                                    label="验证码"
                                    style={{ width: 500 }}
                                >
                                    <VerficationCode ref={this.verfication}/>
                                </Form.Item>
                                <Form.Item style={{}}>
                                    <Button type="primary" htmlType="submit">
                                        同意协议并注册
                                    </Button>
                                </Form.Item>
                            </Form>
                        </>
                    }
                    
                </div>
            </div>
        )
    }
}
export default Home