import React from 'react';
// import styled from 'styled-components';
// eslint-disable-next-line
import {Route,Link,Switch } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import Aux from '../../hoc/Auxiliary';




const HomePage = () => {
     
    return (
        <Aux>
            <header>
                <nav>
                    <ul>
                        <li>
                        <Link to="/signup">SignUp</Link>
                        </li>
                        <li>
                        <Link to="/login">Login</Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </Aux>
    );

}

export default HomePage;