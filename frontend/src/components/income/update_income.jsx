import React from 'react';
import '../../stylesheets/income.scss'
import Navbar from '../nav/navbar_container';
import { runInThisContext } from 'vm';

class UpdateIncome extends React.Component {

  constructor(props){
    super(props)
    this.state = this.props.income;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchMonthlyIncome(this.props.match.params.incomeId);
    this.props.fetchAllIncome();
  }

  

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    let setAlert = false 
    this.props.incomes.map(incomePojo => {
      if(incomePojo._id !== this.state._id && incomePojo.month === this.state.month && incomePojo.year === this.state.year){
        setAlert = true
        alert("You already set up your income for this month and year. Choose another month or year.")
      }
    })

    if (this.state.income === ""){
      setAlert = true 
      alert("Please enter an income amount")
    }

    if(setAlert === false){
      // debugger
      const income = Object.assign({}, this.state);
      // debugger
      this.props.updateIncome(income)
      this.props.history.push('/income')
      this.props.history.go(0);
    }
  }

  render() {

    if(!this.props.income){
      return null
    }

    return (
      <div className="main-div">
        <Navbar />
        <form onSubmit={this.handleSubmit}>
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
              type="number"
              min="2019" max="2025"
              value={this.state.year}
              onChange={this.update("year")}
            />
          </label>
          <br />
          <label>Monthly Income: $
            <input
              type="number"
              min="1"
              value={this.state.income}
              onChange={this.update("income")}
              step="0.01"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateIncome;