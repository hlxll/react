import { Component } from "react"
import SmallLogin from '../../component/login'
class Home extends Component {
    constructor(props) {
        super()
    }
    render () {
        return (
            <div>
                <SmallLogin />
            </div>
        )
    }
}
export default Home