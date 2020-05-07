import React from 'react';
// import Aux from '../../hoc/Auxiliary';
import SuccessBtn from '../../commonComponents/SuccessBtn/SuccessBtn';
import { BlackWrap,UserInput } from  '../LoginPage/LoginStyle';


const SignUp = (props) => {
     
    return (
        <>
            <BlackWrap>
                <label htmlFor="userName">User Name:</label>
                <UserInput type='text' 
                    name='userName' 
                    id='userName'
                />
                <label htmlFor="password">Password:</label>
                <UserInput type='password' 
                    name='password' 
                    id='password'
                />
                <SuccessBtn name="Sign Up"/>
            </BlackWrap>
        </>

    );

}

export default SignUp;