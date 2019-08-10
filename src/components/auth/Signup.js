import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/home');
    });
  };
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <React.Fragment>
      <div className="container-fluid">
      <div className="row">
      <div className="col-sm-4">
      </div>
      <div className="col-sm-4">
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
        <h3>Join Our Community!</h3>
          <label>First Name:</label>
          <Field
            name="firstName"
            type="text"
            component="input"
            autoComplete="none"
          /><br />
          <label>Last Name:</label>
          <Field
            name="lastName"
            type="text"
            component="input"
            autoComplete="none"
          /><br />
          <label>Email:</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
      </div>
      <div className="col-sm-4">
      </div>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);