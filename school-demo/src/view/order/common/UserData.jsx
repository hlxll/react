import { Component } from "react";
import ReactFileReader from "react-file-reader";
import { upload } from "../../../api/user";
import store from "../../../store/index";
import {
  Image,
  Form,
  Button,
  Input,
  Radio,
  DatePicker,
  Table,
  message,
} from "antd";
import { CheckOutlined, AlertOutlined } from "@ant-design/icons";
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
      telephone: "",
      update: true,
      loginEd: false, //手机号码是否设置成功
      historyData: [
        {
          equipment: "max电脑",
          address: "杭州",
          date: "2021年04月07日",
          time: "21:36:19",
        },
      ],
      historyColumns: [
        {
          title: "日期",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "时间",
          dataIndex: "time",
          key: "time",
        },
        {
          title: "地点",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "设备",
          dataIndex: "equipment",
          key: "equipment",
        },
      ],
      headImgSrc: "",
    };
    this.changeUpdate = this.changeUpdate.bind(this);
    this.closeFormUpdate = this.closeFormUpdate.bind(this);
    this.OnFinish = this.OnFinish.bind(this);
    this.changeTelephone = this.changeTelephone.bind(this);
    this.headSrcChange = this.headSrcChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      telephone: this.changeTelephone("13407934178"),
    });
    let storeData = store.getState();
    console.log(storeData);
    this.setState({
      headImgSrc: storeData.headImg,
    });
  }
  changeUpdate() {
    this.setState({
      update: false,
    });
  }
  closeFormUpdate() {
    this.setState({
      update: true,
    });
  }
  OnFinish(val) {
    var year = val.birthday._d.getFullYear();
    var month = val.birthday._d.getMonth() + 1;
    var day = val.birthday._d.getDate();
    console.log(year + "/" + month + "/" + day);
  }
  changeTelephone(num) {
    num = num.split("");
    num.splice(3, 4, "****");
    return "86-" + num.join("");
  }
  headSrcChange(val) {
    console.log(val);
    this.setState({
      headImgSrc: val.base64,
    });
    upload("huanglin", val.base64).then((res) => {
      message.success(res.data.message);
    });
  }
  // getBase64Image (img) {
  //   var canvas = document.createElement("canvas");
  //   canvas.width = img.width;
  //   canvas.height = img.height;
  //   var ctx = canvas.getContext("2d");
  //   ctx.drawImage(img, 0, 0, img.width, img.height);
  //   var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
  //   var dataURL = canvas.toDataURL("image/" + ext);
  //   console.log(dataURL)
  // }
  render() {
    return (
      <div className="userData">
        <div className="userMain">
          <Image width={200} height={200} src={this.state.headImgSrc} />
          <div className="updateFace">
            <ReactFileReader
              fileTypes={[".png", ".jpg", ".gif", "jpeg"]}
              base64
              multipleFiles={!1}
              handleFiles={this.headSrcChange}
            >
              <Button>修改头像</Button>
            </ReactFileReader>
          </div>

          <div className="detail">
            {this.state.update ? (
              <div className="content">
                <div className="lineContent">
                  <div className="title">昵称</div>
                  <div className="uData">{this.state.UserData.name}</div>
                  <div style={{ marginLeft: "10px" }}>
                    昵称不可用于登录，可随时修改
                  </div>
                </div>
                <div className="lineContent">
                  <div className="title">用户名</div>
                  <div className="uData">{this.state.UserData.userName}</div>
                </div>
                <div className="lineContent">
                  <div className="title">生日</div>
                  <div className="uData">
                    {this.state.UserData.birthday || "未设置"}
                  </div>
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
                    <Button
                      style={{ marginLeft: "10px" }}
                      onClick={this.closeFormUpdate}
                    >
                      取消
                    </Button>
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
            {this.state.loginEd ? <CheckOutlined /> : <AlertOutlined />}
            <span>手机绑定</span>
            <div className="name">{this.state.telephone}</div>
            <span>手机密码用户，可在手机客户端进行手机号修改</span>
          </div>
        </div>
        <div className="historyLog">
          <div className="title">
            登录历史{" "}
            <span style={{ fontSize: "5px", color: "#ddd" }}>
              以下为您最近的登录记录，或到去哪儿旅行客户端进行设备管理
            </span>
          </div>
          <div className="content">
            <Table
              dataSource={this.state.historyData}
              columns={this.state.historyColumns}
              showHeader={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
