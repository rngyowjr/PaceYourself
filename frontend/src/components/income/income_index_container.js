import { connect } from 'react-redux';
import { 
  fetchAllIncome,
  updateIncome,
  fetchMonthlyIncome
} from '../../actions/income_actions';
import IncomeIndex from './income_index';

const mapStateToProps = state => {
  return {
    incomes: Object.values(state.entities.incomes.data),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllIncome: () => dispatch(fetchAllIncome()),

    // fetchMonthlyIncome: incomeId => dispatch(fetchMonthlyIncome(incomeId)),
    updateIncome: income => dispatch(updateIncome(income)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeIndex);