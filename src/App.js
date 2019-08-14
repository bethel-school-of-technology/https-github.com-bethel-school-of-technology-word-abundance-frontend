import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import {
    Home,
    About,
    Contact,
    Marketplace,
} from './pages';

import {
    shoppingCart
} from './actions/Shop/shoppingCart';

import Navbar from './pages/Layout/Navbar';
import BackEnd from './pages/UserService.js/Tech/DevServices.js/BackEnd';
import FrontEnd from './pages/UserService.js/Tech/DevServices.js/FrontEnd';
import Card from './components/Card';
import SignUp from './actions/AccountActions/SignUp';
import Signin from './actions/AccountActions/Signin';
import SideNav from './pages/Layout/SideNav';
import Dashboard from './pages/DashboardEvents/Dashboard';
import Footer from './pages/Layout/Footer';
import PostList from './pages/Posts/PostList';
import TechLanding from './pages/UserService.js/Tech/DevServices.js/TechLanding'
// import Signout from "./components/auth/Signout";
class App extends Component {
    render() {
        return (
            <Provider store = {store}>
            <BrowserRouter>
                <div className='App'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Dashboard' component={Dashboard} />
                        <Route path='/Contact' component={Contact} />
                        <Route path='/About' component={About} />
                        <Route path='/Marketplace' component={Marketplace} />
                        <Route path='/Card' component={Card} />
                        <Route path='/shoppingCart' component={shoppingCart} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/Signin' component={Signin} />   
                        <Route path='/SideNav' component={SideNav} />
                        <Route path='/BackEnd' component={BackEnd} />
                        <Route path='/FrontEnd' component={FrontEnd} />
                        <Route path='/PostList' component={PostList} />
                        <Route path='/TechLanding' component={TechLanding} />
                        {/* <Route path='/PostList' component={PostList} /> */}
                        <Route path='/Footer' component={Footer} />
                        {/* <Route path='/Signout' component={Signout} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
            </Provider>

        );
    }
}

export default App;
