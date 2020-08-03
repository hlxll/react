import React, { Component } from 'react';
import './App.css'
//BrowserRouter和HashRouter路由容器
//Link就是a链接，实现声明式跳转
/*
  HashRouter使用hash  锚点实现
  BrowserRouter使用h5 history实现
  开发阶段建议使用hashRouter，上线之后使用BrowserRouter
*/
import { HashRouter as Router ,Route, Link, NavLink, Redirect} from 'react-router-dom'
import news from './component/News';
import {Provider,Consumer} from "./AppContext.js"
import Login from './login/login.js'
// import { from } from 'rxjs';
// //跨层级通讯  Provider Consumer是组件
// const Context = React.createContext();
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;
import home from './component/home'
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
    return(
      <Router>
      {/*必须放置在路由容器 */}
      <div>
        <Provider value={store}>
          context传递数据的方式
          只要在Provider中的子组件，就可以使用Consumer接收context数据
          <Consumer>
            {
              ctx => <Login {...ctx}>父节点引用组件，组件中可以用props调用</Login>
            }
          </Consumer>
          
        </Provider>
        {/*都必须存在根节点 */}
        <h1>react路由</h1>
        {/*activeClassName点击链接高亮 */}
        <NavLink to="/home" activeClassName="selected">home组件</NavLink><br/>
        <Link to="/news">news组件</Link>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path="/home" component={home}></Route>
        <Route path="/news" component={news}></Route> 
        {/**
         * children不管hash是否匹配，都会显示，但是传递的数据props，只有hash匹配才会有，里面包含地址信息
         * 
         */}
        <Route path="/about" children={(props)=>{
          console.log(props)
          return(
            <div>一直显示的children</div>
          )
        }}/>
      </div>
    </Router>
    )
  }
}
// function Child(props){
//   return (
//   <div>
//     <p>{props.user.name}</p>
//   </div>
//   );
// }

// const store = {
//   user: {
//     name: '跨层级通讯',
//   },
//   pass: {
//     name: 'huanglin'
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       prop传递
//       <Child {...store}/>
//       <Provider value={store}>
//         context传递
//         <Consumer>
//           {
//             ctx => <Child {...ctx}/>
//           }
//         </Consumer>
//         context传递
//         <Consumer>
//           {
//             ctx => <Login {...ctx}/>
//           }
//         </Consumer>
//         只要在Provider中的子组件，就可以使用Consumer接收context数据
//       </Provider>
//     </div>
//   );
// }

export default App;