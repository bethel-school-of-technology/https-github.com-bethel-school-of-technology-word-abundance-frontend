import React from "react";
import { Tabs, Tab } from "react-bootstrap";
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Tabs defaultActiveKey="updateuandp" id="uncontrolled-tab-example">
          <Tab eventKey="updateuandp" title="Update Username & Password" />
          <Tab eventKey="updateaddress" title="Update Address" />
        </Tabs>
        <div class="columns">
          <div class="column is-one-third">First column</div>
          <div class="column">Second column</div>
          <div class="column">Third column</div>
          <div class="column">Fourth column</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Options;
