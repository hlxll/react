import {Component} from 'react'
import { Menu, Image} from 'antd';
import PlaneForm from '../planeTicket/planeForm'
import HotelForm from '../hotel/hotelForm'
import TrainForm from '../trainTickets/trainForm'
import Holiday from '../holiday/holidayForm'
import Ticket from '../tickets/ticketFrom'
import GroupBuy from '../groupBuying/groupBuyForm'
import FreeForm from '../free/freeForm'
import PlaneTicket from './common/planeTicket'
import Hotel from './common/hotel'
import IntervalImg from './common/intervalImg'
import {
  MailOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import './index.less'
class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            formType: 1
        }
        this.selectForm = this.selectForm.bind(this)
    }
    selectForm (item) {
        this.setState({
            formType: item.key
        })
    }
    render(){
        return(
            <div className="main">
                <div className="mainform">
                    <div className="formContent">
                        <Menu
                            className="leftMenu"
                            style={{ width: 100, height: 280 }}
                            defaultSelectedKeys={['1']}
                            onSelect={this.selectForm}
                        >
                            <Menu.Item key="1" icon={<MailOutlined />}>
                            机票
                            </Menu.Item>
                            <Menu.Item key="2" icon={<CalendarOutlined />}>
                            酒店
                            </Menu.Item>
                            <Menu.Item key="3" icon={<CalendarOutlined />}>
                            火车票
                            </Menu.Item>
                            <Menu.Item key="4" icon={<CalendarOutlined />}>
                            度假
                            </Menu.Item>
                            <Menu.Item key="5" icon={<CalendarOutlined />}>
                            门票
                            </Menu.Item>
                            <Menu.Item key="6" icon={<CalendarOutlined />}>
                            团购
                            </Menu.Item>
                            <Menu.Item key="7" icon={<CalendarOutlined />}>
                            自由行
                            </Menu.Item>
                        </Menu>
                        <div className="dataForm">
                            {
                                this.state.formType==1?<PlaneForm />:''
                            }
                            {
                                this.state.formType==2?<HotelForm />:''
                            }
                            {
                                this.state.formType==3?<TrainForm />:''
                            }
                            {
                                this.state.formType==4?<Holiday />:''
                            }
                            {
                                this.state.formType==5?<Ticket />:''
                            }
                            {
                                this.state.formType==6?<GroupBuy />:''
                            }
                            {
                                this.state.formType==7?<FreeForm />:''
                            }
                        </div>
                    </div>
                    <div className="img">
                        <Image src="./img/formRight.png"/>
                    </div>
                </div>
                {/* 机票展示部分 */}
                <div className="mainPlaneTicket">
                    <PlaneTicket />
                </div>
                {/* 酒店展示部分 */}
                <div className="mainHotel">
                    <Hotel />
                </div>
                <div className="intervalImg">
                    <IntervalImg />
                </div>
                <div className="footBack">
                    <div style={{marginRight: 100}}>
                       <p>旅游，触手可及</p> 
                       <p style={{color: 'rgba(255,255,255,0.4)'}}>乘飞机，特价机票飞不出手心：住酒店，预约担保同房低价</p>
                    </div>
                    <Image src="./img/erCode.png" style={{height: 100, width: 100}}/>
                </div>
            </div>
        )
    }
}
export default Main