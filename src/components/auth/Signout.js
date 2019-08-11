import React from "react";
import Carousel from "../Carousel";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <Carousel />;
  }
}

export default connect(
  null,
  actions
)(Signout);
