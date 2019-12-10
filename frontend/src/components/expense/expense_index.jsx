import React from 'react';
import Navbar from "../nav/navbar_container";
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom'

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

    sortByAmount() {
        this.props.expenses.sort(function(a,b) {
            return a.amount - b.amount
        })
    }

    render() {
        
        const { expenses, 
                // totalExpenseAnnually, 
                // totalExpenseMonthly, 
                deleteExpense} = this.props;

        return (
            <div className="expense-index">
                <Navbar />
                <div className="expense-index-container">
                  <div className="main-div">
                    {/* <h1 className='expense-annually'>Total Annually Expense: ${totalExpenseAnnually}</h1>
                    <h1 className='expense-annually'>Total Monthly Expense: ${totalExpenseMonthly}</h1> */}
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
                            <div className="expense-index-buttons">

                              {/* <Link to={`/updateexpense/${expense._id}`}> Edit</Link> */}
                              <button className="index-button index-edit-button">Edit</button>
                              <button 
                                className="index-button index-delete-button"
                                onClick={() => deleteExpense(expense._id)}
                              >Delete</button>
                            </div>
                          </td>
                        </tr>
                      </table>
                    ))}

                  </div>
                </div>
            </div>
            
        );
        
    }
}

export default ExpenseIndex;