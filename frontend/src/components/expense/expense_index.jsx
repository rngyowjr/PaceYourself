import React from 'react';

class ExpenseIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllExpenses()
    }

    render() {
        
        const { expenses } = this.props;

        if (!expenses) {
            return null
        }
        return (
            <div>
                {
                    expenses.map(expense => (
                        <div>
                            {expense.year}
                            &nbsp;&nbsp;&nbsp;
                            {expense.amount}
                            &nbsp;&nbsp;&nbsp;
                            {expense.type}
                            <br/>
                            <br/>
                        </div>
                        
                    ))
                }

            </div>
            
        )
    }
}

export default ExpenseIndex;