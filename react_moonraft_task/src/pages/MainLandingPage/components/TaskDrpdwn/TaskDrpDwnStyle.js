import styled from 'styled-components';


export const CustDrpDwn = styled.div`
   
    & select {
        width: 150px;
        height: 40px;
        border-radius: 6px;
        border: 1px solid #7882a2;
        background-color: #292d39;
        color: #f84e4e;
        outline: none;
        @media only screen and (max-width:575px) {
            width: 120px;
        }
    }
`