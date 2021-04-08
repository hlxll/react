import { Component } from "react";
import { Image, Form, Button, Input, Radio } from "antd";
import "./userData.less";
export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData: {
        name: "",
        userData: "",
        birthday: "",
        gender: "",
      },
      update: true,
    };
    this.changeUpdate = this.changeUpdate.bind(this);
  }
  changeUpdate() {
    this.setState({
      update: false,
    });
  }
  render() {
    return (
      <div className="userData">
        <div className="userMain">
          <Image src="" />
          <div className="detail">
            {this.state.update ? (
              <div className="content">
                <div className="lineContent">
                  <div className="title">昵称</div>
                  <div className="uData">{this.state.UserData.name}</div>
                </div>
                <div className="lineContent">
                  <div className="title">用户名</div>
                  <div className="uData">{this.state.UserData.userName}</div>
                </div>
                <div className="lineContent">
                  <div className="title">生日</div>
                  <div className="uData">{this.state.UserData.birthday}</div>
                </div>
                <div className="lineContent">
                  <div className="title">性别</div>
                  <div className="uData">{this.state.UserData.gender}</div>
                </div>
              </div>
            ) : (
              <div className="form">
                <Form
                  className="groupBuy"
                  initialValues={{ remember: true }}
                  onFinish={this.OnFinish}
                  onFinishFailed={this.OnFinishFailed}
                >
                  <Form.Item name="username" className="username" label="昵称">
                    <Input placeholder="请输入你的昵称" />
                  </Form.Item>
                  <Form.Item name="birthday" className="birthday" label="生日">
                    <Input placeholder="请输入你的生日" />
                  </Form.Item>
                  <Form.Item name="birthday" className="InCity" label="性别">
                    <Radio.Group
                      onChange={this.oneRadioOnChange}
                      value={this.state.oneRadio}
                    >
                      <Radio value="1">男</Radio>
                      <Radio value="2">女</Radio>
                      <Radio value="3">保密</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item className="submitgroupBuyForm">
                    <Button type="primary" htmlType="submit">
                      确定
                    </Button>
                    <Button>取消</Button>
                  </Form.Item>
                </Form>
              </div>
            )}
          </div>
          {this.state.update ? (
            <div onClick={this.changeUpdate} className="updateData">
              修改
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
