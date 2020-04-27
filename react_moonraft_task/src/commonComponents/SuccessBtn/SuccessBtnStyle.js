import styled from 'styled-components';


export const StyledBtn = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 1.5px;
    background-color: #3fb485;
    display:flex;
    justify-content:center;
    margin:5px auto;
    &:hover {
        background-color: #f7f7f7;
        color: black;
    }

    @media only screen and (max-width:575px) {
        width: 220px;
    }
`
