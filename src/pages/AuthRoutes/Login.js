import React from 'react';
import axios from 'axios';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          email:'',
          password:''
        };
    }

login(){
    axios.post('http://localhost:3001/user/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  render() {
    return (
        <React.Fragment>
            <form>
            <label for="inputEmail">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" required autofocus />
            <label for="inputPassword">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" required />
            </form>
        </React.Fragment>
    )
  }
}