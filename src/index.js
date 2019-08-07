import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
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
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Dashboard from './components/UserDashboard/UserDashboard';
import Blog from './components/Blog/PublicBlogs'
import Children from './components/Children';

/* import {
    shoppingCart
} from './actions/Shop/shoppingCart';
 */
// import Navbar from './pages/Layout/Navbar';
// import BackEnd from './pages/UserService.js/Tech/DevServices.js/BackEnd';
// import FrontEnd from './pages/UserService.js/Tech/DevServices.js/FrontEnd';

//import Card from './components/Card';
// import SignUp from './actions/AccountActions/SignUp';
// import UserLogin from './actions/AccountActions/UserLogin';
// import SideNav from './pages/Layout/SideNav';
//import { Landing } from './pages/Layout/Landing';
// import Dashboard1 from './pages/DashboardEvents/Dashboard';
// import PostList from './pages/Posts/PostList';

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <App>
        <Route path="/" exact component={Children} />
        <Route path='/Contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/Marketplace' component={Marketplace} />
        <Route path='/blogs' component={Blog} /> */}
        <Route path="/signup" component={Signup} />
        {/* <Route exact path='/Dashboard1' component={Dashboard1} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
       {/*  <Route path='/Backend' component={BackEnd} />
        <Route path='/Card' component={Card} />
        <Route path='/shoppingCart' component={shoppingCart} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/PostList' component={PostList} /> */}
            {/* <Route path='/Tech' component={Tech} /> */}
        {/* <Route path='/Card' component={Card} /> */}
        {/*<Route path='/shoppingCart' component={shoppingCart} /> */}
       {/*  <Route path='/signup' component={SignUp} /> */}
        {/* <Route path='/SideNav' component={SideNav} /> */}
    {/* <Route path='/' exact component={Home} /> */}
    {/* <Route path='/Landing' component={Landing} /> */}
    {/* <Route path='/categories' component={CategoryList} />
    <Route path='/product' component={Product} />
    <Route path='/service' component={Service} />
    <Route path='/orders' component={Orders} />  */}
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'));
