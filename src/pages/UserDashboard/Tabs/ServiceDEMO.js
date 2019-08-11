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

 
class ServiceDEMO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      description: '',
      hourlyrate: '',
      serviceImage: '',
        }
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    
  handleSubmit(){
    const { name, category, description, hourlyrate, serviceImage } = this.state;
    return axios.post('http://localhost:3001/services', {
      name,
      category,
      description,
      hourlyrate,
      serviceImage
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
      const { name, category, description, hourlyrate, serviceImage } = this.state;
      
    return (  
    
    <React.Fragment>
        {/*Post Private or Public  */}
        <br></br>
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
          onChange={(ev) => this.handleChangeField('hourlyrate', ev)}
          value={hourlyrate}
          className="form-control my-3"
          placeholder="Hourly Rate"
        />

        <input type='file'
          onChange={(ev) => this.handleChangeField('serviceImage', ev)}
          value={serviceImage}
          className="form-control my-3"
          placeholder="Select Image"
        />

        <button onClick={this.handleSubmit} className="btn btn-primary float-right">Submit</button>
      </div>
    </React.Fragment>
      )
    }
}
            
    
 
export default ServiceDEMO;