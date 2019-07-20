import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import CategoryList from './components/CategoryList';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import MarketPlace from './components/Marketplace';
import Contact from './components/Contact';
import Product from './components/Product';
import Service from './components/Service';
import Login from './components/Login';
import Orders from './components/Orders';
import Search from './components/Search';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';

import './index.css';

const App = () =>
    (
        <Router>
            <div>
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/categories' component={CategoryList} />
                <Route path='/signup' component={SignUp} />
                <Route path='/marketplace' component={MarketPlace} />
                <Route path='/contact' component={Contact} />
                <Route path='/product' component={Product} />
                <Route path='/service' component={Service} />
                <Route path='/login' component={Login} />
                <Route path='/orders' component={Orders} />
                <Route path='/search' component={Search} />
               

                <p id="AbundantLogo">Abundant</p>
            </div>
        </Router>
    );

ReactDOM.render(<App />, document.getElementById('root'));