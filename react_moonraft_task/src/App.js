import React, { Component } from 'react';
import './App.css';
import SuccessBtn from './components/SuccessBtn/SuccessBtn';
import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <section>
            <h1>welcome to React Moonraft Task</h1>
            <SuccessBtn/>
            <HomePage/>
            
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
