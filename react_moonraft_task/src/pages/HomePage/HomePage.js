import React, { Component } from 'react';
import {BrowserRouter,Route,Link,NavLink,Switch} from 'react-router-dom';
import SignUp from '../SignupPage/SignUp';
import Login from '../LoginPage/Login';
import MainLandingPage from '../MainLandingPage/MainLandingPage';
import asyncComponent from '../../hoc/asyncComponent'

const AsyncMainLandingPage = asyncComponent(() => {
    return import('../MainLandingPage/MainLandingPage');
});

const HomePage = () => {


      return (
        <>
            <section className="sub-head">
                <h1>Welcome to React Moonraft Task</h1>
                <header className="home-page-head">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/signup">SignUp</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        
                        </ul>
                    </nav>
                </header>
                

                {/* Need to remove  */}


                {/* <MainLandingPage/> */}

                            
                {/* Need to remove  */}
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup"  component={SignUp} />
                    <Route path="/Landing" component={AsyncMainLandingPage} />
                </Switch>
            </section>
        </>
      );
}
  
  export default HomePage;
