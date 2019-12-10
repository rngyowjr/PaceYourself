import React from 'react';
import '../../stylesheets/update_modal.scss'

class UpdateIncome extends React.Component {

  constructor(props){
    super(props)
    this.state = this.props.income;
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentDidMount() {
    this.props.fetchMonthlyIncome(this.props.incomeId)
  }

  closeUpdateForm() {
    document.querySelector('.avgrund-cover').style.visibility = "hidden";
    document.querySelector('.update-modal').style.visibility = "hidden";
  };

  handleSubmit(e) {
    e.preventDefault();
    const income = Object.assign({}, this.state);
    this.props.updateIncome(income)
    window.location.reload();
  }

  render() {

    return (
      <div className="update-content">
        <form className="update-form" onSubmit={this.handleSubmit}>
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
              className="update-year-input"
              type="number"
              min="2019" max="2025"
              placeholder="YYYY"
              onChange={this.update("year")}
            />
          </label>
          <br />
          <label>Monthly Income: $
            <input
              className="update-value-input"
              type="number"
              min="1"
              onChange={this.update("income")}
              step="0.01"
            />
          </label>
          <br/>
          <div className="update-button-container">
            <button
              type="button"
              onClick={this.closeUpdateForm}
              className="income-cancel-button"
            >Cancel</button>
            <button className="income-submit-button">Edit!</button>
          </div>
        </form>
      </div>
    );

  }
}

export default UpdateIncome;