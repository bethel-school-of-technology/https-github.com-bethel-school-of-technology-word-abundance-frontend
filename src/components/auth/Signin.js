import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/dashboard');
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
          <h3>Login to My Dashboard</h3>
          <label>Email:</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
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
  reduxForm({ form: 'signin' })
)(Signin);
