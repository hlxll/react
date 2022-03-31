import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
//用于服务端渲染，将react元素转为字符串
const resStr = ReactDOMServer.renderToString(<div>元素转字符串</div>)
// ReactDOM.hydrate(resStr, document.getElementById('renderId'))??
class DomServer extends Component {
    render() {
        return (
            <div>服务端渲染
            </div>
        )
    }
}

export default DomServer;