import React, { Component } from 'react';
import {BrowserRouter,Route,Link,NavLink,Switch} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



import SignUp from './pages/SignupPage/SignUp';
import Login from './pages/LoginPage/Login';

//  need to remove
import MainLandingPage from './pages/MainLandingPage/MainLandingPage';
// need to remove

class App extends Component {

  render() {
    return (
      <BrowserRouter>

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
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
