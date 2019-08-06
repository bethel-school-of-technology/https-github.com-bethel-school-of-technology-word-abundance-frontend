import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <ul id="categories">
                    <li>Maintenance</li> 
                    <li><a href='./tech'>Tech</a></li>
                    <li>Visual Arts</li>
                    <li>Music</li>
                    <li>Business</li>
                    <li>Administrative</li>
                </ul>
            </div>
        );
    }
}

export default Categories;