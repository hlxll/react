import React, {Component} from 'react'
import {sendAction} from '../../Store/index'
class detail extends Component {
    handleClick = () => {
        const action = sendAction();
        store.dispatch(action)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={this.handleClick}></button>
                detail组件1
                {this.props.data}
                <hr/>
                ID:{this.props.match.params.id}
            </div>
        )
    }
}
export default detail