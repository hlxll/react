import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Form, Image, Radio, Select, Row, DatePicker, Button } from 'antd'
import './ticketDetail.less'
const dateFormat = 'YYYY/MM/DD';
const { Option } = Select
class BuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planeList: [
        {
          src: '',
          name: '海南航空',
          Ename: 'HU718 波音738',
          startTime: '19:20',
          startCity: '萧山机场T3',
          arriveTime: '23:00',
          arriveCity: '首都机场T2',
          money: '300'
        }
      ],
      moveNum: 1
    }
    this.moveChange = this.moveChange.bind(this)
    this.pushDetail = this.pushDetail.bind(this)
  }
  moveChange (e) {
    this.setState({
      moveNum: e.target.value
    })
  }
  pushDetail () {
    this.props.history.push('/PlateTSearch/detail')
  }
  render () {
    return (
      <div id="detailTicket">
        <div className="detailHead">
          <div className="">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >

              <Form.Item>
                <Radio.Group value={this.state.moveNum} onChange={this.moveChange}>
                  <Radio value={1}>单程</Radio>
                  <Radio value={2}>往返</Radio>
                </Radio.Group>
              </Form.Item>
              <div className="startEndCityTime">
                <Row>
                  <Col span={4}>
                    <Form.Item name="startCity">
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="从 国家/城市"
                        optionFilterProp="children"
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="arriveCity">
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="到 国家/城市"
                        optionFilterProp="children"
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="startDay">
                      <DatePicker format={dateFormat} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="arriveDay">
                      <DatePicker format={dateFormat} disabled={this.state.moveNum == 1 ? true : false} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item>
                      <Button type="primary">搜索</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </div>

            </Form>
          </div>
        </div>
        <div className="detailMain">
          {
            this.state.planeList.map(item => (
              <div className="MainItem" onClick={this.pushDetail}>
                <div className="planeLog">
                  <Image src={item.src} />
                </div>
                <div className="MainLeftName">
                  <span className="leftNameC">{item.name}</span>
                  <div className="leftNameE">{item.Ename}</div>
                </div>
                <div className="MainCenterTime">
                  <div className="startEndTime">
                    <span className="SETime">{item.startTime}</span>
                    <p className="SECity">{item.startCity}</p>
                  </div>
                  <div className="allTime">
                    3小时40分钟
                  </div>
                  <div className="startEndTime">
                    <span className="SETime">{item.arriveTime}</span>
                    <p className="SECity">{item.arriveCity}</p>
                  </div>
                </div>
                <div className="rightMoney">
                  <div>￥<span className="rightMoneyText">{item.money}</span></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default withRouter(BuyTickets);