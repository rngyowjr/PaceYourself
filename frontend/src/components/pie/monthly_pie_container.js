import { connect } from 'react-redux';
import MonthlyPie from './monthly_pie';
import { totalMonthlyIncome, fetchAllIncome } from '../../actions/income_actions';
import { expenseByYear, expenseByMonth, fetchAllExpenses } from '../../actions/expense_actions';


const mstp = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.user],
        incomes: Object.values(state.entities.incomes.data),
        monthlyIncome: state.entities.incomes.currentMonth.totalAmount,
        expenses: Object.values(state.entities.expenses.data),
        totalExpenseMonthly: state.entities.expenses.monthly.totalAmount,
        listOfExpense: state.entities.expenses.monthly.month,
        // totalExpenseAnnually: state.entities.expenses.annual.totalAmount,
    }
};

const mdtp = dispatch => {

    return {
      fetchAllIncome: () => dispatch(fetchAllIncome()),
      monthlyIncome: data => dispatch(totalMonthlyIncome(data)),
      // annualIncome: data => dispatch(totalAnnualIncome(data)),
      fetchAllExpenses: () => dispatch(fetchAllExpenses()),
      monthlyExpense: data => dispatch(expenseByMonth(data))
      // annualExpense: data => dispatch(expenseByYear(data))
    };
};

export default connect(mstp, mdtp)(MonthlyPie);