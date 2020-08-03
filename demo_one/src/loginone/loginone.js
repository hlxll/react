import React, { Component } from 'react'
import { Consumer } from '../AppContext'

export default class TopBar extends Component {
    render() {
        return (
            <div>
                <Consumer>
                {
                    ctx=><div>孙组件使用Consumer得到的数据{ctx.pass.name}</div>
                }
                </Consumer>
            </div>
            
        )
    }
}