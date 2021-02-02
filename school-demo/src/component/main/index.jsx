import {Component} from 'react'
import {Image} from 'antd'
import './index.less'
class Main extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="main">
                <div className="mainform">
                    <div className="formContent">

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