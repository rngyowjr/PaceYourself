import React from 'react';
import Navbar from "../nav/navbar_container";
import '../../stylesheets/index.scss';
import UpdateExpense from './update_expense_container';
import DeleteExpense from './delete_expense_container'

class ExpenseIndex extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
      expenseId: ''
    }

    this.openDeleteForm = this.openDeleteForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllExpenses();
  }

  openDeleteForm(expenseId) {
    this.setState({
      expenseId: expenseId
    })
    document.querySelector('.avgrund-cover').style.visibility = "visible";
    document.querySelector('.delete-modal').style.visibility = "visible";
  };

  openUpdateForm(expenseId) {
    this.setState({
      expenseId: expenseId
    })
    document.querySelector('.avgrund-cover').style.visibility = "visible";
    document.querySelector('.update-modal').style.visibility = "visible";
  };

  render() {

    // if (this.props.expenses.length === 0) {
    //   return null
    // }
    
    return (
      <div className="expense-index">
        <Navbar />
        <div className="expense-index-container">
          {/* <h1 className='expense-annually'>Total Annually Expense: ${totalExpenseAnnually}</h1>
          <h1 className='expense-annually'>Total Monthly Expense: ${totalExpenseMonthly}</h1> */}
          <div className="expense-index-table">
            <table>
              <th>Year</th>
              <th>Month</th>
              <th>Expense</th>
              <th>Type</th>
              <th>Actions</th>
            </table>
            {this.props.expenses.map(expense => (
              <table>
                <tr>
                  <td>{expense.year}</td>
                  <td>{expense.month}</td>
                  <td>{expense.amount.toFixed(2)}</td>
                  <td>{expense.type}</td>
                  <td>
                    <div className="expense-index-buttons">
                      <button
                        className="index-button index-edit-button"
                        onClick={() => this.openUpdateForm(expense._id)}
                      >Edit</button>
                      <button 
                        className="index-button index-delete-button"
                        onClick={() => this.openDeleteForm(expense._id)}
                      >Delete</button>
                    </div>
                  </td>
                </tr>
              </table>
            ))}
          </div>
        </div>

        <div className="avgrund-cover"></div>

        <div className="update-modal">
          <UpdateExpense expenseId={this.state.incomeId} expenses={this.props.expenses} />
        </div>
        <div className="delete-modal">
          <DeleteExpense expenseId={this.state.expenseId} />
        </div>
      </div>
    );
  }
}

export default ExpenseIndex;