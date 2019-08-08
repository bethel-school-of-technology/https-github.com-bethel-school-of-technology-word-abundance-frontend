import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Blog extends React.Component {
  async componentDidMount() {
    //const { onLoad } = this.props;

    //await axios.get('http://localhost:3001/blogs')
      //.then((res) => onLoad(res.data));
      /*  .then(result => {
        this.setState({
          blog: result.data.blog
        })
      }); */
      const url = "http://localhost:3001/blogs";
      const response = await fetch(url);
      const data = await response.json;
      console.log(data);
      
  }
  render() {
    // const { blogs } = this.props;
    console.log(this.props)
    
    const divStyle = {
      height: '300px',
      width: '300px'
    };

    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">Abundant Blogs</h1>
          </div>
        </div>
        {/* <div className="row pt-5">
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
        </div> */}
            <div className="list-group"> 
            <a href="#abc" className="list-group-item active">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a>
            <a href="#abc" className="list-group-item">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a> 
            <a href="#abc" className="list-group-item">
              <h4 className="list-group-item-heading">List group item heading</h4>
              <img src="https://firebasestorage.googleapis.com/v0/b/final-project-d40f0.appspot.com/o/filepond%2Fa.jpg.jpg?alt=media&token=f75b20b0-e918-4f15-9b56-204793f19122" style={divStyle} alt="" />
              <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </a> 
          </div>
          
      </div>
      </React.Fragment>

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