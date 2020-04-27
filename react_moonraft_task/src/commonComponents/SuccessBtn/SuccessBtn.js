import React from 'react';
import { StyledBtn } from './SuccessBtnStyle';


const SuccessBtn = (props) => {
    return (
        <StyledBtn>
            {props.name}
        </StyledBtn>
    );

}

export default SuccessBtn;