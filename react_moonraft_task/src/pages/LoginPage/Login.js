import React from 'react';
// import Aux from '../../hoc/Auxiliary';

import UserImg from '../../commonComponents/UserImg/UserImg';
import SuccessBtn from '../../commonComponents/SuccessBtn/SuccessBtn';
import { StyledBtn } from  './LoginStyle';

const Login = () => {
     
    return (
        <>
            <div>
                <UserImg/>
                <div>Joel George</div>
                <div>joel@gmail.com</div>
                <input type='password' 
                    name='password' 
                    id='password'
                />
                <SuccessBtn/>
            </div>
        </>
    );

}

export default Login;