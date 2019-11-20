import { connect } from 'react-redux';
import { postIncome } from '../../actions/income_actions';
import Income from './income';

const mapStateToProps = (state, ownProps) => ({
    userFname: state.session.user.fname,
    currentUserId: state.session.user.id
})

const mapDispatchToProps = dispatch => ({
  postIncome: income => dispatch(postIncome(income))
})

export default connect(mapStateToProps, mapDispatchToProps)(Income);

