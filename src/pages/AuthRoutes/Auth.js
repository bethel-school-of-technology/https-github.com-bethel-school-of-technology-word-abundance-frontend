import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login'
// import { userInfo } from "os";


////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

class AuthExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
      }
}

render(){
  return (
    <React.Fragment>
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/* <Switch>
              <PrivateRoute path='/create-profile' component={CreateProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            </Switch>
            <Switch>
              <PrivateRoute path='/feed' component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post" component={Post} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/editpost/:id' component={EditPost} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/posts" component={Posts} />
            </Switch> */}
      </div>
    </Router>
    </React.Fragment>
  );
}
}

/* componentDidMount = () =>{
  // return a boolean value
  return true;
} */

/* const user = [] */

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Dashboard />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
/* export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated && user.isAdmin === true ? (
          <Dashboard />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
} */

export function Public() {
  return <h3>Public</h3>;
}

export function Protected() {
  return <h3>Protected</h3>;
}



export default AuthExample;