import React, { Component } from 'react';
import Landing from '../pages/Layout/Landing'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <Landing />;
  }
}

export default connect(null, actions)(Signout);
