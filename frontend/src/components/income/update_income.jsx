import React from 'react';
import '../../stylesheets/update_modal.scss'

class UpdateIncome extends React.Component {

  constructor(props){
    super(props)
    this.state = this.props.incomes[this.props.idx]

    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.incomes.map(incomePojo => {
      if(incomePojo._id !== this.state._id && incomePojo.month === this.state.month && incomePojo.year === this.state.year){
        setAlert = true
        alert("You already set up your income for this month and year. Choose another month or year.")
      }
    })

    if(setAlert === false){
      const income = Object.assign({}, this.state);
      debugger
      this.props.updateIncome(income)
      window.location.reload();
    }
  }

  render() {

    // This is because we don't want to reach the return if we don't have the
    // index yet
    if(this.props.idx === ""){
      return <div></div>
    }

    const {incomes, idx} = this.props

    // this is to set the state because the state is being set right after 
    // we click the "Income List" which we don't have the index yet because we
    // haven't clicked on any "Edit" button
    if(this.state === null){ 
      this.setState(incomes[idx])
    }

    return (
      <div className="update-content">
        <form className="update-form" onSubmit={this.handleSubmit}>
          <label>Month:
            <select onChange={this.update("month")} defaultValue={incomes[idx].month}>
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
              placeholder={incomes[idx].year} // For some reason, it won't let me edit it if I put it as a value instead of a placeholder
              onChange={this.update("year")}
            />
          </label>
          <br />
          <label>Monthly Income: $
            <input
              className="update-value-input"
              type="number"
              min="1"
              placeholder={incomes[idx].income} // Same with this one
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