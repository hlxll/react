import React, {Component} from 'react'
class Fragment extends Component{
    render(){
        return(
            <React.Fragment>
                <div>将组件进行分组，达到不用使用外部div的效果</div>
            </React.Fragment>
        )
    }
}
export default Fragment;