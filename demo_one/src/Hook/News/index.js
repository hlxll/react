import React, { Component } from "react";

class News extends Component{
    constructor(props){
        super(props)
        this.createMarkup = this.createMarkup.bind(this)
        this.state = {
            forArr: [1,2,3,4]
        }
    }
    render(){
        return (
            <div>
                news组件
                {/* 代替innerhtml，直接设置html有点存在风险 */}
                <div dangerouslySetInnerHTML={this.createMarkup()}></div>
            </div>
        )
    }

    createMarkup() {
        return {__html: 'First InnerHtml'}
    }
}
export default News