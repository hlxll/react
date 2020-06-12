import React, { Component } from 'react'
import { Consumer } from '../AppContext';
import Loginone from '../loginone/loginone';

export default class HomePage extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Loginone/>
                <Consumer>
                    {
                        ctx=><div>{ctx.pass.name}</div>
                    }
                </Consumer>
            </div>
        )
    }
}