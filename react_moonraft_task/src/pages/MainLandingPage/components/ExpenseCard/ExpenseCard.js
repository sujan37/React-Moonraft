import React from 'react';
// import Aux from '../../hoc/Auxiliary'; 

import { CardOuterWrap,CardinnerWrap,CardinnerWrapHead,CardSubHead,CardSubDetail,MainAmt,SubAmt } from './ExpendeCardStyle';


const ExpenseCard = () => {
     
    return (
        <>
            <CardOuterWrap>
                <ul>
                    <CardinnerWrapHead>
                        <div>
                            <CardSubHead>EXPENSES</CardSubHead>
                            <div><MainAmt>4500</MainAmt>/<SubAmt>12000</SubAmt></div>
                        </div>
                        <div>Graph</div>
                    </CardinnerWrapHead>

                    <CardinnerWrap>
                        <CardSubHead>Category</CardSubHead>
                        <CardSubHead>Spent</CardSubHead>
                    </CardinnerWrap>

                    <CardinnerWrap>
                        <CardSubDetail>others</CardSubDetail>
                        <div><MainAmt>4500</MainAmt>/<SubAmt>12000</SubAmt></div>
                    </CardinnerWrap>
                    
                    <CardinnerWrap>
                        <CardSubDetail>others</CardSubDetail>
                        <div><MainAmt>4500</MainAmt>/<SubAmt>12000</SubAmt></div>
                    </CardinnerWrap>

                    <CardinnerWrap>
                        <CardSubDetail>others</CardSubDetail>
                        <div><MainAmt>4500</MainAmt>/<SubAmt>12000</SubAmt></div>
                    </CardinnerWrap>
                </ul>
            </CardOuterWrap>
        </>
    );

}

export default ExpenseCard;