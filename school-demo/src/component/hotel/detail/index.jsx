import React, { Component } from 'react'
import { Image, Table, Space, Button } from 'antd'
import './index.less'
const { Column, ColumnGroup } = Table;
class HotelDetail extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      name: '北京新桥诺富特饭店',
      treavelVersion: '四星级',
      number: 4.5,
      tableData: [
        {
          key: '1',
          homeType: '旅行经济间',
          bedType: '双床',
          breakfast: 1,//早餐份数
          number: 2,
          money: 300
        },
      ]
    }
  }
  render () {
    return <div id="hotelBuy">
      <div className="headName">
        酒店首页  {'>' + this.state.name}
      </div>
      <div className="hotelButMain">
        <div><span>{this.state.name}</span><span>{this.state.treavelVersion}</span></div>
        <div className="mainDetail">
          <Image src="" className="mainDetailImage" />
          <div className="mainDetailRight">
            <div className="detailNumber">{this.state.number}分</div>
            <div className="detailText">
              <div>房间简洁</div>
              <div>体验很棒</div>
              <div>全新酒店</div>
            </div>
            <div>
              装修时间:2008年
            </div>
            <div className="detailMoneyType">
              <div><Image />接机服务</div>
              <div><Image />接站服务</div>
              <div><Image />温泉</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table dataSource={this.state.tableData}>
          <Column title="房型" dataIndex="homeType" key="homeType" />
          <Column title="床型" dataIndex="bedType" key="bedType" />
          <Column title="早餐" dataIndex="breakfast" key="breakfast"
            render={(text) => (
              <div>
                {text == 0 ? '无餐食' : (text == 1 ? '1份早餐' : '2份早餐')}
              </div>
            )}
          />
          <Column title="入住人数" dataIndex="number" key="number" />
          <Column title="房价" dataIndex="money" key="money" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Button>
                预定
              </Button>
            )}
          />
        </Table>
      </div>
    </div>
  }
}
export default HotelDetail