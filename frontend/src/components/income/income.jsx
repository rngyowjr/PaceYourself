import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';

class Income extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          month: "",
          year: "",
          income: 0,
        };
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
    };

    handleSubmit(e) {
        e.preventDefault();
        let income = Object.assign({}, this.state, {user: this.props.currentUserId} )
        this.props.postIncome(income);
        this.props.history.push('/income')
    }

    render() {
        if(!this.props.show){
          return null;
        }
        return (
          <div className="income-content">
            <button onClick={this.closeIncome} className="income-close-button">Cancel</button>
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
              <label>
                Monthly Income: $
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

export default Income;