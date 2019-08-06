import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
const productsAPI = 'http://localhost:3001/products';

export class ProductCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            category: "",
            description: "",
            quantity: "",
            instock: "",
            productImage: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    callProductAPI() {
        axios.post(productsAPI)
            .then(response => this.setState({
                products: response.data.products
            }))
    }
    componentWillMount() {
        this.callProductAPI();
    }

    render() {
        return(
        <main>

            <form onSubmit={this.handleSubmit}>Create Product<br></br><br></br>
                    <label>Product Name:<br></br>
                        <input type='text' name='name' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Category:<br></br>
                        <input type='text' name='category' onChange={this.handleChange}></input>
                        {/* <select value={this.state.value} onChange={this.handleChange}>
                            <option value='VisualArt'>Visual Art</option>
                            <option value='Maintenance'>Maintenance</option>
                            <option value='Tech'>Tech</option>
                            <option value='Music'>Music</option>
                            <option value='Business'>Business</option>
                            <option value='Administrative'>Administrative</option>
                        </select> */}
            </label><br></br>
                    <label>Description:<br></br>
                        <textarea name='description' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Price:<br></br>
                        <input type='number' name='price' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Quantity:<br></br>
                        <input type='number' name='quantity' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Instock:<br></br>
                        <input type='text' name='instock' onChange={this.handleChange}/>
                        {/* <input
                            name='instock'
                            type='checkbox'
                            checked={this.state.instock}
                            onChange={this.handleInputChange} /> */}
            </label><br></br>
                    <label>Image:<br></br>
                        <input type='file' name='productImage' onChange={this.handleChange} />
                    </label><br></br>
                    <label>Submit<br></br>
                        <button type='onSubmit' name='submit'>Submit</button>{" "}
                    </label><br></br>
                </form>


        </main>
        )
    }
        
}

export default ProductCreate;