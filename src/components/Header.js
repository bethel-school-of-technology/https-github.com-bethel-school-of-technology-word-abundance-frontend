import React from 'react';
import { connect } from 'react-redux';
import {Navbar, NavDropdown, Nav, Button} from 'react-bootstrap';
import './navbar.css';

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
        <Navbar bg="light" expand="lg">
        <h3 id='AbundantLogo'>ABUNDANT 
            <img src='favicon.ico' alt="logo"></img></h3>
          {/* <Navbar.Brand id="logo" href="/">Abundance</Navbar.Brand> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="About">
                  <NavDropdown.Item href="/whoweare">Who We Are</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Meet The Team</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our Vision">
                  <NavDropdown.Item href="/whoweare">Our History</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Our Present</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Our Future</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Marketplace">
                  <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                  <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                </Nav>
                <Nav pullRight>
                <Nav.Link href="/dashboard"><Button>Dashboard</Button></Nav.Link>
                <Nav.Link href="/signout"><Button>Signout</Button></Nav.Link>
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
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="About">
                  <NavDropdown.Item href="/whoweare">Who We Are</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Meet The Team</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our Vision">
                  <NavDropdown.Item href="/whoweare">Our History</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Our Present</NavDropdown.Item>
                  <NavDropdown.Item href="/meettheteam">Our Future</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Marketplace">
                  <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                  <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
              </Nav>
              <Nav pullRight>
                <Nav.Link href="/signup"><Button>>Join Our Community</Button></Nav.Link>
                <Nav.Link href="/signin"><Button>Sign In</Button></Nav.Link>
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
