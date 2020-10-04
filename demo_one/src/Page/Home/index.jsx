import React, { Component } from 'react';
//Switch具有排他性，只有匹配了一个就停止匹配
class Home extends Component{
  constructor(props){
    super(props)
    this.setStateFun = this.setStateFun.bind(this)
    this.state = {
      name: 'huanglin',
      age: 12
    }
    console.log('construct')
  }
  componentWillMount() {
    console.log('挂载')
  }
  componentDidMount() {
    console.log('挂载成功')
  }
  componentWillReceiveProps() {
    console.log('属性prop改变')
  }
  shouldComponentUpdate() {
    //return返回true或false，是否更新
    console.log('状态是否改变')
    return true;
  }
  componentWillUpdate() {
    console.log('状态改变')
  }
  componentDidUpdate() {
    console.log('更新')
  }
  componentWillUnmount(){
    console.log('卸载')
  }
    render(){
      return(
        <div>
          home
        </div>
      )
    }
    setStateFun() {
      //只会更新对应状态，不会覆盖
      //该方法是异步的,如果想setState之后立即拿到最新的值，需要使用回调
      this.setState({  
        name: 'xulaoda'
      },function() {
        console.log(this.state)
      })
      console.log(this.state)
    }
}
//为组件定义默认的props，一般为了prop数据不能为空定义
Home.defaultProps = {
  defaultColor: 'red'
}
  export default Home