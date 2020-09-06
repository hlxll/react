import React, { Component } from 'react'
import { Consumer } from '../AppContext.js';
import Loginone from '../loginone/loginone.js';
import store from '../store'
import {List, Input} from 'antd'
export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
        this.changeData = this.changeData.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.addAll = this.addAll.bind(this)
        this.listener = this.listener.bind(this)
        this.addOne = this.addOne.bind(this)
        this.redux1 = this.redux1.bind(this)
        this.redux2 = this.redux2.bind(this)
        this.redux3 = this.redux3.bind(this)
        this.takeredux = this.takeredux.bind(this)
        store.subscribe(this.listener)//监听store
    }
    componentDidMount() {
        console.log('组件被渲染到dom中后执行')
        console.log(this.state)
    }
    render() {
        const count = this.state.ThunkNum
        return (
            <div>
                <p>{this.props.children}</p>
                <Loginone/>
                <Consumer>
                    {
                        ctx=><div>Consumer得到的数据，{ctx.user.name}</div>
                    }
                </Consumer>
                <Input onChange={this.changeValue} value={this.state.inputValue} />
                <button onClick = {this.clickBtn}>增加</button>
                {count}<button onClick = {this.addOne}>+1</button>
                <p>{this.state.inputValue}</p>
                <List 
                 bordered
                 dataSource={this.state.reducerData}
                 renderItem={item=>(<List.Item>{item}</List.Item>)}
                >
                </List>
                <button onClick = {this.addAll}>添加默认值</button>
                <button onClick = {this.redux1}>promise1</button>
                <button onClick = {this.redux2}>promise2</button>
                <button onClick = {this.redux3}>promise3</button>
                <button onClick = {this.takeredux}>take</button>
            </div>
        )
    }
    takeredux(){
        store.dispatch({
            type:'take'
        })
    }
    redux1(){
        store.dispatch({
            type:'takeEvery',
            user: {
                username: 'hl',
                password: '123'
            }
        })
    }
    redux2(){
        store.dispatch({type:'takeLatest',user: {
            username: 'hl',
            password: '1234'
        }})
    }
    redux3(){
        store.dispatch({type:'throttle',user: {
            username: 'hl',
            password: '12345'
        }})
    }
    listener(){
    }
    addOne(){
        store.dispatch((dispatch, state)=>{
            setTimeout(function (){
                dispatch({
                    type: 'AddOne',
                    value: 1
                })
            },2000)
        })
    }
    addAll(e){
        const action = {
            type: 'addAll'
        }
        store.dispatch(action)
    }
    changeValue(e){
        // console.log(e.target.value)
        let action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
    changeData(e){
        // console.log(e.target.value)
    }
    clickBtn(){
        const action = {type: 'addItem'}
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}