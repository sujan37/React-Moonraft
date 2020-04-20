import React from 'react';
import styled from 'styled-components';
import userimg from '../../assests/Ellipse.jpg';

// import Aux from '../../hoc/Auxiliary';


const UserImg = () => {
     
    return (
        <>
            <div><img src={userimg} alt="Logo" /></div>
        </>
    );

}

export default UserImg;