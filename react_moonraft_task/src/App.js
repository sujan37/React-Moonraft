import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <HomePage/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
