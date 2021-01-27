import { Component } from "react"
import './index.less'
import {
    CloseOutlined,
    UserOutlined,
    MailOutlined,
    MedicineBoxOutlined,
    MoneyCollectOutlined,
    QrcodeOutlined
} from '@ant-design/icons';
import { Tooltip } from 'antd'
import SmallLogin from '../login'
class LeftFixed extends Component {
    constructor() {
        super()
        this.state = {
            SureClose: false,
            openLogin: false
        }
        this.closeLeft = this.closeLeft.bind(this)
        this.openLeft = this.openLeft.bind(this)
        this.closeMailLogin = this.closeMailLogin.bind(this)
    }
    closeLeft () {
        this.setState({
            SureClose: false
        })
    }
    openLeft () {
        this.setState({
            SureClose: true
        })
    }
    closeMailLogin () {
        this.setState((state)=>{
            return {
                openLogin: !state.openLogin
            }
        })
    }
    render () {
        return (
            <div className="leftMain">
                <div className={this.state.SureClose ? 'leftMainContent' : 'leftMainContentClosed'}>
                    <div className="closeIcon">
                        <Tooltip title="关闭">
                            <CloseOutlined className="closeClick" onClick={this.closeLeft} />
                        </Tooltip>
                    </div>
                    <div className="peopleIcon">
                        <div className="peopleLong">
                            <Tooltip title="用户">
                                <UserOutlined style={{ fontSize: '24px' }} />
                                <MailOutlined style={{ fontSize: '24px', marginLeft: '9px', marginRight: '9px' }} />
                                <span>加入会员，立即开始精彩旅程</span>
                            </Tooltip>
                        </div>
                    </div>
                    <div className={this.state.openLogin ? 'whiteMailIcon' : 'mailIcon'}>
                        <MailOutlined onClick={this.closeMailLogin} />
                        <div onClick={this.closeMailLogin}>消息</div>
                        <div className={this.state.openLogin ? 'smallLogin' : 'closeLogin'}>
                            <SmallLogin />
                        </div>
                    </div>
                    <div className="mailIcon">
                        <MedicineBoxOutlined />
                        <div>订单</div>
                    </div>
                    <div className="moneyIcon">
                        <MoneyCollectOutlined />
                        <div>账户</div>
                    </div>
                    <div className="qrCodeIcon">
                        <QrcodeOutlined />
                        <div>扫码</div>
                    </div>
                </div>
                <div className={this.state.SureClose ? 'leftMainImgClosed' : 'leftMainImg'}>
                    <div className="openRadius">
                        <div className="radius" onClick={this.openLeft}>
                            <UserOutlined />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LeftFixed