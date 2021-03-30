import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./view/login";
import Home from "./view/home";
import Order from "./view/order";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/login" component={Login} />
        <Route path="/order" exact component={Order} />
=======
        <Route path="/login" exact component={Login} />
>>>>>>> f75d7425a972c9b6605d93ea475998edd9344307
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
