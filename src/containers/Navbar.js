import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className=""><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/marketplace">Marketplace</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/scp">ShoppingCartPreview</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;