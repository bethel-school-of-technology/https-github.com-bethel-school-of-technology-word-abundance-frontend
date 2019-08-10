import React, { Component } from 'react'
// import Search from './Search';
import axios from 'axios';
const ordersAPI = 'http://localhost:3001/orders';

export class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }
    callOrderAPI() {
        axios.get(ordersAPI)
            .then(result => this.setState({
                orders: result.data.orders
            }))
    }
    componentWillMount() {
        this.callOrderAPI();
    }

    render() {
        const { orders } = { ...this.state }
        console.log(this.state.orders);
        return (
            <main className="orders">
                {/* <Search/> */}

                <table>
                    <thead>
                        {/* <div className="hidden">{orders.map(order =>
                            <div hidden={order._id}>{order._id}</div>
                        )}</div> */}
                    </thead>
                    <tbody>
                        <foreach>
                        <tr>
                                <div className="header">{orders.map(order =>
                                    <div key={order}>{order}</div>
                                )}</div>
                            </tr>
                            <tr>
                                {/* <div className="header">{orders.map(order =>
                                    <div key={order.cart}>{order.cart}</div>
                                )}</div> */}
                            </tr>
                        </foreach>
                    </tbody>
                </table>

            </main>
        );
    }
}
export default Orders;