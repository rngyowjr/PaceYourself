import { connect } from 'react-redux';
import AnnuallyPie from './annually_pie';
import { expenseByYear, fetchAllExpenses } from '../../actions/expense_actions';
import { fetchAllIncome, totalAnnualIncome } from '../../actions/income_actions';

const mstp = state => {
    return {
        currentUser: state.entities.users[state.session.user],
        incomes: Object.values(state.entities.incomes.data),
        annualIncome: state.entities.incomes.annual,
        expenses: Object.values(state.entities.expenses.data),
        annualExpense: state.entities.expenses.annual.totalAmount,
        listOfExpense: state.entities.expenses.annual.month
    }
};

const mdtp = dispatch => {
    return {
        fetchAllIncome: () => dispatch(fetchAllIncome()),
        annualIncome: data => dispatch(totalAnnualIncome(data)),
        fetchAllExpenses: () => dispatch(fetchAllExpenses()),
        annualExpense: data => dispatch(expenseByYear(data))
    }
};

export default connect(mstp, mdtp)(AnnuallyPie);
