import React from 'react';
import Login from './login/login';
import {Provider,Consumer} from "./AppContext.js"
// import { from } from 'rxjs';
// //跨层级通讯  Provider Consumer是组件
// const Context = React.createContext();
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;

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

function App() {
  return (
    <div className="App">
      prop传递
      <Child {...store}/>
      <Provider value={store}>
        context传递
        <Consumer>
          {
            ctx => <Child {...ctx}/>
          }
        </Consumer>
        context传递
        <Consumer>
          {
            ctx => <Login {...ctx}/>
          }
        </Consumer>
        只要在Provider中的子组件，就可以使用Consumer接收context数据
        <Login/>
      </Provider>
    </div>
  );
}

export default App;