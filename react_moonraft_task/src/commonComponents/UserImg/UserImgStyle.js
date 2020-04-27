import styled from 'styled-components';




export const UserImgStyle = styled.div`
    display: flex;  
    justify-content: center;
    margin: 10px 0px;
    & img {
        width:${props => props.isSmall ? '30px':'auto'};
        height: ${props => props.isSmall ? '30px':'auto'};
    }
`