import { connect } from 'react-redux';
import { deleteIncome } from '../../actions/income_actions';
import DeleteIncome from './delete_income';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  deleteIncome: (incomeId) => dispatch(deleteIncome(incomeId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteIncome);

