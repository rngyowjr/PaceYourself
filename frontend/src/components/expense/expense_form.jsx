import React from 'react';

class CreateExpenseForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            month: '',
            year: '',
            type: '',
            amount: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    };

    update(type) {
        return e => this.setState({ [type]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const expense = Object.assign({}, this.state, {user: this.props.currentUser});
        this.props.postExpense(expense)
    }

    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Month:
                  <select onChange={this.update("month")}>
                            <option selected="true" disabled="disabled">Select Month</option>
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
                    <label>Amount: $
                        <input type="number" onChange={this.update('amount')}/>
                    </label>
                    <label>Type:
                        <input type="text" onChange={this.update('type')} />
                    </label>
                    <input type="submit" value="Create Expense"/>
                </form>
            </div>
        )
    }
};

export default CreateExpenseForm;