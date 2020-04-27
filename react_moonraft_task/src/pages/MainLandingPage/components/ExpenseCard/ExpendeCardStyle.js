import styled from 'styled-components';


export const CardOuterWrap = styled.div`
    background: #292d39;
    color: white;
    border: 1px solid #cccccc;
    border-radius: 6px;
    width: 100%;
    margin: 10px 5px;   
`


export const CardinnerWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #cccccc;
`

export const CardinnerWrapHead = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #cccccc;
`

export const CardSubHead = styled.div`
    font-weight: bold;
`

export const CardSubDetail = styled.div`
    font-size:14px;
    color:#7882a2;
`


export const MainAmt = styled.span`
    font-size:14px;
    color:red;
`

export const SubAmt = styled.span`
    font-size:12px;
    color:#7882a2;
`