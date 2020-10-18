import React, { Component } from 'react'
// import Header from './common/head'
export default class loginleft extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log('组件被渲染到dom中后执行')
    }
    render() {
        return (
            <div>
                {/* <Header /> */}
                left
            </div>
        )
    }
}