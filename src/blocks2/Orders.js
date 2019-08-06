import React, { Component } from 'react';
import Order from '../components/Orders';
// import Search from '../components/Card/SearchBar';

export class Orders extends React.Component {
    render() {
        return (
            <div className="orders">
                <br/>
                <Order />
                {/* <Search/> */}
            </div>
        );
    }
}
export default Orders;