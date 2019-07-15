import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import './index.css';

const App = () =>
    (
        <Router>
            <div>
                < Navbar />
            </div>
        </Router>
    );

ReactDOM.render(<App />, document.getElementById('root'));