import React from 'react';
import { StyledBtn } from './SuccessBtnStyle';


const SuccessBtn = (props) => {
    return (
        <StyledBtn onClick={props.reDirectToLanding}>
            {props.name}
        </StyledBtn>
    );

}

export default SuccessBtn;