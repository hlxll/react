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
import * as planeApi from "../../../api/hotel";
import ReactFileReader from "react-file-reader";
import chinaJson from "../china.json";
import Modal from "antd/lib/modal/Modal";
const { Option } = Select;
const { RangePicker } = DatePicker;
export default class HotelConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chinaCity: [],
      tableData: [],
      isModalVisible: false,
      uploadImg: "",
      addTypeModal: false,
      AddTypeDate: [], //添加房型的弹窗表格数据
      addModalId: "",
    };
    this.onFinish = this.onFinish.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addPlane = this.addPlane.bind(this);
    this.searchPlaneData = this.searchPlaneData.bind(this);
    this.headSrcChange = this.headSrcChange.bind(this);
    this.cancelAddModal = this.cancelAddModal.bind(this);
    this.modalAddHome = this.modalAddHome.bind(this);
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
    let resData = await planeApi.searchHotel();
    this.setState({
      tableData: resData.data,
    });
  }
  async onFinish(e) {
    let city = e.city.split("");
    city.pop();
    let obj = {
      name: e.name,
      number: 5,
      location: e.location,
      type: e.type,
      money: e.money,
      latlon: [],
      city: city.join(""),
      sawNum: 0,
      src: e.src || "",
      arrType: [],
    };
    obj.latlon.push(e.lon);
    obj.latlon.push(e.lat);
    let resData = await planeApi.addPlane(obj);
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
    let res = await planeApi.deleteHotel(e._id);
    message.success("删除成功");
    this.searchPlaneData();
  }

  //添加酒店房型
  addHomeType(e) {
    this.setState({
      addTypeModal: true,
      AddTypeDate: e.arrType,
      addModalId: e._id,
    });
  }
  headSrcChange(val) {
    this.state.uploadImg = val.base64;
  }

  cancelAddModal() {
    this.setState({
      addTypeModal: false,
    });
  }

  //添加房型
  async modalAddHome(e) {
    e.id = this.state.addModalId;
    let resData = await planeApi.addHotelHome(e);
    message.success("添加成功");
  }
  render() {
    const columns = [
      {
        title: "酒店名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "城市",
        dataIndex: "city",
        key: "city",
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
          <div>
            <Button
              onClick={this.addHomeType.bind(this, row)}
              style={{ marginRight: "10px" }}
            >
              加房型
            </Button>
            <Button onClick={this.deleteRow.bind(this, row)}>删除</Button>
          </div>
        ),
      },
    ];
    const addColumns = [
      {
        title: "房间类型",
        dataIndex: "homeType",
        key: "homeType",
      },
      {
        title: "床型",
        dataIndex: "bedType",
        key: "bedType",
      },
      {
        title: "早餐量",
        dataIndex: "breakfast",
        key: "breakfast",
        render: (text) => <div>{text}份</div>,
      },
      {
        title: "入住人数",
        dataIndex: "number",
        key: "number",
        render: (text) => <div>{text}人</div>,
      },
      {
        title: "价格",
        dataIndex: "money",
        key: "money",
        render: (text) => <div>{text}元</div>,
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
          title="添加航班"
          visible={this.state.isModalVisible}
          onCancel={this.handleCancel}
        >
          <Form name="dynamic_rule" onFinish={this.onFinish}>
            <Form.Item
              label="城市"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please Select your city",
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
              label="均价"
              rules={[
                {
                  required: true,
                  message: "Please input your money",
                },
              ]}
            >
              <InputNumber min={0} />
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
              name="name"
              label="酒店名称"
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
                  message: "Please input your type",
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="选择酒店类型"
                optionFilterProp="children"
              >
                <Option value={1}>1</Option>
                <Option value={2}>2</Option>
                <Option value={3}>3</Option>
                <Option value={4}>4</Option>
                <Option value={5}>5</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="lon"
              label="经度"
              rules={[
                {
                  required: true,
                  message: "Please input your lon",
                },
              ]}
            >
              <Input placeholder="Please input your lon" />
            </Form.Item>
            <Form.Item
              name="lat"
              label="纬度"
              rules={[
                {
                  required: true,
                  message: "Please input your lat",
                },
              ]}
            >
              <Input placeholder="Please input your lat" />
            </Form.Item>
            <Form.Item
              name="location"
              label="地址"
              rules={[
                {
                  required: true,
                  message: "Please input your location",
                },
              ]}
            >
              <Input placeholder="Please input your location" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          maskClosable={false}
          title="添加航班"
          visible={this.state.addTypeModal}
          onCancel={this.cancelAddModal}
          footer={null}
        >
          <Table columns={addColumns} dataSource={this.state.AddTypeDate} />
          <div>
            <Form name="dynamic_rule" onFinish={this.modalAddHome}>
              <Form.Item
                label="房型"
                name="homeType"
                rules={[
                  {
                    required: true,
                    message: "Please Select your city",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="房间类型"
                  optionFilterProp="children"
                >
                  <Option value={"旅行经济间"}>旅行经济间</Option>
                  <Option value={"豪华大床房"}>豪华大床房</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="房型"
                name="bedType"
                rules={[
                  {
                    required: true,
                    message: "Please Select your city",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder=""
                  optionFilterProp="children"
                >
                  <Option value={"大床"}>大床</Option>
                  <Option value={"双床"}>双床</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="早餐"
                name="breakfast"
                rules={[
                  {
                    required: true,
                    message: "Please Select your breakfast",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="房间类型"
                  optionFilterProp="children"
                >
                  <Option value={0}>0</Option>
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="人数"
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Please Select your number",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="入住人数"
                  optionFilterProp="children"
                >
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="价格"
                name="money"
                rules={[
                  {
                    required: true,
                    message: "Please Select your money",
                  },
                ]}
              >
                <Input
                  style={{ width: 200 }}
                  placeholder="Please input your money"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  添加
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
