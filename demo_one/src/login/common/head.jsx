import React,{Component} from 'react';
import { connect } from 'react-redux'
import {sendAction} from './../../Store/actionCreators.js'
class Header extends Component{
    render(){
        const {sendData} = this.props;
        console.log(sendData)
        return(
            <div>
                header头部
            </div>
        )
    }
    componentDidMount(){
        this.props.setAction([1,2,3,4])
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
  return {
    sendData: state.sendData
  }
};
const mapDispatchToProps = (dispatch) =>{
    return {
        setAction(data=[1,2,3]){
            const action = sendAction(data);
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);