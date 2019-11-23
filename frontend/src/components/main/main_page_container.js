import { connect } from 'react-redux';
import Main from './main_page';
import { totalAnnualIncome } from '../../actions/income_actions';

const mapStateToProps = (state, ownProps) => {

  return {  
    // total monthly expenses and income
    currentUser: state.entities.users[state.session.user],
    incomes: state.entities.incomes.data,
    totalAmount: state.entities.incomes.annual.totalAmount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    totalAnnualIncome: year => dispatch(totalAnnualIncome(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)