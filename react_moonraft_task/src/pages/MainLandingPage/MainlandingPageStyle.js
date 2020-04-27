import styled from 'styled-components';


export const FlexContainer = styled.div`
    display:flex;
    padding: 15px;

    @media only screen and (max-width:767px) {
        flex-direction:column;
        padding: 10px;
    }
`