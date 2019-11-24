import { connect } from 'react-redux';
import { postIncome, fetchAllIncome } from '../../actions/income_actions';
import Income from './income';
import { withRouter } from "react-router";

const mapStateToProps = state => ({
    currentUserId: state.entities.users[state.session.user].id
})

const mapDispatchToProps = dispatch => ({
  postIncome: income => dispatch(postIncome(income)),
  fetchAllIncome: () => dispatch(fetchAllIncome())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Income));

