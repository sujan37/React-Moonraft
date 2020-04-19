import React from 'react';
import styled from 'styled-components';
import {Route,Link} from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import App from '../../App'



const HomePage = () => {
     
    return (
        <section>
            <header>
                <nav>
                <ul>
                    <li>
                    <Link to="/signup">SignUp</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/">Cancel</Link>
                    </li>
                </ul>
                </nav>
            </header>
            <Route path="/" exact Component={App} />
            <Route path="/login" exact Component={Login} />
            <Route path="/signup" exact Component={SignUp} />
        </section>
    );

}

export default HomePage;