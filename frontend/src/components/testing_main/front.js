import { connect } from 'react-redux';
import Front from './front';
// import { totalMonthlyIncome, totalAnnualIncome } from '../../actions/income_actions';
import { expenseByYear, expenseByMonth } from '../../actions/expense_actions';


const mstp = state => {

    return {
        currentUser: state.entities.users,
        totalExpenseMonthly: state.entities.expenses.monthly.totalAmount,
        totalExpenseAnnually: state.entities.expenses.annual.totalAmount,
    }
};

const mdtp = dispatch => {

    return {
        // monthlyIncome: data => dispatch(totalMonthlyIncome(data)),
        // annualIncome: data => dispatch(totalAnnualIncome(data)),
        monthlyExpense: data => dispatch(expenseByMonth(data)),
        annualExpense: data => dispatch(expenseByYear)
    }
};

export default connect(mstp, mdtp)(Front);