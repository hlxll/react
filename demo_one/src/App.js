import React, { Component } from 'react';
import { HashRouter as Router, Route, Link,  Switch} from "react-router-dom";
import {Provider,Consumer} from "./AppContext.js"
import Login from './login/login'
import store from './Store'
import Layout from './Components/LayOut/LayOut'
import LeftLogin from './login/loginleft'
import LoginRight from './login/LoginRight'

import routes from './Router'
class App extends Component{
  render(){
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
    // switch是让路由只显示一个，当配置404页面，可以使用这个
    return(
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/index" render={props => LayoutRouter}></Route>
<<<<<<< HEAD
=======
              {/* <Login>
                <Switch>
                  <Route path="/login/left" component={LeftLogin}></Route>
                  <Route path="/login/right" component={LoginRight}></Route>
                </Switch>
              </Login> */}
              
>>>>>>> fe7e89c51f19f30834d486b5da5b3d5f0ee86a3a
            </Switch>
          </Router>
        </Provider>
    )
  }
}
export default App;