import styled from 'styled-components';


export const TransactionWrap = styled.div`
    margin: 10px;
    background-color: #292d39;
    color: #ffffff;
    border-radius: 6px;

    & thead {
        color:#ffffff;
    }

    & tbody {
        color: #7882a2;
    }

    & tbody tr:hover {
        color: #7882a2;
        background-color: #000000;
    }

    & table {
        @media only screen and (max-width:767px) {
            display: block;
            width: 100%;
            overflow-x: auto;
        }
    }
`


export const TransactionHeadWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`


