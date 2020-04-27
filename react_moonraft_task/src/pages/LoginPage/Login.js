import React, { Component }  from 'react';
// import Aux from '../../hoc/Auxiliary';

import UserImg from '../../commonComponents/UserImg/UserImg';
import SuccessBtn from '../../commonComponents/SuccessBtn/SuccessBtn';
import { BlackWrap,UserInfo,UserInput } from  './LoginStyle';
import MainLandingPage from '../MainLandingPage/MainLandingPage';
import {BrowserRouter,Route,Router,Link,NavLink,Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';


class Login extends Component {

  

    reDirectToLanding = () => {
        browserHistory.push('/login/Landing'); 
    }
    render () {
  
        return (
            <>
                <BlackWrap>
                    <UserImg/>
                    <UserInfo>Joel George</UserInfo>
                    <UserInfo>joel@gmail.com</UserInfo>


                    <label for="password">Password:</label>
                    <UserInput type='password' 
                        name='password' 
                        id='password'
                    />
                    <SuccessBtn onClick={this.reDirectToLanding} name="Login"/>
                    <Route path="/login/Landing" component={MainLandingPage} />
                </BlackWrap>
            </>
        );
    }

}

export default Login;