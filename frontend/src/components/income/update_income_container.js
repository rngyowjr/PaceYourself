import { connect } from 'react-redux';
import { fetchMonthlyIncome, updateIncome } from '../../actions/income_actions';
import UpdateIncome from './update_income';


const mstp = (state, ownProps) => ({
    // income: state.entities.incomes.data[ownProps.match.params.incomeId]
});

const mdtp = dispatch => ({
    fetchMonthlyIncome: incomeId => dispatch(fetchMonthlyIncome(incomeId)),
    updateIncome: income => dispatch(updateIncome(income))
});

export default connect(mstp, mdtp)(UpdateIncome);