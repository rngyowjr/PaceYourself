import React from 'react';

class Front extends React.Component {

    componentDidMount() {
        const month = [
            "January",
            "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();

        this.props.fetchAllExpenses();

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
        const { totalExpenseMonthly, 
                totalExpenseAnnually, 
                expenses } = this.props;

        if (!expenses) {
            return null;
        }


        return (
            <div className='main-page-div'>
                {/* <div className='container'>
                    <div className='box'>


                    </div>

                </div> */}

                <h1>${totalExpenseMonthly}</h1>
                {/* <h1>${totalExpenseAnnually}</h1> */}
            </div>
        )
    }
};

export default Front;