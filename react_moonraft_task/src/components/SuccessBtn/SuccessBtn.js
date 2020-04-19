import React from 'react';
import styled from 'styled-components';


const StyledBtn = styled.button`
width: 300px;
height: 50px;
border-radius: 1.5px;
background-color: #3fb485;
color: #ffffff;

&:hover {
    background-color: #f7f7f7;
    color: black;
}

`


const SuccessBtn = () => {
     
    return (
        <StyledBtn>Login</StyledBtn>
    );

}

export default SuccessBtn;