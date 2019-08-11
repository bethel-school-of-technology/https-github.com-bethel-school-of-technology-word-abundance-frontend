import React from "react";
import Form from './Form'
import EditPost from "./EditPost";

class BlogTab extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Create New Post</h1>
        <Form />
        <div>
        <h1>My Posts</h1>
        <EditPost />
        </div>
      </React.Fragment>
    );
  }
}

export default BlogTab;
