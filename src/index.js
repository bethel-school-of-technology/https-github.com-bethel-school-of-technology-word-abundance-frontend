/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import App from './components/App';
import {
  //Home,
  About,
  Contact,
  Marketplace,
} from './components/pages';
/* import { 
  shoppingCart
} from '../actions/shoppingCart'; */
// import Navbar from './components/Navbar';
/* import SideNav from '../pages/Layout/SideNav'; */
//import Tech from '../pages/UserService.js/Tech';
// import Card from './Card';
/* import { Landing } from '../pages/Layout/Landing' */
// import CategoryList from './Components/CategoryList';
// import Product from './Components/Product';
// import Service from './Components/Service';
// import Orders from './Components/Orders';
// import SignUp from '../actions/SignUp';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Dashboard from './components/Dashboard/Dashboard';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/Contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/Marketplace' component={Marketplace} />
        {/* <Route path='/Tech' component={Tech} /> */}
        {/* <Route path='/Card' component={Card} /> */}
        {/*<Route path='/shoppingCart' component={shoppingCart} /> */}
       {/*  <Route path='/signup' component={SignUp} /> */}
        {/* <Route path='/SideNav' component={SideNav} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
    {/* <Route path='/Landing' component={Landing} /> */}
    {/* <Route path='/categories' component={CategoryList} />
    <Route path='/product' component={Product} />
    <Route path='/service' component={Service} />
    <Route path='/orders' component={Orders} />  */}
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
