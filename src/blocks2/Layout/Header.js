import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';


class Header extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        this.props.clearCurrentProfile();
        
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        const authLinks = (
            <div className='container-header'>
                <div className='header'>
                    <NavItem href = '/landing' > Home </NavItem>
                    <NavItem href = '/contact' > Contact </NavItem>
                    <NavItem href = '/about' > About </NavItem>
                    <NavItem href = '/marketplace' > Marketplace </NavItem>
                    <NavItem href = '/signin' > Sign in </NavItem> 
                    <NavItem className = 'logout'
                    href ='/'
                    onClick={this.onLogoutClick.bind(this)}>Logout</NavItem>
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile})(Header);

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Button from 'react-bootstrap/Button';
// class Navbar extends Component {
//     render() {
//         return (
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/marketplace">Marketplace</Link></li>
//                     <li><Link to="/signup">Signup</Link></li>
//                 </ul>
//             </nav>
//         );
//     }
// }
// export default Navbar;