import React, { Component }  from 'react';
// import Aux from '../../hoc/Auxiliary';

import UserImg from '../../commonComponents/UserImg/UserImg';
import SuccessBtn from '../../commonComponents/SuccessBtn/SuccessBtn';
import { BlackWrap,UserInfo,UserInput } from  './LoginStyle';
import MainLandingPage from '../../pages/MainLandingPage/MainLandingPage';
import {Route,Switch,Redirect} from 'react-router-dom';


// import asyncComponent from '../../hoc/asyncComponent'

// const AsyncMainLandingPage = asyncComponent(() => {
//     return import('../../pages/MainLandingPage/MainLandingPage');
// });


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth: true
        }
    }


    


    reDirectToLanding = (props) => {
        console.log('here in login page');
        this.props.history.push('/Landing');
        // return <Redirect to="/Landing" />;
    }

    
    render () {
  
        return (
            <>
                <BlackWrap>
                    <UserImg/>
                    <UserInfo>Joel George</UserInfo>
                    <UserInfo>joel@gmail.com</UserInfo>


                    <label htmlFor="password">Password:</label>
                    <UserInput type='password' 
                        name='password' 
                        id='password'
                    />
                    <SuccessBtn reDirectToLanding={this.reDirectToLanding} name="Login"/>
                    {/* <Route path="/Landing" exact component={MainLandingPage} /> */}

                    {/* {this.state.auth ? <Route path="/Landing" component={AsyncMainLandingPage} /> : null} */}
                </BlackWrap>
            </>
        );
    }

}

export default Login;