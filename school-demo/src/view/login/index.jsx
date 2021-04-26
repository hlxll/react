import React, { Component, Suspense } from "react";
import SmallLogin from "../../component/login";
import LoginHead from "../../component/login/loginHead";
import "./index.less";
import { Image, Select, Form, Button, Input } from "antd";
// import VerficationCode from "../../component/login/verificationCode";
//lazy懒加载，也可以在路由中使用，方式相同
const VerficationCode = React.lazy(() => import('../../component/login/verificationCode'));
const { Option } = Select;
class Home extends Component {
  constructor(props) {
    super(props);
    //getState获取store的state数据
    this.verfication = React.createRef();
    this.state = {
      loginOrRegister: this.props.location.query,
    };
    this.checkLoginRegister = this.checkLoginRegister.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }
  componentDidMount () { }
  onFinishFailed () { }
  onFinish (e) {
    console.log(this.verfication.current.state);
    console.log(e);
  }
  checkLoginRegister (data) {
    let bolle = data ? "login" : "register"
    this.setState({
      loginOrRegister: bolle
    })
  }
  render () {
    return (
      <div className="loginMain">
        <div className="head">
          <LoginHead checkLoginRegister={this.checkLoginRegister} />
        </div>
        <div className="loginCenter">
          <div className="logImg">
            <Image
              style={{ width: 150, height: 50 }}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
            {(this.state.loginOrRegister === "login" ? true : false) ? (
              <span>账号登录</span>
            ) : (
              <span>账号注册</span>
            )}
          </div>
          {(this.state.loginOrRegister === "login" ? true : false) ? (
            <div className="CenterMain">
              <div className="MainLeft">
                <Image
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <SmallLogin />
            </div>
          ) : (
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
                <Form.Item
                  label="国家/地区"
                  name="country"
                  style={{ width: 500 }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your telephone!",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
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
                      message: "Please input your telephone!",
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
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item name="Code" label="验证码" style={{ width: 500 }}>
                  {/* <VerficationCode ref={this.verfication} /> */}
                  <Suspense fallback={<div>Loading...</div>}>
                    <VerficationCode ref={this.verfication} />
                  </Suspense>
                </Form.Item>
                <Form.Item style={{}}>
                  <Button type="primary" htmlType="submit">
                    同意协议并注册
                  </Button>
                </Form.Item>
              </Form>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default Home;
