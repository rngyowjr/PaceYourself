import React from 'react';
import '../../stylesheets/index.scss'
import Navbar from '../nav/navbar_container';

class UpdateIncome extends React.Component {

  constructor(props){
    super(props)
    this.state = this.props.income;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchMonthlyIncome(this.props.match.params.incomeId)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const income = Object.assign({}, this.state);
    this.props.updateIncome(income)
    this.props.history.push('/income')
  }

  render() {
    return (
      <div className="main-div">
        <Navbar />
        <form onSubmit={this.handleSubmit}>
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
              type="number"
              min="2019" max="2025"
              placeholder="YYYY"
              onChange={this.update("year")}
            />
          </label>
          <br />
          <label>Monthly Income: $
            <input
              type="number"
              min="1"
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