import React from 'react';

class Blog extends React.Component {

    render() { 
    return (  
    <React.Fragment>
        <subheader>SubHeader Component</subheader>
        <h6>Add New Post</h6>
        <h6>Edit Posts</h6>
        <h6>Delete Posts</h6>
        <h3>Add New Blog Post</h3>
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
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