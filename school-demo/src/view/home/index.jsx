import { Component } from "react"
import './index.less'
import Head from '../../component/head'
import LeftFixed from '../../component/leftFixed'
class Home extends Component {
    render () {
        return (
            <div className="home">
                <Head />
                <div className="fixedFixed">
                    <LeftFixed />
                </div>
            </div>
        )
    }
}
export default Home