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
              <NavDropdown.Item><a href="/maintenance">Maintenance</a></NavDropdown.Item>
              <NavDropdown.Item><a href="/Tech">Tech</a></NavDropdown.Item>
              <NavDropdown.Item><a href="/VisualArts">Visual Arts</a></NavDropdown.Item>
              <NavDropdown.Item><a href="/Tech">Tech</a></NavDropdown.Item>
              <NavDropdown.Item><a href="/VisualArts">Visual Arts</a></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
