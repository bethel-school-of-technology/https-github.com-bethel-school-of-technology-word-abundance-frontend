import React from "react";
import axios from "axios";
import { connect } from "react-redux";


class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
  
  handleDelete(id) {
    const { onDelete } = this.state;

    return axios.delete(`http://localhost:3001/blogs/${id}`)
      .then(() => onDelete(id));
  }

  handleEdit(blogs) {
    const { setEdit } = this.state;

    setEdit(blogs);
  }
  

  render() {
    const { blogs } = this.state;

    return (
      <React.Fragment>
      <div className="container">
        <div className="row pt-3">
          <div className="col-12">
            <table className="border border-dark">
              <thead>
                <tr>
                  <td className="border border-dark m-3 p-3 text-center">Date & Time Created</td>
                  <td className="border border-dark m-3 p-3 text-center">Post Id</td>
                  <td className="border border-dark m-3 p-3 text-center">Title</td>
                  <td className="border border-dark m-3 p-3 text-center">Edit Post</td>
                  <td className="border border-dark m-3 p-3 text-center">Delete Post</td>
                </tr>
              </thead>
            {blogs &&
              blogs.map(blogs => {
                return (
                  <>
                  <tbody>
                  <tr className="border">
                  <td className="border border-dark m-3 p-3 text-center">{blogs.createdAt}</td>
                    <td className="border border-dark m-3 p-3 text-center">{blogs._id}</td>
                    <td className="border border-dark m-3 p-3 text-center">{blogs.title}</td>
                    <td className="border border-dark m-3 p-3 text-center"><button onClick={() => this.handleDelete(blogs._id)} className="btn btn-info">Edit</button></td>
                    <td className="border border-dark m-3 p-3 text-center"><button onClick={() => this.handleDelete(blogs._id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                  </tbody>
                  </>
                );
              })}
              </table>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blog
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: data => dispatch({ type: "BLOG_LOADED", data }),
  onDelete: id => dispatch({ type: 'DELETE_BLOG', id }),
  setEdit: blogs => dispatch({ type: 'SET_EDIT', blogs }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
