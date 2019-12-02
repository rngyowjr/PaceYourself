import { connect } from 'react-redux';
import { fetchAllExpenses, 
        expenseByYear, 
        expenseByMonth,
        deleteExpense,
        
     } from '../../actions/expense_actions';
import ExpenseIndex from './expense_index';

const mstp = state => {
    return {
        expenses: state.entities.expenses.data,
        currentUser: state.entities.users[state.session.user],
        // totalExpenseMonthly: state.entities.expenses.monthly.totalAmount,
        // totalExpenseAnnually: state.entities.expenses.annual.totalAmount
    }
};

const mdtp = dispatch => {
    return {
        fetchAllExpenses: () => dispatch(fetchAllExpenses()),
        expenseByYear: year => dispatch(expenseByYear(year)),
        expenseByMonth: data => dispatch(expenseByMonth(data)),
        deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
    }
};

export default connect(mstp, mdtp)(ExpenseIndex)