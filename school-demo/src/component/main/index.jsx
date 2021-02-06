import {Component} from 'react'
import { Menu, Image} from 'antd';
import PlaneForm from '../planeTicket/planeForm'
import HotelForm from '../hotel/hotelForm'
import TrainForm from '../trainTickets/trainForm'
import Holiday from '../holiday/holidayForm'
import Ticket from '../tickets/ticketFrom'
import GroupBuy from '../groupBuying/groupBuyForm'
import FreeForm from '../free/freeForm'
import {
  MailOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import './index.less'
class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            mode: '',
            theme: '',
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
                            mode={this.state.mode}
                            theme={this.state.theme}
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
                        <Image />
                    </div>
                </div>
            </div>
        )
    }
}
export default Main