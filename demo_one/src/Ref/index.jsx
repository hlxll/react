import React, { Component } from "react";
import RefsChild from './RefsChild'

class RefsCom extends Component{
    setRefChild = ()=>{
        this.setRefs.focus()
    }
    constructor(){
        super()
        this.setRefChild = this.setRefChild.bind(this);
        this.setRefs =  null;
    }
    
    render(){
        return(
            <div>
                <button onClick={this.setRefChild}>设置ref的input</button>
                <RefsChild setRefs={element=>this.setRefs = element}></RefsChild>
            </div>
        )
    }
}


export default RefsCom;