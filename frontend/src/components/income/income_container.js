import { connect } from 'react-redux';
import { fetchMonthlyIncome } from '../../actions/income_actions';
import Income from './income';

const mapStateToProps = (state, ownProps) => ({
    userFname: state.session.user.fname
})

const mapDispatchToProps = dispatch => ({
  fetchMonthlyIncome: income => dispatch(fetchMonthlyIncome(income))
})

export default connect(mapStateToProps, mapDispatchToProps)(Income);

