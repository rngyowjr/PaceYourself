import React from 'react';
import { deleteExpense } from '../../util/expense_util';
import Navbar from "../nav/navbar_container";
import '../../stylesheets/income.scss';

class ExpenseIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        const data = {
            month: 'December',
        }
        this.props.fetchAllExpenses();
        this.props.expenseByMonth(data)
        // this.props.expenseByYear({year: 2019})
    }

    render() {
        
        const { expenses, totalExpenseMonthly} = this.props;

        if (!expenses) {
            return null
        }
        return (
            <div className="main-div">
                <Navbar />
                <h2>Total Expense Monthly ${totalExpenseMonthly}</h2>
                {/* <h2>Total Expense Annually ${totalExpenseAnnually}</h2> */}
                {
                    expenses.map(expense => (
                        <li>
                            {expense.year}
                            &nbsp;&nbsp;&nbsp;
                            {expense.month}
                            &nbsp;&nbsp;&nbsp;
                            {expense.amount}
                            &nbsp;&nbsp;&nbsp;
                            {expense.type}
                            <button onClick={() => deleteExpense({_id: expense.id})} value='Delete Expense'></button>
                            <br/>
                            <br/>
                        </li>

                    ))
                }

            </div>
            
        )
    }
}

export default ExpenseIndex;