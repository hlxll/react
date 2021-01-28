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
            openLogin: false,
            orderLogin: false,
            moneyLogin: false
        }
        this.closeLeft = this.closeLeft.bind(this)
        this.openLeft = this.openLeft.bind(this)
        this.closeMailLogin = this.closeMailLogin.bind(this)
        this.closeOrderLogin = this.closeOrderLogin.bind(this)
        this.closeMoneyLogin = this.closeMoneyLogin.bind(this)
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
        this.setState((state) => {
            return {
                openLogin: !state.openLogin,
                orderLogin: false,
                moneyLogin: false,
            }
        })
    }
    closeOrderLogin () {
        this.setState((state) => {
            return {
                orderLogin: !state.orderLogin,
                moneyLogin: false,
                openLogin: false
            }
        })
    }
    closeMoneyLogin () {
        this.setState((state) => {
            return {
                moneyLogin: !state.moneyLogin,
                orderLogin: false,
                openLogin: false
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
                            <SmallLogin openLogin={this.closeMailLogin} />
                        </div>
                    </div>
                    <div className={this.state.orderLogin ? 'whiteMailIcon' : 'mailIcon'}>
                        <MedicineBoxOutlined onClick={this.closeOrderLogin} />
                        <div onClick={this.closeOrderLogin}>订单</div>
                        <div className={this.state.orderLogin ? 'smallLogin' : 'closeLogin'}>
                            <SmallLogin openLogin={this.closeOrderLogin} />
                        </div>
                    </div>
                    <div className={this.state.moneyLogin ? 'whiteMailIcon' : 'moneyIcon'}>
                        <MoneyCollectOutlined onClick={this.closeMoneyLogin} />
                        <div onClick={this.closeMoneyLogin}>账户</div>
                        <div className={this.state.moneyLogin ? 'smallLogin' : 'closeLogin'}>
                            <SmallLogin openLogin={this.closeMoneyLogin} />
                        </div>
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