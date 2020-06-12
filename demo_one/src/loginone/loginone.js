import React, { Component } from 'react'
import { Consumer } from '../AppContext'

export default class TopBar extends Component {
    render() {
        return (
            <Consumer>
                {
                    ctx => <TopBarHandle {...ctx}/>
                }
            </Consumer>
        )
    }
}

function TopBarHandle(props){
    return (<div className="tabBar">
        {props.user.name}
    </div>)
}