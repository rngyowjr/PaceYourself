import { connect } from 'react-redux';
import Main from './main_page'
import { expenseByMonth, expenseByYear, fetchAllExpenses } from '../../actions/expense_actions';
import { totalMonthlyIncome, totalAnnualIncome, fetchAllIncome } from '../../actions/income_actions';

const mstp = state => {
  return {
    currentUser: state.entities.users[state.session.user],
    monthlyIncomeAmount: state.entities.incomes.currentMonth.totalAmount,
    annualIncomeAmount: state.entities.incomes.annual.totalAmount,
    totalExpenseMonthly: state.entities.expenses.monthly.totalAmount,
    annualExpenseAmount: state.entities.expenses.annual.totalAmount,
    listOfExpenseAnnually: state.entities.expenses.annual.month,
    listOfExpenseMonthly: state.entities.expenses.monthly.month,
  }
};

const mdtp = dispatch => {
  return {
    fetchAllIncome: () => dispatch(fetchAllIncome()),
    monthlyIncome: data => dispatch(totalMonthlyIncome(data)),
    annualIncome: data => dispatch(totalAnnualIncome(data)),
    fetchAllExpenses: () => dispatch(fetchAllExpenses()),
    monthlyExpense: data => dispatch(expenseByMonth(data)),
    annualExpense: data => dispatch(expenseByYear(data))
  }
};

export default connect(mstp, mdtp)(Main);
