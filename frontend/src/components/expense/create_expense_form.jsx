import React from 'react';
import '../../stylesheets/expense_form.scss';

class CreateExpenseForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.expense;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeExpenseForm = this.closeExpenseForm.bind(this);
    };
    
    update(field) {
      return e => this.setState({ [field]: e.target.value})
    }

    closeExpenseForm() {
      document.querySelector('.avgrund-cover').style.visibility = "hidden"
      document.querySelector('.expense-modal').style.visibility = "hidden"
    };

    handleSubmit(e) {
      e.preventDefault();
      const expense = Object.assign({}, this.state, {user: this.props.currentUserId});
      this.props.action(expense)
      document.querySelector('.avgrund-cover').style.visibility = "hidden"
      document.querySelector('.expense-modal').style.visibility = "hidden"
      window.location.reload();
    }

    render() {

        return (
          <div className="expense-content">
            <form className="expense-form" onSubmit={this.handleSubmit}>
              <div className="expense-input-container">
                <label>Month:
                    <select onChange={this.update("month")} defaultValue="select">
                    <option value="select" disabled="disabled">Select Month</option>
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
                    className="income-year-input"
                    type="number"
                    min="2019" max="2025"
                    placeholder="YYYY"
                    onChange={this.update("year")}
                  />
                </label>
                <br />
                <label>Type:
                    <select onChange={this.update('type')} defaultValue="select">
                    <option value="select" disabled="disabled">Select Type</option>
                    <option value="Bills">Bills</option>
                    <option value="Life/Health Insurance">Life/Health Insurance</option>
                    <option value="Food">Food</option>
                    <option value="Personal necessities">Personal necessities</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Pet">Pet</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <br />
                <label>Amount: $
                  <input
                    type="number"
                    onChange={this.update('amount')}
                    min="0.01"
                    step="0.01"
                  />
                </label>
              </div>
              <br/>
              <div className="expense-button-container">
                <button
                  type="button"
                  onClick={this.closeExpenseForm}
                  className="expense-cancel-button"
                >Cancel</button>  
                <button className="expense-submit-button">Submit</button>
              </div>
            </form>
          </div>
        )
    }
};

export default CreateExpenseForm;