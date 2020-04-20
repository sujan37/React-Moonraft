import React, { Component } from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import './App.css';



import HomePage from './components/HomePage/HomePage';
import SignUp from './pages/SignupPage/SignUp';
import Login from './pages/LoginPage/Login';

//  need to remove
import UserImg from './commonComponents/UserImg/UserImg';
import SuccessBtn from './commonComponents/SuccessBtn/SuccessBtn';

// need to remove

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <section>
            <h1>welcome to React Moonraft Task</h1>
            <HomePage/>
            

            {/* Need to remove  */}



            <Login/>
                        
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
