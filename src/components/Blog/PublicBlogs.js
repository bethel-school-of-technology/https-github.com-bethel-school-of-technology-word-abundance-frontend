import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class Home extends React.Component {
  async componentDidMount() {

    await axios.get('http://localhost:3001/blogs')
      const result = response => response.data;
      console.log(this.data);
  }
  render() {
    const { blogs } = this.props;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">Abundant Blogs</h1>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {blogs && blogs.map((blogs) => {
              return (
                <div className="card my-3">
                  <div className="card-header">
                    {blogs.title}
                  </div>
                  <div className="card-body">
                    {blogs.body}
                  </div>
                  <div className="card-footer">
                    <i>{blogs.author}
                      <p className="float-right">
                        {new Date(blogs.createdAt).toLocaleDateString()}
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
  onLoad: data => dispatch({ type: 'HOME_PAGE_LOADED', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);