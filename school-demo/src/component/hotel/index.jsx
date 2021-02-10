import {Component} from 'react'
import { Menu, Button, Image } from 'antd'
import './index.less'
import { SearchOutlined } from '@ant-design/icons';
import HotelForm from './hotelForm'
import HotelSpeak from './common/hotelSpeak'
class Hotel extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedKeys: 'one'
        }
    }
    handleClick(e){
        this.setState({
            selectedKeys: e
        })
    }
    render(){
        return(
            <div className="Hotel">
                <div className="HotelHead">
                    <div className="headTitle">
                        <Button type="text" className={this.state.selectedKeys=='one'?'colorBtn':'btn'} onClick={this.handleClick.bind(this, 'one')}>酒店搜索</Button>
                        <Button type="text" className={this.state.selectedKeys=='two'?'colorBtn':'btn'} onClick={this.handleClick.bind(this, 'two')}>客栈民宿</Button>
                    </div>
                    <div className="LinkBtn">
                        <Button type="link" className="RouteBtn" icon={<SearchOutlined />}>酒店订单</Button>
                        <Button type="link" className="RouteBtn" icon={<SearchOutlined />}>点评社区</Button>
                        <Button type="link" className="RouteBtn" icon={<SearchOutlined />}>积分商城</Button>
                    </div>
                </div>
                <div className="hotelContent">
                    <div className="HotelForm">
                        <HotelForm />
                    </div>
                    <Image src="./img/hotel/formRight.jpg"/>
                </div>
                {/* 酒店展示 */}
                <div className="hotelImgSpeak">
                    <HotelSpeak/>
                </div>
            </div>
        )
    }
}
export default Hotel