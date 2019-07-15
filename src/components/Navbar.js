import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                <li><a href="Home.js">Home</a></li>
                <li><a href="CategoryList.js">Categories</a></li>
                <li><a href="About.js">About</a></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;