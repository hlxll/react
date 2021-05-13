import { Component } from "react";
import { Table, message, Radio } from "antd";
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button,
  TimePicker,
} from "antd";
import * as trainApi from "../../../api/trainTicket";
import ReactFileReader from "react-file-reader";
import chinaJson from "../china.json";
import Modal from "antd/lib/modal/Modal";
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
export default class TrainConfig extends Component {
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
    let resData = await trainApi.searchTrain();
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
    let startTime = new Date(e.startTime);
    query.startTime = startTime.getHours() + ":" + startTime.getMinutes();
    let arriveTime = new Date(e.arriveTime);
    query.arriveTime = arriveTime.getHours() + ":" + arriveTime.getMinutes();
    query.allTime = this.allTime(query.startTime, query.arriveTime);
    query.money = query.money.split(",");
    query.name = query.trainType + query.name;
    if (query.trainType == "K") {
      query.num = [100, 100, 100, 100];
    } else {
      query.num = [100, 100, 100];
    }
    let startCity = query.startCity.split("");
    startCity.pop();
    let arriveCity = query.arriveCity.split("");
    arriveCity.pop();
    query.startCity = startCity.join("");
    query.arriveCity = arriveCity.join("");
    let resData = await trainApi.addTrain(query);
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
    let res = await trainApi.deleteTrain(e._id);
    message.success("删除成功");
    this.searchPlaneData();
  }
  headSrcChange(val) {
    this.state.uploadImg = val.base64;
  }
  render() {
    const columns = [
      {
        title: "列车名称",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "出发地",
        dataIndex: "startCity",
        key: "start",
      },
      {
        title: "终点",
        dataIndex: "arriveCity",
        key: "arriveCity",
      },
      {
        title: "出发时间",
        dataIndex: "startTime",
        key: "startTime",
      },
      {
        title: "到达时间",
        dataIndex: "arriveTime",
        key: "arriveTime",
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
        >
          <Form name="dynamic_rule" onFinish={this.onFinish}>
            <Form.Item
              label="出发城市"
              name="startCity"
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
              name="arriveCity"
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
              label="开始时间"
              name="startTime"
              rules={[
                {
                  required: true,
                  message: "Please input your startTime",
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
                  message: "Please input your arriveTime",
                },
              ]}
            >
              <TimePicker />
            </Form.Item>
            <Form.Item
              name="name"
              label="列车名称"
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
              name="trainType"
              label="列车类型"
              rules={[
                {
                  required: true,
                  message: "Please select Type",
                },
              ]}
            >
              <Radio.Group
                onChange={this.radioTypeChange}
                value={this.state.radioValue}
                defaultValue={"K"}
              >
                <Radio value={"K"}>普列</Radio>
                <Radio value={"D"}>动车</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="money"
              label="价格"
              rules={[
                {
                  required: true,
                  message: "请输入多行，每行一个数字,以逗号间隔",
                },
              ]}
            >
              <TextArea
                placeholder={
                  "请输入" + (this.state.radioValue == "K" ? 4 : 3) + "个数字"
                }
              />
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
