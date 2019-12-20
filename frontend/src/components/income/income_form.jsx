import React from 'react';
import '../../stylesheets/income_form.scss';

class Income extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      month: "",
      year: "",
      income: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeIncomeForm = this.closeIncomeForm.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  
  closeIncomeForm() {
    document.querySelector('.avgrund-cover').style.visibility = "hidden";
    document.querySelector('.income-modal').style.visibility = "hidden";
  };

  handleSubmit(e) {
    e.preventDefault();
    
    let alreadySet = false
    this.props.incomes.map(incomePojo => {
      if (incomePojo.month === this.state.month && (incomePojo.year.toString()) === this.state.year) {
        alreadySet = true
        alert("You already set up your income for this month and year. Choose another month or year.")
      }
    })

    if (this.state.month === "") {
      alreadySet = true
      alert("Please input a month")
    } else if (this.state.year === "") {
      alreadySet = true
      alert("Please input a year")
    } else if (this.state.income < 1) {
      alreadySet = true
      alert("Please enter your income")
    }

    if (alreadySet === false) {
      let income = Object.assign({}, this.state, { user: this.props.currentUserId })
      this.props.postIncome(income);
      document.querySelector('.income-modal').style.visibility = "hidden";
      document.querySelector('.avgrund-cover').style.visibility = "hidden"
      window.location.reload();
    }
  }

  render() {

    return (
      <div className="income-content">
        <form className="income-form" onSubmit={this.handleSubmit}>
          <div className="income-input-container">
            <label>Month:
              <select className="input-size" onChange={this.update("month")} defaultValue="select">
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
            <label className="input-label">
              Year:
              <input
                className="income-year-input input-size"
                type="number"
                min="2019" max="2025"
                placeholder="YYYY"
                onChange={this.update("year")}
              />
            </label>
            <br />
            <label>Income: $
              <input
                className="income-value-input input-size"
                type="number"
                min="1"
                onChange={this.update("income")}
                step="0.01"
              />
            </label>
          </div>
          <br/>
          <div className="income-button-container">
            <button 
              type="button" 
              onClick={this.closeIncomeForm} 
              className="income-cancel-button"
            >Cancel</button>
            <button className="income-submit-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Income;