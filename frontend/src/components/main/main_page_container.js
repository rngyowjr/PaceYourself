import { connect } from 'react-redux';
import Main from './main_page';
import { totalAnnualIncome, fetchAllIncome } from '../../actions/income_actions';
import { expenseByYear, 
        fetchAllExpenses, 
        expenseByMonth,
      } from '../../actions/expense_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    // total monthly expenses and income
    currentUser: state.entities.users[state.session.user],
    incomes: state.entities.incomes.data,
    annualIncome: state.entities.incomes.annual.totalAmount,
    expenses: state.entities.expenses.monthly.totalAmount,
    expenseType: state.entities.expenses.monthly.month
  }
}

const mapDispatchToProps = dispatch => {
  return {
    totalAnnualIncome: year => dispatch(totalAnnualIncome(year)),
    fetchAllIncome: () => dispatch(fetchAllIncome()),
    fetchAllExpenses: () => dispatch(fetchAllExpenses()),
    totalAnnualExpense: year => dispatch(expenseByYear(year)),
    expenseByMonth: data => dispatch(expenseByMonth(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)