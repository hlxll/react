import {Component} from 'react'
import {Carousel, Image } from 'antd'
import { NavLink as Link } from 'react-router-dom'
import './intervalImg.less'
class IntervaImg extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="intervalImg">
                <div className="interval">
                <Carousel autoplay>
                    <div>
                        <Image className="img" src="./img/intervalimg.png"/>
                    </div>
                    <div>
                        <Image className="img" src="./img/intervalimg.png"/>
                    </div>
                    <div>
                        <Image className="img" src="./img/intervalimg.png"/>
                    </div>
                    <div>
                        <Image className="img" src="./img/intervalimg.png"/>
                    </div>
                </Carousel>
                </div>
                <div className="intervalText">
                    <p><Link to={{pathname: ''}}>中国人民共和国外交部安全提醒</Link></p>
                </div>
            </div>
        )
    }
}
export default IntervaImg