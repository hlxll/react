import React, { Component } from 'react'
import store from "../Store";
import {sendAction, getSowingDataAction} from '../Store/actionCreators'

import { connect } from 'react-redux';
class HomePage extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }
    componentDidMount() {
        console.log('组件被渲染到dom中后执行')
    }
    addTodo=(text)=>{
        return{
            type: 'SEND_TYPE',
            text
        }
    }
    handleClick = () => {
        // const action = sendAction();
        // store.dispatch(action)
        const action = store.getState();//返回应用当前的state树
        console.log(action)
        store.dispatch( this.addTodo([1,2,3,4,5,6,7]))//dispatch触发state变化的唯一途径
    }
    addClick = () =>{

    }
    componentDidMount(){
        //每当dispatch之后就会执行，state可能变化，可以在这里获取变化后的state
        store.subscribe(()=> {
            console.log(store.getState())
            this.setState({})
            console.log(store.getState())
        })
    }
    render() {
        return (
                <div>
                    <div>
                        <div className="loginFooter">
                            <div>
                                <button onClick={this.handleClick}>1</button>
                            </div>
                            <div>
                                <button onClick={this.reqStateData}>+</button>
                            </div>
                            <div>
                                <button>3</button>
                            </div>
                        </div>
                    </div>
                    {this.props.children}
                </div>
        )
    }
    
}
export default HomePage ;