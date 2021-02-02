import { Component } from "react"
import SmallLogin from '../../component/login'
import LoginHead from '../../component/login/loginHead'
import './index.less'
import { Image } from 'antd';
class Home extends Component {
    constructor(props) {
        super()
    }
    render () {
        return (
            <div className="loginMain">
                <div className="head">
                    <LoginHead/>
                </div>
                <div className="loginCenter">
                    <div className="logImg"></div>
                    <div className="CenterMain">
                        <div className="MainLeft">
                            <Image
                                width={200}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </div>
                        <SmallLogin />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home