import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import store from "./store";
import App from "./components/App";
import { About, Contact, Marketplace } from "./components/pages";

import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Dashboard from "./components/UserDashboard/UserDashboard";
import Blog from "./components/Blog/PublicBlogs";
import Home from "./components/Home";
import ProductCreate from './components/pages/ProductCreate';
import ServiceCreate from './components/pages/ServiceCreate';

ReactDOM.render(
  <Router history={createHistory()}>
    <Provider store={store}>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Marketplace" component={Marketplace} />
        <Route path="/blogs" component={Blog} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path='/productcreate' component={ProductCreate} />
        <Route path='/servicecreate' component={ServiceCreate} />
      </App>
    </Provider>
  </Router>,
  document.getElementById("root")
);
