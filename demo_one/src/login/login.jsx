import React, { Component } from 'react'
import store from "../Store";
import {sendAction} from '../Store/actionCreators'
export default class HomePage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log('组件被渲染到dom中后执行')
    }
    handleClick = () => {
        const action = sendAction();
        store.dispatch(action)
    }
    componentDidMount(){
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
                                <button onClick={this.addClick}>+</button>
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