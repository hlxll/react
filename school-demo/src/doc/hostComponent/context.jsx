import React, { Component } from "react";

import { MyContext, UserContext } from './createContext'
//外部创建一个context文件，在发布和接收的文件都引入该文件。Provide发布，Consumer接收
class ContextCom extends Component {
    constructor(props) {
        super(props)
        // this.change = this.change.bind(this)
    }
    change(value) {
        console.log(value);
    }
    render() {
        // console.log(this.context);
        return (
            <div>
                <p>
                    <MyContext.Consumer>
                        {
                            value => <span>MyContext传递数据：{value}</span>
                        }
                    </MyContext.Consumer>
                </p>
                <p>
                    <UserContext.Consumer>
                        {
                            value => <span>UserContext传递数据：{value}</span>
                        }
                    </UserContext.Consumer>
                </p>
                <button onClick={this.change.bind(this, 'change')}>change</button>
            </div>
        )
    }
}
//设置contextType到class上，就可以支持使用this.context访问context的value
ContextCom.contextType = MyContext;
export default ContextCom;