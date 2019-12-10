import { connect } from 'react-redux';
import { fetchMonthlyIncome, updateIncome, fetchAllIncome } from '../../actions/income_actions';
import UpdateIncome from './update_income';


const mstp = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        income: state.entities.incomes.data[ownProps.match.params.incomeId],
        incomes: Object.values(state.entities.incomes.data)
    }
};

const mdtp = dispatch => ({
    fetchMonthlyIncome: incomeId => dispatch(fetchMonthlyIncome(incomeId)),
    updateIncome: income => dispatch(updateIncome(income)),

    fetchAllIncome: () => dispatch(fetchAllIncome()),
});

export default connect(mstp, mdtp)(UpdateIncome);