import React from 'react';
import Navbar from "../nav/navbar_container";
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom'
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

  // sortByAmount() {
  //   this.props.expenses.sort(function (a, b) {
  //     return a.amount - b.amount
  //   })
  // }

  render() {
    
    return (
      <div className="expense-index">
        <Navbar />
        <div className="expense-index-container">
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
                      {/* <Link to={`/updateexpense/${expense._id}`}> Edit</Link> */}
                      <button className="index-button index-edit-button">Edit</button>
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

        <div className="expense-edit-modal">

        </div>
        <div className="delete-modal">
          <DeleteExpense expenseId={this.state.expenseId} />
        </div>
      </div>
    );
  }
}

export default ExpenseIndex;