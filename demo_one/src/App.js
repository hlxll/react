import React, { Component } from 'react';
import { HashRouter as Router, Route, Link,  Switch} from "react-router-dom";
import {Provider,Consumer} from "./AppContext.js"
import Login from './login/login'
import Layout from './Components/LayOut/LayOut'
import LeftLogin from './login/loginleft'
import LoginRight from './login/LoginRight'

import routes from './Router'
class App extends Component{
  render(){
    const store = {
      user: {
        name: '跨层级通讯',
      },
      pass: {
        name: 'huanglin'
      }
    }
    let LayoutRouter = (
      <Layout>
        {/* 定义全局组件，layout，其他组件都在这个组件内部 */}
        {
          routes.map((route, key)=>{
            if(route.exact){
              return(
                <Route
                  key={key}
                  exact
                  path={route.path}
                  render={props=>(
                    <route.component {...props} />
                  )}
                ></Route>
              )
            }else{
              return(
                <Route
                  key={key}
                  path={route.path}
                  render={props=>(
                    <route.component {...props} />
                  )}
                ></Route>
              )
            }
          })
        }
      </Layout>
    )
    return(
        <Provider value={store}>
          <Router>
            <Switch>
              <Login>
                <Switch>
                  <Route exact path="/login/left" component={LeftLogin}></Route>
                  <Route exact path="/login/right" component={LoginRight}></Route>
                </Switch>
              </Login>
              
              <Route path="/" render={props => LayoutRouter}></Route>
            </Switch>
          </Router>
        </Provider>
    )
  }
}
export default App;