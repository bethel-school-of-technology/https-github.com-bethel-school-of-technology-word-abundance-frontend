import React, { Component } from 'react';
import axios from 'axios';
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
    callProductAPI() {
        axios.get(productsAPI)
            .then(result =>{ this.setState({
                products: result.data.products
            })
        })
    }
    componentWillMount() {
        this.callProductAPI();
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
                                <div className="card">
                                    <div className="content">
                                        {products.map(product =>(
                                            <div className="hidden" key={product._id}>
                                                {/* <CardImg top width="100%" src={product.productImage}></CardImg> */}
                                                {/* <div type="image">{product.productImage}</div> */}
                                                {/* <img src={product.productImage} alt ="productImage"/>  */}
                                                <img src={product.productImage} className="card-img-top" alt="productImage"/>
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

                {/* <form onSubmit={this.handleSubmit}>Create Product<br></br><br></br>
                    <label>Product Name:<br></br>
                        <input type='text' name='name' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Category:<br></br>
                        <input type='text' className='category' onChange={this.handleChange}></input> */}
                        {/* <select value={this.state.value} onChange={this.handleChange}>
                            <option value='VisualArt'>Visual Art</option>
                            <option value='Maintenance'>Maintenance</option>
                            <option value='Tech'>Tech</option>
                            <option value='Music'>Music</option>
                            <option value='Business'>Business</option>
                            <option value='Administrative'>Administrative</option>
                        </select> */}
                    {/* </label><br></br>
                    <label>Description:<br></br>
                        <textarea className='description' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Price:<br></br>
                        <input type='number' name='price' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Quantity:<br></br>
                        <input type='number' name='quantity' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Instock:<br></br>
                        <input type='text' name='instock' onChange={this.handleChange}/> */}
                        {/* <input
                            name='instock'
                            type='checkbox'
                            checked={this.state.instock}
                            onChange={this.handleInputChange} /> */}
                    {/* </label><br></br>
                    <label>Image:<br></br>
                        <input type='file' name='image' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Submit<br></br>
                        <button type='onSubmit' name='submit'>Submit</button>{" "}
                    </label><br></br>
                </form> */}



//             </main>
//         )
//     }
// }

export default Product;