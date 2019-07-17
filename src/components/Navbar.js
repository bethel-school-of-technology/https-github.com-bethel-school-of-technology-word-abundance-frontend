import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/marketplace">Marketplace</Link></li>

                </ul>
            </nav>
        );
    }
}
export default Navbar;