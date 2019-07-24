import React, { Component } from 'react';
import Search from './Search';
class CategoryList extends Component {
    render() {
        return (
            <div className="category-list">
                <Search/>
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