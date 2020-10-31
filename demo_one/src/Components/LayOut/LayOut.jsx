import React, {Component} from 'react';
import LKHeader from "../Header/LKHeader";
import LKAside from "../Aside/LKAside";
import { connect } from 'react-redux';
import {pushNameAge} from '../../Store/actionCreators.js'
class LayOut extends Component {
    render() {
        const nameage = this.props
        console.log(nameage)
        return (
            <div>
                <LKHeader/>
                <div className="main">
                    <LKAside/>
                    {this.props.children}
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.props.setNameAge(['huanglin',12])
    }
}
const mapStateToProps = (state)=>{
    return{
        nameAndAge: state.nameAndAge
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        setNameAge(data){
            const action = pushNameAge(data)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LayOut);