import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Blog extends React.Component {
  componentDidMount() {
    //const { onLoad } = this.props;

    return axios.get('http://localhost:3001/blogs')
      //.then((res) => onLoad(res.data));
      /* .then(result => {
        this.setState({
          blogs: result.data.blogs
        })
      }); */
      
  }
  render() {
    const { blogs } = this.props;
    console.log(this.props)

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">Abundant Blogs</h1>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {blogs && blogs.map((blog) => {
              return (
                <div className="card my-3">
                  <div className="card-header">
                    {blog.title}
                  </div>
                  <div className="card-body">
                    {blog.body}
                  </div>
                  <div className="card-footer">
                    <i>{blog.author}
                      <p className="float-right">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                    </i>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs,
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'BLOGS_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);