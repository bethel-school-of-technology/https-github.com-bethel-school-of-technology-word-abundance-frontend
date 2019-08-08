import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

class BlogTab extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tabs defaultActiveKey="addnewpost" id="uncontrolled-tab-example">
          <Tab eventKey="addnewpost" title="Add New Post">
            <AddPost />
          </Tab>
          <Tab eventKey="editandelete" title="Edit and Delete Posts" />
          <EditPost />
        </Tabs>
        {/*Post Private or Public  */}
      </React.Fragment>
    );
  }
}

export default BlogTab;
