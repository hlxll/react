import { Component } from "react";
import { Table, message, Radio, Image } from "antd";
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  TimePicker,
} from "antd";
import * as localApi from "../../../api/local";
import ReactFileReader from "react-file-reader";
import chinaJson from "../china.json";
import Modal from "antd/lib/modal/Modal";
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
export default class GroupConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chinaCity: [],
      tableData: [],
      isModalVisible: false,
      uploadImg: "",
      radioValue: "K",
    };
    this.onFinish = this.onFinish.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addPlane = this.addPlane.bind(this);
    this.searchPlaneData = this.searchPlaneData.bind(this);
    this.headSrcChange = this.headSrcChange.bind(this);
    this.radioTypeChange = this.radioTypeChange.bind(this);
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
    let resData = await localApi.searchLocal();
    console.log(resData);

    this.setState({
      tableData: resData.data.data,
    });
  }
  radioTypeChange(e) {
    console.log(e.target.value);
    this.setState({
      radioValue: e.target.value,
    });
  }
  allTime = (time1, time2) => {
    console.log(time1);
    console.log(time2);

    let start = time1.split(":");
    let arrive = time2.split(":");
    let resTime = [];
    if (arrive[1] >= start[1]) {
      resTime.push(arrive[0] - start[0]);
      resTime.push(arrive[1] - start[1]);
    } else {
      resTime.push(arrive[0] - start[0] - 1);
      resTime.push(arrive[1] - start[1] + 60);
    }
    return resTime.join(".");
  };
  async onFinish(e) {
    let query = e;
    let location = query.location.split("");
    location.pop();
    query.location = location.join("");
    query.num = 5;
    query.src = this.state.uploadImg;
    let resData = await localApi.addLocal(query);
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
    let res = await localApi.deleteLocal(e._id);
    message.success("删除成功");
    this.searchPlaneData();
  }
  headSrcChange(val) {
    this.state.uploadImg = val.base64;
  }
  render() {
    const columns = [
      {
        title: "名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "图形",
        dataIndex: "src",
        key: "src",
        render: (text) => <Image src={text} width={100} preview={false} />,
      },
      {
        title: "类型",
        dataIndex: "type",
        key: "type",
        render: (text) => (text == 1 ? <span>WIFI</span> : <span>当地游</span>),
      },
      {
        title: "地址",
        dataIndex: "location",
        key: "location",
      },
      {
        title: "评分",
        dataIndex: "num",
        key: "num",
      },
      {
        title: "价格",
        dataIndex: "money",
        key: "money",
        render: (text) => <a>{text}元</a>,
      },
      {
        title: "操作",
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
          footer={null}
          title="添加门票"
          footer={null}
          visible={this.state.isModalVisible}
          onCancel={this.handleCancel}
        >
          <Form name="dynamic_rule" onFinish={this.onFinish}>
            <Form.Item
              label="目的地"
              name="location"
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
              name="name"
              label="名称"
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
              name="type"
              label="类型"
              rules={[
                {
                  required: true,
                  message: "Please select Type",
                },
              ]}
            >
              <Select>
                <Option value={0}>0</Option>
                <Option value={1}>1</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="money"
              label="价格"
              rules={[
                {
                  required: true,
                  message: "please input",
                },
              ]}
            >
              <Input placeholder="Please input your money" />
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
