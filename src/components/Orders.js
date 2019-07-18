import React, { Component } from 'react';
import Search from './Search';

class Orders extends Component {
    render() {
        return (
            <div className="orders">
                <br/>
                <p id='orders'>Orders </p>
                <Search/>
            </div>
        );
    }
}
export default Orders;