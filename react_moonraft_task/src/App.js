import React, { Component } from 'react';
import './App.css';
import SuccessBtn from './components/SuccessBtn/SuccessBtn';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage'
import {BrowserRouter} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <section>
          <h1>welcome to React Moonraft Task</h1>
          <SuccessBtn/>
       


          <HomePage/>

        </section>
      </BrowserRouter>
    );
  }
}

export default App;
