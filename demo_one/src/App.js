import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          学习react开始
          <Login propData={'es6组件使用props前加this，函数形式直接使用props'}/>
        </div>
      </header>
    </div>
  );
}

export default App;
