import React, { Component }  from 'react';
// import Aux from '../../hoc/Auxiliary';
import {NavLink,Link} from 'react-router-dom';

import UserImg from '../../commonComponents/UserImg/UserImg';
import SuccessBtn from '../../commonComponents/SuccessBtn/SuccessBtn';
import { BlackWrap,UserInfo,UserInput } from  './LoginStyle';
import MainLandingPage from '../../pages/MainLandingPage/MainLandingPage';
import {Route,Switch,Redirect} from 'react-router-dom';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


// import asyncComponent from '../../hoc/asyncComponent'

// const AsyncMainLandingPage = asyncComponent(() => {
//     return import('../../pages/MainLandingPage/MainLandingPage');
// });


class Login extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         auth: true
    //     }
    // }


    state = {
        email: '',
        loginPassword: '',
        isSignup: false
    }


    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]:event.target.value
        });
    }


    reDirectToLanding = (event) => {
        console.log('here in login page');
        // return <Redirect to="/Landing" />;
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.loginPassword , this.state.isSignup)
        if (this.props.isAuthenticated) { 
            this.props.history.push('/Landing');
        }
    }

    
    render () {
  
        return (
            <>
                <BlackWrap>
                    {/* <UserImg/> */}
                    {/* <UserInfo>Joel George</UserInfo>
                    <UserInfo>joel@gmail.com</UserInfo> */}
                    <form onSubmit={this.reDirectToLanding}>
                        <label htmlFor="email">Email:</label>
                        <UserInput type='email' 
                            name='email' 
                            id='email'
                            required
                            onChange = {this.changeHandler}
                        />

                        <label htmlFor="password">Password:</label>
                        <UserInput type='password' 
                            name='loginPassword' 
                            id='loginPassword'
                            required
                            onChange = {this.changeHandler}
                        />
                        <SuccessBtn  type="submit" name="Login"/>
                    </form>
                    {/* <Route path="/Landing" exact component={MainLandingPage} /> */}

                    {/* {this.state.auth ? <Route path="/Landing" component={AsyncMainLandingPage} /> : null} */}
                    <Link to="/signup">Register for SignUp</Link>

                </BlackWrap>
            </>
        );
    }

}


const mapStateToProps = state => {
    return {
        error : state.auth.error,
        isAuthenticated : state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password ,isSignup))
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Login);