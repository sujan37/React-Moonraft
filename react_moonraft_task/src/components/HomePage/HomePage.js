import React from 'react';
import styled from 'styled-components';
import {Route,NavLink,Switch } from 'react-router-dom';
import Login from '../../pages/LoginPage/Login';
import SignUp from '../../pages/SignupPage/SignUp';
import './HomePage.css';
// import Aux from '../../hoc/Auxiliary';




const HomePage = () => {
     
    return (
        <>
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
        </>
    );

}

export default HomePage;