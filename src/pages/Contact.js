import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Form onSubmit={this.handleChange} style={{ width: "auto" }}>
        <FormGroup>
          <Label for="firstName">First Name: </Label>
          <Input type="text" name="firstName" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="lastName">Last Name:</Label>
          <Input type="text" name="lastName" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="text" name="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <Input type="textarea" name="message" onChange={this.handleChange} />
        </FormGroup>
      </Form>
    );
  }
}

export default Contact;
