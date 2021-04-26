import { Component } from "react";
import { Button, Table, Modal, Form, Select, TreeSelect, DatePicker, Input, Row, Col, Checkbox } from "antd";
import "./trainDetail.less";
import moment from 'moment';
import chinaJson from './china.json'
import { PlusOutlined } from '@ant-design/icons'
const { TreeNode } = TreeSelect;
const { Option } = Select
const dateFormat = 'YYYY/MM/DD';
class TrainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: '1',
          name: 'K2288',
          money: [254.5, 434.5, 687.5, 254.5],
          city: ['天津', '贵阳'],
          number: [1, 2, 3, 0],
          time: ['08:57', '21:46']
        }
      ],
      isModalVisible: true,
      formData: {
        username: ''
      },
      chinaCity: [],
      modalData: {
        name: 'K288',
        time: ['08:57', '21:46'],
        city: ['天津', '贵阳'],
        type: 1,
        money: 254.5
      },
      trainType_DK: 'K',//判断动车还是普快
      KType: ['硬座', '硬卧', '软卧', '无座'],
      DType: ['二等座', '一等座', '商务座'],
      trainUser: [
        {
          name: '',
          number: ''
        }
      ],
      isRead: false
    }
    this.namePushTrain = this.namePushTrain.bind(this)
    this.numberPushTrain = this.numberPushTrain.bind(this)
    this.addTrainUser = this.addTrainUser.bind(this)
  }
  componentDidMount () {
    let resCity = []
    chinaJson.forEach(item => {
      if (item.province.split('')[2] === '市') {
        resCity.push(item.province)
      } else {
        item.city.map(cityItem =>
          resCity.push(cityItem.name)
        )
      }
    })
    this.setState({
      chinaCity: resCity
    })
  }
  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }
  buyTrainTicket (e) {
    console.log(e);
    this.setState({
      isModalVisible: true
    })
  }
  numberZero = (numArr) => {
    var resD = true
    numArr.forEach(item => {
      if (+item === 0) {
        resD = false
      }
    })
    return resD
  }
  onFinishFailed () { }
  onFinish () {

  }
  namePushTrain (e, index) {
    let arr = this.state.trainUser
    arr[index].name = e.target.value
    this.setState({
      trainUser: arr
    })
  }
  numberPushTrain (e, index) {
    let arr = this.state.trainUser
    arr[index].number = e.target.value
    this.setState({
      trainUser: arr
    })
  }
  addTrainUser () {
    let newTrainUser = this.state.trainUser
    newTrainUser.push({ name: '', number: '' })
    this.setState({
      trainUser: newTrainUser
    })
  }
  TextChange (e) {
    console.log(e.target.checked);
    this.setState({
      isRead: e.target.checked
    })
  }
  render () {
    let columns = [
      {
        title: '车次/类型',
        dataIndex: 'name',
        key: 'name',
        render: text => <span style={{ color: '#000000', fontSize: '20px' }}>{text}</span>
      },
      {
        title: '发站/到站',
        dataIndex: 'city',
        key: 'city',
        render: text => <div>
          <div>{text[0]}</div>
          <span>{text[1]}</span>
        </div>
      },
      {
        title: '发/到时间',
        dataIndex: 'time',
        key: 'time',
        render: text => <div>
          <div style={{ color: '#000000', fontSize: '20px' }}>{text[0]}</div>
          <span>{text[1]}<span style={{ color: '#ff9705' }}>+1</span></span>
        </div>
      },
      {
        title: '参考票价',
        dataIndex: 'money',
        key: 'money',
        render: text => <div>
          <div>硬座<span style={{ color: '#ff9705' }}>￥{text[0]}</span></div>
          <div>硬卧<span style={{ color: '#ff9705' }}>￥{text[0]}</span></div>
          <div>软卧<span style={{ color: '#ff9705' }}>￥{text[0]}</span></div>
          <div>无座<span style={{ color: '#ff9705' }}>￥{text[0]}</span></div>
        </div>
      },
      {
        title: '剩余票量',
        dataIndex: 'number',
        key: 'number',
        render: text => <div>
          {
            this.numberZero(text) ? <div>
              <p>仅{text[0]}张</p>
              <p>仅{text[1]}张</p>
              <p>仅{text[2]}张</p>
              <p>仅{text[3]}张</p>
            </div>
              : <div style={{ color: 'rgba(0,0,0,0.3)' }}>预定</div>
          }
        </div>
      },
      {
        title: '',
        dataIndex: 'number',
        key: 'number',
        render: text => <div className="tableButton">
          <div>{text[0] > 0 ? <Button className="tableBuy" onClick={this.buyTrainTicket.bind(this, 0)}>购买</Button> : <Button className="tableQian" onClick={this.buyTrainTicket.bind(this, 0)}>抢票</Button>}</div>
          <div>{text[1] > 0 ? <Button className="tableBuy" onClick={this.buyTrainTicket.bind(this, 1)}>购买</Button> : <Button className="tableQian" onClick={this.buyTrainTicket.bind(this, 1)}>抢票</Button>}</div>
          <div>{text[2] > 0 ? <Button className="tableBuy" onClick={this.buyTrainTicket.bind(this, 2)}>购买</Button> : <Button className="tableQian" onClick={this.buyTrainTicket.bind(this, 2)}>抢票</Button>}</div>
          <div>{text[3] > 0 ? <Button className="tableBuy" onClick={this.buyTrainTicket.bind(this, 3)}>购买</Button> : <Button className="tableQian" onClick={this.buyTrainTicket.bind(this, 3)}>抢票</Button>}</div>

        </div>
      }
    ]
    return <div className="trainDetail">
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
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
            >
              {
                this.state.chinaCity.map(item => <Option value={item}>{item}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item
            label="到达"
            name="arriveCity"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
            >
              {
                this.state.chinaCity.map(item => <Option value={item}>{item}</Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item label="日期"
            name="date"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <DatePicker defaultValue={moment(new Date(), dateFormat)} format={dateFormat} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table columns={columns} dataSource={this.state.data} />
      <Modal footer={null} title="购买火车票" visible={this.state.isModalVisible} onCancel={this.handleCancel}>
        <div className="modalBase">
          <div>车次信息<span className="baseTitle">[返回修改车次]</span></div>
          <div className="baseDetail">
            <div>{this.state.modalData.name}</div>
            <div className="SEndtime">
              <div className="SEndTimeTop">
                <div className="startText">始</div>{this.state.modalData.time[0]} {this.state.modalData.city[0]}
              </div>
              <div className="SEndTimeBottom">
                <div className="endText">终</div>{this.state.modalData.time[1]} {this.state.modalData.city[1]}
              </div>
            </div>
            <div className="moveTime">
              1天12小时49分
            </div>
            <div className="typeMoney">
              {this.state.trainType_DK === 'K' ? this.state.KType[+this.state.modalData.type] : this.state.DType[+this.state.modalData.type]}<span className="text">￥{this.state.modalData.money}</span>
            </div>
          </div>
        </div>
        <div className="userDetail">
          <div>乘客信息</div>
          {
            this.state.trainUser.map((item, index) =>
              <div className="trainUser">
                <div>乘客{index + 1}-成人票</div>
                <Row>
                  <Col span={12} style={{ padding: '0 5px' }}><Input onChange={(e) => this.namePushTrain(e, index)} placeholder="姓名(与证件一致)" /></Col>
                  <Col span={12} style={{ padding: '0 5px' }}><Input onChange={(e) => this.numberPushTrain(e, index)} placeholder="证件号码(必填)" /></Col>
                </Row>
              </div>)
          }
          <div className="addUserBtn">
            <Button icon={<PlusOutlined />} onClick={this.addTrainUser}>新增乘客</Button>
          </div>
        </div>
        <div className="footerBtn">
          <Checkbox onChange={this.TextChange} />我已阅读并同意<span className="xieyi">《火车票信息服务协议》</span>
          <div>出票方：北京津渡远游信息技术有限公司 <span className="xieyi">工商执照信息</span></div>
          <div className="submit"><Button type="primary">快速出票</Button></div>
        </div>
      </Modal>
    </div>;
  }
}
export default TrainDetail;
