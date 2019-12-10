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

  componentDidMount() {
    this.props.fetchAllIncome();
  }
  
  closeIncomeForm(e) {
    this.props.closeForm && this.props.closeForm(e);
    document.querySelector('.avgrund-cover').style.visibility = "hidden";
    document.querySelector('.income-modal').style.visibility = "hidden";
    document.querySelector('.expense-modal').style.visibility = "hidden";
  };
  
// flipIncomeForm(){
//   document.querySelector('.flip-container').classList.toggle('hover')
  // document.querySelector('.expense-content').style.zIndex = "2"
  // document.querySelector('.expense-modal').style.visibility = "visible"
// }

  handleSubmit(e) {
    e.preventDefault();
    
    let setAlert = false
    this.props.incomes.map(incomePojo => {
      if (incomePojo.month === this.state.month && (incomePojo.year.toString()) === this.state.year) {
        setAlert = true
        alert("You already set up your income for this month and year. Choose another month or year.")
      }
    })

    if (this.state.month === "") {
      setAlert = true
      alert("Please input a month")
    } else if (this.state.year === "") {
      setAlert = true
      alert("Please input a year")
    } else if (this.state.income < 1) {
      setAlert = true
      alert("Please enter your income")
    }

    if (setAlert === false) {
      let income = Object.assign({}, this.state, { user: this.props.currentUserId })
      this.props.postIncome(income);
      document.querySelector('.income-modal').style.visibility = "hidden";
      document.querySelector('.expense-modal').style.visibility = "visible";
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
            <br/>
            <div className="income-button-container">
              <button 
                type="button" 
                onClick={this.closeIncomeForm} 
                className="income-cancel-button"
              >Cancel</button>
              <button className="income-submit-button">Submit</button>
            </div>
            {/* <button 
              className="income-flip-button"
              type="button"
              onClick={this.flipIncomeForm}
            >FLIP!</button> */}
        </form>
      </div>
    );
  }
}

export default Income;