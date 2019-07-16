import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import CategoryList from './components/CategoryList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import './index.css';

const App = () =>
    (
        <Router>
            <div>
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/categories' component={CategoryList} />
            </div>
        </Router>
    );

ReactDOM.render(<App />, document.getElementById('root'));