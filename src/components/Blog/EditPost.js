import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
  }
  async componentDidMount() {
    let posts = await axios.get("http://localhost:3001/blogs")
    .then(result => {
      this.setState({
        blogs: result.data.blogs
      });
      console.log(this.blogs);
    });

    
  }

  render() {
    const { blogs } = this.state;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {blogs &&
              blogs.map(blogs => {
                return (
                  <div className="card my-3">
                    <div className="card-header">{blogs.title}</div>
                    <div className="card-body">{blogs.body}</div>
                    <div className="card-footer">
                      <i>
                        {blogs.author}
                        <p className="float-right">
                          {new Date(blogs.createdAt).toLocaleDateString()}
                        </p>
                      </i>
                    </div>
                  </div>
                );
              })}
          </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blog
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: data => dispatch({ type: "BLOG_LOADED", data })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);