import React, { Component } from 'react';
import {BrowserRouter,Route,Link,NavLink,Switch} from 'react-router-dom';
import SignUp from '../SignupPage/SignUp';
import Login from '../LoginPage/Login';
// import Logout from '../../containers/Auth/Logout/Logout'
import MainLandingPage from '../MainLandingPage/MainLandingPage';
import asyncComponent from '../../hoc/asyncComponent'

// const AsyncMainLandingPage = asyncComponent(() => {
//     return import('../MainLandingPage/MainLandingPage');
// });

const HomePageHead = () => {


      return (
        <>
            {/* <section className="sub-head">
                <h1>Welcome to React Moonraft Task</h1>
                <header className="home-page-head">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        
                        </ul>
                    </nav>
                </header>
            </section> */}
          <Login></Login>
          
        </>
      );
}
  
  export default HomePageHead;
