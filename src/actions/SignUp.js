import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        
            <div className="SignUp">
                <form onSubmit={this.handleSubmit} className>
                   <br/> 
                   <label>
                        First Name:
                        <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> 
                        <br />
                        Last Name:
                        <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label><br/>
                    <label> <br />
                        Email:
                        <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                        Primary Phone:
                        <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label> <br />
                        Address:
                        <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                        Select Country:
                        <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label> <br />
                        City: <br />
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                        State: <br />
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                   
                    <input type="submit" value="Submit" />
                    
                </form>
            </div>
        );
    }
}

export default SignUp;