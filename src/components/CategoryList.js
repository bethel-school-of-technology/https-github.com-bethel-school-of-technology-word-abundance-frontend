import React, { Component } from 'react';

class CategoryList extends Component {
    render() {
        return (
            <div className="category-list">
                <ul>
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