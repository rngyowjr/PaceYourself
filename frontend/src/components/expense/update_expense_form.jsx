import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';

class UpdateExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.expense;
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount() {
        this.props.fetchExpense(this.props.match.params.expenseId);
    }

    update(type) {
        return e => this.setState({ [type]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        let setAlert = false 
        if(this.state.amount === "" || this.state.year === ""){
            setAlert = true 
            alert("Please enter value on all fields")
        }

        if(setAlert === false) {     
            const expense = Object.assign({}, this.state);
            this.props.action(expense)
            this.props.history.push('/expense')
        }
    }

    render() {
        if (!this.props.expense) {
            return null;
        }
 
        return (
            <div className="main-div">
                <Navbar />
                <form onSubmit={this.handleSubmit}>
                    <label>Month:
                  <select onChange={this.update("month")} defaultValue={this.state.month}>
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
                            value={this.state.year}
                            onChange={this.update("year")}
                        />
                    </label>
                    <br />
                    <label>Amount: $
                        <input 
                            type="number" 
                            value={this.state.amount} 
                            onChange={this.update('amount')} 
                            min="0.01"
                            step="0.01"
                        />
                    </label>
                    <label>Type:
                        <select onChange={this.update('type')} defaultValue={this.state.type}>
                            <option value="select" disabled="disabled">Select Type</option>
                            <option value="Bills">Bills</option>
                            <option value="Life/Health Insurance">Life/Health Insurance</option>
                            <option value="Food">Food</option>
                            <option value="Personal necessities">Personal necessities</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Pet">Pet</option>
                            <option value="Vehicle">Vehicle</option>
                            <option value="Vacation">Vacation</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
};

export default UpdateExpenseForm;