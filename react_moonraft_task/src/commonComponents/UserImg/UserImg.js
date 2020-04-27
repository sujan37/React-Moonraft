import React from 'react';
import userimg from '../../assests/Ellipse.jpg';
import {UserImgStyle} from './UserImgStyle';
// import Aux from '../../hoc/Auxiliary';


const UserImg = (props) => {
     
    return (
        <>
            <UserImgStyle isSmall={props.isSmall}><img src={userimg} alt="Logo" /></UserImgStyle>
        </>
    );

}

export default UserImg;