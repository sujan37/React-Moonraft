import styled from 'styled-components';


export const StyledBtn = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 1.5px;
    background-color: #3fb485;
    color: ${props => props.name};

    &:hover {
        background-color: #f7f7f7;
        color: black;
    }
`
