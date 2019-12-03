import React from 'react';
import '../../stylesheets/income.scss';
import Navbar from '../nav/navbar_container';

class CreateExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.expense;
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount() {
        this.props.fetchExpense(this.props.match.params.id);
    }

    update(type) {
        return e => this.setState({ [type]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const expense = Object.assign({}, this.state, { user: this.props.currentUserId });
        this.props.action(expense)
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
                    <label>Amount: $
                        <input type="number" onChange={this.update('amount')} />
                    </label>
                    <label>Type:
                        <select onChange={this.update('type')} defaultValue="select">
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

export default CreateExpenseForm;