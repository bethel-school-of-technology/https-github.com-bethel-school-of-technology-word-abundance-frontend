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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/marketplace">
             

                <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Marketplace
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Maintenance</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Tech</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Music</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>        
                    </Link></li>
                
                <li><Link to="/signup">Signup</Link></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;