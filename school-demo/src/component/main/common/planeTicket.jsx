import {Component} from 'react'
import { Menu, Row, Col, Button } from 'antd'
import {
    MailOutlined,
    SwapRightOutlined,
    SwapOutlined
  } from '@ant-design/icons';
import './planeTicket.less'
class PlaneTickets extends Component {
    constructor(props){
        super(props)
        this.state={
            current: 'china',
            chinaList: [{start: '杭州', arriver: '上海', time: '2/25', money: '124'},{start: '杭州', arriver: '上海', time: '2/25', money: '124'},{start: '杭州', arriver: '上海', time: '2/25', money: '124'},{start: '杭州', arriver: '上海', time: '2/25', money: '124'},{start: '杭州', arriver: '上海', time: '2/25', money: '124'}],
            wordList: [{start: '杭州', arriver: '上海', time: '2/25', money: '124'}],
            twoWList: [{start: '杭州', arriver: '上海', startTime: '2/25',arriverTime: '2/26', money: '124'}]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        console.log(e)
        this.setState({
            current: e.key
        })
    }
    render(){
        return(
            <div className="tenPlane">
                <div className="tenPlaneHead">
                    <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal">
                        <Menu.Item key="china" icon={<MailOutlined />}>
                            国内低价机票
                        </Menu.Item>
                        <Menu.Item key="word" icon={<MailOutlined />}>
                            国际·港澳台低价航线
                        </Menu.Item>
                        <Menu.Item key="twoW" icon={<MailOutlined />}>
                        国际·港澳台低价航线（往返）
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="tenPlaneContent">
                    {
                        this.state.current!="twoW"?
                        <>
                        <Row gutter={16}>
                        {
                            (this.state.current=='china'?this.state.chinaList:this.state.wordList).map((d, index) => {
                                if(index<8){
                                    return (
                                        <Col key={index} className="gutter-row" span={6}>
                                            <div className="rowContent">
                                                <p>{d.start}<SwapRightOutlined />{d.arriver}</p>
                                                <p>{d.time}</p>
                                                <div className="orange">
                                                    <span className="money">¥{d.money}</span>起<Button className="nowBtn">立抢</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                }
                                
                            })
                        }
                        </Row>
                        </>:
                        <>
                        <Row gutter={16}>
                        {
                            this.state.twoWList.map((d, index) => {
                                if(index<8){
                                    return (
                                        <Col key={index} className="gutter-row" span={6}>
                                            <div className="rowContent">
                                                <p>{d.start}<SwapOutlined />{d.arriver}</p>
                                                <p>{d.startTime}--{d.arriverTime}</p>
                                                <div className="orange">
                                                    <span className="money">¥{d.money}</span>起<Button className="nowBtn">立抢</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                }
                                
                            })
                        }
                        </Row>
                        </>
                    }
                </div>
            </div>
        )
    }
}
export default PlaneTickets