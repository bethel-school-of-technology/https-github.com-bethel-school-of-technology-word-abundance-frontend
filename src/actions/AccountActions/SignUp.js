import React, { Component } from 'react';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log (this.state)
  }
  render(){
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='lastName' id='lastName' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='firstName' id='firstName' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z depth-0'>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Signup;

// import { reduxForm, Field } from 'redux-form';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

// class Signup extends Component {
//   onSubmit = formProps => {
//     this.props.signup(formProps, () => {
//       this.props.history.push('/dashboard');
//     });
//   };

//   render() {
//     const { handleSubmit } = this.props;

//     return (
//       <form onSubmit={handleSubmit(this.onSubmit)}>
//         <fieldset>
//           <label>Email</label>
//           <Field
//             name="email"
//             type="text"
//             component="input"
//             autoComplete="none"
//           />
//         </fieldset>
//         <fieldset>
//           <label>Password</label>
//           <Field
//             name="password"
//             type="password"
//             component="input"
//             autoComplete="none"
//           />
//         </fieldset>
//         <div>{this.props.errorMessage}</div>
//         <button>Sign Up!</button>
//       </form>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { errorMessage: state.auth.errorMessage };
// }

// export default compose(
//   connect(mapStateToProps, actions),
//   reduxForm({ form: 'signup' })
// )(Signup);


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import Fields from '../../actions/TypesAndFields/Fields';
// import 'react-materialize';
// import { connect } from 'react-redux';
// import { signupUser } from '../AccountActions/authActions';

// class Signup extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       errors: {}
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   componentDidMount() {
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push('/feed')
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }
//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//    const {email, password, name } = this.state;
    
//     // Check For Errors
//     if (password=== '') {
//       this.setState({ errors: { password: 'password is required' } });
//       return;
//     }

//     if (email === '') {
//       this.setState({ errors: { email: 'email is required' } });
//       return;
//     }

//     if (name === '') {
//       this.setState({ errors: { name: 'name is required' } });
//       return;
//     }


//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password
//     };
//     this.props.signupUser(newUser, this.props.history);

//   }

//   render() {
//     const { errors } = this.state;
    
//     return (
//       <div className="landing">
//         <div className="dark-overlay landing-inner text-light">
//           <div className="register">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-8 m-auto">
//                   <form noValidate onSubmit={this.onSubmit}>
//                     <h1 className="display-4 text-center">Sign Up</h1>
//                     <Fields
//                       placeholder="Name"
//                       name="name"
//                       value={this.state.name}
//                       onChange={this.onChange}
//                       error={errors.name}
//                     />
//                     <Fields
//                       placeholder="Email"
//                       name="email"
//                       type="email"
//                       value={this.state.email}
//                       onChange={this.onChange}
//                       error={errors.email}
//                       info=""
//                     />
//                     <Fields
//                       placeholder="Password"
//                       name="password"
//                       type="password"
//                       value={this.state.password}
//                       onChange={this.onChange}
//                       error={errors.password}
//                     />
//                     <input type="submit" style={{background: '#EFEDE1', color: 'black'}} className="btn btn-info btn-block mt-4" />
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Signup.propTypes = {
//   signupUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors
// })

// export default connect(mapStateToProps, { signupUser })(withRouter(Signup));
