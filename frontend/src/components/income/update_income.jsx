import React from 'react';
import '../../stylesheets/income.scss'
import Navbar from '../nav/navbar_container';

class UpdateIncome extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      month: this.props.month,
      year: this.props.year,
      income: this.props.income,
      incomeId: this.props.incomeId
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentDidMount() {
    this.props.fetchAllIncome();
  }

  handleUpdate() {
    let data = Object.assign({}, this.state, {_id: this.props.incomeId});
    this.props.updateIncome(data);
    this.props.history.push('/income');
  }

  render() {
    
    return (
      <div className="main-div">
        <Navbar />
        <h1>Edit Income:</h1>
        <form onSubmit={this.handleUpdate}>
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