import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//HEAD
import { exportAllDeclaration } from '@babel/types';

//Shopping-cart-pop-up
class Navbar extends Component {
constructor(props) {
    super (props);
    this.state={};
    this.handleScroll = 
    this.handleScroll.bind(this);
}
handleScroll() {
    this.setState({scroll: window.scrollY});
}
componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height:
    exportAllDeclaration.offsetHeight});
    window.addEventListener('scroll', 
    this.handleScroll);
}
componentDidUpdate(){
    this.state.scroll > this.state.top ?
    document.body.style.paddingTop = 
    `${this.state.height}px` :
    document.body.style.paddingTop = 0;
} 
    render() {
        return (
            
            <nav className={this.state.scroll >
            this.state.top ? 'fixed-nav' : ''}>
                <ul>
                    <li className=""><Link to="/">                     
                    <h3 id='AbundantLogo'>ABUNDANT 
                    <img src='favicon.ico'></img></h3>
                    </Link> 
                    </li>
                    <li><Link to="/about"><h5 id="aboutNav">ABOUT </h5></Link></li>
                    <li><Link to="/marketplace"><h5 id="marketNav">STORE </h5></Link></li> 
                    <li><Link to="/contact"><h5 id="contactNav">CONTACT </h5></Link></li>    
                    <li><Link to="/Signin"><h5 id="loginNav">LOGIN </h5></Link></li>
                    <li><Link to="/signup"><h5 id="signupNav">SIGNUP</h5></Link></li>     
                </ul>
            </nav>
        
        );
    }
}

export default Navbar;