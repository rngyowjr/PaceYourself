import React from 'react';

class ExpenseIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllExpenses()
    }

    render() {
        const { expenses, currentUser } = this.props;
        let display;

        if (currentUser) {
            display = expenses.forEach(expense => {
                return (
                <div>
                     <li>{expense.amount}</li>
                     <li>{expense.month}</li>
                     <li>{expense.year}</li>
                     <li>{expense.type}</li>
                </div>
                )
            })
        };

        return (
            {display}
        )
    }
}

export default ExpenseIndex;