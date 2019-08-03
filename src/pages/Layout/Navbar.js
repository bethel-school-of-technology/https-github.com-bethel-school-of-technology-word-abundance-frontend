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
                    <li className=""><Link to="/">
                    <h3 id='AbundantLogo'>Abundant 
                    <img src='favicon.ico'></img></h3>
                    </Link>
                    </li>
                    <li><Link to="/contact"><h5 id="contactNav">Contact</h5></Link></li>
                    <li><Link to="/about"><h5 id="aboutNav">About</h5></Link></li>
                    <li><Link to="/marketplace"><h5 id="marketNav">Marketplace</h5></Link></li>
                    <li><Link to="/signup"><h5 id="signupNav">Login</h5></Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;