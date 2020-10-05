import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendAction} from '../Store/actionCreators'
class LoginRight extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log('组件被渲染到dom中后执行')
        // this.props.reqStateData([1,2,3])
    }
    render() {
        return (
            <div>
                <div>{this.props.sendData}</div>
                <button>+</button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
        sendData:state.sendData
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        reqStateData(data=[1,2,3]) {
            const action = sendAction(data)
            dispatch(action)
        }
    }
};

export default LoginRight