import React, {Component} from 'react'
class detail extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                detail组件1
                {this.props.data}
                <hr/>
                ID:{this.props.match.params.id}
            </div>
        )
    }
}
export default detail