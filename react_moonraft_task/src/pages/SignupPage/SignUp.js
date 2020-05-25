import React,{Component} from 'react';
// import Aux from '../../hoc/Auxiliary';
import SuccessBtn from '../../commonComponents/SuccessBtn/SuccessBtn';
import { BlackWrap,UserInput } from  '../LoginPage/LoginStyle';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import {NavLink,Link} from 'react-router-dom';



class SignUp extends Component {

    state = {
        userName: '',
        password: '',
        isSignup: true
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log("Submit clicked")
        this.props.onAuth(this.state.userName, this.state.password , this.state.isSignup)
        if (this.props.isAuthenticated) { 
            this.props.history.push('/Login');
        }
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]:event.target.value
        });
    }

    render() {
        return (
            <>
                <BlackWrap>
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="userName">User Name:</label>
                        <UserInput type='text' 
                            name='userName' 
                            id='userName'
                            required
                            onChange = {this.changeHandler}
                        />
                        <label htmlFor="password">Password:</label>
                        <UserInput type='password' 
                            name='password' 
                            id='password'
                            required
                            onChange = {this.changeHandler}
                        />
                        <SuccessBtn type="submit" name="Sign Up"/>
                    </form>
                    <Link to="/login">Login</Link>
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
export default connect(mapStateToProps , mapDispatchToProps)(SignUp);
// export default SignUp;