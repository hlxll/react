import { Component } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Select,
  TreeSelect,
  DatePicker,
  Input,
  Row,
  Col,
  Checkbox,
  message,
} from "antd";
import "./trainDetail.less";
import moment from "moment";
import chinaJson from "./china.json";
import * as trainApi from "../../../api/trainTicket";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";
class TrainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "1",
          name: "K2288",
          money: [254.5, 434.5, 687.5, 254.5],
          city: ["天津", "贵阳"],
          num: [1, 2, 3, 0],
          time: ["08:57", "21:46"],
        },
      ],
      isModalVisible: false,
      formData: {
        username: "",
      },
      chinaCity: [],
      modalData: {
        name: "K288",
        time: ["08:57", "21:46"],
        city: ["天津", "贵阳"],
        type: 1,
        money: 254.5,
      },
      trainType_DK: "K", //判断动车还是普快
      KType: ["硬座", "硬卧", "软卧", "无座"],
      DType: ["二等座", "一等座", "商务座"],
      trainUser: [
        {
          name: "",
          number: "",
        },
      ],
      isRead: false,
    };
    this.namePushTrain = this.namePushTrain.bind(this);
    this.numberPushTrain = this.numberPushTrain.bind(this);
    this.addTrainUser = this.addTrainUser.bind(this);
    this.lssueTickets = this.lssueTickets.bind(this);
    this.searchTrainTicket = this.searchTrainTicket.bind(this);
  }
  async componentDidMount() {
    this.searchTrainTicket();
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
  }
  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  buyTrainTicket(e, index) {
    let obj = {
      name: index.name,
      time: index.time,
      city: index.city,
      type: e,
      money: index.money[e],
    };
    let trainType = index.name.indexOf("D") != -1 ? "D" : "K";
    this.setState({
      isModalVisible: true,
      modalData: obj,
      trainType_DK: trainType,
    });
  }
  numberZero = (numArr) => {
    console.log(numArr);

    var resD = true;
    numArr.forEach((item) => {
      if (+item === 0) {
        resD = false;
      }
    });
    return resD;
  };
  onFinishFailed = () => {};
  onFinish = (e) => {
    console.log(e);
    let start = e.startCity.split("");
    start.pop();
    let arrive = e.arriveCity.split("");
    arrive.pop();
    this.searchTrainTicket(start.join(""), arrive.join(""));
  };
  namePushTrain(e, index) {
    let arr = this.state.trainUser;
    arr[index].name = e.target.value;
    this.setState({
      trainUser: arr,
    });
  }
  numberPushTrain(e, index) {
    let arr = this.state.trainUser;
    arr[index].number = e.target.value;
    this.setState({
      trainUser: arr,
    });
  }
  addTrainUser() {
    let newTrainUser = this.state.trainUser;
    newTrainUser.push({ name: "", number: "" });
    this.setState({
      trainUser: newTrainUser,
    });
  }
  TextChange(e) {
    console.log(e.target.checked);
    this.setState({
      isRead: e.target.checked,
    });
  }
  async searchTrainTicket(start, arrive) {
    let resData = await trainApi.searchTrain(start, arrive);
    let dataArr = resData.data.data;
    dataArr.forEach((item) => {
      item.city = [];
      item.city.push(item.startCity);
      item.city.push(item.arriveCity);
      item.time = [];
      item.time.push(item.startTime);
      item.time.push(item.arriveTime);
    });
    this.setState({
      data: resData.data.data,
    });
  }
  //快速出票
  async lssueTickets() {
    let userArr = [];
    this.state.trainUser.forEach((item) => {
      userArr.push(JSON.stringify(item));
    });
    let modalD = this.state.modalData;
    let obj = {
      type: 3,
      name: modalD.name,
      city: modalD.city,
      trainType: modalD.type,
      user: userArr,
    };
    let resData = await trainApi.addOrderList(obj);
    message.success(resData.data.message);
    console.log(resData.data);

    if (resData.data.status == 1) {
      //关闭弹窗，重新刷新数据
      this.searchTrainTicket();
      this.setState({
        isModalVisible: false,
      });
    }
  }
  render() {
    let columns = [
      {
        title: "车次/类型",
        dataIndex: "name",
        key: "name",
        render: (text) => (
          <span style={{ color: "#000000", fontSize: "20px" }}>{text}</span>
        ),
      },
      {
        title: "发站/到站",
        dataIndex: "city",
        key: "city",
        render: (text) => (
          <div>
            <div>{text[0]}</div>
            <span>{text[1]}</span>
          </div>
        ),
      },
      {
        title: "发/到时间",
        dataIndex: "time",
        key: "time",
        render: (text) => (
          <div>
            <div style={{ color: "#000000", fontSize: "20px" }}>{text[0]}</div>
            <span>
              {text[1]}
              {+text[1].split(":")[0] > +text[0].split(":")[0] ? (
                ""
              ) : (
                <span style={{ color: "#ff9705" }}>+1</span>
              )}
            </span>
          </div>
        ),
      },
      {
        title: "参考票价",
        dataIndex: "money",
        key: "money",
        render: (text) => (
          <div>
            {text.length == 3 ? (
              <>
                <div>
                  二等座<span style={{ color: "#ff9705" }}>￥{text[0]}</span>
                </div>
                <div>
                  一等站<span style={{ color: "#ff9705" }}>￥{text[1]}</span>
                </div>
                <div>
                  商务座<span style={{ color: "#ff9705" }}>￥{text[2]}</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  硬座<span style={{ color: "#ff9705" }}>￥{text[0]}</span>
                </div>
                <div>
                  硬卧<span style={{ color: "#ff9705" }}>￥{text[1]}</span>
                </div>
                <div>
                  软卧<span style={{ color: "#ff9705" }}>￥{text[2]}</span>
                </div>
                <div>
                  无座<span style={{ color: "#ff9705" }}>￥{text[3]}</span>
                </div>
              </>
            )}
          </div>
        ),
      },
      {
        title: "剩余票量",
        dataIndex: "num",
        key: "num",
        render: (text) => (
          <div>
            {this.numberZero(text) ? (
              text.length == 3 ? (
                <div>
                  <p>仅{text[0]}张</p>
                  <p>仅{text[1]}张</p>
                  <p>仅{text[2]}张</p>
                </div>
              ) : (
                <div>
                  <p>仅{text[0]}张</p>
                  <p>仅{text[1]}张</p>
                  <p>仅{text[2]}张</p>
                  <p>仅{text[3]}张</p>
                </div>
              )
            ) : (
              <div style={{ color: "rgba(0,0,0,0.3)" }}>预定</div>
            )}
          </div>
        ),
      },
      {
        title: "",
        dataIndex: "num",
        key: "num",
        render: (text, index) =>
          text.length == 4 ? (
            <>
              <div className="tableButton">
                <div>
                  {text[0] > 0 ? (
                    <Button
                      className="tableBuy"
                      onClick={this.buyTrainTicket.bind(this, 0, index)}
                    >
                      购买
                    </Button>
                  ) : (
                    <Button
                      className="tableQian"
                      onClick={this.buyTrainTicket.bind(this, 0, index)}
                    >
                      抢票
                    </Button>
                  )}
                </div>
                <div>
                  {text[1] > 0 ? (
                    <Button
                      className="tableBuy"
                      onClick={this.buyTrainTicket.bind(this, 1, index)}
                    >
                      购买
                    </Button>
                  ) : (
                    <Button
                      className="tableQian"
                      onClick={this.buyTrainTicket.bind(this, 1, index)}
                    >
                      抢票
                    </Button>
                  )}
                </div>
                <div>
                  {text[2] > 0 ? (
                    <Button
                      className="tableBuy"
                      onClick={this.buyTrainTicket.bind(this, 2, index)}
                    >
                      购买
                    </Button>
                  ) : (
                    <Button
                      className="tableQian"
                      onClick={this.buyTrainTicket.bind(this, 2, index)}
                    >
                      抢票
                    </Button>
                  )}
                </div>
                <div>
                  {text[3] > 0 ? (
                    <Button
                      className="tableBuy"
                      onClick={this.buyTrainTicket.bind(this, 3, index)}
                    >
                      购买
                    </Button>
                  ) : (
                    <Button
                      className="tableQian"
                      onClick={this.buyTrainTicket.bind(this, 3, index)}
                    >
                      抢票
                    </Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="tableButton">
                <div>
                  {text[0] > 0 ? (
                    <Button
                      className="tableBuy"
                      onClick={this.buyTrainTicket.bind(this, 0, index)}
                    >
                      购买
                    </Button>
                  ) : (
                    <Button
                      className="tableQian"
                      onClick={this.buyTrainTicket.bind(this, 0, index)}
                    >
                      抢票
                    </Button>
                  )}
                </div>
                <div>
                  {text[1] > 0 ? (
                    <Button
                      className="tableBuy"
                      onClick={this.buyTrainTicket.bind(this, 1, index)}
                    >
                      购买
                    </Button>
                  ) : (
                    <Button
                      className="tableQian"
                      onClick={this.buyTrainTicket.bind(this, 1, index)}
                    >
                      抢票
                    </Button>
                  )}
                </div>
                <div>
                  {text[2] > 0 ? (
                    <Button
                      className="tableBuy"
                      onClick={this.buyTrainTicket.bind(this, 2, index)}
                    >
                      购买
                    </Button>
                  ) : (
                    <Button
                      className="tableQian"
                      onClick={this.buyTrainTicket.bind(this, 2, index)}
                    >
                      抢票
                    </Button>
                  )}
                </div>
              </div>
            </>
          ),
      },
    ];
    return (
      <div className="trainDetail">
        <div className="headForm">
          <Form
            className="headFormData"
            name="basic"
            form={this.formData}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="出发"
              name="startCity"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
              >
                {this.state.chinaCity.map((item) => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="到达"
              name="arriveCity"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
              >
                {this.state.chinaCity.map((item) => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="日期"
              name="date"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <DatePicker
                defaultValue={moment(new Date(), dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Table columns={columns} dataSource={this.state.data} />
        <Modal
          footer={null}
          title="购买火车票"
          visible={this.state.isModalVisible}
          onCancel={this.handleCancel}
        >
          <div className="modalBase">
            <div>
              车次信息<span className="baseTitle">[返回修改车次]</span>
            </div>
            <div className="baseDetail">
              <div>{this.state.modalData.name}</div>
              <div className="SEndtime">
                <div className="SEndTimeTop">
                  <div className="startText">始</div>
                  {this.state.modalData.time[0]} {this.state.modalData.city[0]}
                </div>
                <div className="SEndTimeBottom">
                  <div className="endText">终</div>
                  {this.state.modalData.time[1]} {this.state.modalData.city[1]}
                </div>
              </div>
              <div className="moveTime">
                {this.state.modalData.time[1].split(":")[1] -
                  this.state.modalData.time[0].split(":")[1] >
                0
                  ? this.state.modalData.time[1].split(":")[0] -
                    this.state.modalData.time[0].split(":")[0]
                  : this.state.modalData.time[1].split(":")[0] -
                    this.state.modalData.time[0].split(":")[0] -
                    1}
                小时
                {this.state.modalData.time[1].split(":")[1] -
                  this.state.modalData.time[0].split(":")[1] >
                0
                  ? this.state.modalData.time[1].split(":")[1] -
                    this.state.modalData.time[0].split(":")[1]
                  : this.state.modalData.time[0].split(":")[1] -
                    this.state.modalData.time[1].split(":")[1]}
                分
              </div>
              <div className="typeMoney">
                {this.state.trainType_DK == "K"
                  ? this.state.KType[+this.state.modalData.type]
                  : this.state.DType[+this.state.modalData.type]}
                <span className="text">￥{this.state.modalData.money}</span>
              </div>
            </div>
          </div>
          <div className="userDetail">
            <div>乘客信息</div>
            {this.state.trainUser.map((item, index) => (
              <div className="trainUser">
                <div>乘客{index + 1}-成人票</div>
                <Row>
                  <Col span={12} style={{ padding: "0 5px" }}>
                    <Input
                      onChange={(e) => this.namePushTrain(e, index)}
                      placeholder="姓名(与证件一致)"
                    />
                  </Col>
                  <Col span={12} style={{ padding: "0 5px" }}>
                    <Input
                      onChange={(e) => this.numberPushTrain(e, index)}
                      placeholder="证件号码(必填)"
                    />
                  </Col>
                </Row>
              </div>
            ))}
            <div className="addUserBtn">
              <Button icon={<PlusOutlined />} onClick={this.addTrainUser}>
                新增乘客
              </Button>
            </div>
          </div>
          <div className="footerBtn">
            <Checkbox onChange={this.TextChange} />
            我已阅读并同意<span className="xieyi">《火车票信息服务协议》</span>
            <div>
              出票方：北京津渡远游信息技术有限公司{" "}
              <span className="xieyi">工商执照信息</span>
            </div>
            <div className="submit">
              <Button type="primary" onClick={this.lssueTickets}>
                快速出票
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default TrainDetail;
