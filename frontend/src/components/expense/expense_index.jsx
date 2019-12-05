import React from 'react';
import Navbar from "../nav/navbar_container";
import '../../stylesheets/income.scss';
import { Link } from 'react-router-dom'
import '../../stylesheets/expense_index.scss';

class ExpenseIndex extends React.Component {
    
    componentDidMount() {
        const month = [
            "January", 
            "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();

        this.props.fetchAllExpenses();
        this.props.expenseByMonth({
            user: this.props.currentUser.id,
            month: month[d.getMonth()],
            year: d.getFullYear()
        })
        this.props.expenseByYear({ year: d.getFullYear()})
    }

    render() {
        
        const { expenses, 
                totalExpenseAnnually, 
                totalExpenseMonthly, 
                deleteExpense} = this.props;

        return (
            <div className="expense-div">
                <Navbar />
                <div className="main-div">
                <h1 className='expense-annually'>Total Annually Expense: ${totalExpenseAnnually}</h1>
                <h1 className='expense-annually'>Total Monthly Expense: ${totalExpenseMonthly}</h1>
                    <table>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Expense</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </table>
                    {expenses.map(expense => (
                        <table>
                            <tr>
                                <td>{expense.year}</td>
                                <td>{expense.month}</td>
                                <td>{expense.amount.toFixed(2)}</td>
                                <td>{expense.type}</td>
                                <td>
                                    <Link to={`/updateexpense/${expense._id}`}> Edit</Link>
                                    <button onClick={() => deleteExpense(expense._id)}>Delete</button>
                                </td>
                            </tr>
                        </table>
                    ))}
              
                {/* <div className="expense-div-container">
                    <h1 className='expense-annually'>Total Annually Expense: ${totalExpenseAnnually}</h1>
                    <h1 className='expense-annually'>Total Monthly Expense: ${totalExpenseMonthly}</h1>
                    {
                        expenses.map(expense => (
                            <li>
                                {expense.year}
                                &nbsp;&nbsp;&nbsp;
                                {expense.month}
                                &nbsp;&nbsp;&nbsp;
                                {expense.amount}
                                &nbsp;&nbsp;&nbsp;
                                {expense.type}
                                <Link to={`/updateexpense/${expense._id}`}> Edit</Link>
                                <button onClick={() => deleteExpense(expense._id)}>Delete</button>
                                <br/>
                                <br/>
                            </li>

                        ))
                    }

                </div> */}

                </div>
            </div>
            
        );
        
    }
}

export default ExpenseIndex;