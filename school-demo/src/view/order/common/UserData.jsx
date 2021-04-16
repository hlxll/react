import { Component } from "react";
import { Image, Form, Button, Input, Radio, DatePicker, Table, Upload } from "antd";
import { CheckOutlined, AlertOutlined, UploadOutlined } from '@ant-design/icons';
import "./userData.less";
export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData: {
        name: "cbln9694",
        userName: "vawjidv6686",
        birthday: "",
        gender: "保密",
      },
      telephone: '',
      update: true,
      loginEd: false,//手机号码是否设置成功
      historyData: [
        {
          equipment: 'max电脑',
          address: '杭州',
          date: '2021年04月07日',
          time: '21:36:19'
        }
      ],
      historyColumns: [
        {
          title: '日期',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: '时间',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: '地点',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '设备',
          dataIndex: 'equipment',
          key: 'equipment',
        }
      ],
      fileList: []
    };
    this.changeUpdate = this.changeUpdate.bind(this);
    this.closeFormUpdate = this.closeFormUpdate.bind(this);
    this.OnFinish = this.OnFinish.bind(this);
    this.changeTelephone = this.changeTelephone.bind(this);
    this.headSrcPreview = this.headSrcPreview.bind(this);
    this.headSrcChange = this.headSrcChange.bind(this);
  }
  componentDidMount () {
    this.setState({
      telephone: this.changeTelephone('13407934178')
    })

  }
  changeUpdate () {
    this.setState({
      update: false,
    });
  }
  closeFormUpdate () {
    this.setState({
      update: true,
    });
  }
  OnFinish (val) {
    var year = val.birthday._d.getFullYear()
    var month = val.birthday._d.getMonth() + 1;
    var day = val.birthday._d.getDate()
    console.log(year + '/' + month + '/' + day)
  }
  changeTelephone (num) {
    num = num.split('')
    num.splice(3, 4, '****')
    return '86-' + num.join('')
  }
  //上传图片的回调接口
  headSrcPreview (val) {
    console.log('1')
    console.log(val)
  }
  headSrcChange (val) {
    console.log('2')
    console.log(val)
  }
  render () {
    return (
      <div className="userData">
        <div className="userMain">
          <Image width={200} height={200} src="http://img1.qunarzz.com/ucenter/headshot/201308/12/2de63896cb313a2d7c43c4d7.jpg_r_150x150_e4e6796c.jpg" />
          <div className="updateFace">
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={this.state.fileList}
              onPreview={this.headSrcPreview}
              onChange={this.headSrcChange}
            ><Button icon={<UploadOutlined />}>修改头像</Button></Upload></div>
          <div className="detail">
            {this.state.update ? (
              <div className="content">
                <div className="lineContent">
                  <div className="title">昵称</div>
                  <div className="uData">{this.state.UserData.name}</div>
                  <div style={{ marginLeft: '10px' }}>昵称不可用于登录，可随时修改</div>
                </div>
                <div className="lineContent">
                  <div className="title">用户名</div>
                  <div className="uData">{this.state.UserData.userName}</div>
                </div>
                <div className="lineContent">
                  <div className="title">生日</div>
                  <div className="uData">{this.state.UserData.birthday || '未设置'}</div>
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
                    <DatePicker />
                  </Form.Item>
                  <Form.Item name="gender" className="InCity" label="性别">
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
                    <Button style={{ marginLeft: '10px' }} onClick={this.closeFormUpdate}>取消</Button>
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
        <div className="securitySet">
          <div className="title">安全设置</div>
          <div className="content">
            {
              this.state.loginEd ? <CheckOutlined /> : <AlertOutlined />
            }
            <span>手机绑定</span>
            <div className="name">{this.state.telephone}</div>
            <span>手机密码用户，可在手机客户端进行手机号修改</span>
          </div>
        </div>
        <div className="historyLog">
          <div className="title">登录历史 <span style={{ fontSize: '5px', color: '#ddd' }}>以下为您最近的登录记录，或到去哪儿旅行客户端进行设备管理</span></div>
          <div className="content">
            <Table dataSource={this.state.historyData} columns={this.state.historyColumns} showHeader={false} />
          </div>
        </div>
      </div >
    );
  }
}
