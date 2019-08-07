import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";

class MyProductsService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      description: "",
      price: "",
      quantity: "",
      instock: "",
      productImage: ""
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const {
      name,
      category,
      description,
      price,
      quantity,
      instock,
      productImage
    } = this.state;
    return axios.post("http://localhost:3001/products", {
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
      [key]: event.target.value
    });
  }

  render() {
    const {
      name,
      category,
      description,
      price,
      quantity,
      instock,
      productImage
    } = this.state;
    
    return (
      <React.Fragment>
        <Tabs defaultActiveKey="product" id="uncontrolled-tab-example">
          <Tab eventKey="product" title="Add Product" />
          <Tab eventKey="service" title="Add Service" />
        </Tabs>
        {/*Post Private or Public  */}
        <div className="col-12 col-lg-6 offset-lg-3">
          <br />
          <input
            onChange={ev => this.handleChangeField("name", ev)}
            value={name}
            className="form-control my-3"
            placeholder="Name"
          />
          <input
            onChange={ev => this.handleChangeField("category", ev)}
            value={category}
            className="form-control my-3"
            placeholder="Category"
          />
          <textarea
            onChange={ev => this.handleChangeField("description", ev)}
            value={description}
            className="form-control my-3"
            placeholder="Description"
          />
          <input
            type="number"
            onChange={ev => this.handleChangeField("price", ev)}
            value={price}
            className="form-control my-3"
            placeholder="Price"
          />
          <input
            type="number"
            onChange={ev => this.handleChangeField("quantity", ev)}
            value={quantity}
            className="form-control my-3"
            placeholder="Quantity"
          />
          <div className="form-control my-3" placeholder="Instock">
            <label htmlFor="instock" placeholder="Instock">
              Instock{" "}
            </label>
            <input
              type="checkbox"
              placeholder="Instock"
              onChange={ev => this.handleChangeField("instock", ev)}
              value={instock}
            />
          </div>
          <input
            type="file"
            onChange={ev => this.handleChangeField("productImage", ev)}
            value={productImage}
            className="form-control my-3"
            placeholder="Select Image"
          />
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary float-right"
          >
            Submit
          </button>
        </div>
      </React.Fragment>

      /* Add New Products/Services */
    );
  }
}

export default MyProductsService;
