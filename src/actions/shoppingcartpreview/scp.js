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
    
    componentWillMount() {
        axios.get(cartAPI)
            .then(result => {
                this.setState({
                cart: result.data.cart
            })
        })
    }

    render() {
        const { cart } = this.state
        console.log(this.state.cart);
        return (
            <main>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="ui cards raised-card">
                                <div className="card" style={{ width: '100%' }}>
                                    <div className="content">
                                        {cart.map(cart => (
                                            <div className="key"
                                                key={cart._id}>
                                                <div className="header">In Your Shopping Cart:</div>
                                                <div className="card-body">
                                                    <h5 className="product">Product: {cart.product}</h5>
                                                    <h5 className="service">Service: {cart.service}</h5>
                                                </div>
                                                <br></br>
                                                <br></br>
                                                <div className="ui bottom attached button">
                                                    <i className="add icon"></i>
                                                    <br></br>
                                                    <br></br>                                         
                                                    <a href='/shoppingCart'>Click here to purchase </a>
                                                </div>
                                            </div>
                                        )
                                        )
                                        }
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <br></br>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className="ui cards raised-card">
                                    <div className="card" style={{width: '100%'}}>
                                        <div className="content">

                                            
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
                </div> */}
            </main>
        )
    }
}

export default ShoppingCartPreview;