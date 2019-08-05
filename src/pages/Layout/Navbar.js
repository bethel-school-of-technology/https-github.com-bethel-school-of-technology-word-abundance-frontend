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
                    <h3 id='AbundantLogo'>ABUNDANT 
                    <img src='favicon.ico'></img></h3>
                    </Link>
                    </li>
                    <li><Link to="/contact"><h5 id="contactNav">CONTACT </h5></Link></li>
                    <li><Link to="/about"><h5 id="aboutNav">ABOUT </h5></Link></li>
                    <li><Link to="/marketplace"><h5 id="marketNav">STORE </h5></Link></li>
                    <li><Link to="/login"><h5 id="loginNav">LOGIN </h5></Link></li>
                    <li><Link to="/signup"><h5 id="signupNav">SIGNUP</h5></Link></li>     

                </ul>
            </nav>
        );
    }
}

export default Navbar;