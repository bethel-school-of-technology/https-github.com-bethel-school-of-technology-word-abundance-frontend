// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import Fields from '../../actions/TypesAndFieldss/Fieldss';
// import 'react-materialize';
// import { connect } from 'react-redux';
// import { signupUser } from '../../actions/authActions'

// class SignUp extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             email: '',
//             password: '',
//             errors: {}
//         };

//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     componentDidMount() {
//         this.setState({ value: event.target.value });
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.errors) {
//             this.setState({ errors: nextProps.errors});
//         }
//     }

//     onChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     onSubmit = (e) => {
//         e.preventDefault();

//         const { email, password, name } = this.state;

//         if (password==='') {
//             this.setState({ errors: { password: 'password required'}});
//             return;
//         }
//         if (email ===''){
//             this.setState({ errors: { email: 'email required '}});
//             return;
//         }
//         if (name ===''){
//             this.setState({ errors: { name: 'name required '}});
//             return;
//         }
//         const newUser = {
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password
//         };
//         this.props.signUp ( newUser, this.props.history );
//     }

//     render() {
//         const { errors } = this.state;
        
//         return (
//           <div className="landing">
//             <div className="dark-overlay landing-inner text-light">
//               <div className="register">
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-md-8 m-auto">
//                       <form noValidate onSubmit={this.onSubmit}>
//                         <h1 className="display-4 text-center">Sign Up</h1>
//                         <Fields/>
//                           placeholder="Name"
//                           name="name"
//                           value={this.state.name}
//                           onChange={this.onChange}
//                           error={errors.name}
//                         />
//                         <Fields/>
//                           placeholder="Email"
//                           name="email"
//                           type="email"
//                           value={this.state.email}
//                           onChange={this.onChange}
//                           error={errors.email}
//                           info=""
//                         />
//                         <Fields/>
//                           placeholder="Password"
//                           name="password"
//                           type="password"
//                           value={this.state.password}
//                           onChange={this.onChange}
//                           error={errors.password}
//                         />
//                         <input type="submit" style={{background: '#EFEDE1', color: 'black'}} className="btn btn-info btn-block mt-4" />
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }
//     }
    
//     Signup.propTypes = {
//       signupUser: PropTypes.func.isRequired,
//       auth: PropTypes.object.isRequired,
//       errors: PropTypes.object.isRequired
//     };
    
//     const mapStateToProps = (state) => ({
//       auth: state.auth,
//       errors: state.errors
//     })
    
//     export default connect(mapStateToProps, { signupUser })(withRouter(Signup));