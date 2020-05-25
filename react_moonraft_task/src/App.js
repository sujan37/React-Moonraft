import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import SignUp from './pages/SignupPage/SignUp';
import Login from './pages/LoginPage/Login';
// import HomePageHead from './pages/HomePage/HomePage'
import MainLandingPage from './pages/MainLandingPage/MainLandingPage';
import asyncComponent from './hoc/asyncComponent';


import { connect } from 'react-redux';
import * as action from './store/actions/index';

const AsyncMainLandingPage = asyncComponent(() => {
  return import('./pages/MainLandingPage/MainLandingPage');
});





class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {

    // let routes = (
    //   <Switch>
    //     <Route path="/login" exact component={Login} />
    //     <Route path="/signup"  component={SignUp} />
    //     <Route path="/Landing" component={AsyncMainLandingPage} />

    //     <Redirect to="/" exact />
    //   </Switch>
    // );

    // let authRoutes = null
    // if ( !this.props.isAuthenticated ) {
    //   authRoutes = (
    //     <Switch>
    //       <Route path="/Landing" component={AsyncMainLandingPage} />
    //       {/* <Redirect to="/" exact /> */}
    //     </Switch>
    //   );
    // }


    // if (!this.props.isAuthenticated) {

    // }
   
    let authRedirect = null;
    if(!this.props.isAuthenticated){
        authRedirect = <Redirect to="/Login" />
    }
    

    return (
      <BrowserRouter>
        <div>
           {/* <HomePage/> */}

          {authRedirect}
          <Switch>
            {/* <Route path="/" exact component={} /> */}
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/login" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            {/* <Route path="/Landing" component={AsyncMainLandingPage} /> */}
            {this.props.isAuthenticated ? <Route path="/Landing" component={AsyncMainLandingPage} /> : null}
            {/* <Route path="/Logout" component={Logout} /> */}
          </Switch>
          {/* {routes} */}
          {/* {authRoutes} */}

        </div>
      </BrowserRouter>
    );
  }
}



const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(action.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
