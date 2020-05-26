import React, { Component }  from 'react';
import {NavLink,Link} from 'react-router-dom';

import UserImg from '../../commonComponents/UserImg/UserImg';
import SuccessBtn from '../../commonComponents/SuccessBtn/SuccessBtn';
import { BlackWrap,UserInfo,UserInput } from  './LoginStyle';
import MainLandingPage from '../../pages/MainLandingPage/MainLandingPage';
import {Route,Switch,Redirect} from 'react-router-dom';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';



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

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        
        return (
            <>
                <BlackWrap>
                    <div className="auth-error-msg">{errorMessage}</div>
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

                    <Link className="auth-links" to="/signup">Not Regisered yet ? SignUp</Link>

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