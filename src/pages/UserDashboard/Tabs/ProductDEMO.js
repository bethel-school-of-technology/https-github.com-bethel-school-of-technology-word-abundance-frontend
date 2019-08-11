import React from 'react';
import axios from 'axios';
import Select from 'react-select';


const options = [
    {value: 'Creative', label:'Creative'},
    {value: 'Maintenance', label: 'Maintenance'},
    {value: 'Entertainment', label: 'Entertainment'},
    {value: 'Business', label: 'Business'},
    {value: 'Tech', label: 'Tech'}
]

 
class ProductDEMO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      description: '',
      price: '',
      quantity: '',
      instock: '',
      productImage: '',
        }
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    
  handleSubmit(){
    const { name, category, description, price, quantity, instock, productImage } = this.state;
    return axios.post('http://localhost:3001/products', {
      name,
      category,
      description,
      price,
      quantity,
      instock,
      productImage
    });
  }
  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  handleChange= category => {
      this.setState({ category });
  }
  
    render() { 
      const { name, category, description, price, quantity, instock, productImage } = this.state;
      
    return (  
    
    <React.Fragment>
        {/*Post Private or Public  */}
        <br></br>
        <br></br>
        <div className="col-12 col-lg-6 offset-lg-3">
          <br></br>
        <input
          onChange={(ev) => this.handleChangeField('name', ev)}
          value={name}
          className="form-control my-3"
          placeholder="Name"
        />

        <Select 
        value={category}
        onChange={this.handleChange}
        options={options}
        placeholder="Category"/>
        
      
        <textarea
          onChange={(ev) => this.handleChangeField('description', ev)}
          value={description}
          className="form-control my-3"
          placeholder="Description">
        </textarea>

        <input type='number'
          onChange={(ev) => this.handleChangeField('price', ev)}
          value={price}
          className="form-control my-3"
          placeholder="Price"
        />

        <input type='number'
          onChange={(ev) => this.handleChangeField('quantity', ev)}
          value={quantity}
          className="form-control my-3"
          placeholder="Quantity"
        />

        <div className="form-control my-3" placeholder="Instock">
        <label htmlFor='instock' placeholder="Instock">Instock    </label>
        <input type='checkbox'
        placeholder="Instock"
          onChange={(ev) => this.handleChangeField('instock', ev)}
          value={instock}          
        />
        </div>

        <input type='file'
          onChange={(ev) => this.handleChangeField('productImage', ev)}
          value={productImage}
          className="form-control my-3"
          placeholder="Select Image"
        />

        <button onClick={this.handleSubmit} className="btn btn-primary float-right">Submit</button>
      </div>
    </React.Fragment>
      )
    }
}
            
    
 
export default ProductDEMO;