import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
class SideNav extends React.Component{
  render(){
    return(
      <React.Fragment>
      <Navbar expand="false">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Product Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="/maintenance">Maintenance</NavDropdown.Item>
        <NavDropdown.Item href="/Tech">Tech</NavDropdown.Item>
        <NavDropdown.Item href="/Music">Music</NavDropdown.Item>
        <NavDropdown.Item href="/BusinessServices">Business</NavDropdown.Item>
        <NavDropdown.Item href="/Administration">Administration</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </React.Fragment>
    )
  }
};

export default SideNav;
