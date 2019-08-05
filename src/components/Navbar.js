import React from 'react';
import { connect } from 'react-redux';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './navbar.css';

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand id="logo" href="/">Abundance</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link to="/">Home</Nav.Link>
                <NavDropdown title="About">
                  <NavDropdown.Item href="/whoweare">Who We Are</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Meet The Team</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Marketplace">
                  <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                  <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="/signout">Signout</Nav.Link>
                <Nav.Link to="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </React.Fragment>
      );
    } else {
      return (
      <React.Fragment>
       <Navbar bg="light" expand="lg">
          <Navbar.Brand id="logo" href="/">Abundance</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link to="/">Home</Nav.Link>
                <NavDropdown title="About">
                  <NavDropdown.Item href="/whoweare">Who We Are</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Meet The Team</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Marketplace">
                  <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                  <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="/signup">SignUp</Nav.Link>
                <Nav.Link to="/signin">SignIn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderLinks()}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
