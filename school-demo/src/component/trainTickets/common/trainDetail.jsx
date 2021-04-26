import { Component } from "react";
import { Button, Table } from "antd";
import "./trainDetail.less";
const columns = [
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
        numberZero(text) ? <div>
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
      <div>{text[0] > 0 ? <Button className="tableBuy">购买</Button> : <Button className="tableQian">抢票</Button>}</div>
      <div>{text[1] > 0 ? <Button className="tableBuy">购买</Button> : <Button className="tableQian">抢票</Button>}</div>
      <div>{text[2] > 0 ? <Button className="tableBuy">购买</Button> : <Button className="tableQian">抢票</Button>}</div>
      <div>{text[3] > 0 ? <Button className="tableBuy">购买</Button> : <Button className="tableQian">抢票</Button>}</div>
    </div>
  }
]
function numberZero (numArr) {
  var resD = true
  numArr.forEach(item => {
    if (+item === 0) {
      resD = false
    }
  })
  return resD
}
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
      ]
    }
    // this.numberZero = this.numberZero.bind(this)
  }
  // numberZero (numArr) {
  //   var resD = true
  //   numArr.forEach(item => {
  //     if (item == 0) {
  //       resD = false
  //     }
  //   })
  //   return resD
  // }
  render () {
    return <div className="trainDetail">
      <Table columns={columns} dataSource={this.state.data} />
    </div>;
  }
}
export default TrainDetail;
