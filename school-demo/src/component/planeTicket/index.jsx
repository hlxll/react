import { Component } from 'react'
import PlaneTicketForm from './planeForm'
import './index.less'
import { Image, Carousel } from 'antd'
import PlaneRoute from './common/planeRoute'
class PlaneTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routeList: [{ start: '南昌', arriver: '上海', startTime: '02.13', arriverTime: '04.13', money: '1999' }, { start: '南昌', arriver: '上海', startTime: '02.13', arriverTime: '04.13', money: '1999' }]
        }
    }
    render () {
        return (
            <div className="planeTicket">
                <div className="formBackground">
                    <Image src="./img/plane/formBack.jpg" style={{ height: 312 }} />
                    <div className="backgroundOpacity">
                        <div className="planeTicketForm">
                            <p className="title">机票预订</p>
                            <PlaneTicketForm plane="plane" />
                        </div>
                    </div>

                </div>
                <div className="planeContent">
                    <div className="imgCarousel">
                        <Carousel autoplay>
                            <div>
                                <Image src="./img/plane/carouselOne.jpg" />
                            </div>
                            <div>
                                <Image src="./img/plane/carouselTwo.jpg" />
                            </div>
                        </Carousel>
                        <PlaneRoute type="one" routeList={this.state.routeList} />
                        <PlaneRoute type="two" routeList={this.state.routeList} />
                    </div>
                    <div className="text">
                        <Image style={{}} src="./img/plane/home_link.png" />
                        <p className="speak">服务平台公告</p>
                        <li>提醒旅美中国公民注意美国边境执法部门查验入、出境旅客电子设备</li>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlaneTicket