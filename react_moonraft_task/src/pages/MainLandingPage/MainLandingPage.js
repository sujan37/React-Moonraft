import React from 'react';
// import Aux from '../../hoc/Auxiliary';
import { FlexContainer } from './MainlandingPageStyle';
import Header from './components/Header/Header';
import ExpenseCard from './components/ExpenseCard/ExpenseCard';
import TaskDrpdwn from './components/TaskDrpdwn/TaskDrpdwn';
import Transaction from './components/Transaction/Transaction';
import mockjson from  '../../service/mockjson.json';


const MainLandingPage = () => {
     
      
    const jsonArray = [];
    for (let key in mockjson) {
        jsonArray.push({
            id: key,
            config:mockjson[key] 
        });
        
    }
    console.log(jsonArray);

    const expenseCard = jsonArray.map(jsonele => (
        <ExpenseCard key={jsonele.id}
            cardhead={jsonele.config.name}
            totalamt = {jsonele.config.totalAmt}
            amtspent = {jsonele.config.amtspent}
            categoryname = {jsonele.config.category}
            categoryPayback = {jsonele.config.category.payback}
            categoryOthers = {jsonele.config.category.others}
            categoryamtCheck = {jsonele.config.category.totalsubamt}

            transAmt = {jsonele.config.category.Transportation}
            elecAmt = {jsonele.config.category.Electricity}
            incomeShow = {jsonele.config.incomeShow}
            expenseShow = {jsonele.config.expenseShow}
            categoryamt1 = {jsonele.config.category.transportSubAmt}
            categoryamt2 = {jsonele.config.category.elecSubAmt}

            />
    ))

    return (
        <>
            <main>
                <Header/>
                <FlexContainer>
                    {expenseCard}
                    {/* <ExpenseCard />
                    <ExpenseCard/>
                    <ExpenseCard/>
                    <ExpenseCard/> */}
                </FlexContainer>

                <div>
                    <Transaction/>
                </div>
            </main>
        </>
    );

}

export default MainLandingPage;