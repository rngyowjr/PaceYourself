import { connect } from 'react-redux';
import Front from './front';
// import { totalMonthlyIncome, totalAnnualIncome } from '../../actions/income_actions';
import { expenseByYear, expenseByMonth, fetchAllExpenses } from '../../actions/expense_actions';


const mstp = state => {
    return {
        currentUser: state.entities.users[state.session.user],
        expenses: Object.values(state.entities.expenses.data),
        totalExpenseMonthly: state.entities.expenses.monthly.totalAmount,
        totalExpenseAnnually: state.entities.expenses.annual.totalAmount,
    }
};

const mdtp = dispatch => {

    return {
        // monthlyIncome: data => dispatch(totalMonthlyIncome(data)),
        // annualIncome: data => dispatch(totalAnnualIncome(data)),
        fetchAllExpenses: () => dispatch(fetchAllExpenses()),
        monthlyExpense: data => dispatch(expenseByMonth(data)),
        annualExpense: data => dispatch(expenseByYear)
    }
};

export default connect(mstp, mdtp)(Front);