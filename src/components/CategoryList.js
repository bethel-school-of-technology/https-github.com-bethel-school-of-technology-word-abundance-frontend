import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class CategoryList extends Component {
    render() {
        return (
            <div className="category-list">
                <ul id="categories">
                    <li>Maintenance</li>
                    <li>Tech</li>
                    <li>Visual Arts</li>
                    <li>Music</li>
                    <li>Business</li>
                    <li>Administrative</li>
                </ul>
            </div>
        );
    }
}
export default CategoryList;