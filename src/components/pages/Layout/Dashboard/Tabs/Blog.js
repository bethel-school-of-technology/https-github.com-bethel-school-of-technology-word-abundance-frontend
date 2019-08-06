import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
 
class Blog extends React.Component {

    render() { 
    return (  
    <React.Fragment>
        <Tabs defaultActiveKey="addnewpost" id="uncontrolled-tab-example">
        <Tab eventKey="addnewpost" title="Add New Post">
        </Tab>
        <Tab eventKey="editandelete" title="Edit and Delete Posts">
        </Tab>
        </Tabs>
        <div className="col-md-5">
          <div className="form-area">  
              <form>
              <br styles="clear:both" />
                <div className="form-group">
                  <input type="text" className="form-control" id="title" name="title" placeholder="Title" required />
                </div>
                
                <div className="form-group">
                <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                </div>
                   
              <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
              </form>
          </div>
        </div>
        </React.Fragment>
      )
    }
}
            
    
 
export default Blog;