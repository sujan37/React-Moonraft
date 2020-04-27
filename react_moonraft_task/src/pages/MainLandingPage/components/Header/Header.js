import React from 'react';
// import Aux from '../../hoc/Auxiliary'; 
import { OuterWrap,UserInfo,Bar,TransactionMonth,Name } from './HeaderStyle';
import UserImg from '../../../../commonComponents/UserImg/UserImg';


const Header = () => {
     
    return (
        <>
            <OuterWrap>
                <UserInfo>
                    <UserImg isSmall/>
                    <Name>Joel George</Name>
                </UserInfo>
                <TransactionMonth>JANUARY</TransactionMonth>
                <div>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </div>
            </OuterWrap>
        </>
    );

}

export default Header;