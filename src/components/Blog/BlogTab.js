import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import AddPost from './AddPost';
 
class Blog extends React.Component {
  render(){
    return (  
    <React.Fragment>
        <Tabs defaultActiveKey="addnewpost" id="uncontrolled-tab-example">
        <Tab eventKey="addnewpost" title="Add New Post">
        <AddPost />
        </Tab>
        <Tab eventKey="editandelete" title="Edit and Delete Posts">
        </Tab>
        </Tabs>
        {/*Post Private or Public  */}
        </React.Fragment>
      )
    }
}
            
    
 
export default Blog;