import React from 'react';
import '../../stylesheets/income.scss';

class Income extends React.Component {
  constructor(props) {
    // debugger
    super(props)
    this.state = {
      month: "",
      year: "",
      income: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeIncome = this.closeIncome.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentDidMount() {
    this.props.fetchAllIncome();
  }

  closeIncome(e) {
    this.props.closeIncome && this.props.closeIncome(e);
    document.querySelector('.avgrund-cover').style.visibility = "hidden"
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
      this.props.history.push('/postexpense');
    }
  }

  render() {

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="income-content">
        <form className="income-form" onSubmit={this.handleSubmit}>
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
          <label>Monthly Income: $
            <input
              className="income-value-input"
              type="number"
              min="1"
              onChange={this.update("income")}
              step="0.01"
            />
          </label>
          <div className="income-button-container">
            <button
              type="button"
              onClick={this.closeIncome}
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