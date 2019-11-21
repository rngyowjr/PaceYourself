import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAllIncome } from '../../actions/income_actions';

import NavBar from "./navbar";

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user.fname
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllIncome: () => dispatch(fetchAllIncome())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
