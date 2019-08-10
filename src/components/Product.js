import React, { Component } from 'react';
import axios from 'axios';
import './components.css';

// import { throwStatement } from '@babel/types';
// import { read } from 'fs';
const productsAPI = 'http://localhost:3001/products';


export class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        axios.get(productsAPI)
            .then(result => {
                this.setState({
                    products: result.data.products
                })
            })
    }

    render() {
        const { products } = this.state
        console.log(this.state.products);
        return (
            
            <main>
                
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="ui cards raised-card">
                                <div className="card" style={{ width: '100%' }}>
                                    <div className="content">
                                        {products.map(product => (
                                            <div className="key"
                                                key={product._id}>
                                                {/* <CardImg top width="100%" src={product.productImage}></CardImg> */}
                                                {/* <div type="image">{product.productImage}</div> */}
                                                {/* <img src={product.productImage} alt ="productImage"/>  */}
                                                {/* <img src={`https://www.ennri.com/images/slides/slide_03.png`} /> */}
                                                <div className="header">{product.name}</div>
                                                <div className="card-body">
                                                    <h5 className="category">Category: {product.category}</h5>
                                                    <p className="description">Description: {product.description}</p>
                                                </div>
                                                <br></br>
                                                <br></br>
                                                <div className="ui bottom attached button">
                                                    <i className="add icon"></i>
                                                    <div className="quantity">Quantity: {product.quantity}</div>
                                                    <br></br>
                                                    <br></br>
                                                    <div className="price">Price: {product.price}</div>
                                                    <a href='/shoppingCart'>Buy </a>
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


            </main>
        )
    }
}



export default Product;