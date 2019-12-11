import React from 'react';
import '../../stylesheets/update_modal.scss'

class UpdateExpense extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.expenses;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // this.props.fetchMonthlyExpense(this.props.match.params.expenseId);
    // this.props.fetchAllExpense();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  closeUpdateForm() {
    document.querySelector('.avgrund-cover').style.visibility = "hidden";
    document.querySelector('.update-modal').style.visibility = "hidden";
  };

  handleSubmit(e) {
    e.preventDefault();

    let setAlert = false
    this.props.expenses.map(expensePojo => {
      if (expensePojo._id !== this.state._id && expensePojo.month === this.state.month && expensePojo.year === this.state.year) {
        setAlert = true
        alert("You already set up your expense for this month and year. Choose another month or year.")
      }
    })

    if (this.state.expense === "") {
      setAlert = true
      alert("Please enter an expense amount")
    }

    if (setAlert === false) {
      const expense = Object.assign({}, this.state);
      this.props.updateExpense(expense)
      window.location.reload();
    }
  }

  render() {

    return (
      <div className="update-content">
        <form className="update-form" onSubmit={this.handleSubmit}>
          <label>Month:
            <select onChange={this.update("month")} defaultValue={this.state.month}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </label>
          <br />
          <label>Year:
            <input
              className="update-year-input"
              type="number"
              min="2019" max="2025"
              value={this.state.year}
              onChange={this.update("year")}
            />
          </label>
          <br />
          <label>Monthly Expense: $
            <input
              className="update-value-input"
              type="number"
              min="1"
              value={this.state.expense}
              onChange={this.update("expense")}
              step="0.01"
            />
          </label>
          <br />
          <div className="update-button-container">
            <button
              type="button"
              onClick={this.closeUpdateForm}
              className="expense-cancel-button"
            >Cancel</button>
            <button className="expense-submit-button">Edit!</button>
          </div>
        </form>
      </div>
    );

  }
}

export default UpdateExpense;