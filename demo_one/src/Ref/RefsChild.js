import React, {Component} from 'react'
class RefsChild extends Component{
    render(){
        return(
            <div>
                <input ref={this.props.setRefs}/>
            </div>
        )
    }
}
export default RefsChild;