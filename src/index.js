import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import CategoryList from './components/CategoryList';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

import './index.css';
// import hands from '../src/hands';

const App = () =>
    (
        <Router>
            <div>
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/categories' component={CategoryList} />
                <Route path='/signup' component={SignUp} />

                {/* <img src={ hands } /> */}

            </div>
        </Router>
    );

ReactDOM.render(<App />, document.getElementById('root'));