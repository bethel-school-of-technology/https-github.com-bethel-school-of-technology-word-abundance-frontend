// import ReactDOM from 'react-dom';
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
import SideNav from './pages/Layout/SideNav';
import Dashboard from './pages/DashboardEvents/Dashboard';

import PostList from './pages/Posts/PostList';
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
                        <Route path='/SideNav' component={SideNav} />
                        <Route path='/BackEnd' component={BackEnd} />
                        <Route path='/FrontEnd' component={FrontEnd} />
                        

                    </Switch>
                </div>
            </BrowserRouter>
            </Provider>

        );
    }
}

export default App;

{/* <Route path='/Rate' component={Rate} /> */ }
{/* <Route path='/Landing' component={Landing} /> */ }
{/* <Route path='/button' component={Button} /> */ }



{/* <Route path='/categories' component={CategoryList} />
                <Route path='/product' component={Product} />
                <Route path='/service' component={Service} />
                <Route path='/orders' component={Orders} />  */}
{/* // import store from './store';
                // import Button from './components/Card/Button';
                // import { Rate, Star } from './components/Card/Rate';
                // import { */}
{/* //     FloatSearch
                // } from './components/Card/FloatSearch';

                // import CategoryList from './Components/CategoryList';
                // import Product from './Components/Product';
                // import Service from './Components/Service';
                // import Orders from './Components/Orders'; */}


