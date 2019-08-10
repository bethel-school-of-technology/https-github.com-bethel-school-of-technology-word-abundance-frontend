import React from "react";
import Form from './Form'
import EditPost from "./EditPost";

class BlogTab extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form />
        <div>
        <EditPost />
        </div>
      </React.Fragment>
    );
  }
}

export default BlogTab;
