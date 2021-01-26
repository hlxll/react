import { Component } from "react"
import {
    CloseOutlined,
    UserOutlined,
    MailOutlined,
    MedicineBoxOutlined,
    MoneyCollectOutlined,
    QrcodeOutlined
  } from '@ant-design/icons';
class LeftFixed extends Component {
    render() {
        return (
            <div className="leftMain">
                <div>
                    <div>
                        <CloseOutlined />
                    </div>
                    <div>
                        <UserOutlined />
                    </div>
                    <div>
                        <MailOutlined />
                        消息
                    </div>
                    <div>
                        <MedicineBoxOutlined />
                        订单
                    </div>
                    <div>
                        <MoneyCollectOutlined />
                        账户
                    </div>
                    <div>
                        <QrcodeOutlined />
                        扫码
                    </div>
                </div>
            </div>
        )
    }
}
export default LeftFixed