import React from 'react';
import '../../stylesheets/income.scss';

class Income extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          month: "",
          year: "",
          income: ""
        };
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.fetchMonthlyIncome(this.state);

    }

    render() {
        return (
          <div className="main-div">
            <form onSubmit={this.handleSubmit}>
              <label>Month
                  <select>
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
              <label>Year
                  <input type="number" min="2017" max="2025" placeholder="YYYY"/>
              </label>
              <label>
                Monthly Income
                <input type="number" min="1" onChange={this.update("income")} />
              </label>
              <button>Submit</button>
            </form>
          </div>
        );
    }
}

export default Income;