import React, {Component} from 'react'
class detail extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                detail组件
                <hr/>
                ID:{this.props.match.params.id}
            </div>
        )
    }
}
export default detail