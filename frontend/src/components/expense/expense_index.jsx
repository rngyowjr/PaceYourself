import React from 'react';
import { deleteExpense } from '../../util/expense_util';
import Navbar from "../nav/navbar_container";
import '../../stylesheets/income.scss';

class ExpenseIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchAllExpenses();
        this.props.expenseByMonth({
          month: "December"
        });
        // this.props.expenseByMonth(data)
        // this.props.expenseByYear({year: 2019})
    }

    render() {
        
        const { expenses, totalExpenseMonthly} = this.props;

        if (!expenses) {
            return null
        }

        return (
            <div>
                <Navbar />
                <div className="main-div">
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
                                    <button>Edit</button>
                                    <button>Delete</button>
                                {/* <button onClick={this.handleDelete({_id: income.id})}></button> */}
                                </td>
                            </tr>
                        </table>
                    ))}
                </div>
            </div>
        );

        // return (
        //     <div className="main-div">
        //         <Navbar />
        //         <h2>Total Expense Monthly ${totalExpenseMonthly}</h2>
        //         {/* <h2>Total Expense Annually ${totalExpenseAnnually}</h2> */}
        //         {
        //             expenses.map(expense => (
        //                 <li>
        //                     {expense.year}
        //                     &nbsp;&nbsp;&nbsp;
        //                     {expense.month}
        //                     &nbsp;&nbsp;&nbsp;
        //                     {expense.amount}
        //                     &nbsp;&nbsp;&nbsp;
        //                     {expense.type}
        //                     <button onClick={() => deleteExpense({_id: expense.id})} value='Delete Expense'></button>
        //                     <br/>
        //                     <br/>
        //                 </li>

        //             ))
        //         }

        //     </div>
            
        // )
    }
}

export default ExpenseIndex;