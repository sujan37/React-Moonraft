import React from 'react';
import { StyledBtn } from './SuccessBtnStyle';


const SuccessBtn = (props) => {
    return (
        <StyledBtn onClick={props.btnClick}>
            {props.name}
        </StyledBtn>
    );

}

export default SuccessBtn;