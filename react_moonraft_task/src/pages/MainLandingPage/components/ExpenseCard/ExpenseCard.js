import React from 'react';
// import Aux from '../../hoc/Auxiliary'; 

import { CardOuterWrap,CardinnerWrap,CardinnerWrapHead,CardSubHead,CardSubDetail,MainAmt,SubAmt } from './ExpendeCardStyle';


const ExpenseCard = (props) => {
   
    return (
        <>
            <CardOuterWrap>
                <ul>
                    <CardinnerWrapHead>
                        <div>
                            <CardSubHead>{props.cardhead}</CardSubHead>
                            <div><MainAmt>{props.amtspent}</MainAmt>/<SubAmt>{props.totalamt}</SubAmt></div>
                        </div>
                        <div>Graph</div>
                    </CardinnerWrapHead>

                    <CardinnerWrap>
                        <CardSubHead>Category</CardSubHead>
                        <CardSubHead>Spent</CardSubHead>
                    </CardinnerWrap>

                    {props.incomeShow && 
                        <>
                            <CardinnerWrap>
                                <CardSubDetail>paycheck</CardSubDetail>
                                <div><MainAmt>{props.categoryPayback}</MainAmt><SubAmt>{props.categoryamtCheck ?  12000 : null}</SubAmt></div>
                            </CardinnerWrap>
                            
                            <CardinnerWrap>
                                <CardSubDetail>others</CardSubDetail>
                                <div><MainAmt>{props.categoryOthers}</MainAmt><SubAmt>{props.categoryamtCheck ?  12000 : null}</SubAmt></div>
                            </CardinnerWrap>
                        </>   
                    }


                    {props.expenseShow && 
                        <>
                            <CardinnerWrap>
                                <CardSubDetail>Transportation</CardSubDetail>
                                <div><MainAmt>{props.transAmt}</MainAmt><SubAmt>{props.categoryamtCheck ? "/"+ props.categoryamt1 : null}</SubAmt></div>
                            </CardinnerWrap>
                            
                            <CardinnerWrap>
                                <CardSubDetail>Electricity</CardSubDetail>
                                <div><MainAmt>{props.elecAmt}</MainAmt><SubAmt>{props.categoryamtCheck ?  "/"+props.categoryamt2 : null}</SubAmt></div>
                            </CardinnerWrap>
                        </>   
                    }
                        

                    {/* <CardinnerWrap>
                        <CardSubDetail>others</CardSubDetail>
                        <div><MainAmt>4500</MainAmt>/<SubAmt>12000</SubAmt></div>
                    </CardinnerWrap> */}
                </ul>
            </CardOuterWrap>
        </>
    );

}

export default ExpenseCard;