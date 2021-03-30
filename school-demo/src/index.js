import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './view/login'
import Home from './view/home'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
