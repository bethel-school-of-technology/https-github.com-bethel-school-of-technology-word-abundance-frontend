import React, { Component } from 'react';
import Product from '../components/Product';
// import axios from 'axios';
// import { throwStatement } from '@babel/types';
// import { read } from 'fs';
// import { Render } from 'react-containers';

export class Products extends React.Component {
    render() {
        return (
            <div className="product">
                <br/>
                <Product uri="http://localhost:3001/products"/>
            </div>
        );
    }
}
export default Products;


// export class Product extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             description: " Please write a description of the product or service here. ",
//             value: 'VisualArt',
//             instock: true
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event){
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }

//     handleChange(event){
//         this.setState({description: event.target.description, value: event.target.value});
//     }

//     handleSubmit(event){
//         // alert('Description created: ' + this.state.description),
//         alert('Catergory is: ' + this.state.value, 'Description created: ' + this.state.description) ;
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <div className="product">
//                 <br />
//                 <form onSubmit={this.handleSubmit}>Create Product<br></br><br></br>
//                     <label>Product Name:<br></br>
//                         <input type='text' name='name'/>
//                     </label><br></br>
//                     <label>Category:<br></br>
//                         <select value={this.state.value} onChange={this.handleChange}>
//                         <option value='VisualArt'>Visual Art</option>
//                         <option value='Maintenance'>Maintenance</option>
//                         <option value='Tech'>Tech</option>
//                         <option value='Music'>Music</option>
//                         <option value='Business'>Business</option>
//                         <option value='Administrative'>Administrative</option>
//                         </select>
//                     </label><br></br>
//                     <label>Description:<br></br>
//                         <textarea value={this.state.description} onChange={this.handleChange}/>
//                     </label><br></br>
//                     <label>Price:<br></br>
//                         <input type='text' name='price'/>
//                     </label><br></br>
//                     <label>Quantity:<br></br>
//                         <input type='number' name='quantity'/>
//                     </label><br></br>
//                     <label>Instock:<br></br>
//                         <input 
//                         name='instock'
//                         type='checkbox'
//                         checked={this.state.instock}
//                         onChange={this.handleInputChange} />
//                     </label><br></br>
//                     <label>Image:<br></br>
//                         <input type='file' name='image'/>
//                     </label><br></br>
//                     <label>Submit<br></br>
//                         <input type='submit' name='submit'/>
//                     </label><br></br>
//                 </form>
//             </div>
//         );
//     }
// }


// export default Product;