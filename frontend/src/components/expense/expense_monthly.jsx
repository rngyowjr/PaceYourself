import React from 'react';

class ExpenseMonthlyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            month: '',
            year: ''
        };
    };

    componentDidMount() {
        this.props.fetchAllExpenses();
        this.props.expenseByMonth()
    }
}