import React, { Component } from 'react';
import axios from 'axios';
const cartAPI = 'http://localhost:3001/cart';

export class ShoppingCartPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        cart: [],
        };
    }
    callCartAPI() {
        axios.get(cartAPI)
            .then(result => this.setState({
                cart: result.data.cart
            }))
    }
    componentWillMount() {
        this.callCartAPI();
    }

    render() {
        const { cart } = this.state
        console.log(this.state.cart);
        return (
            <main>
                <div>
                    <br></br>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className="ui cards raised-card">
                                    <div className="card">
                                        <div className="content">

                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj6UHakAUKuUN2HOC5A0e5knBqjsCVmYXKIfo-Pp8PPjewaxuZQ" class="card-img-top" alt="..." />
                                            <br></br>
                                            <br></br>
                                            <div className="hidden">{cart.map(cart =>
                                                <div key={cart._id}>{cart._id}</div>
                                            )}</div>

                                            <div className="cart">{cart.map(cart =>
                                                <div key={cart}>{cart}</div>
                                            )}</div>

                                            <div className="product">{cart.map(cart =>
                                                <div key={cart.item}>{cart.item}</div>
                                            )}</div>

                                            <div className="service">{cart.map(cart =>
                                                <div key={cart.service}>{cart.service}</div>
                                            )}</div>

                                        </div>

                                        <div className="ui bottom attached button">
                                            <div className=""></div>
                                            <br></br>
                                            <i className="add icon"></i>
                                            <a href='/orders'>Click here to purchase </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ShoppingCartPreview;