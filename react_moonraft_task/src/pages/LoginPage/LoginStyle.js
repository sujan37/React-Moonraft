import styled from 'styled-components';


export const BlackWrap = styled.div`
    background-color: #181c28;
    color: #ffffff;
    margin: 20px 0px;
    padding: 25px;
    &:UserImg {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
    }

    & label {
        display:flex;
        justify-content:center;
    }

`

export const UserInfo = styled.div`
        display: flex;
        justify-content: center;
        margin: 5px 0px;
`

export const UserInput = styled.input`
        display:flex;
        margin: 10px auto; 
        height: 40px;
        width: 300px;
        @media only screen and (max-width:575px) {
            width: 220px;
        }
`