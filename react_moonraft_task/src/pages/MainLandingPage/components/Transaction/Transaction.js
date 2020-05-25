import React from 'react';

import TaskDrpdwn from '../TaskDrpdwn/TaskDrpdwn';
import { CardSubHead } from '../ExpenseCard/ExpendeCardStyle';
import { TransactionWrap,TransactionHeadWrap } from './TransactionStyle';
import {UserInput} from '../../../LoginPage/LoginStyle'
// import Aux from '../../hoc/Auxiliary'; 



const Transaction = () => {
     
    return (
        <>
            <TransactionWrap>
                <TransactionHeadWrap>
                    <CardSubHead>TRANSACTIONS</CardSubHead>
                    <TaskDrpdwn/>
                </TransactionHeadWrap>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Catagory</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>Doe</td>

                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>Doe</td>

                        <td>mary@example.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>Doe</td>

                        <td>july@example.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>Doe</td>

                        <td>july@example.com</td>
                    </tr>
                    </tbody>
                </table>
            </TransactionWrap>
            <div className="modal fade" id="addTransaction" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Expense</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <label htmlFor="Date">Date:</label>
                    <UserInput type='text' 
                        name='Date' 
                        id='Date'
                    />
                    <label htmlFor="Amount">Amount:</label>
                    <UserInput type='text' 
                        name='Amount' 
                        id='Amount'
                    />
                    <label htmlFor="Description">Description:</label>
                    <UserInput type='text' 
                        name='Description' 
                        id='Description'
                    />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Transaction;