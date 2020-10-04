import React, { Component } from 'react'
export default class loginleft extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log('组件被渲染到dom中后执行')
    }
    render() {
        return (
            <div>
                right
            </div>
        )
    }
}
// const mapStateToProps = (state) =>{
//     return{
//         homeData:state.homeData
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         homeDataActions:bindActionCreators(homeDataActions,dispatch)
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(loginleft)