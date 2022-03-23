import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Login from "./view/login";
// import Home from "./view/home";
// import Order from "./view/order";
// import Config from "./view/config";
// import Source from "./component/source";

// import DocComponent from "./doc/index.jsx";
// import RDComponent from './doc/ReactDomComponent/index'
// import ReactDOMServer from './doc/ReactDOMServer/index'
import HookComponent from './doc/hookComponent/index'

//ak = mOs3rqPMqyM6G21CKIqyO8yFh9hWtR8p
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* <Route path="/login" component={Login} />
        <Route path="/config" component={Config} />
        <Route path="/Source" component={Source} />
        <Route path="/order" exact component={Order} /> */}
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={HookComponent} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
