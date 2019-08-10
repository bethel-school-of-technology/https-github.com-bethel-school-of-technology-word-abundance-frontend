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
            {blogs &&
              blogs.map(blogs => {
                return (
                  <div className="card my-3">
                    <div className="card-header">{blogs.title}</div>
                    <div className="card-body">
                    {blogs.body} <br />
                    <b>{blogs.author}
                    <p className="float-right">
                          {new Date(blogs.createdAt).toLocaleDateString()}
                    </p>
                    </b>

                    </div>
                    <div className="card-footer">
                      {/* <button onClick={() => this.handleEdit(blogs)}  className="btn btn-primary mx-3">
                        Edit
                      </button> */}
                      <button className="btn btn-primary mx-3">
                        Edit
                      </button>
                      <button onClick={() => this.handleDelete(blogs._id)} className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
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
