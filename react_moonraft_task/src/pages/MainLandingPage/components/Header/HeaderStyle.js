import styled from 'styled-components';


export const OuterWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    align-items: center;
    background-color: #292d39;
    color: #ffffff;
`



export const UserInfo = styled.div`
    display: flex;
    align-items:center;
    & UserImg {
        width: 30px;
        height: 30px;
    }
   
`

export const TransactionMonth = styled.div`
   font-size:20px;
`

export const Name = styled.div`
   font-size:20px;
   margin-left:10px;
   color:#7882a2;
   
`

export const Bar = styled.div`
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    margin: 5px 0;
   
`