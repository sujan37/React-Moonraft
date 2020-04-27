import React from 'react';
// import Aux from '../../hoc/Auxiliary';
import { FlexContainer } from './MainlandingPageStyle';
import Header from './components/Header/Header';
import ExpenseCard from './components/ExpenseCard/ExpenseCard';
import TaskDrpdwn from './components/TaskDrpdwn/TaskDrpdwn';
import Transaction from './components/Transaction/Transaction';


const MainLandingPage = () => {
     
    return (
        <>
            <main>
                <Header/>
                <FlexContainer>
                    <ExpenseCard/>
                    <ExpenseCard/>
                    <ExpenseCard/>
                    <ExpenseCard/>
                </FlexContainer>

                <div>
                    <Transaction/>
                </div>
            </main>
        </>
    );

}

export default MainLandingPage;