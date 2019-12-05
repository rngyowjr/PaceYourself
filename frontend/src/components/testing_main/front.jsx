import React from 'react';

class Front extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const month = [
            "January",
            "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();

        this.props.monthlyExpense({
            user: this.props.currentUser.id,
            month: month[d.getMonth()],
            year: d.getFullYear()
        });

        this.props.annualExpense({
            year: d.getFullYear()
        })
    }

    render() {
        const { totalExpenseMonthly, totalExpenseAnnually } = this.props;
        if (!totalExpenseMonthly, !totalExpenseAnnually) {
            return null;
        }

        return (
            <div>
                <h1>totalExpenseMonthly</h1>
                <h1>totalExpenseAnnually</h1>
            </div>
        )
    }
};

export default Front;