
import React, { Component } from 'react';
import login from '../login'
//Switch具有排他性，只有匹配了一个就停止匹配
import { HashRouter as Router, Route, Link, Switch, Redirect, Prompt } from 'react-router-dom';
import detail from './detail.js'
import NotFound from './NotFound.js'
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
    console.log('挂在')
  }
  componentDidMount() {
    console.log('挂在成功')
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
        <Router>
          <div>
            home组件
            <span onClick={this.setStateFun}>改变state</span>
            <Link to="/home/login">去login</Link>
            <Link to="/home/useRender">去render</Link> 
            默认子组件login
            <Link to="/home/login/1">1号</Link>
            <Link to="/home/login/2">2号</Link>
            <Link to="/home/login/3">3号</Link>
            <hr/>
            {/* 现在的path匹配是只有地址找得到就匹配成功，加了exact是精准匹配 */}
            <Switch>
              <Route exact path="/home/login" component={login}></Route>
              <Route path="/home/login/:id" component={detail}></Route>
              <Route path="/home/useRender" render = {(props)=>{
                console.log('render'+props)
                //1:history主要是做函数式导航
                //2:location代表的url地址信息
                //3:match路由传参/news/14
                return (
                  <div>rander组件</div>
                )
              }}></Route>
              {/* 定义notfound页面 */}
              {/* 如果上面的都没有匹配到，就使用Redirect重定向， */}
              <Route path="/home/login/NotFound" component={NotFound}></Route>
              <Redirect from="*" to="/home/login/NotFound"></Redirect>
              <Prompt
                when={true}
                message="Are you sure you want to leave?"
              />
            </Switch>
          </div>
        </Router>
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
  export default Home