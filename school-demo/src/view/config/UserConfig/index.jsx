import React, { Component } from "react";
import { Table, Button, Space, Image, Modal, Select, message } from "antd";
import store from "../../../store";
import * as userApi from "../../../api/user";
const { Option } = Select;
class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isModalVisible: false,
      modalName: "",
      userTypeArr: [],
      userType: [
        "飞机票管理",
        "酒店管理",
        "火车票管理",
        "度假管理",
        "团购管理",
        "门票管理",
        "当地人管理",
      ],
    };
    this.searchUser = this.searchUser.bind(this);
    this.userTypeChange = this.userTypeChange.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.typeForEa = this.typeForEa.bind(this);
  }
  componentDidMount() {
    this.searchUser();
  }
  async searchUser() {
    let resData = await userApi.searchUser();
    this.setState({
      data: resData.data.data,
    });
  }
  async updateJurisdiction(name) {
    this.setState({
      isModalVisible: true,
      modalName: name,
    });
  }
  async deleteUser(name) {
    if (name == store.getState().loginUsername) {
      message.error("不能删除用户自身");
      return;
    }
    let resData = await userApi.deleteUser(name);
    message.success("删除成功");
    this.searchUser();
  }
  async updateAdmin() {
    let resData = await userApi.updateJuris(
      this.state.modalName,
      this.state.userTypeArr.join(",")
    );
    this.setState({
      isModalVisible: false,
    });
    this.searchUser();
  }
  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  userTypeChange(e) {
    this.setState({
      userTypeArr: e,
    });
  }
  typeForEa(text) {
    let res = "";
    text.split(",").map((item) => {
      let num = +item;
      res += this.state.userType[num - 1];
    });
    return res;
  }
  render() {
    const columns = [
      {
        title: "用户名",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "人员类型",
        dataIndex: "jurisdiction",
        key: "jurisdiction",
        render: (text) => (
          <div>
            {text == "admin"
              ? "管理员"
              : text == "ordinary"
              ? "普通用户"
              : this.typeForEa(text)}
          </div>
        ),
      },
      {
        title: "头像",
        dataIndex: "headImg",
        key: "headImg",
        render: (text) => <Image width={100} height={100} src={text} />,
      },
      {
        title: "操作",
        dataIndex: "username",
        key: "username",
        render: (text, record) => (
          <Space size="middle">
            <Button onClick={this.updateJurisdiction.bind(this, text)}>
              权限修改
            </Button>
            <Button onClick={this.deleteUser.bind(this, text)}>删除用户</Button>
          </Space>
        ),
      },
    ];
    const modalChildren = [];
    for (let i = 1; i < 8; i++) {
      modalChildren.push(<Option key={i}>{this.state.userType[i - 1]}</Option>);
    }
    return (
      <div>
        <Table columns={columns} dataSource={this.state.data} />
        <Modal
          title={this.state.modalName + "权限修改"}
          visible={this.state.isModalVisible}
          footer={false}
          onCancel={this.handleCancel}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={this.userTypeChange}
          >
            {modalChildren}
          </Select>
          <div style={{ marginTop: "10px", textAlign: "right" }}>
            <Button type={"primary"} onClick={this.updateAdmin}>
              修改
            </Button>
            <Button onClick={this.handleCancel}>取消</Button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Config;
