import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.css';

class Navbar extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/marketplace">Marketplace</Link></li>
                <li><Link to="/signout">Signout</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/marketplace">Marketplace</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/signin">SignIn</Link></li>
                </ul>
        </nav>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">Abundance</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Navbar);
