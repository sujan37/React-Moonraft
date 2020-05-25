import React,{Component} from 'react';
import TaskDrpdwn from '../TaskDrpdwn/TaskDrpdwn';
import { CardSubHead } from '../ExpenseCard/ExpendeCardStyle';
import { TransactionWrap,TransactionHeadWrap } from './TransactionStyle';
import {UserInput} from '../../../LoginPage/LoginStyle'
// import Aux from '../../hoc/Auxiliary'; 



class Transaction extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: "",
            amount: "",
            description: "",
            catagory: "",
            dataArray: []
        };
      }

    changehandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]:event.target.value,
        });
    }

    resetForm = () => {
        this.setState({
            date: "",
            amount: "",
            description: "",
            catagory: "",
        });
    }

    handleSubmitChanges = (event) => {

        var dataArrayList = [{date:this.state.date,amount:this.state.amount,description:this.state.description,catagory:this.state.catagory}]

        this.setState({
            ...this.state,
            dataArray: [...this.state.dataArray,dataArrayList]
        });
        event.preventDefault();
        console.log("modal Submit clicked")
        console.log(this.state.dataArray)
       
    }

    render() {
        let dynamicTr = this.state.dataArray.map((data,i) => {
            return (
                <tr key={i}>
                    <td>{data[0].date}</td>
                    <td>{data[0].amount}</td>
                    <td>{data[0].description}</td>
                    <td>{data[0].catagory}</td>
                </tr>
           )
        })

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
                        {dynamicTr}
                        {/* <tr>
                            <td>{this.state.date}</td>
                            <td>{this.state.amount}</td>
                            <td>{this.state.description}</td>
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
                        </tr> */}
                        </tbody>
                    </table>
                </TransactionWrap>
                <div className="modal fade" id="addTransaction" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Expense</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.resetForm} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form id="addDetailsForm" onSubmit={this.handleSubmitChanges} ref={this.formRef}>
                            <div className="modal-body">
                            
                                    <label htmlFor="date">Date:</label>
                                    <UserInput type='date' 
                                        name='date' 
                                        id='date'
                                        required
                                        value={this.state.date}
                                        onChange={this.changehandler}
                                    />
                                    <label htmlFor="amount">Amount:</label>
                                    <UserInput type='text' 
                                        name='amount' 
                                        id='amount'
                                        required
                                        value={this.state.amount}
                                        onChange={this.changehandler}
                                    />
                                    <label htmlFor="description">Description:</label>
                                    <UserInput type='text' 
                                        name='description' 
                                        id='description'
                                        required
                                        value={this.state.description}
                                        onChange={this.changehandler}
                                    />
                                    <label htmlFor="catagory">Catagory:</label>
                                    <UserInput type='text' 
                                        name='catagory' 
                                        id='catagory'
                                        required
                                        value={this.state.catagory}
                                        onChange={this.changehandler}
                                    />
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.resetForm} data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Transaction;