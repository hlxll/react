import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './view/login'
import Home from './view/home'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/login" exact component={Login} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
