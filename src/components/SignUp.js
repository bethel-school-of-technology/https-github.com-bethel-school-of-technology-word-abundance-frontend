import React, { Component } from 'react';

class Signup extends Component {
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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="SignupForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                        Last Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                        Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                        Primary Phone:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                        Address:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                       City: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label> <br />
                       State: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Signup;
