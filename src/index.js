import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import store from "./store";
import App from "./App";

import SignUp from './components/auth/Signup'
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Dashboard from "./pages/UserDashboard/UserDashboard";
import Blog from "./pages/Blog/PublicBlogs";
import Home from "./pages/Home";
import ProductCreate from './pages/Marketplace/ProductCreate';
import ServiceCreate from './pages/Marketplace/ServiceCreate';
import Product from './pages/Marketplace/Product'
import Service from './pages/Marketplace/Service'
import Contact from './pages/Contact'
import About from './pages/About'

ReactDOM.render(
  <Router history={createHistory()}>
    <Provider store={store}>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blog} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path='/signup' component={SignUp} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path='/productcreate' component={ProductCreate} />
        <Route path='/servicecreate' component={ServiceCreate} />
        <Route path='/products' component={Product} />
        <Route path='/services' component={Service} />
      </App>
    </Provider>
  </Router>,
  document.getElementById("root")
);
