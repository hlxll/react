import { Component } from "react";
import { Table, message } from "antd";
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  TimePicker,
} from "antd";
import * as planeApi from "../../../api/planeTicket";
import ReactFileReader from "react-file-reader";
import chinaJson from "../china.json";
import Modal from "antd/lib/modal/Modal";
const { Option } = Select;
const { RangePicker } = DatePicker;
export default class ShopConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chinaCity: [],
      tableData: [],
      isModalVisible: false,
      uploadImg: "",
    };
    this.onFinish = this.onFinish.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addPlane = this.addPlane.bind(this);
    this.searchPlaneData = this.searchPlaneData.bind(this);
    this.headSrcChange = this.headSrcChange.bind(this);
  }
  async componentDidMount() {
    let resCity = [];
    chinaJson.forEach((item) => {
      if (item.province.split("")[2] === "市") {
        resCity.push(item.province);
      } else {
        item.city.map((cityItem) => resCity.push(cityItem.name));
      }
    });
    this.setState({
      chinaCity: resCity,
    });
    this.searchPlaneData();
  }
  async searchPlaneData() {
    let resData = await planeApi.searchPlate();
    this.setState({
      tableData: resData.data.data,
    });
  }
  async onFinish(e) {
    let query = e;
    let startTime = new Date(e.arriveTime);
    query.startTime = startTime.getHours() + ":" + startTime.getMinutes();
    let arriveTime = new Date(e.arriveTime);
    query.arriveTime = arriveTime.getHours() + ":" + arriveTime.getMinutes();
    let date = new Date(e.date[0]);
    let date1 = new Date(e.date[1]);
    query.date = [];
    query.date.push(
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
    );
    query.date.push(
      date1.getFullYear() + "/" + (date1.getMonth() + 1) + "/" + date1.getDate()
    );
    console.log(query);

    let resData = await planeApi.addPlane(query);
    message.success("添加成功");
    this.setState({
      isModalVisible: false,
    });
    //关闭弹窗，重新获取数据
    this.searchPlaneData();
  }
  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }
  addPlane(e) {
    this.setState({
      isModalVisible: true,
    });
  }
  //删除该条数据
  async deleteRow(e) {
    console.log(e);
    let res = await planeApi.deletePlane(e._id);
    message.success("删除成功");
    this.searchPlaneData();
  }
  headSrcChange(val) {
    this.state.uploadImg = val.base64;
  }
  render() {
    const columns = [
      {
        title: "航空名称",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "航班名称",
        dataIndex: "Ename",
        key: "Ename",
      },
      {
        title: "出发地",
        dataIndex: "start",
        key: "start",
      },
      {
        title: "终点",
        dataIndex: "arriver",
        key: "arriver",
      },
      {
        title: "价格",
        dataIndex: "money",
        key: "money",
      },
      {
        title: "价格",
        dataIndex: "money",
        key: "money",
        render: (text, row) => (
          <Button onClick={this.deleteRow.bind(this, row)}>删除</Button>
        ),
      },
    ];
    return (
      <div>
        <div>
          <div>
            <Button onClick={this.addPlane}>添加</Button>
          </div>
          <Table columns={columns} dataSource={this.state.tableData} />
        </div>
        <Modal
          maskClosable={false}
          title="添加航班"
          visible={this.state.isModalVisible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form name="dynamic_rule" onFinish={this.onFinish}>
            <Form.Item
              label="出发城市"
              name="start"
              rules={[
                {
                  required: true,
                  message: "Please Select your start",
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="选择国家/城市"
                optionFilterProp="children"
              >
                {this.state.chinaCity.map((item) => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="到达城市"
              name="arriver"
              rules={[
                {
                  required: true,
                  message: "Please Select your arriver",
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="选择国家/城市"
                optionFilterProp="children"
              >
                {this.state.chinaCity.map((item) => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="money"
              label="价格"
              rules={[
                {
                  required: true,
                  message: "Please input your money",
                },
              ]}
            >
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item
              label="日期周期"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input your money",
                },
              ]}
            >
              <RangePicker />
            </Form.Item>
            <Form.Item label="图片上传" name="src">
              <ReactFileReader
                fileTypes={[".png", ".jpg", ".gif", "jpeg"]}
                base64
                multipleFiles={!1}
                handleFiles={this.headSrcChange}
              >
                <Button>上传照片</Button>
              </ReactFileReader>
            </Form.Item>
            <Form.Item
              label="开始时间"
              name="startTime"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <TimePicker />
            </Form.Item>
            <Form.Item
              label="到达时间"
              name="arriveTime"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <TimePicker />
            </Form.Item>
            <Form.Item
              name="name"
              label="公司名称"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please input your name" />
            </Form.Item>
            <Form.Item
              name="Ename"
              label="航班名称"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please input your Ename" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
