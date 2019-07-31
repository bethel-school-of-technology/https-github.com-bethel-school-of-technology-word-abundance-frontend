import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className=""><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/marketplace">Marketplace</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    {/* <li><Button><Link to="/signin">SignIn</Link></Button></li> */}
                </ul>
            </nav>
        );
    }
}

export default Navbar;