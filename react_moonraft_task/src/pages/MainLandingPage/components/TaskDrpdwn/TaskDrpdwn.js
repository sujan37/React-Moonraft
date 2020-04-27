import React from 'react';
import { CustDrpDwn } from './TaskDrpDwnStyle';
// import Aux from '../../hoc/Auxiliary';



const TaskDrpdwn = () => {
     
    return (
        <>
            <CustDrpDwn>
                <i className="fa fa-plus mr-3" data-toggle="modal" data-target="#addTransaction"></i>
                <select id="Expenses">
                    <option>Income</option>
                    <option>Expenses</option>
                    <option>Investments</option>
                    <option>Smart Save</option>
                </select>
                
            </CustDrpDwn>
        </>
    );

}

export default TaskDrpdwn;