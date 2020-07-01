import React, { Component } from 'react';

//BrowserRouter和HashRouter路由容器
//Link就是a链接，实现声明式跳转
/*
  HashRouter使用hash  锚点实现
  BrowserRouter使用h5 history实现
  开发阶段建议使用hashRouter，上线之后使用BrowserRouter
*/
import { BrowserRouter as Router ,Route, Link} from 'react-router-dom'

import Login from './login/login';
import {Provider,Consumer} from "./AppContext.js"
// import { from } from 'rxjs';
// //跨层级通讯  Provider Consumer是组件
// const Context = React.createContext();
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;
import home from './component/home'
class App extends Component{
  render(){
    return(
      <Router>
      {/*必须放置在路由容器 */}
      <div>
        {/*都必须存在根节点 */}
        <h1>react路由</h1>
        <Route path="/home" component={home}></Route>
        <Link to="/home">home</Link>
      </div>
    </Router>
    )
  }
}
function Child(props){
  return (
  <div>
    <p>{props.user.name}</p>
  </div>
  );
}

const store = {
  user: {
    name: '跨层级通讯',
  },
  pass: {
    name: 'huanglin'
  }
}

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