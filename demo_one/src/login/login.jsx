import React, { Component } from 'react'
export default class HomePage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log('组件被渲染到dom中后执行')
    }
    render() {
        return (
                <div>
                    <div>
                        <div className="loginFooter">
                            <div>
                                <button>1</button>
                            </div>
                            <div>
                                <button>2</button>
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