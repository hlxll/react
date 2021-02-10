import {Component} from 'react'
import { Select, Row, Col, Image } from 'antd'
import './hotelSpeak.less'
import Hotel from '../../main/common/hotel'
const { Option } = Select
export default class HotelSpeak extends Component{
    constructor(props){
        super(props)
        this.state = {
            wordList: [{title: 'whoe', num: 12, sawNum: 123,address: '江西上饶', type: '亲子家庭',money: 69}],
            chinaList: [{titel: '试睡员推荐榜', content: ''},{titel: '必住主题酒店榜单', content: '主题酒店，享受绝佳体验'},{titel: '必住商务酒店榜单', content: '品质商旅，品质随性'},{titel: '必住度假酒店榜单', content: '身的休息，心的享受'}]
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){

    }
    render(){
        return(
            <div className="HotelSpeak">
                <div className="head">
                    <p className="title">酒店必住榜</p>
                    <div className="select">
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </div>
                <div className="hotelRowImg">
                <Row gutter={16} className="rowImg">
                    {
                        this.state.chinaList.map((d, index) => {
                            return (
                                <Col key={index} className="gutter-row" span={6}>
                                    <div className="hotelText">
                                        <p className="title">{d.titel}></p>
                                        <p className="content">{d.content}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>
                <div className="head">
                    <p className="title">酒店推荐</p>
                    <div className="select">
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </div>
                <div className="wordList">
                <Row gutter={16}>
                    {
                        this.state.wordList.map((d, index) => {
                            return (
                                <Col key={index} className="imgList" span={6}>
                                    <div className="hotelImgText">
                                        <Image className="hotelImg"/>
                                        <p className="hotelImgTitle">{d.title}</p>
                                        <p className="hotelImgTwo">
                                            <span style={{color: '#00d0d4', fontSize:"14px"}}>{d.num}分</span><span>{d.sawNum}条评论</span>
                                        </p>
                                        <p className="hotelImgThree">{d.address}</p>
                                        <div className="hotelImgFour">
                                            <p className="speak">免费取消</p>
                                            <p className="hotelImgType">{d.type}</p>
                                            <p className="hotelImgMoney"><span className="hotelImgMoneyNum">¥{d.money}</span>起</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>
            </div>
        )
    }
}